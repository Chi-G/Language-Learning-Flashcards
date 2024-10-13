import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, userLoggedIn } = useAuth();

  return (
    <nav className='flex flex-row justify-between w-full z-20 fixed top-0 left-0 h-12 border-b items-center bg-gray-200 px-4'>
      {/* Left Section: Welcome message */}
      <p className="text-sm font-bold">
        Welcome to Chiji's Language Learning Flashcards
      </p>

      {/* Right Section: User info and Logout */}
      {userLoggedIn ? (
        <div className='flex flex-row items-center gap-x-4'>
          <p className="text-sm">
            Hello, {currentUser.displayName || currentUser.email}
          </p>
          <button
            onClick={() => {
              doSignOut().then(() => { navigate('/login'); });
            }}
            className='text-sm text-blue-600 underline'
          >
            Logout
          </button>
        </div>
      ) : (
        <div className='flex flex-row gap-x-4'>
          <Link to="/login" className="text-sm text-blue-600 underline">Login</Link>
          <Link to="/register" className="text-sm text-blue-600 underline">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
