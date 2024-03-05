import React from "react";
import IMG from "../assets/quiz-complete.png";
import QUESTIONS from "../assets/questions";

export const Summary = ({ userAnswers }) => {
  const format = (number) => Math.round((number / userAnswers.length) * 100);

  const skippedAnswers = userAnswers.filter((a) => a === null).length;
  const correctAnswers = userAnswers.filter(
    (a, index) => a === QUESTIONS[index].answers[0]
  ).length;
  const wrongAnswers = userAnswers.filter(
    (a, index) => a !== null && a !== QUESTIONS[index].answers[0]
  ).length;

  console.log(
    "skippedAnswers " +
      skippedAnswers +
      " correctAnswers " +
      correctAnswers +
      " wrongAnswers " +
      wrongAnswers
  );

  const skipped = format(skippedAnswers);
  const correctly = format(correctAnswers);
  const wrongly = format(wrongAnswers);

  console.log(
    "skipped " + skipped + " correctly " + correctly + " wrongly " + wrongly
  );

  return (
    <div id="summary">
      <img src={IMG} alt="A logo of the completed quiz" />
      <h2>Congratulations on completing this quiz!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctly}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongly}%</span>
          <span className="text">Answered Wrongly</span>
        </p>
      </div>
      <ol>
        {QUESTIONS.map((q, index) => {
          let ua = userAnswers[index];
          let cssClass = "user-answer";
          if (ua) {
            cssClass += ua === q.answers[0] ? " correct" : " wrong";
          } else {
            cssClass += " skipped";
          }
          return (
            <li key={q.id}>
              <h3>{q.id}</h3>
              <p className="question">{q.text}</p>
              <p className={cssClass}>{ua || "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
