import React, { useEffect, useState } from "react";

export const QuestionTimer = ({ timeout, onTimeout, interval, mode }) => {
  const intervalInternal = interval || 100;
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting timeout");
    const timer = setTimeout(onTimeout, timeout || 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);
  useEffect(() => {
    console.log("Setting interval");
    const timer = setInterval(() => {
      setRemainingTime((prev) => prev - intervalInternal);
    }, intervalInternal);

    return () => {
      clearInterval(timer);
    };
  }, [interval]);

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />;
};
