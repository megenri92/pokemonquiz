// array of questions and answers
var questions = [
	{
		question: "What was Ash Ketchum's first Pokemon?",
		answer: "pikachu"
	},
	{
		question: "Ash got attacked by a flock of Spearows during a rain storm, what legendary Pokemon did he see after the storm subsided?",
		answer: "ho-oh"
	},
	{
		question: "What was the name of the evil team who keeps on trying to steal Ash's Pokemon in every episode?",
		answer: "team rocket"
	},
	{
		question: "Misty carried an egg with her throughout the series. When the egg hatched, what was the name of the Pokemon?",
		answer: "togepi"
	},
	{
		question: "How many gym battles did Ash have to defeat in order to get into the Pokemon League?",
		answer: 8
	},
	{
		question: "What was the name of the town where Ash was from?",
		answer: "pallet town"
	},
	{
		question: "How many Pokemon were created in the Indigo League series?",
		answer: 151
	},
	{
		question: "What was the name of the Professor who gave Ash his first Pokemon?",
		answer: "oak"
	},
	{
		question: "The Professor had a grandson, what was his name?",
		answer: "gary"
	},
	{
		question: "In the Pokemon League, what was the name of the Pokemon Ash went up against in his last battle?",
		answer: "dragonite"
	}
];

// loop through each questions
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question too
	var el = document.getElementById('question' + [i]);

	// check what question and element is being selected
	console.log(question, el);

	// update text content of each element
	el.textContent = question;
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;

}