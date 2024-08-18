import styles from "./Progress.module.css";

import { useQuestions } from '../Context/questionsContext';

function Progress() {
    const { index, numQuestions, points, answer } = useQuestions();

    return (
        <header className={styles.progress}>
            <progress max={numQuestions} value={index + Number(answer !== null)} />

            <p>
                Question <strong>{index + 1}</strong> / {numQuestions}
            </p>

        </header>
    );
}

export default Progress