import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} fixed w-full flex items-center py-1 z-50 backdrop-blur-lg bg-black bg-opacity-30 transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-100 h-20 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Rupak Jayan &nbsp;
            <span className="sm:block hidden">|&nbsp; Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              style={{ color: active === link.title ? "white" : "gray" }}
              className="hover:text-white text-[18px] font-medium cursor-pointer"
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div
          className={`${
            toggle ? "opacity-100 " : "opacity-0 translate-x-full"
          } p-6 black-gradient absolute top-32 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-primary transition-all duration-300 ease-in-out`}
        >
          <ul className="list-none flex items-start flex-col gap-3 ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "white" : "gray"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
