# Question Paper Generator

This project is a question paper generator for a mock examination. It generates a question paper with a specified total marks and a distribution of marks for different difficulties.

## Features

- Generates a question paper based on a given total marks and difficulty distribution.
- Handles edge cases, such as not enough questions in the question store, not enough questions of a specific difficulty, marks of the questions don't add up exactly to the total marks, and the question store is empty.
- Uses the `nodemon` package for live reloading of the server during development.
- Used the `mockaroo` site for generating dummy JSON data. https://www.mockaroo.com/

## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installing

1. Clone the repository to your local machine. `git clone https://github.com/aaditya9899/reelo.git`
2. Navigate to the project directory in your terminal. `cd reelo`
3. Install the dependencies with `npm install`.
4. Start the server with `npm start` or `nodemon index` for live reload.

## Handling Edge Cases

The implementation of the question paper generator may not always generate a question paper with the exact total marks. This could happen if there are not enough questions in the question store or if the marks of the questions don't add up exactly to the total marks. Here's how the application handles these edge cases:

1. **Not enough questions in the question store:** If there are not enough questions in the question store to fulfill the total marks, the application throws an error with the message 'Not enough questions in the store to generate a question paper with the required total marks.'
`if (questionPaper.reduce((total, question) => total + question.marks, 0) < totalMarks) {
  throw new Error('Not enough questions in the store to generate a question paper with the required total marks.');
}
`
2. **Not enough questions in the question store:** If there are not enough questions of a specific difficulty to fulfill the percentage of marks for that difficulty,we could throw an error or return a message indicating this.
`if (currentMarks < marksForDifficulty) {
  throw new Error`(`Not enough ${difficulty} questions in the store to fulfill the required percentage of marks.``);`
}`

3. **Marks of the questions don't add up exactly to the total marks**If the marks of the questions don't add up exactly to the total marks, we could fill up the remaining marks with questions of any difficulty until the total marks are reached. 
`if (questionPaper.reduce((total, question) => total + question.marks, 0) < totalMarks) {
  console.warn('The total marks of the generated question paper might be less than the required total marks.');
}
`
4. **Question store is empty**If the question store is empty, we would not be able to generate any question paper. In this case, we could throw an error or return a message indicating this.
`if (questions.length === 0) {
  throw new Error('Question store is empty.');
}
`

## Contact
Name - Aaditya 
Email - aadityaprasad9899@gmail.com
LinkedIn Profile - https://www.linkedin.com/in/aadityaprasad/
