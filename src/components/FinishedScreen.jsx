import styles from "./FinishedScreen.module.css";

import { useQuestions } from "../Context/questionsContext";

function FinishedScreen() {
  const { points, maxPossiblePoints, highscoreObject, dispatch, pointObject, getQuestions } = useQuestions();

  function onClick(question) {
    getQuestions(question);
    dispatch({ type: "selectAnotherTopic", payload: question });
  }
  return (
    <div className={styles.finished}>
      <div className={styles.scores}>
        <div className={styles.box}>
          <h3>Scores</h3>
          {Object.entries(pointObject).map(([key, value]) => {
            const eachQuestion = key.split(`-`)[0];
            return <div className={styles.eachScores} key={key}>
              <p><strong>{eachQuestion}:</strong></p>
              {(value === null) ? <button onClick={() => onClick(key)}>{key}</button> : <p> <strong>{value}</strong></p>}
            </div>
          })}
        </div>

        <div className={styles.box}>
          <h3>Highscores</h3>
          {Object.entries(highscoreObject).map(([key, value]) => {
            const eachQuestion = key.split(`-`)[0];

            return <div className={styles.eachScores} key={key}>
              <p><strong>{eachQuestion}</strong></p>
              <p><strong>{value}</strong></p>
            </div>

          })}
        </div>

      </div>

      <button

        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}

export default FinishedScreen;
