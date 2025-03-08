import './App.css'
import Flashcard from './Flashcard'
import { useState } from 'react'

function App() {
  const flashcards = [
    { front: 'What fruit is known for keeping the doctor away?', back: 'Apple' },
    { front: 'Which food is the main ingredient in guacamole?', back: 'Avocado' },
    { front: 'What is the main ingredient in sushi?', back: 'Rice' },
    { front: 'What type of pasta is shaped like a small bowtie?', back: 'Farfalle' },
    { front: 'Which fruit is the primary source of orange juice?', back: 'Orange' },
    { front: 'What nut is commonly used to make almond butter?', back: 'Almond' },
    { front: 'Which food is known as the "king of fruits" in Southeast Asia?', back: 'Durian' },
    { front: 'Which vegetable is used to make guacamole along with avocado?', back: 'Tomato' },
    { front: 'Which fruit has its seeds on the outside?', back: 'Strawberry' },
    { front: 'What is the main ingredient in a traditional Greek salad?', back: 'Cucumber' },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
  };

  return (
    <div className="App">
      <h1>The Ultimate Foodie!</h1>
      <h2>How much of a foodie are you? Test all your knowledge here!</h2>

      <div className="flashcard-container">
        <Flashcard flashcards={flashcards} currentCard={currentCard} />
      </div>
      
      <button onClick={nextCard}>Next Card</button>
    </div>
  );
}

export default App;

