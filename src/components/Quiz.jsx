import React, { useCallback, useState } from "react";
import QUESTIONS from "../assets/questions";
import { Answer } from "./Answer";
import { Summary } from "./Summary";
import { QuestionTimer } from "./QuestionTimer";

export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const selectedQuestion = QUESTIONS[activeQuestionIndex];
  const completed = QUESTIONS.length === activeQuestionIndex;



  

  const handleSelectAnswer = useCallback((answer) => {
    setUserAnswers((prev) => [...prev, answer]);
  }, [])

  const handleSkipAnswer =   useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  ) 

  if (completed) {
    return <Summary />;
  }

  const shuffledAnswers = [...selectedQuestion.answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={10*1000} onTimeout={handleSkipAnswer}/>
        <h2>{selectedQuestion.text}</h2>
        <ul id="anwsers">
          {shuffledAnswers.map((a) => (
            <Answer key={a} onSelectAnswer={handleSelectAnswer}>
              {a}
            </Answer>
          ))}
        </ul>
      </div>
    </div>
  );
};
