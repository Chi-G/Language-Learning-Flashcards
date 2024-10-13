import React, { useState } from 'react';

export default function Home() {
  const [decks, setDecks] = useState([]);

  return (
    <div>
      <h1>Your Flashcard Decks</h1>
      {decks.map(deck => (
        <div key={deck.id}>
          <h3>{deck.name}</h3>
          {/* You can add more deck details here */}
        </div>
      ))}
    </div>
  );
}

