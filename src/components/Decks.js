
import React, { useState } from 'react';
import Flashcard from './Flashcard';

const Decks = () => {
    const [decks, setDecks] = useState([{ word: 'Hello', translation: 'Hola' }]);
    const [newWord, setNewWord] = useState("");
    const [newTranslation, setNewTranslation] = useState("");

    const addCard = () => {
        setDecks([...decks, { word: newWord, translation: newTranslation }]);
        setNewWord("");
        setNewTranslation("");
    };

    return (
        <div>
            <h1>Flashcard Decks</h1>
            <input type="text" value={newWord} onChange={(e) => setNewWord(e.target.value)} placeholder="Word" />
            <input type="text" value={newTranslation} onChange={(e) => setNewTranslation(e.target.value)} placeholder="Translation" />
            <button onClick={addCard}>Add Card</button>

            <div className="deck">
                {decks.map((card, index) => (
                    <Flashcard key={index} card={card} />
                ))}
            </div>
        </div>
    );
};

export default Decks;
