import './App.css';
import MultipleChoice from './components/MultipleChoice';


function App() {
  const questions = [
  "What is the capital of France?",
  "2 + 2 = ?",
];

const correctAnswers = [
  ["Paris"],
  ["4"],
];
  return (
    <div className="App">
      <MultipleChoice
        questions={questions}
        correctAnswers={correctAnswers}
      />
    </div>
  );
}

export default App;
