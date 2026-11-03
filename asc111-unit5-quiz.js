window.asc111Unit5LevelQuestionBank = (() => {
    const mcq = (id, difficulty, topic, question, options, answer, explanation) => ({
        id, unit: 'unit5', difficulty, type: 'mcq', topic, question, options, answer, explanation
    });
    const tf = (id, difficulty, topic, question, answer, explanation) => ({
        id, unit: 'unit5', difficulty, type: 'tf', topic, question,
        options: ['True', 'False'], answer, explanation
    });
    const short = (id, difficulty, topic, question, expected, keywordGroups, explanation) => ({
        id, unit: 'unit5', difficulty, type: 'short', topic, question, expected, keywordGroups,
        minimumKeywordGroups: Math.min(2, keywordGroups.length), explanation
    });
    const questions = [];
    const addLevel = (difficulty, items) => items.forEach(([topic, question, options, answer, explanation], index) =>
        questions.push(mcq(`asc5-${difficulty[0]}-${String(index + 1).padStart(2, '0')}`, difficulty, topic, question, options, answer, explanation))
    );
    addLevel('simple', [
        ['Random variables', 'What is a random variable?', ['A numerical quantity determined by an uncertain outcome', 'A guaranteed financial amount', 'A list of all premiums', 'A value that cannot change'], 0, 'A random variable assigns numerical values to outcomes of an uncertain process.'],
        ['Discrete variables', 'Which is a discrete random variable?', ['A person’s height', 'The number of claims received in a year', 'Time until a claim is settled', 'Future lifetime measured continuously'], 1, 'Claim count takes countable integer values, making it discrete.'],
        ['Continuous variables', 'Which is most naturally treated as a continuous random variable?', ['Number of accidents', 'Number of deaths', 'Time until death', 'Number of policies'], 2, 'Time can take any value over an interval and is commonly modelled continuously.'],
        ['Probability distributions', 'What does a probability distribution describe?', ['Only the mean of a variable', 'Only its largest value', 'The cause of an event', 'Possible variable values and their probabilities or densities'], 3, 'A distribution specifies possible values and associated probabilities or densities.'],
        ['Discrete distributions', 'For a valid discrete probability distribution, probabilities must be non-negative and:', ['Sum to one', 'Sum to zero', 'Be all equal', 'Be greater than one'], 0, 'A valid probability mass function has non-negative probabilities that sum to one.'],
        ['Continuous distributions', 'For a continuous random variable, probability over an interval is found from:', ['A single point density', 'Area under the density curve', 'The number of sample points', 'The median only'], 1, 'Continuous probabilities are integrals, interpreted as areas under the density curve.'],
        ['Expected value', 'The expected value of a random variable represents its:', ['Largest possible observation', 'Variance', 'Model-based long-run average', 'Most likely value in every case'], 2, 'Expected value is the long-run average under the specified probability model.'],
        ['Variance', 'What does variance measure?', ['The centre of the distribution', 'The number of possible outcomes', 'The direction of skewness only', 'Spread around the mean'], 3, 'Variance measures dispersion around the expected value.'],
        ['Skewness and kurtosis', 'Skewness describes which distribution characteristic?', ['Asymmetry', 'The mean', 'The probability total', 'The number of claims'], 0, 'Skewness measures distributional asymmetry.'],
        ['Mortality tables', 'In a life table, qₓ represents the probability of:', ['Surviving one year from age x', 'Dying before age x+1, conditional on age x', 'Being alive at birth', 'Retiring at age x'], 1, 'qₓ is the one-year probability of death from age x to x+1.'],
        ['Aggregate claims', 'Aggregate claims combine claim frequency with:', ['Investment income', 'Policy duration only', 'Claim severity', 'Mortality rates only'], 2, 'Aggregate claim totals depend on the number of claims and the amount of each claim.'],
        ['Credibility theory', 'Credibility theory combines specific-group experience with:', ['Only the largest observed claim', 'A guaranteed value', 'The group’s premium alone', 'A broader population estimate'], 3, 'Credibility blends group-specific observations with broader prior information.']
    ]);
    addLevel('intermediate', [
        ['Random variables', 'An insurer defines X as the number of claims made by a policyholder next year. Why is X random?', ['Its value depends on an uncertain future outcome', 'It is always continuous', 'It has no probability distribution', 'It is already known'], 0, 'The claim count is unknown before the year’s experience is observed.'],
        ['Discrete and continuous variables', 'Which distinction is correct?', ['Discrete variables have densities only', 'Discrete values are countable; continuous values may lie anywhere in an interval', 'Continuous variables can take only whole numbers', 'Both types must be finite'], 1, 'Discrete variables take finite or countably infinite values; continuous variables range over intervals.'],
        ['PMF validity', 'A discrete variable has probabilities 0.2, 0.3 and 0.4 for all possible outcomes. What is wrong?', ['Probabilities are negative', 'Outcomes are discrete', 'The probabilities sum to 0.9, not 1', 'A distribution cannot have three values'], 2, 'A valid PMF must sum to one; here one tenth of the total probability is missing.'],
        ['Continuous distributions', 'A PDF has f(5)=0.4. What is P(X=5) for a continuous variable?', ['0.4', '1', 'Cannot be zero', '0'], 3, 'A continuous variable assigns probability zero to any exact single point; density is not point probability.'],
        ['Expected value', 'A fair coin is tossed three times and X counts heads. What is E(X)?', ['1.5', '3', '0.5', '8'], 0, 'The expected number of heads is 3 × 0.5 = 1.5, also obtained from the stated PMF.'],
        ['Moments', 'Which pairing is correct?', ['Mean—spread; variance—asymmetry', 'Mean—centre; variance—dispersion', 'Skewness—centre; kurtosis—probability total', 'Variance—tail direction only'], 1, 'The mean measures centre and variance measures spread about that centre.'],
        ['Mortality tables', 'A life table has lₓ=1,000 and dₓ=20. What is qₓ?', ['0.20', '0.02', '0.98', '20'], 1, 'qₓ=dₓ/lₓ=20/1,000=0.02.'],
        ['Life table relationships', 'If qₓ=0.07, what is the one-year survival probability pₓ?', ['0.07', '1.07', '0.93', '0.70'], 2, 'pₓ=1−qₓ=1−0.07=0.93.'],
        ['Claim frequency', 'An insurer observes 200 claims over 1,000 policy-years. What is the frequency rate?', ['5 claims per policy-year', '0.02 claims per policy-year', '200 claims per policy-year', '0.2 claims per policy-year'], 3, 'Frequency rate is claims divided by exposure: 200/1,000=0.2.'],
        ['Aggregate claims', 'If expected claim count is 100 and expected severity is MWK 50,000, what is expected aggregate claims under the stated assumptions?', ['MWK 5,000,000', 'MWK 50,000', 'MWK 500,000', 'MWK 100,000,000'], 0, 'E(S)=E(N)E(X)=100×MWK 50,000=MWK 5 million.'],
        ['Moments', 'Two portfolios have the same expected aggregate claims but different variances. What follows?', ['Their financial risks must be identical', 'Their expected claims match but their claim volatility differs', 'The portfolio with greater variance has a lower mean', 'Variance is irrelevant to insurers'], 1, 'The mean alone does not capture spread or tail risk; greater variance means different financial risk.'],
        ['Credibility theory', 'In f=Zf₂+(1−Z)f₁, what does Z represent?', ['Claim severity', 'The overall mean', 'Weight assigned to the specific group experience', 'The probability of death'], 2, 'Z is the credibility factor weighting the group-specific estimate f₂.']
    ]);
    addLevel('medium', [
        ['Expected value', 'X takes values 0, 1, 2, 3 with probabilities 1/8, 3/8, 3/8, 1/8. Calculate E(X).', ['1.5', '1.0', '2.0', '3.0'], 0, 'E(X)=0(1/8)+1(3/8)+2(3/8)+3(1/8)=12/8=1.5.'],
        ['Variance', 'For the number of heads in three fair coin tosses, E(X)=1.5 and E(X²)=3. What is Var(X)?', ['3.00', '0.75', '1.50', '5.25'], 1, 'Var(X)=E(X²)−[E(X)]²=3−2.25=0.75.'],
        ['Life table', 'A life table gives lₓ=8,000 and dₓ=160. What is pₓ?', ['0.02', '0.98', '0.80', '0.16'], 1, 'qₓ=160/8,000=0.02, so pₓ=1−qₓ=0.98.'],
        ['Life table', 'If lₓ=10,000 and dₓ=250, how many are alive at age x+1?', ['9,250', '10,250', '9,750', '250'], 2, 'lₓ₊₁=lₓ−dₓ=10,000−250=9,750.'],
        ['Claim frequency', 'An insurer has 500 claims from 2,500 policy-years. What is its observed frequency rate?', ['0.05', '5', '0.5', '0.2'], 3, '500/2,500=0.2 claims per policy-year.'],
        ['Aggregate claims', 'A portfolio expects 40 claims with mean claim severity MWK 75,000. Find expected aggregate claims.', ['MWK 3,000,000', 'MWK 300,000', 'MWK 75,000', 'MWK 30,000,000'], 0, 'E(S)=40×MWK 75,000=MWK 3,000,000.'],
        ['Credibility theory', 'Given f₁=0.10, f₂=0.16 and Z=0.60, calculate f=Zf₂+(1−Z)f₁.', ['0.160', '0.136', '0.124', '0.060'], 1, 'f=0.60(0.16)+0.40(0.10)=0.096+0.040=0.136.'],
        ['Credibility factor', 'If Z=0 in the credibility formula, what is the combined estimate?', ['f₂', '0', 'f₁', 'f₁+f₂'], 2, 'With Z=0, the group receives no weight and f=f₁.'],
        ['Credibility factor', 'If Z=1, what is the combined estimate?', ['f₁', '0.5(f₁+f₂)', '1', 'f₂'], 3, 'With Z=1, the group experience receives full weight and f=f₂.'],
        ['Continuous variables', 'A continuous variable has a density curve. How is P(a<X<b) obtained?', ['Integrate the density from a to b', 'Read f(a) only', 'Count possible values', 'Use the mean alone'], 0, 'Interval probability is the area under the PDF between a and b.'],
        ['Mortality models', 'Which model adds a constant component to the Gompertz age-related mortality form?', ['Binomial', 'Makeham', 'Poisson', 'Credibility'], 1, 'Makeham’s law adds a constant component, commonly μ(x)=A+Bcˣ.'],
        ['Moments and risk', 'Why might an actuary examine skewness and kurtosis as well as mean and variance?', ['They determine the number of policies', 'They replace all claim data', 'They help describe asymmetry and tail behaviour', 'They guarantee the expected value'], 2, 'Skewness and kurtosis describe distribution shape and tail characteristics that affect extreme claims.']
    ]);
    addLevel('hard', [
        ['Discrete distribution', 'A claim count N has P(N=0)=0.2, P(N=1)=0.5 and P(N=2)=0.3. What is E(N)?', ['0.8', '1.0', '1.2', '1.1'], 3, 'E(N)=0(0.2)+1(0.5)+2(0.3)=1.1.'],
        ['Variance', 'For X with values 0, 1, 2 and probabilities 0.2, 0.5, 0.3, calculate Var(X).', ['0.49', '0.69', '1.21', '0.90'], 0, 'E(X)=1.1 and E(X²)=0.5+1.2=1.7; Var(X)=1.7−1.21=0.49.'],
        ['Credibility theory', 'An observed small group rate is unusually high because of random fluctuation. Which credibility response is most appropriate?', ['Give the group experience full weight regardless of reliability', 'Blend it with the broader estimate using a credibility factor', 'Ignore the broader population in all cases', 'Use the largest observed value'], 1, 'Credibility moderates potentially unstable group experience by blending it with broader information.'],
        ['Credibility calculation', 'A prior claim frequency is 0.08, group experience is 0.18 and Z=0.25. What is the credibility estimate?', ['0.18', '0.105', '0.155', '0.065'], 2, 'f=0.25(0.18)+0.75(0.08)=0.045+0.060=0.105.'],
        ['Aggregate claims', 'Assuming claim count is independent of identically distributed severities, E(N)=60 and E(X)=MWK 40,000. What is E(S)?', ['MWK 100,000', 'MWK 1,500,000', 'MWK 24,000', 'MWK 2,400,000'], 3, 'E(S)=E(N)E(X)=60×MWK 40,000=MWK 2,400,000.'],
        ['Aggregate claims', 'An insurer observes three claims of MWK 100,000, MWK 250,000 and MWK 150,000. What is aggregate claims?', ['MWK 500,000', 'MWK 450,000', 'MWK 400,000', 'MWK 1,500,000'], 0, 'Aggregate claims are the sum of individual severities: MWK 500,000.'],
        ['Distribution shape', 'Two portfolios share a mean and variance, but one has heavier tails. Why is this material?', ['Their solvency risk must be equal', 'The heavier-tailed portfolio can face more unusually large claims', 'Its expected value is necessarily higher', 'Tail shape matters only for continuous variables'], 1, 'Heavy tails mean unusually large claims may occur more often than a lighter-tailed model suggests.'],
        ['Mortality studies', 'Why may mortality data be smoothed before fitting a mortality model?', ['To delete age effects', 'To ensure all death rates are equal', 'To reduce random fluctuations while retaining important experience patterns', 'To replace reliable source data'], 2, 'Smoothing aims to produce more consistent estimates while preserving important characteristics.'],
        ['Life table notation', 'At age x, lₓ=5,000 and lₓ₊₁=4,850. What are dₓ and qₓ?', ['dₓ=150, qₓ=0.03', 'dₓ=4,850, qₓ=0.97', 'dₓ=150, qₓ=0.97', 'dₓ=5,000, qₓ=0.03'], 0, 'dₓ=5,000−4,850=150; qₓ=150/5,000=0.03.'],
        ['Continuous distributions', 'A density f(x) is positive at x=4. Which statement is correct?', ['P(X=4)=f(4)', 'P(X=4)=0, while an interval around 4 may have positive probability', 'P(X=4)=1', 'The density must be zero'], 1, 'For a continuous variable, a single exact value has probability zero; intervals can have positive area.'],
        ['Mortality models', 'Which expression represents Makeham’s mortality law as given in the notes?', ['μ(x)=A+Bx', 'μ(x)=A−Bcˣ', 'μ(x)=A+Bcˣ, with c>1', 'μ(x)=A/B'], 2, 'Makeham’s law adds a constant component to an exponential age-related component.'],
        ['Moments', 'Expected aggregate claims are equal in two portfolios, but one has greater variance and positive skew. What is the prudent interpretation?', ['The portfolios are equally risky in every respect', 'The higher variance implies fewer extreme losses', 'Skewness changes only the claim count', 'The second portfolio has greater dispersion and potentially more severe right-tail outcomes'], 3, 'Variance measures spread and positive skew indicates an extended right tail, increasing concern about large outcomes.']
    ]);
    const tfByLevel = {
        simple: [
            ['Random variables', 'A random variable assigns numerical values to uncertain outcomes.', 0, 'That is the definition of a random variable.'],
            ['Discrete variables', 'The number of claims in a year is generally a discrete variable.', 0, 'Claim counts are countable values.'],
            ['Continuous variables', 'A continuous variable can take any value in an interval.', 0, 'Continuous variables are measurable over ranges.'],
            ['Variance', 'Variance measures the spread of values around the mean.', 0, 'Variance is a measure of dispersion.']
        ],
        intermediate: [
            ['Continuous distributions', 'For a continuous random variable, density at a point is the probability of that exact point.', 1, 'Density is not point probability; the probability of an exact value is zero.'],
            ['PMF', 'Probabilities in a valid discrete probability mass function sum to one.', 0, 'This is a defining condition for a PMF.'],
            ['Life tables', 'For a conventional life table, pₓ+qₓ=1.', 0, 'Death and survival probabilities are complements.'],
            ['Moments', 'Skewness describes asymmetry in a probability distribution.', 0, 'Skewness measures asymmetry.']
        ],
        medium: [
            ['Aggregate claims', 'When claim frequency and severity meet the stated assumptions, E(S)=E(N)E(X).', 0, 'The notes give this expected aggregate claims relationship.'],
            ['Credibility theory', 'A credibility factor Z may lie between zero and one inclusive.', 0, 'The factor satisfies 0≤Z≤1.'],
            ['Mortality studies', 'Mortality data never require smoothing because observed rates contain no random fluctuation.', 1, 'Raw mortality rates can fluctuate randomly and may be smoothed.'],
            ['Life tables', 'If dₓ=0, then qₓ=0 when lₓ is positive.', 0, 'qₓ=dₓ/lₓ, so it is zero when dₓ is zero.']
        ],
        hard: [
            ['Credibility theory', 'When Z=0, the combined credibility estimate equals the specific group estimate f₂.', 1, 'At Z=0, f=f₁; the group receives no weight.'],
            ['Distribution shape', 'Equal expected values guarantee equal financial risk for two claim distributions.', 1, 'Variance, skewness and tail behaviour may differ even when means match.'],
            ['Continuous distributions', 'A continuous density can be positive at x=a even though P(X=a)=0.', 0, 'A point density is not a point probability.'],
            ['Mortality models', 'Makeham’s model includes a constant component in addition to an age-related component.', 0, 'The constant term is the extension beyond the Gompertz component.']
        ]
    };
    const shortByLevel = {
        simple: [
            ['Random variables', 'Define a random variable.', 'A random variable is a numerical quantity whose value depends on the outcome of an uncertain process.', [['numerical', 'quantity', 'value'], ['uncertain', 'random', 'outcome']], 'A random variable maps uncertain outcomes to numbers.'],
            ['Probability distributions', 'What does a probability distribution show?', 'It describes possible values of a random variable and their probabilities or densities.', [['possible values', 'values'], ['probabilities', 'density', 'densities']], 'A distribution describes how probability is assigned to values.'],
            ['Moments', 'Name two moments used to describe a distribution.', 'Mean, variance, skewness and kurtosis are important moments.', [['mean', 'variance', 'skewness', 'kurtosis']], 'The first four moments describe centre, spread and shape.'],
            ['Mortality tables', 'What does qₓ represent in a life table?', 'qₓ is the probability that a person aged x dies before reaching age x+1.', [['probability', 'q'], ['dies', 'death'], ['age x+1', 'one year']], 'qₓ is the one-year probability of death from age x.']
        ],
        intermediate: [
            ['Discrete and continuous variables', 'Distinguish discrete and continuous random variables.', 'Discrete variables take finite or countably infinite values; continuous variables can take any value in an interval.', [['countable', 'finite', 'discrete'], ['interval', 'continuous', 'any value']], 'Countability distinguishes discrete values from continuous ranges.'],
            ['Life table', 'State two life-table relationships involving lₓ, dₓ, qₓ and pₓ.', 'qₓ=dₓ/lₓ; pₓ=1−qₓ=lₓ₊₁/lₓ; and lₓ₊₁=lₓ−dₓ.', [['q', 'd', 'l'], ['p', 'survival', '1−q'], ['l', 'deaths']], 'These equations connect deaths, survivors and one-year probabilities.'],
            ['Aggregate claims', 'Explain what aggregate claims combine.', 'Aggregate claims sum individual claim amounts and depend on both claim frequency and claim severity.', [['sum', 'total', 'individual claim amounts'], ['frequency', 'number of claims'], ['severity', 'amount']], 'The total depends on how many claims occur and the size of each.'],
            ['Credibility theory', 'What does the credibility factor Z control?', 'Z controls the weight assigned to the specific group experience relative to the broader population estimate.', [['weight', 'factor'], ['group', 'specific experience'], ['broader', 'population']], 'Credibility balances group data against prior or wider experience.']
        ],
        medium: [
            ['Expected value and variance', 'For values 0,1,2,3 with probabilities 1/8,3/8,3/8,1/8, find E(X).', 'Expected value E(X)=1.5.', [['1.5'], ['expected', 'mean', 'value']], 'The weighted sum is 0+3/8+6/8+3/8=1.5.'],
            ['Credibility theory', 'Calculate the credibility estimate when f₁=0.10, f₂=0.16 and Z=0.60.', 'f=0.60(0.16)+0.40(0.10)=0.136.', [['0.136'], ['0.60', '0.16'], ['0.40', '0.10']], 'The weighted group and prior estimates sum to 0.136.'],
            ['Claim frequency', 'An insurer has 200 claims for 1,000 policy-years. Calculate the frequency rate.', 'Frequency rate=200/1,000=0.2 claims per policy-year.', [['0.2'], ['claims', 'policy-year', 'exposure']], 'Divide observed claims by exposure units.'],
            ['Variance', 'Why are variance and tail shape useful when two portfolios have the same expected claims?', 'They reveal differences in dispersion and the likelihood or severity of unusually large outcomes.', [['same mean', 'expected claims'], ['dispersion', 'variance', 'spread'], ['tail', 'large', 'extreme']], 'Expected values alone do not describe uncertainty or extreme-loss exposure.']
        ],
        hard: [
            ['Credibility theory', 'With f₁=0.08, f₂=0.18 and Z=0.25, calculate f and interpret the weights.', 'f=0.25(0.18)+0.75(0.08)=0.105; the group experience receives 25% weight and the broader estimate 75%.', [['0.105'], ['25%', '0.25'], ['75%', '0.75']], 'The credibility estimate is a weighted blend of group and prior experience.'],
            ['Mortality studies', 'Explain why mortality data may be smoothed before a model is fitted.', 'Smoothing reduces random fluctuations and gives more consistent estimates while preserving important patterns in the experience.', [['random', 'fluctuation'], ['consistent', 'smooth'], ['preserve', 'patterns', 'experience']], 'Smoothing avoids overreacting to random noise.'],
            ['Aggregate claims', 'Expected count is 100 and expected severity is MWK 50,000. Find expected aggregate claims and state the relationship used.', 'E(S)=E(N)E(X)=100×MWK 50,000=MWK 5,000,000.', [['5,000,000', '5 million'], ['e(n)', 'e(x)', 'frequency', 'severity']], 'The expected aggregate is expected frequency times expected severity under the stated assumptions.'],
            ['Distribution shape', 'Why may a heavy-tailed claim distribution be important to solvency assessment?', 'It allows unusually large claims to occur more often than a light-tailed model suggests, affecting capital and solvency needs.', [['heavy tail', 'unusually large', 'extreme'], ['capital', 'solvency', 'financial risk']], 'Tail behaviour matters when assessing adverse aggregate outcomes.']
        ]
    };
    Object.entries(tfByLevel).forEach(([difficulty, items]) => items.forEach(([topic, question, answer, explanation], index) =>
        questions.push(tf(`asc5-${difficulty[0]}-t${index + 1}`, difficulty, topic, question, answer, explanation))
    ));
    Object.entries(shortByLevel).forEach(([difficulty, items]) => items.forEach(([topic, question, expected, keywordGroups, explanation], index) =>
        questions.push(short(`asc5-${difficulty[0]}-s${index + 1}`, difficulty, topic, question, expected, keywordGroups, explanation))
    ));
    return questions;
})();
