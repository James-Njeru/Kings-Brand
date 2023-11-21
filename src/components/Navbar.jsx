import React from "react";
import logo from "../assets/logo.svg";
import { IoCartOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar() {
  return (
    <div className="flex justify-between p-8 items-center">
      <img src={logo} className="h-16 w-16" />

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="outline outline-bgcolor rounded-sm h-[37px] px-2"
        />
        <select className="h-10 bg-bgcolor outline-none px-2">
          <option value="all">All category</option>
          <option value="hoodies">Hoodies</option>
          <option value="tshirts">Tshirts</option>
          <option value="trashbags">Trashbags</option>
        </select>
        <button className="bg-magenta h-10 w-20 rounded-r-md text-white">
          Search
        </button>
      </div>

      <div className="flex">
        <IoCartOutline className="h-8 w-8" />
        <IoMdNotificationsOutline className="h-8 w-8" />
        <div className="bg-bgcolor h-8 w-8 rounded-full"></div>
      </div>
    </div>
  );
}

export default Navbar;
