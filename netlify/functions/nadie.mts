import Anthropic from '@anthropic-ai/sdk'
import type { Config } from '@netlify/functions'

type ChatMessage = { role: 'user' | 'assistant'; content: string }

const SYSTEM_PROMPT = `You are Nadie, the friendly study assistant for Kullie Uni, a study hub for University of Malawi students.
Courses on the site: DIS113 (Introduction to ICT / digital information systems) and ASC111 (Introduction to Actuarial Science).
Follow the student's instructions directly: explain topics, summarise notes, make practice questions, quiz them, check answers, or make study plans.
Be clear, accurate and encouraging. Use short paragraphs, simple Markdown lists and **bold** for key terms. Keep answers focused.
When page context from the notes is provided, base your answer on it and say if something isn't covered there.`

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return Response.json({ error: 'Use POST' }, { status: 405 })
  }

  let body: { messages?: ChatMessage[]; context?: string }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const messages = (Array.isArray(body.messages) ? body.messages : [])
    .filter(m => (m?.role === 'user' || m?.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .slice(-12)
    .map(m => ({ role: m.role, content: m.content.slice(0, 4000) }))

  while (messages.length && messages[0].role !== 'user') messages.shift()
  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return Response.json({ error: 'Send at least one message from the user.' }, { status: 400 })
  }

  const context = typeof body.context === 'string' ? body.context.slice(0, 12000).trim() : ''
  const system = context
    ? `${SYSTEM_PROMPT}\n\nText the student is currently viewing on the site:\n"""\n${context}\n"""`
    : SYSTEM_PROMPT

  try {
    const anthropic = new Anthropic()
    const stream = anthropic.messages.stream({
      model: 'claude-haiku-5-5',
      max_tokens: 1500,
      system,
      messages,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          }
        } catch (error) {
          console.error('Nadie stream error', error)
          controller.enqueue(encoder.encode('\n\n[Nadie lost the connection. Please try again.]'))
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    })
  } catch (error) {
    console.error('Nadie error', error)
    return Response.json({ error: 'Nadie is unavailable right now. Please try again.' }, { status: 500 })
  }
}

export const config: Config = { path: '/api/nadie' }
