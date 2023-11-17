const loadQuestions = require('./modules/loadQuestions');
const generateQuestionPaper = require('./modules/generateQuestionPaper');

const questions = loadQuestions();
const questionPaper = generateQuestionPaper(questions, 100, { 'Easy': 20, 'Medium': 50, 'Hard': 30 });

console.log(questionPaper);
