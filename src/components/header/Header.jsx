import React, { useState } from "react";
import logo from "../../assets/images/cc-logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { LiaSunSolid } from "react-icons/lia";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import "./header.css";
function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menu, setMenu] = useState(false);

  //   toggleDarkMode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  //   toggleMenu function
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className=" px-4 md:px-20 py-1 sticky top-0 bg-white dark:bg-gray-900 z-50 border-b dark:border-gray-700">
      <div className="flex justify-between relative">
        <Link to={"/"} className="logo">
          <img src={logo} alt="" className="w-14 md:w-20  " />
        </Link>
        <ul className="hidden md:flex items-center gap-4 md:gap-6 text-base font-semibold font-inter">
          <li className=" text-gray-600 hover:text-black  dark:text-gray-300 dark:hover:text-white transition-all duration-200 cursor-pointer">
            {darkMode ? (
              <LiaSunSolid size={26} onClick={toggleDarkMode} />
            ) : (
              <FaMoon size={22} onClick={toggleDarkMode} />
            )}
          </li>
          <li className=" text-gray-600 hover:text-black  dark:text-gray-300 dark:hover:text-white transition-all duration-200">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className=" text-gray-600 hover:text-black  dark:text-gray-300 dark:hover:text-white transition-all duration-200">
            <NavLink to={"compare"}>Compare</NavLink>
          </li>
          <li className=" text-gray-600 hover:text-black  dark:text-gray-300 dark:hover:text-white transition-all duration-200">
            <NavLink to={"news"}>News</NavLink>
          </li>

          <Link
            to={"dashboard"}
            className=" transition-all duration-200 bg-[#3A80E9] py-2 px-5 rounded-3xl hover:shadow-lg hover:bg-[#3a6fe9] text-white border-none outline-none"
          >
            Dashboard
          </Link>
        </ul>
        {/* Mobile Menu Icon */}
        <div className="block md:hidden">
          {menu ? (
            <IoClose
              size={35}
              className=" cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <HiOutlineBars3BottomLeft
              size={35}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
        {menu && (
          <div className="border-l dark:border-l dark:border-gray-600 bg-white dark:bg-gray-900 pt-10 block md:hidden absolute -right-4 top-11 z-10 w-[200px] h-screen">
            <ul className="  flex flex-col items-center gap-5 text-base font-semibold font-inter">
              <li className=" text-gray-600 hover:text-black  dark:text-gray-300 dark:hover:text-white transition-all duration-200">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className=" text-gray-600 hover:text-black  dark:text-gray-300 dark:hover:text-white transition-all duration-200">
                <NavLink to={"compare"}>Compare</NavLink>
              </li>
              <li className=" text-gray-600 hover:text-black  dark:text-gray-300 dark:hover:text-white transition-all duration-200">
                <NavLink to={"news"}>News</NavLink>
              </li>
              <li>
                <Link
                  to={"dashboard"}
                  className=" transition-all duration-200 bg-[#3A80E9] py-2 px-5 rounded-3xl hover:shadow-lg hover:bg-[#3a6fe9] text-white border-none outline-none"
                >
                  Dashboard
                </Link>
              </li>

              <li className=" text-gray-600 hover:text-black  dark:text-gray-300 dark:hover:text-white transition-all duration-200 cursor-pointer">
                {darkMode ? (
                  <LiaSunSolid size={26} onClick={toggleDarkMode} />
                ) : (
                  <FaMoon size={22} onClick={toggleDarkMode} />
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
