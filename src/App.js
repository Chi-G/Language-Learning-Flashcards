import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated imports
import { AuthProvider } from './auth/AuthContext';
import SignIn from './auth/SignIn';
import Decks from './components/Decks';
import Navbar from './components/Navbar';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>  {/* Replace Switch with Routes */}
                    {/* Use element prop instead of component */}
                    <Route path="/" element={<SignIn />} />  
                    <Route path="/decks" element={<Decks />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
