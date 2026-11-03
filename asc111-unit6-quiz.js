window.asc111Unit6LevelQuestionBank = (() => {
    const mcq = (id, difficulty, topic, question, options, answer, explanation) => ({
        id, unit: 'unit6', difficulty, type: 'mcq', topic, question, options, answer, explanation
    });
    const tf = (id, difficulty, topic, question, answer, explanation) => ({
        id, unit: 'unit6', difficulty, type: 'tf', topic, question,
        options: ['True', 'False'], answer, explanation
    });
    const short = (id, difficulty, topic, question, expected, keywordGroups, explanation) => ({
        id, unit: 'unit6', difficulty, type: 'short', topic, question, expected, keywordGroups,
        minimumKeywordGroups: Math.min(2, keywordGroups.length), explanation
    });
    const questions = [];
    const addLevel = (difficulty, items) => items.forEach(([topic, question, options, answer, explanation], index) =>
        questions.push(mcq(`asc6-${difficulty[0]}-${String(index + 1).padStart(2, '0')}`, difficulty, topic, question, options, answer, explanation))
    );
    addLevel('simple', [
        ['Time value of money', 'What is the time value of money?', ['The principle that money available today is generally worth more than the same nominal amount later', 'The idea that money never changes value', 'A rule that future payments are always certain', 'The total number of banknotes in circulation'], 0, 'Present money can be used, invested or saved and is generally worth more than the same nominal future amount.'],
        ['Time preference', 'Time preference describes people’s general tendency to:', ['Prefer all future costs', 'Prefer benefits sooner and delay costs where possible', 'Avoid saving', 'Reject any investment'], 1, 'Time preference is the preference for present benefits and delayed costs.'],
        ['Productivity of capital', 'Productivity of capital refers to capital’s ability to:', ['Lose purchasing power only', 'Guarantee repayment', 'Generate additional income or economic value', 'Eliminate interest'], 2, 'Capital can be used productively to generate future returns.'],
        ['Default risk', 'What is default risk?', ['The risk of a higher nominal value', 'A guaranteed interest payment', 'The risk that inflation will be zero', 'The possibility a borrower fails to meet repayment obligations'], 3, 'Default occurs when a borrower fails or refuses to meet agreed repayments.'],
        ['Inflation', 'Inflation generally causes money’s purchasing power to:', ['Decrease', 'Increase automatically', 'Remain fixed', 'Become equal to interest'], 0, 'As prices rise, a fixed nominal amount generally purchases fewer goods and services.'],
        ['Risk premium', 'A risk premium is additional return demanded for:', ['Saving money for one day', 'Accepting additional risk', 'Paying tax', 'Reducing loan principal'], 1, 'Investors or lenders demand a risk premium as compensation for additional risk.'],
        ['Simple interest', 'Simple interest is calculated on:', ['Principal plus all previous interest', 'The future amount only', 'The original principal', 'The discount rate only'], 2, 'Simple interest is charged only on the original principal.'],
        ['Compound interest', 'Compound interest is calculated on:', ['The original principal only', 'Interest only', 'The number of policyholders', 'Principal plus interest accumulated in prior periods'], 3, 'Compound interest earns interest on both principal and accumulated interest.'],
        ['Accumulation', 'Accumulation calculates the:', ['Future value of present money', 'Present value of future money', 'Probability of a claim', 'Mean of a distribution'], 0, 'Accumulation moves a financial amount forward in time.'],
        ['Discounting', 'Discounting calculates the:', ['Compound amount', 'Present value of a future amount', 'Nominal rate only', 'Risk premium'], 1, 'Discounting moves a future payment back to a present value.'],
        ['Interest rates', 'An effective annual rate accounts for:', ['Default risk only', 'Inflation only', 'Compounding during the year', 'The principal amount only'], 2, 'The effective annual rate measures actual yearly growth after within-year compounding.'],
        ['Actuarial applications', 'Why do actuaries discount future pension payments?', ['To make every payment smaller arbitrarily', 'To eliminate mortality risk', 'To avoid forecasting', 'To determine the present value of future obligations'], 3, 'Discounting helps value future pension liabilities at the present date.']
    ]);
    addLevel('intermediate', [
        ['Present versus future money', 'Which is a reason money today may be worth more than the same nominal amount in the future?', ['It can be invested and future payment may be uncertain', 'Future money always has zero value', 'Present money cannot be saved', 'Inflation always equals zero'], 0, 'Immediate use, investment opportunities and uncertainty of future payment support the time value of money.'],
        ['Time preference', 'A person accepts a larger payment next year instead of a smaller one today. The additional amount may reflect:', ['Claim severity', 'Their personal price of waiting or time preference', 'A mortality rate', 'A compulsory transfer'], 1, 'The amount required to delay receipt reflects the person’s implied rate of time preference.'],
        ['Interest theories', 'Which theory explains interest partly through productive uses of borrowed capital?', ['Time preference theory', 'Utility theory', 'Productivity of capital theory', 'Credibility theory'], 2, 'Productivity of capital explains interest through the returns capital can generate.'],
        ['Default and inflation', 'Which pairing is correct?', ['Default—general increase in prices; inflation—failure to repay', 'Default—interest on interest; inflation—principal', 'Default—saving; inflation—investment', 'Default—failure to meet repayments; inflation—declining purchasing power'], 3, 'Default is failure to repay; inflation reduces purchasing power through rising prices.'],
        ['Simple interest', 'Calculate simple interest on MWK 50,000 at 8% per year for 3 years.', ['MWK 12,000', 'MWK 8,000', 'MWK 62,000', 'MWK 64,000'], 0, 'I=Prt=50,000×0.08×3=MWK 12,000.'],
        ['Simple accumulation', 'For the same MWK 50,000 investment, 8% simple interest for 3 years, what is the accumulated amount?', ['MWK 12,000', 'MWK 62,000', 'MWK 64,000', 'MWK 58,000'], 1, 'A=P(1+rt)=50,000(1+0.24)=MWK 62,000.'],
        ['Compound accumulation', 'Calculate the accumulated value of MWK 100,000 at 10% annual compound interest for 3 years.', ['MWK 130,000', 'MWK 131,000', 'MWK 133,100', 'MWK 110,000'], 2, 'A=100,000(1.10)^3=MWK 133,100.'],
        ['Accumulation and discounting', 'Which operation is the inverse direction of compound accumulation?', ['Risk transfer', 'Simple interest', 'Credibility weighting', 'Discounting'], 3, 'Accumulation moves value forward; discounting moves future value back to the present.'],
        ['Present value', 'Find the present value of MWK 121,000 due in 2 years at 10% compound discounting.', ['MWK 100,000', 'MWK 110,000', 'MWK 90,000', 'MWK 121,000'], 0, 'P=121,000/(1.10)^2=121,000/1.21=MWK 100,000.'],
        ['Nominal rate', 'A nominal annual rate of 12% compounded monthly has what monthly rate?', ['12%', '1%', '0.12%', '6%'], 1, 'The nominal rate is divided by 12: 0.12/12=0.01 or 1% monthly.'],
        ['Effective rate', 'What does an effective annual interest rate represent?', ['A stated annual rate before compounding', 'A monthly interest rate', 'Actual annual growth after compounding frequency is considered', 'A rate with no interest'], 2, 'The effective rate accounts for the accumulation through all compounding periods in the year.'],
        ['Interest determinants', 'Which factor can influence interest rates by compensating lenders for uncertainty?', ['Number of banknotes', 'A mortality table', 'Claim count', 'Default risk'], 3, 'Lenders may require additional return for default risk and other uncertainties.']
    ]);
    addLevel('medium', [
        ['Simple interest calculation', 'An investment of MWK 80,000 earns 6% simple interest for 4 years. What is the accumulated amount?', ['MWK 99,200', 'MWK 101,000', 'MWK 19,200', 'MWK 98,000'], 0, 'I=80,000×0.06×4=19,200; A=80,000+19,200=MWK 99,200.'],
        ['Compound interest calculation', 'An amount of MWK 200,000 is invested at 10% annual compound interest for 4 years. Find A.', ['MWK 280,000', 'MWK 292,820', 'MWK 288,000', 'MWK 320,000'], 1, 'A=200,000(1.10)^4=200,000×1.4641=MWK 292,820.'],
        ['Present value', 'A payment of MWK 150,000 is due in 3 years. At 10% annual compound discounting, its present value is closest to:', ['MWK 150,000', 'MWK 135,000', 'MWK 112,697', 'MWK 100,000'], 2, 'P=150,000/(1.10)^3≈MWK 112,697.'],
        ['Time preference rate', 'A person is indifferent between MWK 20,000 today and MWK 22,000 in one year. What implied annual rate is stated by the notes’ formula?', ['2%', '5%', '20%', '10%'], 3, 'Rate=(22,000−20,000)/20,000=0.10=10%.'],
        ['Effective interest rate', 'A nominal annual rate of 12% compounded monthly has an effective rate given by:', ['(1+0.12/12)^12−1', '0.12/12', '(1+0.12)^12', '12×0.12'], 0, 'The effective annual rate is (1+j/m)^m−1.'],
        ['Effective interest calculation', 'At 12% nominal interest compounded monthly, which is the approximate effective annual rate?', ['12.00%', '12.68%', '1.00%', '10.68%'], 1, '(1+0.12/12)^12−1≈0.126825, or 12.68%.'],
        ['Simple and compound', 'For positive interest over multiple periods, why is compound accumulation generally larger than simple accumulation?', ['It uses a smaller principal', 'It omits all interest', 'Previously accumulated interest also earns interest', 'It discounts the principal'], 2, 'Compound interest earns interest on accumulated interest, unlike simple interest.'],
        ['Supply and demand', 'If demand for loanable funds rises relative to supply, what may happen to interest rates, all else equal?', ['They must become zero', 'They cannot change', 'They decrease because borrowers compete', 'They may rise'], 3, 'Interest rates are influenced by supply and demand for funds; greater demand can put upward pressure on rates.'],
        ['Inflation risk', 'A future payment has the same nominal amount as today, but prices rise before it is paid. What happens to its purchasing power?', ['It generally falls', 'It doubles automatically', 'It stays exactly constant', 'It becomes the interest rate'], 0, 'Inflation reduces the real purchasing power of a fixed nominal amount.'],
        ['Accumulation and discounting', 'Which pairing is correct?', ['Discounting: present to future; accumulation: future to present', 'Accumulation: present to future; discounting: future to present', 'Both calculate claim frequency', 'Both only apply to simple interest'], 1, 'Accumulation moves money forward in time; discounting brings future amounts to present value.'],
        ['Actuarial applications', 'An insurer has expected future benefit payments. Which calculation supports valuing the liability today?', ['Add all nominal payments without timing', 'Use the claim count as the discount factor', 'Discount the future benefits to present value', 'Apply a risk tolerance score only'], 2, 'Discounting accounts for the time value when valuing future liabilities.'],
        ['Interest rates', 'Which bundle contains factors identified in the unit as influencing interest rates?', ['Only mortality and claim counts', 'Only nominal banknote values', 'Only utility and skewness', 'Inflation expectations, default risk, maturity and economic conditions'], 3, 'Interest rates are influenced by inflation, default risk, maturity, monetary policy and broader conditions.']
    ]);
    addLevel('hard', [
        ['Compound interest', 'A fund invests MWK 100,000 for 3 years at 10%. What is the difference between compound and simple accumulated amounts?', ['MWK 3,100', 'MWK 3,000', 'MWK 1,000', 'MWK 33,100'], 0, 'Compound is MWK 133,100; simple is MWK 130,000; the difference is MWK 3,100.'],
        ['Present value', 'At 10% effective annual interest, which present value equals a future payment of MWK 242,000 in 2 years?', ['MWK 180,000', 'MWK 200,000', 'MWK 220,000', 'MWK 242,000'], 1, 'P=242,000/(1.10)^2=242,000/1.21=MWK 200,000.'],
        ['Effective interest', 'A nominal rate j=12% is compounded monthly. Which expression and result best represent the effective annual rate?', ['(1.12)^12−1≈289.6%', '(1+0.12/12)^12−1≈12.68%', '0.12/12=1%', '12×0.12=144%'], 1, 'The monthly periodic rate is 1%; annual effective growth is (1.01)^12−1≈12.68%.'],
        ['Simple versus compound', 'An investor deposits MWK 100,000 at 10% for 3 years. Which comparison is correct?', ['Simple=133,100; compound=130,000', 'Both=130,000', 'Simple=130,000; compound=133,100', 'Simple=100,000; compound=133,100'], 2, 'Simple accumulation is 100,000(1+0.10×3)=130,000; compound is 100,000(1.10)^3=133,100.'],
        ['Time preference', 'A person requires MWK 44,000 in one year to be indifferent to MWK 40,000 today. What is the implied rate?', ['4%', '9.1%', '40%', '10%'], 3, 'Rate=(44,000−40,000)/40,000=0.10=10%.'],
        ['Productivity of capital', 'A firm borrows to buy machinery expected to generate returns exceeding financing costs. This illustrates:', ['Productivity of capital theory', 'The mortality law', 'Credibility theory', 'Risk retention'], 0, 'Productive capital can generate additional income, enabling repayment and a return.'],
        ['Interest theories', 'Which statement best relates time preference and productivity of capital theories?', ['They are identical descriptions of inflation', 'One explains lenders’ preference for compensation; the other explains productive uses of borrowed funds', 'Both imply interest is always zero', 'Neither relates to interest'], 1, 'Time preference concerns postponing consumption; productivity concerns returns generated by capital.'],
        ['Default and risk premium', 'A lender charges a higher expected return on a riskier loan. The additional compensation is most directly a:', ['Discount factor', 'Nominal principal', 'Risk premium', 'Survival probability'], 2, 'A risk premium is additional return demanded for accepting additional risk.'],
        ['Inflation and real value', 'A nominal payment is fixed, while general prices rise. Which conclusion is correct?', ['Its nominal amount necessarily decreases', 'Its purchasing power rises', 'Its default risk is eliminated', 'Its purchasing power generally decreases'], 3, 'Inflation reduces the purchasing power of fixed nominal money.'],
        ['Actuarial valuation', 'Why is discounting essential when valuing pensions and insurance liabilities?', ['Payments occur in the future and must be expressed at a comparable present value', 'It guarantees the payments are made', 'It converts mortality into interest', 'It removes the need to estimate cash flows'], 0, 'Discounting places future cash flows on a present-value basis for valuation and funding.'],
        ['Effective rates', 'A bank quotes 12% nominal compounded monthly. Why is the effective annual rate greater than 12%?', ['Because the nominal rate is actually 13%', 'Interest earned in earlier months also earns interest in later months', 'The principal is multiplied by 12 only', 'Discounting changes it'], 1, 'Monthly compounding credits interest during the year, and that interest compounds further.'],
        ['Supply and demand', 'Which interpretation of interest rates is most complete according to the unit?', ['Rates depend only on a lender’s preference', 'Rates depend only on the number of compounding periods', 'Rates reflect supply and demand as well as inflation, default risk, maturity and economic conditions', 'Rates are unaffected by uncertainty'], 2, 'The unit lists multiple market and risk factors affecting the level of interest rates.']
    ]);
    const truths = {
        simple: [
            ['Time value of money', 'Money available today can be invested or saved to generate additional value.', 0, 'Present funds can be used to earn returns.'],
            ['Simple interest', 'Simple interest is calculated only on the original principal.', 0, 'That is the definition of simple interest.'],
            ['Compound interest', 'Compound interest earns interest on previously accumulated interest.', 0, 'Compounding includes interest on interest.'],
            ['Discounting', 'Discounting calculates a present value for a future amount.', 0, 'Discounting moves future money to an equivalent present amount.']
        ],
        intermediate: [
            ['Inflation', 'Inflation generally increases the purchasing power of a fixed nominal payment.', 1, 'Inflation generally reduces purchasing power as prices rise.'],
            ['Productivity of capital', 'Productivity of capital theory links interest to capital’s ability to generate returns.', 0, 'Capital may produce additional economic value.'],
            ['Default risk', 'Default risk is the possibility that a borrower does not meet agreed repayment obligations.', 0, 'This is the unit’s definition of default.'],
            ['Accumulation', 'Accumulation and discounting both move a financial amount in the same time direction.', 1, 'Accumulation moves forward; discounting moves backward.']
        ],
        medium: [
            ['Effective rate', 'The effective annual rate accounts for compounding frequency within the year.', 0, 'It measures actual annual growth after compounding.'],
            ['Simple interest', 'MWK 50,000 at 8% simple interest for 3 years accumulates to MWK 62,000.', 0, 'Interest is MWK 12,000 and total accumulation is MWK 62,000.'],
            ['Present value', 'MWK 121,000 due in 2 years at 10% compound discounting has present value MWK 100,000.', 0, '121,000/(1.10)^2=MWK 100,000.'],
            ['Risk premium', 'A risk premium is the extra return demanded for accepting additional risk.', 0, 'This is the definition of a risk premium.']
        ],
        hard: [
            ['Interest theories', 'Time preference theory and productivity of capital theory explain complementary aspects of interest.', 0, 'They address lenders’ willingness to wait and borrowers’ productive use of capital.'],
            ['Compound interest', 'At a positive rate over multiple periods, compound interest is usually lower than simple interest on the same principal and term.', 1, 'Compounding produces a larger amount because interest earns interest.'],
            ['Nominal and effective rates', 'A nominal annual rate of 12% compounded monthly has an effective annual rate of exactly 12%.', 1, 'The effective rate is about 12.68%, because monthly interest compounds.'],
            ['Actuarial valuation', 'Discounting future cash flows helps value insurance benefits and pension obligations today.', 0, 'Present-value calculations are central to actuarial liability valuation.']
        ]
    };
    Object.entries(truths).forEach(([difficulty, items]) => items.forEach(([topic, question, answer, explanation], index) =>
        questions.push(tf(`asc6-${difficulty[0]}-t${index + 1}`, difficulty, topic, question, answer, explanation))
    ));
    const shorts = {
        simple: [
            ['Time value of money', 'Define the time value of money.', 'A given amount available today is generally worth more than the same nominal amount available later.', [['today', 'present'], ['worth more', 'value'], ['later', 'future']], 'Present money can be used, saved or invested and future payment is uncertain.'],
            ['Simple interest', 'State the simple interest formula.', 'I=Prt, where P is principal, r is annual rate and t is time in years.', [['i=prt', 'prt'], ['principal', 'rate', 'time']], 'Simple interest is principal multiplied by rate and time.'],
            ['Compound interest', 'State the compound accumulation formula.', 'A=P(1+i)^n, where i is the rate per period and n is the number of periods.', [['a=p', 'p(1+i)', 'compound'], ['rate', 'period']], 'Compound interest applies the periodic accumulation factor repeatedly.'],
            ['Accumulation and discounting', 'Distinguish accumulation from discounting.', 'Accumulation calculates future value from present money; discounting calculates present value from a future amount.', [['future', 'forward'], ['present', 'discount', 'backward']], 'The operations move values in opposite time directions.']
        ],
        intermediate: [
            ['Interest theories', 'Name the two theories explaining the existence of interest.', 'Time preference theory and productivity of capital theory.', [['time preference'], ['productivity of capital']], 'One concerns preference for present consumption; the other the productive use of capital.'],
            ['Inflation and default', 'Distinguish inflation risk from default risk.', 'Inflation reduces purchasing power as prices rise; default risk is failure to meet repayment obligations.', [['inflation', 'prices', 'purchasing power'], ['default', 'repayment', 'borrower']], 'The risks affect real value and payment reliability, respectively.'],
            ['Effective interest', 'How do you calculate the effective annual rate from nominal rate j compounded m times per year?', 'i_eff=(1+j/m)^m−1.', [['(1+j/m)', 'j/m'], ['m', 'effective', 'minus 1']], 'The formula includes compounding across all m periods.'],
            ['Risk premium', 'Define a risk premium.', 'A risk premium is additional return demanded by an investor or lender to compensate for accepting additional risk.', [['additional', 'extra'], ['return', 'compensation'], ['risk']], 'Riskier exposures generally require additional expected return.']
        ],
        medium: [
            ['Simple interest calculation', 'Calculate simple interest and accumulated amount on MWK 50,000 at 8% for 3 years.', 'I=50,000×0.08×3=MWK 12,000; A=MWK 62,000.', [['12,000'], ['62,000'], ['simple', 'interest']], 'The principal earns MWK 12,000 simple interest over three years.'],
            ['Compound interest calculation', 'Calculate the accumulation of MWK 100,000 at 10% compounded annually for 3 years.', 'A=100,000(1.10)^3=MWK 133,100.', [['133,100'], ['1.10', 'three', '3 years']], 'The annual compounding factor is applied three times.'],
            ['Present value', 'Find the present value of MWK 121,000 due in two years at 10% compound discounting.', 'P=121,000/(1.10)^2=MWK 100,000.', [['100,000'], ['121,000', '1.10', 'two years']], 'Discounting reverses two years of 10% compound accumulation.'],
            ['Time preference', 'Calculate the implied rate when MWK 20,000 today is equivalent to MWK 22,000 in one year.', 'Rate=(22,000−20,000)/20,000=10%.', [['10%'], ['2,000', '20,000'], ['rate', 'one year']], 'The extra MWK 2,000 is 10% of the present amount.']
        ],
        hard: [
            ['Effective annual rate', 'Calculate the approximate effective annual rate for 12% nominal interest compounded monthly.', 'i_eff=(1+0.12/12)^12−1≈0.126825, or 12.68%.', [['12.68', '0.1268'], ['monthly', '12'], ['effective', 'compounding']], 'Monthly compounding makes the effective annual rate exceed the nominal rate.'],
            ['Simple and compound', 'For MWK 100,000 at 10% for three years, calculate both simple and compound totals and their difference.', 'Simple=MWK 130,000; compound=MWK 133,100; difference=MWK 3,100.', [['130,000'], ['133,100'], ['3,100']], 'Compound interest earns interest on prior interest, creating the additional MWK 3,100.'],
            ['Interest theories', 'Explain how time preference and productivity of capital together help explain interest.', 'Lenders seek compensation for postponing present use of money, while borrowers may pay interest because capital can generate future returns.', [['postpone', 'present', 'lenders', 'waiting'], ['capital', 'borrowers', 'generate', 'returns']], 'The theories describe complementary sides of lending and borrowing.'],
            ['Actuarial application', 'Explain why an actuary discounts expected future pension payments.', 'Discounting converts future payments to present value so obligations can be compared with current assets and contributions for valuation and funding.', [['future payments', 'pension'], ['present value', 'discount'], ['funding', 'assets', 'valuation']], 'Present values put cash flows at different dates on a comparable basis.']
        ]
    };
    Object.entries(shorts).forEach(([difficulty, items]) => items.forEach(([topic, question, expected, keywordGroups, explanation], index) =>
        questions.push(short(`asc6-${difficulty[0]}-s${index + 1}`, difficulty, topic, question, expected, keywordGroups, explanation))
    ));
    return questions;
})();
