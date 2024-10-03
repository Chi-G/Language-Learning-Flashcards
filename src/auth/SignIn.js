import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async () => {
        try {
            // Use Firebase v9's signInWithEmailAndPassword method
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
            />
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignIn;
