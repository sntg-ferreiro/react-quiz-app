import React, { useRef } from "react";
import { Answer } from "./Answer";

export const Answers = ({
  handleSelectAnswer,
  answers,
  selectedAnswer,
  answerState,
}) => {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers].sort(
          () => Math.random() - 0.5
        );
      }

  return (
    <>
      <ul id="anwsers">
        {shuffledAnswers.current.map((a) => (
          <Answer
            selectedAnswer={selectedAnswer}
            answerState={answerState}
            key={a}
            onSelectAnswer={handleSelectAnswer}
          >
            {a}
          </Answer>
        ))}
      </ul>
    </>
  );
};
