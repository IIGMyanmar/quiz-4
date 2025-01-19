import { Global } from "./services/globals.js"; 
import { Quiz } from "https://MgHt00.github.io/library/iig/interactive-quiz/components/quiz.js";

const globalInstance = new Global();
const quizInstance = new Quiz(globalInstance);
quizInstance.initialize();