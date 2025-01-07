import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-primary text-white py-4 px-6 shadow-md">
      <nav className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Currency Converter</h1>

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={toggleMenu}
          className="block sm:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-9 text-lg font-sans">
          <li>
            <Link to="/" className="hover:underline font-serif">
              Home
            </Link>
          </li>
          <li>
            <Link to="/multi-converter" className="hover:underline font-serif">
              Multi Converter
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="hover:underline font-serif">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-transparent text-white mt-2 rounded shadow-lg p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/"
                className="block hover:underline font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/multi-converter"
                className="block hover:underline font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                Multi Converter
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="block hover:underline font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
