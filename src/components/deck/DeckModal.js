// src/components/deck/DeckModal.js

import React, { useState } from 'react';

export default function DeckModal({ onClose, onSubmit }) {
  const [deckName, setDeckName] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new deck object
    const newDeck = {
      id: Date.now(),
      name: deckName,
      question,
      answer,
    };

    onSubmit(newDeck); // Pass the new deck to parent component
    onClose(); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create a New Flashcard Deck</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="deckName">Deck Name</label>
            <input
              type="text"
              id="deckName"
              value={deckName}
              onChange={(e) => setDeckName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <input
              type="text"
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer</label>
            <input
              type="text"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Create Deck</button>
          </div>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
