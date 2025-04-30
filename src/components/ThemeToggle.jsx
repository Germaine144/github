import React, { useState, useEffect } from "react";
import DarkAndLight from "./DarkAndLight";
import { IoMdSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { BsBuildingsFill } from "react-icons/bs";
import myImage from "../asset/avatar.png";

function ThemeToggle() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") setDarkMode(true);
  }, []);

  useEffect(() => { document.documentElement.classList.toggle("dark", darkMode); localStorage.setItem("darkMode", darkMode); }, [darkMode]);

  const toggleDark = () => setDarkMode((prev) => !prev);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setUserData(null);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError("No Records Found");
    }
  };

  return (
    <div className={`min-h-screen p-4 ${darkMode ? "bg-[#141D2F]" : "bg-white"} flex justify-center`}>
      <div className="w-full max-w-2xl">
       

        <div className="flex justify-between items-center mb-6 text-black dark:text-white text-xl font-bold">
          <p >devfinder</p>
          <DarkAndLight darkMode={darkMode} toggleDark={toggleDark} />
        </div>

        {/* Search Bar */}

        <form onSubmit={handleSearch} className="flex items-center bg-[#1E2A47] rounded-xl p-2 w-full mb-4">
          <IoMdSearch className="text-white text-xl ml-3" />
          <input
            className="bg-transparent flex-grow px-4 text-white placeholder-white focus:outline-none"
            type="text"
            placeholder="Search GitHub username..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
            Search
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-center mb-4 font-semibold">{error}</p>
        )}

        {/* GitHub Card */}
        {userData && (
          <section className="bg-[#1E2A47] text-white rounded-2xl p-6 shadow-md w-full">
            {/* Top section */}

            <div className="flex gap-6">
               <img src={userData.avatar_url || myImage} alt="avatar"className="w-24 h-24 rounded-full" />
              <div>
                <h2 className="text-2xl font-bold">
                  {userData.name || "The Octocat"}
                </h2>
                <a href={userData.html_url} className="text-blue-400 hover:underline"> @{userData.login} </a>
                <p className="text-sm text-gray-400">
                  Joined {new Date(userData.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Bio */}

            <p className="mt-4 text-gray-300">
              {userData.bio || "This profile has no bio."}
            </p>

            {/* Status */}
            <div className="bg-[#141D2F] rounded-xl p-4 flex justify-around mt-6 text-center">
              <div>
                <p className="text-sm text-gray-400">Repos</p>
                <p className="text-lg font-bold">{userData.public_repos}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Followers</p>
                <p className="text-lg font-bold">{userData.followers}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Following</p>
                <p className="text-lg font-bold">{userData.following}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-white">
              <div className="flex items-center">
                <IoLocationOutline className="mr-2" />
                <span>{userData.location || "Not Available"}</span>
              </div>
              <div className="flex items-center">
                <IoIosLink className="mr-2" />
                <a
                  href={userData.blog}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userData.blog || "Not Available"}
                </a>
              </div>
              <div className="flex items-center">
                <FiTwitter className="mr-2" />
                <span>
                  {userData.twitter_username
                    ? `@${userData.twitter_username}`
                    : "Not Available"}
                </span>
              </div>
              <div className="flex items-center">
                <BsBuildingsFill className="mr-2" />
                <span>{userData.company || "Not Available"}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ThemeToggle;
