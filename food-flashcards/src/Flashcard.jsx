import { useState } from 'react';

function Flashcard({ flashcards, currentCard }) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const { front, back } = flashcards[currentCard];

  return (
    <div className="flashcard" onClick={toggleFlip}>
      <div className={`flashcard-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flashcard-side flashcard-front">
          <p>{front}</p>
        </div>
        <div className="flashcard-side flashcard-back">
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;

