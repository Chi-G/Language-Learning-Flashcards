import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './components/home/FlashcardList';
import './App.css';
import axios from 'axios';
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from './components/header'; // Import Header
import Home from "./components/home";
import { AuthProvider } from "./contexts/authContext";
import { useAuth } from './contexts/authContext';
import { useRoutes } from "react-router-dom";

function App() {
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
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);

  const { userLoggedIn } = useAuth(); // Get user login state
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);
  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios
      .get('https://opentdb.com/api_category.php')
      .then(res => {
        setCategories(res.data.trivia_categories);
      });
  }, []);

  const decodeString = (str) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get('https://opentdb.com/api.php', {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then(res => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map(a => decodeString(a)),
              answer,
            ];
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  };

  return (
    <>
        <AuthProvider>
        <Header />
        <div className="w-full flex flex-col items-center">{routesElement}</div>
        {/* Render form only if user is logged in */}
        {userLoggedIn && (
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
        )}

        <div className="container">
          <FlashcardList flashcards={flashcards} />
        </div>
      </AuthProvider>
        
        
      </>
  );
}

export default App;
