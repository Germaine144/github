import React from "react";
import DarkAndLight from "./DarkAndLight";
import { IoMdSearch } from "react-icons/io";
import myImage from "../asset/avatar.png";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { BsBuildingsFill } from "react-icons/bs";
function ThemeToggle() {
  return (
    <div className="bg-slate-400 p-1.5 pt-10 rounded-xl w-full">
      <div className="border mx-auto flex w-full max-w-[700px] flex-col gap-8 rounded p-2">
        <section className="flex justify-between gap-4">
          <p className="text-xl font-semibold">GitHub</p>
          <DarkAndLight />
        </section>

        {/* Search Form */}
        <form className="flex items-center gap-3 w-full max-w-[700px] p-4">
          <section className="flex items-center w-full border border-gray-300 rounded-xl py-4">
            {/* Search Icon with spacing */}
            <IoMdSearch className="text-xl ml-3" />

            {/* Input with more left padding */}
            <input
              className="border-none w-full py-2 pl-4 pr-10 text-gray-700 focus:outline-none"
              type="text"
              placeholder="Search GitHub username"
            />
          </section>

          {/* Search Button */}
          <button className="bg-blue-700 text-white py-2 px-7 rounded-xl hover:bg-blue-800 focus:outline-none">
            Search
          </button>
        </form>

        {/* Image section */}
        <section className="flex items-center mt-6 gap-x-6">
          <div>
            <img
              src={myImage}
              alt="Description of the image"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">The Octactal</h1>

            <a href="#" className="text-blue-600 hover:underline">
              @Octactal
            </a>
            <p className="text-gray-600">Joined Date: 25 Jan 2025</p>
          </div>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores
          maxime itaque vitae, magnam temporibus veniam, repellendus, porro
          nobis nostrum accusantium nesciunt quos facilis quod officiis iusto ex
          sapiente aut?
        </p>
        <div className="bg-slate-600 rounded-lg flex justify-between px-6 py-4">
          <div>
            <p>Repo</p>
            <p className="font-bold">9</p>
          </div>
          <div>
            <p>Folowers</p>
            <p className="font-bold">3099</p>
          </div>
          <div>
            <p>Following</p>
            <p className="font-bold">8</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 py-3 px-4">
          <div className="flex items-center">
          <IoLocationOutline />
            <p className="ml-2">San francisco</p>
          </div>
          <div className="flex items-center">
          <IoIosLink />
            <p className="ml-2">San francisco</p>
          </div>
          <div className="flex items-center">
          <FiTwitter />
            <p className="ml-2">San francisco</p>
          </div>
          <div className="flex items-center">
          <BsBuildingsFill />
            <p className="ml-2">San francisco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeToggle;
