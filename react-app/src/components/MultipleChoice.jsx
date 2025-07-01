import React, { useState } from 'react';

const ValidationIcon = ({ type }) => (
  <span style={{ marginLeft: 8 }}>{type === 'good' ? '✅' : '❌'}</span>
);

const MultipleChoice = ({ questions, correctAnswers }) => {
  const [userInputs, setUserInputs] = useState({});
  const [results, setResults] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (index, value) => {
    setUserInputs((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const checkAnswers = () => {
    const newResults = {};

    const allEmpty = questions.every((_, i) => {
      const answer = userInputs[i]?.trim();
      return !answer;
    });

    if (allEmpty) {
      setError('Enter at least one response.');
      return;
    }

    questions.forEach((_, i) => {
      const userAnswer = userInputs[i]?.trim() ?? '';
      const correct = correctAnswers[i];

      if (userAnswer) {
        const isCorrect = correct.includes(userAnswer);
        newResults[i] = isCorrect;
      }
    });

    setError('');
    setResults(newResults);
  };

  const reset = () => {
    setUserInputs({});
    setResults({});
    setShowAnswers(false);
    setError('');
  };

  const revealAnswers = () => {
    setShowAnswers(true);
  };

  return (
    <div className="multiple-choice">
      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: '1em' }}>
          <label>
            <strong>{q}</strong>
            <br />
            <input
              type="text"
              value={
                showAnswers && userInputs[i]?.trim() ? correctAnswers[i][0] : userInputs[i] || ''
              }
              disabled={showAnswers}
              onChange={(e) => handleChange(i, e.target.value)}
            />
          </label>
          {!showAnswers && userInputs[i]?.trim() && results[i] !== undefined && (
            <ValidationIcon type={results[i] ? 'good' : 'wrong'} />
          )}
        </div>
      ))}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ marginTop: '1em' }}>
        <button onClick={checkAnswers}>Check</button>
        <button onClick={reset} style={{ marginLeft: '1em' }}>
          Reset
        </button>
        <button onClick={revealAnswers} style={{ marginLeft: '1em' }}>
          Show Answers
        </button>
      </div>
    </div>
  );
};

export default MultipleChoice;
