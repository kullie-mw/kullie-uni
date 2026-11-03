(function () {
  const levels = [
    {
      difficulty: 'simple',
      mcq: [
        ['Internet', 'What is the Internet?', ['A worldwide system of interconnected computer networks', 'A single website with linked pages', 'A program used only for email', 'A type of web browser'], 0, 'The Internet is a worldwide system of interconnected networks using standard protocols.'],
        ['History', 'What was ARPANET?', ['The first web browser', 'An early network funded by a United States research agency', 'A modern search engine', 'The secure version of HTTP'], 1, 'ARPANET was an early network project funded through ARPA and a predecessor of the modern Internet.'],
        ['History', 'Who co-developed TCP/IP?', ['Tim Berners-Lee and Steve Jobs', 'ARPA and CERN', 'Vinton Cerf and Robert Kahn', 'UCLA and the University of Utah'], 2, 'Vinton Cerf and Robert Kahn played major roles in developing TCP and IP.'],
        ['History', 'When did ARPANET officially adopt TCP/IP?', ['1969', '1970', '1991', '1 January 1983'], 3, 'ARPANET adopted TCP/IP as its standard protocol suite on 1 January 1983.'],
        ['WWW', 'Who invented the World Wide Web?', ['Tim Berners-Lee', 'Robert Kahn', 'Vinton Cerf', 'The University of Utah'], 0, 'Tim Berners-Lee developed the foundations of the Web while working at CERN.'],
        ['Internet and Web', 'Which statement correctly describes the World Wide Web?', ['The global network infrastructure itself', 'A system of interconnected pages and resources accessed through the Internet', 'A protocol for sending email', 'The same thing as a web browser'], 1, 'The Web is a service of interconnected pages and resources that uses the Internet.'],
        ['Web technology', 'What does a URL identify?', ['A computer’s keyboard', 'A type of network cable', 'The address of a Web resource', 'The language used to style a page'], 2, 'A Uniform Resource Locator is an address used to locate a Web resource.'],
        ['Web technology', 'What does DNS do when a browser looks up a domain name?', ['Displays page colours', 'Encrypts every local file', 'Creates the website content', 'Translates a domain name into an IP address'], 3, 'DNS maps human-readable domain names to IP addresses.'],
        ['Web technology', 'Which technology structures the content of a web page?', ['HTML', 'CSS', 'JavaScript', 'TCP/IP'], 0, 'HTML identifies page structure and content such as headings, paragraphs, and links.'],
        ['Internet applications', 'Which service is primarily used to send and receive electronic messages?', ['Streaming', 'Email', 'E-commerce', 'Web browsing'], 1, 'Email is an Internet communication service for sending and receiving messages.'],
        ['Internet applications', 'What is e-commerce?', ['Watching a video without downloading the whole file', 'Remote medical consultation', 'Buying and selling goods or services electronically', 'Translating a domain name'], 2, 'E-commerce means buying and selling goods and services through electronic networks, particularly the Internet.'],
        ['Malawi access', 'Which is a challenge affecting Internet access in rural Malawi?', ['Too many web browsers', 'Too many domain names', 'Excessive page animations', 'Limited network infrastructure'], 3, 'Limited infrastructure can lead to weak signals, slow speeds, and unreliable connections.']
      ],
      tf: [
        ['Internet and Web', 'The World Wide Web and the Internet are two names for exactly the same thing.', false, 'The Internet is network infrastructure; the Web is one service operating on it.'],
        ['History', 'ARPANET was an important predecessor of the modern Internet.', true, 'ARPANET was an early network and a major predecessor of the Internet.'],
        ['Web technology', 'CSS controls aspects of a web page’s visual presentation, such as colour and layout.', true, 'CSS controls visual appearance, including colours, fonts, spacing, and layouts.'],
        ['Internet applications', 'Streaming users must always download an entire media file before playback can begin.', false, 'Streaming provides audio or video over the Internet without necessarily downloading the entire file first.']
      ],
      short: [
        ['Internet', 'Define the Internet.', 'The Internet is a worldwide system of interconnected computer networks that exchange information using standard communication protocols.', [['worldwide', 'global'], ['interconnected networks', 'network of networks'], ['exchange information', 'communicate'], ['protocols', 'tcp/ip']]],
        ['History', 'Name the two researchers credited with co-developing TCP/IP.', 'Vinton Cerf and Robert Kahn.', [['vinton cerf', 'cerf'], ['robert kahn', 'kahn']]],
        ['Web technology', 'State the purpose of DNS.', 'DNS translates human-readable domain names into IP addresses used by computers to identify network destinations.', [['domain name', 'website name'], ['ip address', 'numerical address'], ['translate', 'maps', 'resolves']]],
        ['Web technology', 'Give the main role of each: HTML, CSS, and JavaScript.', 'HTML structures page content, CSS controls its visual presentation, and JavaScript adds interactive or dynamic behaviour.', [['html', 'structure', 'content'], ['css', 'presentation', 'appearance', 'style'], ['javascript', 'interactive', 'dynamic']]]
      ]
    },
    {
      difficulty: 'intermediate',
      mcq: [
        ['History', 'Why was adopting TCP/IP in 1983 an important Internet milestone?', ['It invented the first website', 'It gave different networks common standards for communication', 'It replaced all web browsers', 'It introduced commercial streaming'], 1, 'TCP/IP enabled separate networks to communicate using common standards.'],
        ['Internet and Web', 'A student sends an email without opening a website. What does this demonstrate?', ['Email is part of the World Wide Web only', 'The Internet cannot support non-web activities', 'The Internet provides services besides the Web', 'A browser is required for every Internet service'], 2, 'Email is an Internet service distinct from accessing websites through the Web.'],
        ['Internet and Web', 'In the road analogy, what does the Internet represent?', ['A vehicle carrying web pages', 'A passenger in a car', 'A website destination', 'The road infrastructure used by different kinds of traffic'], 3, 'The Internet is like the road network; the Web is one type of traffic using it.'],
        ['Internet applications', 'Which statement best distinguishes file transfer from cloud storage?', ['File transfer moves files between devices; cloud storage saves them on remote servers for Internet access', 'File transfer is for audio only; cloud storage is for video only', 'File transfer requires a browser but cloud storage never uses the Internet', 'They both refer only to email attachments'], 0, 'The notes define file transfer as moving files and cloud storage as keeping files on remote servers accessible online.'],
        ['Web loading', 'What is the first main stage in the notes’ web-page loading sequence?', ['The server renders the page', 'The user enters a URL in a browser', 'The browser receives HTML', 'DNS creates an IP address'], 1, 'The process begins when the user enters a URL into the browser.'],
        ['Web loading', 'After DNS provides an IP address, what does the browser generally do next?', ['Styles the page with CSS', 'Creates the requested server', 'Sends an HTTP or HTTPS request to the web server', 'Changes the domain name'], 2, 'The browser uses the destination address to communicate with the web server and request resources.'],
        ['Web technology', 'What is the principal difference between HTTP and HTTPS in these notes?', ['HTTP displays images while HTTPS displays text', 'HTTP is a server and HTTPS is a browser', 'HTTPS is used only for email', 'HTTPS is the secure version of HTTP and uses encryption'], 3, 'HTTPS uses encryption through TLS to protect information exchanged with a server.'],
        ['Web technology', 'Which matching of browser resources and roles is correct?', ['HTML structures content, CSS controls appearance, and JavaScript adds interaction', 'HTML encrypts traffic, CSS resolves domains, and JavaScript routes packets', 'HTML stores IP addresses, CSS sends email, and JavaScript replaces servers', 'HTML and CSS are both web browsers'], 0, 'These are the roles assigned to HTML, CSS, and JavaScript in the notes.'],
        ['Internet applications', 'A student submits assignments and accesses course materials through Moodle. Which Internet application category is most directly involved?', ['E-commerce', 'E-learning', 'Streaming', 'File transfer protocol'], 1, 'E-learning platforms support course materials, assignments, assessments, and lecturer communication.'],
        ['Internet applications', 'A user watches a video online while it plays before the entire file is downloaded. Which service is being used?', ['Email', 'File transfer', 'Streaming', 'E-government'], 2, 'Streaming permits playback without necessarily downloading the complete file first.'],
        ['Malawi access', 'An adult has a smartphone and network coverage but cannot confidently search for information or use online services. Which barrier best applies?', ['Server failure', 'Insufficient storage capacity', 'Limited screen resolution', 'Low digital literacy'], 3, 'Digital literacy is the ability to use digital devices and online services effectively and responsibly.'],
        ['Internet applications', 'Which example is an e-government service?', ['An online tax service provided by a government', 'A student watching an online lecture', 'A person sending a private email', 'A shop streaming music'], 0, 'Electronic tax services are one example of e-government.']
      ],
      tf: [
        ['History', 'The Internet existed before Tim Berners-Lee invented the World Wide Web.', true, 'The Internet predates the Web; the Web was developed in 1989–1991.'],
        ['Web loading', 'DNS changes a domain name into the HTML content of a web page.', false, 'DNS resolves domain names to IP addresses; the web server returns page resources.'],
        ['Web technology', 'JavaScript can add interactive behaviour to a web page.', true, 'JavaScript supports interactive menus, form validation, animations, and dynamic updates.'],
        ['Internet applications', 'FTP is identified in the notes as a protocol historically used for transferring files.', true, 'FTP stands for File Transfer Protocol and has been used for file transfers.']
      ],
      short: [
        ['Internet and Web', 'Explain why the Internet and World Wide Web are not interchangeable terms.', 'The Internet is the global network infrastructure, while the Web is a system of pages and resources that uses that infrastructure; the Internet existed before the Web.', [['internet', 'network infrastructure'], ['web', 'world wide web', 'pages', 'service'], ['uses', 'depends on'], ['existed before', 'predates']]],
        ['History', 'Summarise two key stages in the development of the Internet and Web.', 'ARPANET connected research institutions from 1969; TCP/IP was developed in the 1970s and adopted by ARPANET in 1983; Tim Berners-Lee developed the Web at CERN in 1989–1991. Any two stages are sufficient.', [['arpanet', '1969', 'research institutions'], ['cerf', 'kahn', 'tcp/ip', '1983'], ['tim berners-lee', 'cern', 'world wide web', '1989', '1991']]],
        ['Web loading', 'Describe the role of a web server and a web browser.', 'A web server stores, processes, and delivers web content; a browser requests resources, interprets them, and displays the resulting page.', [['server', 'stores', 'processes', 'delivers'], ['browser', 'requests', 'interprets', 'displays']]],
        ['Malawi access', 'Name two barriers to Internet access in rural Malawi.', 'Barriers include limited network infrastructure, high data costs, limited devices, unreliable electricity, low digital literacy, language barriers, and security or privacy concerns; any two are correct.', [['network', 'infrastructure', 'coverage'], ['data', 'cost', 'affordability'], ['devices', 'access'], ['electricity', 'power'], ['digital literacy', 'skills'], ['language'], ['security', 'privacy']]]
      ]
    },
    {
      difficulty: 'medium',
      mcq: [
        ['Web loading', 'A student types https://www.unima.ac.mw into a browser. What is the URL’s role at this point?', ['It is the address identifying the requested web resource', 'It is the IP address supplied by the server', 'It is the HTML content of the home page', 'It is the DNS server’s response'], 0, 'A URL identifies the resource the browser is being asked to locate.'],
        ['Web loading', 'A browser cannot resolve a correctly entered domain name to an IP address. Which stage is most likely failing?', ['Rendering', 'DNS resolution', 'CSS styling', 'Server content processing'], 1, 'DNS resolution maps the domain name to the IP address needed to reach the destination.'],
        ['Web loading', 'DNS has resolved a domain successfully, but the browser receives no response from the destination computer. Which problem is most likely?', ['An incorrect CSS colour', 'An HTML heading error', 'A web-server or network failure', 'A JavaScript animation'], 2, 'Once DNS succeeds, network or server unavailability can prevent the request from being answered.'],
        ['Web loading', 'A page loads its text and images, but the layout and colours look wrong. Which resource is most directly responsible for visual styling?', ['DNS', 'URL path', 'HTTP', 'CSS'], 3, 'CSS controls visual presentation such as colours, spacing, fonts, and layout.'],
        ['Web loading', 'A page is delivered but its interactive menu does not respond. Which technology is most directly associated with that behaviour?', ['JavaScript', 'DNS', 'FTP', 'IP addressing'], 0, 'JavaScript adds interactive behaviour and dynamic functionality to web pages.'],
        ['Internet applications', 'A University of Malawi student uses Moodle for notes, assignment submission, and online activities. Which statement is most accurate?', ['Moodle is a network protocol', 'The student is using an e-learning platform through the Internet', 'Moodle is the Internet itself', 'Moodle is a DNS service'], 1, 'Moodle is an e-learning platform, and the Internet can support course materials and assignment submission.'],
        ['Internet applications', 'A business lists goods online, receives electronic payments, and advertises through social media. Which two Internet uses are evident?', ['Telemedicine and streaming', 'E-learning and file transfer', 'E-commerce and digital marketing', 'DNS and web rendering'], 2, 'Selling and paying online are e-commerce; online promotion is digital marketing.'],
        ['Internet applications', 'A government department publishes public information and accepts online registrations. Which concept describes this use?', ['Cloud storage', 'Streaming', 'Web browsing', 'E-government'], 3, 'E-government uses digital technologies to provide government information and services.'],
        ['Malawi access', 'A learner has a phone, electricity, and good data coverage, but cannot interpret the language used by most course sites. Which barrier is most direct?', ['Language barrier', 'Server failure', 'Lack of a web browser', 'Incorrect TCP/IP adoption'], 0, 'Language barriers can prevent people from understanding and benefiting from online content.'],
        ['Internet services', 'Which pair correctly identifies common email protocols and their roles as described?', ['FTP sends email; HTML retrieves it', 'SMTP is commonly used to send email, while IMAP or POP3 retrieve messages', 'DNS sends email; HTTP stores it', 'CSS sends messages, while TCP/IP retrieves attachments'], 1, 'SMTP is used for sending email, while IMAP and POP3 are commonly used to retrieve it.'],
        ['Internet and Web', 'A student uses a browser to read an online encyclopedia. Which distinction best describes the activity?', ['The student uses the Web without the Internet', 'The student uses only TCP/IP, not the Web', 'The student accesses a Web resource using Internet infrastructure', 'The student accesses ARPANET rather than the Web'], 2, 'The Web resource is accessed through the Internet’s network infrastructure.'],
        ['Malawi access', 'Which response most directly addresses several causes of the digital divide in rural Malawi?', ['Promote only new browser software', 'Encourage larger web pages', 'Replace all online services with streaming', 'Expand rural infrastructure and coverage, improve affordability and power, and provide digital-literacy support'], 3, 'Digital inclusion measures include infrastructure, affordability, electricity, literacy, local language content, and safe use.']
      ],
      tf: [
        ['Web loading', 'In the page-loading sequence, the browser typically contacts the server after resolving the domain name to an IP address.', true, 'DNS resolution precedes the browser’s request to the web server.'],
        ['Internet applications', 'E-commerce includes online buying or selling and electronic payments.', true, 'These are common e-commerce activities in the notes.'],
        ['Malawi access', 'Internet access challenges in Malawi are limited to network coverage; affordability, devices, electricity, skills, and language do not matter.', false, 'The notes identify multiple infrastructure, economic, power, literacy, language, and security barriers.'],
        ['Web technology', 'HTML controls visual styling while CSS defines page structure.', false, 'HTML structures content; CSS controls visual presentation.']
      ],
      short: [
        ['Web loading', 'Explain the sequence from entering a URL to seeing a rendered web page.', 'The browser receives the URL, uses DNS to resolve its domain to an IP address, requests resources from the web server using HTTP or HTTPS, receives them, and renders the page using HTML, CSS, JavaScript, and other resources.', [['url', 'address'], ['dns', 'domain', 'ip address'], ['request', 'http', 'https', 'server'], ['receives', 'resources'], ['render', 'html', 'css', 'javascript']]],
        ['Internet applications', 'Give a reasoned example of how a Malawian student could use the Internet for learning and research.', 'The student could use Moodle to access notes and submit work, search digital libraries or academic publications for research, and use online communication to collaborate or contact lecturers.', [['moodle', 'e-learning', 'course materials'], ['research', 'journals', 'digital library', 'publications'], ['submit', 'assignments'], ['communication', 'collaboration', 'lecturer']]],
        ['Malawi access', 'Suggest two measures from the notes that could improve digital inclusion in rural Malawi.', 'Measures include extending telecommunications and rural network coverage, making devices and data affordable, improving electricity access, providing digital-literacy education, increasing local-language content, and promoting safe Internet use; any two are correct.', [['infrastructure', 'network', 'coverage'], ['affordable', 'data', 'devices'], ['electricity', 'power'], ['digital literacy', 'education'], ['local language'], ['safe', 'responsible']]],
        ['Internet services', 'Differentiate between email, instant messaging, and streaming.', 'Email sends and receives electronic messages, instant messaging exchanges messages in real time, and streaming delivers audio or video for playback without necessarily downloading the complete file first.', [['email', 'electronic messages'], ['instant messaging', 'real time', 'messages'], ['streaming', 'audio', 'video', 'playback', 'download']]]
      ]
    },
    {
      difficulty: 'hard',
      mcq: [
        ['Web loading', 'A student enters a valid URL. The domain resolves successfully, but the browser reports a security-certificate problem before displaying the page. Which diagnosis and protocol context best fit?', ['A security error during the HTTPS connection', 'A CSS rendering problem caused by the domain name', 'A failure of HTML to translate the URL to an IP address', 'An FTP error while retrieving email'], 0, 'A certificate or secure-connection issue is one of the listed web-loading problems, particularly relevant to HTTPS.'],
        ['Web loading', 'A website is reachable, but its page structure is present while colours, spacing, and fonts are missing. Which explanation is strongest?', ['DNS did not resolve the domain', 'The CSS resource or its application may have failed', 'The browser did not know the URL', 'The server must be using POP3'], 1, 'CSS controls the visual appearance of a page; missing styling points to CSS or its application.'],
        ['Web loading', 'The domain resolves and the server responds, but a button does not update the page dynamically. Which cause is most directly connected to the expected page technology?', ['IP address formatting', 'The DNS phone-book analogy', 'JavaScript failure or incompatibility', 'The email retrieval protocol'], 2, 'JavaScript supports dynamic updates and interactive behaviour.'],
        ['Web loading', 'A user sees a misspelled address in the browser and the domain cannot be resolved. Which ordered reasoning is most appropriate?', ['The CSS rendered incorrectly, so the server should be redesigned', 'The browser received the page, so the problem is streaming', 'The web server sent content that DNS could not style', 'Correct the URL first, then retry DNS resolution and continue through the server request if it succeeds'], 3, 'An incorrect URL can cause resolution failure; correcting it allows the normal DNS-to-server sequence to continue.'],
        ['Internet and Web', 'A student says, “The Web and Internet are identical because both are needed to open a university site.” Which response is most accurate?', ['Both are needed in that example, but the Internet is the infrastructure and the Web is one service; email and file transfer can use the Internet without Web browsing', 'They are identical because a browser is the Internet', 'The Web is the network cables and the Internet is the web pages', 'The Internet began after the Web was invented'], 0, 'The Internet is the shared infrastructure, whereas the Web is one service; other services include email and file transfer.'],
        ['History', 'Which account correctly links the people, institutions, and milestones in Internet history?', ['Tim Berners-Lee and CERN adopted TCP/IP in 1969; Cerf and Kahn invented the Web in 1991', 'ARPANET connected research institutions; Cerf and Kahn co-developed TCP/IP; Berners-Lee created the Web at CERN', 'CERN funded ARPANET through the US Department of Defense; UCLA invented HTTP in 1983', 'Robert Kahn created CSS, while ARPA invented the first browser'], 1, 'The notes distinguish ARPANET/ARPA, Cerf and Kahn’s TCP/IP work, and Berners-Lee’s Web work at CERN.'],
        ['Internet applications', 'A student saves research files to Google Drive, shares them with a group, and edits them from home. Which explanation best fits the Internet service involved?', ['Email retrieves the student’s IP address', 'Streaming stores the file on the student’s local device only', 'Cloud storage keeps files on remote servers for access and sharing through the Internet', 'E-commerce converts documents into web addresses'], 2, 'Cloud storage saves files remotely and supports access and sharing over the Internet.'],
        ['Malawi access', 'A district has coverage but high data costs, few suitable devices, and low digital literacy. Which evaluation avoids treating Internet access as a single technical issue?', ['Coverage alone guarantees inclusive use', 'Only page-loading speed matters', 'Users should be expected to use services without devices', 'Access also depends on affordability, devices, and skills, so several complementary inclusion measures are needed'], 3, 'The notes identify cost, devices, and literacy alongside network infrastructure as access factors.'],
        ['Internet in government', 'A citizen applies online for a government service, reads public information, and avoids a trip to an office. Which conclusion is best supported?', ['This is e-government, which can improve access and reduce some physical visits or administrative delays', 'This is only streaming and has no service-delivery role', 'It is not an Internet use because government is involved', 'This is a DSS rather than an online public service'], 0, 'E-government can provide services and information while reducing some visits and delays.'],
        ['Internet applications', 'A university runs online lectures, a remote interview, and an electronic marketplace for student-made goods. Which mapping is correct?', ['Streaming = interview; e-commerce = lectures; e-learning = marketplace', 'E-learning = lectures; voice/video communication = interview; e-commerce = marketplace', 'Email = lectures; DNS = interview; FTP = marketplace', 'E-government = lectures; cloud storage = interview; CSS = marketplace'], 1, 'These categories match the stated learning, voice/video communication, and online buying/selling uses.'],
        ['Troubleshooting', 'A page fails to load. DNS resolution succeeds, the server is available, but the user’s device has no active Internet connection. Which listed problem best explains the failure?', ['Incorrect HTML structure', 'Wrong page colour', 'Network failure between the device and the requested service', 'A missing e-commerce payment'], 2, 'A network failure prevents the device from establishing an Internet connection.'],
        ['Internet development', 'Why was the 1983 TCP/IP adoption more than simply a date in ARPANET’s history?', ['It introduced the first mobile-money platform', 'It created the World Wide Web’s HTML pages', 'It made every computer a web server', 'It established common networking protocols that allowed separate networks to communicate'], 3, 'Common TCP/IP standards enabled different interconnected networks to communicate.']
      ],
      tf: [
        ['History', 'Tim Berners-Lee invented the World Wide Web, not the Internet itself.', true, 'The notes explicitly distinguish his Web invention from the earlier Internet development.'],
        ['Web loading', 'A correct URL and successful DNS resolution guarantee a web page will load even if the network or server has failed.', false, 'Network and server failures can still prevent a page from loading after DNS succeeds.'],
        ['Malawi access', 'Improving digital inclusion can involve infrastructure, affordability, power, literacy, language content, and safe-use education.', true, 'The notes recommend a combined approach across these areas.'],
        ['Internet applications', 'E-learning platforms can support materials, assignment submission, assessments, and communication with lecturers.', true, 'These are functions listed for e-learning platforms.']
      ],
      short: [
        ['Troubleshooting', 'A student cannot access a university website. Explain how to investigate the failure in the order of the page-loading process and name possible causes at different stages.', 'Check that the URL is correct; check the network connection; determine whether DNS resolves the domain; verify that the server responds; then consider browser, security-certificate, cache, or compatibility problems during transfer or rendering.', [['url', 'address'], ['network', 'connection'], ['dns', 'domain', 'ip'], ['server', 'response'], ['browser', 'certificate', 'cache', 'compatibility', 'render']]],
        ['Internet and Web', 'Evaluate the claim that the Web is the Internet by giving the correct relationship and two non-Web Internet services.', 'The Internet is the global network infrastructure, and the Web is one service that uses it; email, file transfer, instant messaging, and Internet voice or video communication are other Internet services.', [['internet', 'infrastructure', 'network'], ['web', 'service', 'pages'], ['email'], ['file transfer', 'ftp'], ['instant messaging'], ['voice', 'video']]],
        ['Malawi access', 'A rural college proposes online learning. Analyse the access risks and propose a combined response based on the unit.', 'Students may face weak coverage, high data costs, limited devices, unreliable electricity, low digital literacy, or language barriers; the college and service providers should improve connectivity, affordability, device access, power, skills, and suitable local-language content while promoting safe use.', [['coverage', 'infrastructure', 'network'], ['data cost', 'affordability'], ['devices'], ['electricity', 'power'], ['digital literacy', 'skills'], ['language'], ['safe use', 'local content']]],
        ['Web technology', 'Explain what happens after a server sends a web page’s resources and how the main three page technologies contribute.', 'The browser receives and renders the resources; HTML defines page structure and content, CSS controls visual presentation, and JavaScript adds interactive or dynamic behaviour.', [['browser', 'render', 'displays'], ['html', 'structure', 'content'], ['css', 'style', 'appearance', 'presentation'], ['javascript', 'interactive', 'dynamic']]]
      ]
    }
  ];

  const bank = [];
  levels.forEach((level, levelIndex) => {
    level.mcq.forEach((item, index) => bank.push({
      id: `unit4-${levelIndex + 1}-mcq-${index + 1}`,
      unit: 'unit4',
      difficulty: level.difficulty,
      type: 'mcq',
      topic: item[0],
      question: item[1],
      options: item[2],
      answer: item[3],
      explanation: item[4]
    }));
    level.tf.forEach((item, index) => bank.push({
      id: `unit4-${levelIndex + 1}-tf-${index + 1}`,
      unit: 'unit4',
      difficulty: level.difficulty,
      type: 'tf',
      topic: item[0],
      question: item[1],
      options: ['True', 'False'],
      answer: item[2] ? 0 : 1,
      explanation: item[3]
    }));
    level.short.forEach((item, index) => bank.push({
      id: `unit4-${levelIndex + 1}-short-${index + 1}`,
      unit: 'unit4',
      difficulty: level.difficulty,
      type: 'short',
      topic: item[0],
      question: item[1],
      expected: item[2],
      keywordGroups: item[3],
      minimumKeywordGroups: 2,
      explanation: item[2]
    }));
  });
  window.dis113Unit4LevelQuestionBank = bank;
})();
