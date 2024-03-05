import React, { useState } from "react";
import { Answers } from "./Answers";
import { QuestionTimer } from "./QuestionTimer";
import QUESTIONS from "../assets/questions";

export const Question = ({
  activeQuestionIndex,
  onSelectAnswer,
  onSkipAnswer,
}) => {
  const selectedQuestion = QUESTIONS[activeQuestionIndex];

  const {id, text, answers } = selectedQuestion;

  const [answer, setAnswer] = useState({
    selected: "",
    isCorrect: null,
  });

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selected: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selected: answer,
        isCorrect: answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";
  if (answer.selected && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selected) {
    answerState = "answered";
  }

  let timer = 10 * 1000;

  if (answer.selected) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2 * 1000;
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selected === "" ? onSkipAnswer : null}
        interval={50}
        mode={answerState}
      />
      <h2>{id.toUpperCase()}: {text}</h2>
      <Answers
        selectedAnswer={answer.selected}
        answers={answers}
        handleSelectAnswer={handleSelectAnswer}
        answerState={answerState}
      />
    </div>
  );
};
