export class Question {
  /**
   *
   * @param {string} question this is the text of question
   * @param {string[]} choices this are the choices of the question
   * @param {string} answer this is the answer of the question
   */

  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   * 
   * @param {string} choice some text to guess
   * @returns {boolean} return true if the answer is correct
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}
