import { Question } from "./class/Question.js";
import { data } from "./data/data.js";

export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);
