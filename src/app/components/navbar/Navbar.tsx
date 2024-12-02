'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const [toggled, setToggled] = useState(false);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (
        !(
          nav.current &&
          e.target instanceof Node &&
          nav.current.contains(e.target)
        )
      )
        setToggled(false);
    };
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  useEffect(() => {
    const closeDropdown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setToggled(false);
    };
    window.addEventListener('keydown', closeDropdown);
    return () => window.removeEventListener('keydown', closeDropdown);
  }, []);

  useEffect(() => {
    setToggled(false);
  }, [pathname]);

  return (
    <nav
      ref={nav}
      className="sticky top-0 left-0 right-0 z-[9999] bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
    >
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src="/logo.svg" className="h-12 mr-3" alt="RoboRaiders Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            RoboRaiders
          </span>
        </a>
        <button
          onClick={() => {
            setToggled(!toggled);
          }}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`md:static ${toggled ? 'max-h-screen' : 'max-h-0'} w-full h-full md:max-h-screen md:w-auto transition-all duration-200 ease-in overflow-x-hidden`}
        >
          <ul className="flex flex-col md:items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
