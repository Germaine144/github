// DarkAndLight.jsx
import React from 'react';
import { LuSunMedium } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";

function DarkAndLight({ darkMode, toggleDark }) {
  return (
    <button onClick={toggleDark} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md">
      <div className="flex items-center gap-2">
        <p>{darkMode ? 'Dark' : 'Light'}</p>
        {darkMode ? (
          <MdDarkMode className="text-3xl text-yellow-300" /> ) : ( <LuSunMedium className="text-3xl" /> )}
      </div>
    </button>
  );
}

export default DarkAndLight;
