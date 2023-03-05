import { questions } from "./questions.js";
import { Quiz } from "./class/Quiz.js";
import { UI } from "./class/UI.js";

/**
 *
 * @param {Quiz} quiz
 * @param {UI} ui
 */

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    console.log(quiz.score)
    ui.showScores(quiz.score)
  } else {
    ui.showQuestion(quiz.getQuestionIndex().question);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
  }
};

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(quiz, ui);
}

main();
