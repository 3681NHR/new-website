'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const AppearanceToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(
        window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <li className="mt-2 md:mt-0 text-center">
      <button className="" onClick={() => setDarkMode(!darkMode)}>
        {!darkMode ? (
          // Sun Icon
          <Sun size={32} color="currentColor" />
        ) : (
          // Moon Icon
          <Moon size={32} color="currentColor" />
        )}
      </button>
    </li>
  );
};

export default AppearanceToggle;
