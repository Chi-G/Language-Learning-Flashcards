import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import FlashcardList from './FlashcardList';

const Home = () => {
  const { currentUser } = useAuth();
  const [flashcards, setFlashcards] = useState([]);

  // Sample flashcards data (replace with your data fetching logic)
  useEffect(() => {
    const sampleFlashcards = [
      {
        id: 1,
        question: "What is the capital of France?",
        answer: "Paris",
        options: ["Paris", "London", "Berlin", "Madrid"]
      },
      {
        id: 2,
        question: "What is 2 + 2?",
        answer: "4",
        options: ["3", "4", "5", "6"]
      },
    ];
    setFlashcards(sampleFlashcards);
  }, []);

  return (
    <div className='text-2xl font-bold pt-14'>
      Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, 
      Welcome to my Language Learning Flashcards.
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default Home;
