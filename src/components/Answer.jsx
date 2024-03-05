import React from "react";

export const Answer = ({
  selectedAnswer,
  answerState,
  children,
  onSelectAnswer,
  ...props
}) => {
  let isSelected = selectedAnswer === children;
  let clazz = "";

  if (answerState === "answered" && isSelected) {
    clazz = "selected";
  }

  if ((answerState === "correct" || answerState === "wrong") && isSelected) {
    clazz = answerState;
  }
  return (
    <li className="answer">
      <button
        disabled={answerState !== ""}
        className={clazz}
        onClick={() => onSelectAnswer(children)}
      >
        {children}
      </button>
    </li>
  );
};
