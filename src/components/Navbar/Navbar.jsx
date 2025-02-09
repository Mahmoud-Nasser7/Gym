import React, { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-8">
          <div className="text-2xl flex items-center justify-center gap-2 font-bold py-2 ">
            <FaDumbbell />
            <h2>CODERS</h2>
            <span className="text-secondary">GYM</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((tab) => (
                <li
                  className="py-1 px-5 text-xl font-semibold hover:text-primary duration-300"
                  key={tab.id}
                >
                  <a href={tab.link}>{tab.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex items-center gap-4">
            <button className="text-2xl p-2 duration-200 hover:bg-primary hover:text-white rounded-full">
              <CiSearch />
            </button>
            <button className="text-2xl p-2 duration-200 hover:bg-primary hover:text-white rounded-full">
              <FaBagShopping />
            </button>
            <button className="hidden md:block border-2 px-6 py-2 border-primary rounded-md hover:bg-primary font-semibold  text-primary hover:text-white duration-200">
              Login
            </button>
          </div>
          <div className="md:hidden">
            <MdOutlineMenu
              className="text-4xl cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        <ResponsiveMenu open={open} />
      </nav>
    </>
  );
};

export default Navbar;
