import React from "react";
import Logo from "../../assets/Loggo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
// import DarkMode from "../DarkMode";
import { Menu } from "../../utils/Menu";
import { DropdownLink } from "../../utils/DropdownLink";

const Navbar = () => {
  return (
    <div
      className="shadow-md bg-white dark:bg-gray-900 dark:text-white
    duration-200 relative z-40
    "
    >
      {/* upper Navbar */}
      <div className="bg-orange-200 py-2">
        <div
          className="container flex justify-between
        items-center
        "
        >
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10 " />
              Shopsy
            </a>
          </div>
          {/* search bar */}
          <div
            className="flex justify-between
        items-center gap-4 "
          >
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[-200px] sm:w-[-200px] group-hover:w-[300px] bg-white transition-all 
                duration-200 rounded-full border border-gray-300 px-2 py-1 focus:outline-none
                focus:border-1 focus:border-orange-500 
                dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-orange-400
              absolute top-1/2 -translate-y-1/2 right-3
              "
              />
            </div>
          </div>
          {/* order button */}
          <button
            onClick={() => alert("Ordering not avialable yet")}
            className="bg-gradient-to-r from-orange-400 to-orange-300 transition-all duration-200
          text-white py-1 px-4 rounded-full flex items-center gap-3 group
          "
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
          {/* Darkmod Switch */}
          <div>{/* <DarkMode/> */}</div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className=" flex justify-center ">
        <ul className="sm:flex hidden item-center gap-4 ">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link}
              className="inline-block px-4 hover:text-orange-400 duration-200 py-2"
              >{data.name}</a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}

          <li className="group relative">
            <a href="#" className="flex items-center gap-[-2px] py-2">
              Trending Products
              <span>
                <FaCaretDown
                className="transition-all duration-200 group-hover:rotate-180"
                />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md
            bg-white p-2 text-black shadow-md">
              <ul>
                {
                  DropdownLink.map((data)=>(
                    <li key={data.id}>
                      <a href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-orange-200"
                      >{data.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
