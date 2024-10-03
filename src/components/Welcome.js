import React from 'react';

const Welcome = () => {
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <h1 className="display-4">Welcome to Language Flashcards</h1>
                <p className="lead">
                    This is a simple app to help you learn languages with flashcards. Register or login to access your decks.
                </p>
                <hr className="my-4" />
                <a className="btn btn-primary btn-lg" href="/signup" role="button">Sign Up</a>
                <a className="btn btn-secondary btn-lg ml-3" href="/" role="button">Login</a>
            </div>
        </div>
    );
};

export default Welcome;
