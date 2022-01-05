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
    <div className="fixed inset-x-0 flex flex-col md:flex-row justify-between items-center p-4 md:p-8 bg-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-semibold">{"{ t a e }"}</h1>
        <button
          className="md:hidden"
          onClick={() => setShowMenu(showMenu ? false : true)}
        >
          <MdMenu className="text-3xl" />
        </button>
        {/* desktop */}
        <ul className="hidden md:flex items-center">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`list-none md:mx-8 ${
                item.key === pathname
                  ? "text-white font-bold animate-pulse"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Link to={item.key}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      {showMenu && (
        <ul className="md:hidden flex flex-col mt-10 bg-black fixed inset-x-0 text-center">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`list-none m-3 ${
                item.key === pathname
                  ? "text-white font-bold animate-pulse"
                  : "text-zinc-400"
              }`}
            >
              <Link to={item.key}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
