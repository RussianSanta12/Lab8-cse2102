import React from 'react';
import scoreController from '../controllers/scoreController';

function ResultsPage({ onRestart }) {
  const s = scoreController.getScore();

  return (
    <div>
      <h1>Results</h1>
      <p>Score: {s.score} / {s.count}</p>
      <button onClick={() => { scoreController.reset(); if (onRestart) onRestart(); }}>Restart Quiz</button>
    </div>
  );
}

export default ResultsPage;
