import React, { useState} from "react";
import DarkAndLight from "./DarkAndLight";
import { IoMdSearch } from "react-icons/io";
import myImage from "../asset/avatar.png";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { BsBuildingsFill } from "react-icons/bs";
function ThemeToggle() {
  const [userName, SetUserName] =useState(""); 
  const [userData,SetUserData] = useState(null); 
  const [error, setError] = useState ("");

const handleSearch = async (e) =>{
  
e.preventDefault();
setError(""); 
SetUserData(null); 
try {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  
  if (!response.ok) {
    throw new Error("User not found");
  }

  const data = await response.json();
  SetUserData(data);
} 
catch (err) {
  setError("No Records Found");
}}

  return (
    <div className=" p-1.5 pt-10 rounded-xl w-full">
      <div className=" bg-slate-950 text-white  border mx-auto flex w-full max-w-[700px] flex-col gap-8 rounded-2xl p-2">
        <section className="flex justify-between gap-4">
          <p className="text-xl font-semibold">GitHub</p>
          <DarkAndLight />
        </section>

        {/* Search Form */}
<form className="flex items-center gap-3 w-full max-w-[700px] p-4" onSubmit={handleSearch}>
  <section className="flex items-center w-full border border-gray-300 rounded-xl py-4">
    <IoMdSearch className="text-xl ml-3" />
    <input
      className="border-none w-full py-2 pl-4 pr-10 text-gray-700 focus:outline-none"
      type="text"
      placeholder="Search GitHub username"
      value={userName}
      onChange={(e) => SetUserName(e.target.value)}
    />
  </section>
  <button className="bg-blue-700 text-white py-2 px-7 rounded-xl hover:bg-blue-800 focus:outline-none">
    Search
  </button>
</form>

{error && (
  <p className="text-red-600 text-center mb-4 font-bold">{error}</p>
)}

        {/* Image section */}
{userData && (
  <section className="flex items-center mt-6 gap-x-6">
    <div>
    <img
  src={userData.avatar_url || myImage}
  alt="User profile picture"
  className="w-24 h-24 rounded-full"
/>


    </div>
    <div>
    <p>{userData?.bio || "No bio found"}</p>

      {/* Providing a valid URL for the href */}
      <a href={userData?.html_url || "#"} className="text-blue-600 hover:underline">
                @{userData?.login}
              </a>

       <p className="text-gray-600">
        Joined Date: {new Date(userData.created_at).toLocaleDateString()}
              </p>
    </div>
  </section>
)}
      <p> {userData ? userData.bio : 
          "No Boi Found"
      }</p>
        {userData && ( <div className="bg-slate-600 rounded-lg flex justify-between px-6 py-4">
          <div>
            <p>Repos</p>
            <p className="font-bold">{userData.public_repos}</p>
          </div>
          <div>
            <p>Folowers</p>
            <p className="font-bold">{userData.followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p className="font-bold">{userData.following}</p>
          </div>
        </div>
      )}
       {userData && (
        <div className="grid grid-cols-2 gap-4 py-3 px-4">
          {userData.location && (
             <div className="flex items-center">
             <IoLocationOutline />
             <p className="ml-2">{userData.location}</p>

             </div>
          )}
          {userData.blog &&(
            <div className="flex items-center">
            <IoIosLink />
            <a href={userData.blog} className="ml-2 text-blue-600 hover:underline">
                  </a>
            </div>
          )}
          {userData.twitter_username && (
            <div className="flex items-center">
            <FiTwitter />
            <a href={`https://twitter.com/${userData.twitter_username}`} className="ml-2 text-blue-600 hover:underline">
                  @{userData.twitter_username}
                </a>
            </div>
          )}
          {userData.company && (
            <div className="flex items-center">
            <BsBuildingsFill />
            <p className="ml-2">{userData.company}</p>
            </div>
          )}
          </div>
       )}  
      </div>
    </div>
  );
}
export default ThemeToggle;
