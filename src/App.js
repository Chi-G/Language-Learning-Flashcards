import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './components/home/FlashcardList';
import './App.css';
import axios from 'axios';
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef();

  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: (
        <>
          <form className="header" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" ref={categoryEl}>
                {categories.map(category => (
                  <option value={category.id} key={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="amount">Number of Questions</label>
              <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
            </div>
            <div className="form-group">
              <button className="btn">Generate</button> 
            </div>
          </form>
          <div className="container">
            <FlashcardList flashcards={flashcards} />
          </div>
        </>
      ),
    },
  ];

  let routesElement = useRoutes(routesArray);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api_category.php')
      .then(res => {
        setCategories(res.data.trivia_categories);
      });
  }, []);

  function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get('https://opentdb.com/api.php', {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then(res => {
        setFlashcards(res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map(a => decodeString(a)),
            answer,
          ];
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - .5),
          };
        }));
      });
  }

  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
