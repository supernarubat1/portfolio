import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const pathname = window.location.pathname;
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Education",
      key: "/education",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-3 bg-black text-white shadow-lg">
      <div className="flex justify-between w-full">
        <h1 className="text-3xl font-semibold">T A E</h1>
        <button
          className="md:hidden"
          onClick={() => setShowMenu(showMenu ? false : true)}
        >
          <MdMenu className="text-3xl" />
        </button>
      </div>
      {/* desktop */}
      <div className="hidden md:flex">
        {menuItems.map((item) => (
          <li
            key={item.key}
            className={`list-none mx-5 ${
              item.key === pathname
                ? "text-white font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Link to={item.key}>{item.title}</Link>
          </li>
        ))}
      </div>
      {/* mobile */}
      {showMenu && (
        <div className="md:hidden flex flex-col">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`list-none m-3 ${
                item.key === pathname
                  ? "text-white font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Link to={item.key}>{item.title}</Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
