import "./App.css";
import FinishedScreen from "./components/FinishedScreen";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";
import QuestionBox from "./components/QuestionBox";
import Questions from "./components/Questions";
import { useQuestions } from "./Context/questionsContext";

function App() {
  const { status } = useQuestions();

  return (
    <Main>
      {status === "loading" && <LandingPage />}
      {status === "ready" && (
        <QuestionBox>
          <Header />
          <Questions />
        </QuestionBox>
      )}
      {status === 'finished' && <FinishedScreen/>}
    </Main>
  );
}

export default App;
