import React, { useEffect, useState } from "react";

export const QuestionTimer = ({ timeout, onTimeout, interval }) => {
    const intervalInternal = (interval || 100)
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('Setting timeout')
    setTimeout(onTimeout, timeout || 1500)}, [onTimeout, timeout]);
  useEffect(() => {
    console.log('Setting interval')
    let timer = setInterval(() => {
      setRemainingTime((prev) => prev - intervalInternal);
    }, intervalInternal);
  }, [interval]);

  return <progress id="question-time" max={timeout} value={remainingTime}/>;
};
