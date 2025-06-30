document.addEventListener('DOMContentLoaded', () => {
    const topTexts = [
        "Well, look who's 37 and still trying to figure out TikTok.",
        "37: The age where your back goes out more than you do.",
        "Happy 37th! You're officially vintage, not old.",
        "Another year, another wrinkle. Happy 37!",
        "Congratulations on reaching 37, the prime age for naps.",
        "At 37, you've mastered the art of adulting... mostly.",
        "Still figuring things out at 37. It's called 'evolving'.",
        "Happy 37th! May your coffee be strong and your patience stronger.",
        "37: Old enough to know better, young enough to still do it.",
        "You're 37! Time to embrace your inner eccentric cat owner.",
        "You're not 37, you're 25 with 12 years of experience.",
        "Happy 37th! The only thing getting older is your 'to-do' list.",
        "Remember when 37 seemed ancient? Now it's just Tuesday.",
        "Welcome to 37, where 'Netflix and chill' officially means just Netflix.",
        "At 37, your body starts sending 'read receipts' on every ache.",
        "Still rocking it at 37, or at least, trying not to creak too loudly.",
        "They say age is just a number. In your case, it's 37. A rather specific number.",
        "Another year closer to complaining about kids these days. Happy 37!",
        "37 and fabulous! (Results may vary depending on caffeine intake).",
        "It took 37 years to look this good. Worth it?",
        "Happy 37th! May your phone battery last longer than your energy.",
        "Cheers to 37 years of questionable life choices and amazing memories.",
        "Just a casual reminder that you're 37. No big deal. Just... 37.",
        "Happy 37th! Don't worry, 40 is the new 30, so you're basically 27.",
        "You've officially reached the 'adulting is hard' phase. Happy 37!",
        "37: Where your dreams are big, and your bedtime is early.",
        "Another year, another level unlocked. Welcome to level 37!",
        "Congratulations on 37 years of being awesome (and slightly bewildered).",
        "Happy 37th! You've earned that extra slice of cake.",
        "Still got it at 37! (Whatever 'it' is...)",
        "37: When 'youthful glow' turns into 'caffeinated sheen'.",
        "Embrace the wisdom that comes with 37. And the occasional back pain.",
        "May your 37th year be filled with less stress and more snacks.",
        "Happy 37th! You're not getting older, you're becoming a classic.",
        "Here's to 37 years of unique experiences and questionable life lessons."
    ];

    const bottomTexts = [
        "Your essay on 'The Procrastination of Youth' is due.",
        "Remarkable use of the Oxford comma in your life choices.",
        "Please provide textual evidence for your 'still young' claim.",
        "Your narrative arc at 37 is... *interesting*.",
        "Identify the protagonist's internal conflict at this age.",
        "Consider the global implications of turning 37.",
        "From a critical perspective, 37 is a significant turning point.",
        "Analyze the metaphorical journey of aging to 37.",
        "Your life's bibliography at 37 is impressively diverse.",
        "Discuss the theme of 'maturity' as observed at 37.",
        "Critique the author's (your) use of foreshadowing regarding this age.",
        "Please define 'youthful exuberance' in the context of turning 37.",
        "Note the recurring motif of 'aches and pains' in your personal journey.",
        "Identify the main theme of your 37th year. Is it 'wisdom' or 'where are my keys'?",
        "Avoid run-on sentences in your celebrations. Pace yourself at 37.",
        "The symbolism of reaching 37 is open to multiple interpretations.",
        "On the rubric of life, 37 scores high on 'existential pondering'.",
        "Remember to cite your sources when claiming to be 'just hitting your stride'.",
        "Assess the rhetorical devices employed in your current life stage.",
        "Is your 37th year an example of realism or magical realism?",
        "Provide a character analysis of your past 36 years leading to this point.",
        "Evaluate the tone and mood of turning 37. Is it irony or acceptance?",
        "Discuss the allegorical significance of acquiring more wisdom teeth at 37.",
        "From a global perspective, 37 is but a fleeting moment in the grand tapestry of human existence.",
        "Consider the interconnectedness of your 37th birthday with global trends.",
        "At 37, you contribute to the diverse demographic landscape of the world.",
        "Your journey to 37 reflects a microcosm of broader societal shifts.",
        "Analyze the impact of turning 37 on your personal global footprint.",
        "How does the concept of 'age' vary across different global cultures at 37?",
        "Engage in a critical analysis of your consumption habits at 37, globally speaking.",
        "Explore the ethical dilemmas of celebrating 37 when global challenges persist.",
        "Your 37th year: A case study in personal growth within a globalized world.",
        "What are the sustainable implications of another year of your existence at 37?",
        "From a global viewpoint, your 37th birthday signifies a statistical blip.",
        "Consider the geopolitical ramifications of your increased age.",
        "The anthropological significance of a 37-year-old in modern society is profound.",
        "Examine the socio-economic impact of your continued existence at 37.",
        "Your 37 years represent a small, yet significant, data point in human history.",
        "How does your 37th birthday contribute to the global narrative of aging?",
        "Discuss the cultural relativity of celebrating turning 37.",
        "From a philosophical standpoint, what does 37 truly represent?",
        "Your 37 years on Earth have certainly been... a journey.",
        "Analyze the causal relationship between turning 37 and your desire for early bedtimes."
    ];

    function getRandomText(textArray) {
        const randomIndex = Math.floor(Math.random() * textArray.length);
        return textArray[randomIndex];
    }

    const topTextElement = document.getElementById('topText');
    const bottomTextElement = document.getElementById('bottomText');

    topTextElement.textContent = getRandomText(topTexts);
    bottomTextElement.textContent = getRandomText(bottomTexts);
});