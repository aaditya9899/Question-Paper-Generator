const fs = require('fs');

function loadQuestions() {
  const data = JSON.parse(fs.readFileSync('data/questions.json'));
  return data.QuestionPaper.Questions;
}

module.exports = loadQuestions;
