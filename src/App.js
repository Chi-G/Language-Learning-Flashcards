import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth/AuthContext';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Decks from './components/Decks';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/decks" element={<ProtectedRoute component={Decks} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

function ProtectedRoute({ component: Component }) {
    const { currentUser } = useAuth();
    
    return currentUser ? <Component /> : <SignIn />;
}

export default App;
