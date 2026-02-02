import { useState } from 'react';
import ProposalScreen from './components/ProposalScreen';
import CelebrationScreen from './components/CelebrationScreen';
import './App.css';

function App() {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  return (
    <div className="app">
      {!showCelebration ? (
        <ProposalScreen onYesClick={handleYesClick} />
      ) : (
        <CelebrationScreen />
      )}
    </div>
  );
}

export default App;
