import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz.js';
import ResultsPage from './components/ResultsPage';
import scoreController from './controllers/scoreController';

function App() {
  const [view, setView] = useState('quiz');

  const onFinish = () => setView('results');
  const onRestart = () => {
    scoreController.reset();
    setView('quiz');
  }

  return (
    <div className="App">
      <header className="App-header">
        {view === 'quiz' && <Quiz onFinish={onFinish} />}
        {view === 'results' && <ResultsPage onRestart={onRestart} />}
      </header>
    </div>
  );
}

export default App;
