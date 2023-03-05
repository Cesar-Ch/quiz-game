export class UI {
  constructor() {}

  /**
   *
   * @param {string} question
   */

  showQuestion(question) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = question;
  }

  /**
   *
   * @param {string[]} choices
   */

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");

    choicesContainer.innerHTML = "";

    choices.map((e) => {
      const button = document.createElement("button");
      button.innerHTML = e;
      button.addEventListener("click", () => callback(e));
      choicesContainer.append(button);
    });
  }

  /**
   *
   * @param {number} score
   */

  showScores(score) {
    const quizEnd = `
    <h1>Result</h1>
    <h2>Your Score: ${score}/10</h2>
    `;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEnd;
  }

  /**
   *
   * @param {number} currentIndex
   * @param {number} total
   */

  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of 10`;
  }
}
