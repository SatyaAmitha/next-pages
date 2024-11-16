// components/ThemeSwitch.js

import { useState, useEffect } from 'react';
import DarkTheme from './DarkTheme';

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('darkMode');
    if (value !== null) {
      setDarkMode(JSON.parse(value));
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  const text = darkMode ? 'Light Mode' : 'Dark Mode';

  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;