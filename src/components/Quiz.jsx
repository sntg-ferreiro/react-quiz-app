import React, { useCallback, useState } from "react";
import QUESTIONS from "../assets/questions";
import { Summary } from "./Summary";
import { Question } from "./Question";

export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const completed = QUESTIONS.length === activeQuestionIndex;

  const handleSelectAnswer = useCallback((answer) => {
    setUserAnswers((prev) => [...prev, answer]);
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [
    handleSelectAnswer,
  ]);

  if (completed) {
    return <Summary userAnswers={userAnswers}/>;
  }


  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
};
