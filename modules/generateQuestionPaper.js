function generateQuestionPaper(questions, totalMarks, difficultyDistribution) {
  // handle when question store is empty
  if (questions.length === 0) {
    throw new Error('Question store is empty.');
  }

  const questionsByDifficulty = {
    'Easy': [],
    'Medium': [],
    'Hard': []
  };

  questions.forEach(question => {
    questionsByDifficulty[question.difficulty].push(question);
  });

  const questionPaper = [];

  for (const difficulty in difficultyDistribution) {
    const marksForDifficulty = totalMarks * difficultyDistribution[difficulty] / 100;
    let currentMarks = 0;

    while (currentMarks < marksForDifficulty) {
      const question = questionsByDifficulty[difficulty].shift();

      // handle when there are not enough questions of a specific difficulty
      if (!question) {
        throw new Error(`Not enough ${difficulty} questions in the store to fulfill the required percentage of marks.`);
      }

      if (question.marks + currentMarks > marksForDifficulty) {
        break;
      }

      questionPaper.push(question);
      currentMarks += question.marks;
    }
  }

  // handle when the marks of the questions don't add up exactly to the total marks
  if (questionPaper.reduce((total, question) => total + question.marks, 0) < totalMarks) {
    console.warn('The total marks of the generated question paper might be less than the required total marks.');
  }

  return questionPaper;
}

module.exports = generateQuestionPaper;
