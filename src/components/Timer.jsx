import { useEffect } from "react";
import { useQuestions } from "../Context/questionsContext";
import Progress from "./Progress";

function Timer() {
  const { secondsRemaining, dispatch, pointObject, currentTopic } =
    useQuestions();
  useEffect(
    function () {
      if (secondsRemaining === null) return;
      const id = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);
      if (secondsRemaining === 0) dispatch({ type: "nextQuestion" });

      return () => clearInterval(id);
    },
    [dispatch, secondsRemaining]
  );

  return (
    <div>
      <Progress />
      {secondsRemaining} {pointObject[currentTopic]}
    </div>
  );
}

export default Timer;
