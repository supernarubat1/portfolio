import React, { useState } from "react";
import { MdMenu, MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const [hash, setHash] = useState(window.location.hash);
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      title: "Home",
      key: "#home",
    },
    {
      title: "Education",
      key: "#education",
    },
    {
      title: "Projects",
      key: "#projects",
    },
    {
      title: "Certificate",
      key: "#certificate",
    },
    {
      title: "Contact",
      key: "#contact",
    },
  ];

  const changeLang = (l) => {
    setLang(l);
    i18n.changeLanguage(l);
  };

  return (
    <div className="fixed inset-x-0 top-0 flex flex-col md:flex-row justify-between items-center p-4 md:py-8 lg:mx-40 bg-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between">
        <button className="text-2xl font-semibold">{"{ t a e }"}</button>
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
                item.key === hash
                  ? "text-white font-bold animate-pulse"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {/* <Link to={item.key}>{t(item.title)}</Link> */}
              <a href={item.key} onClick={() => setHash(item.key)}>
                {t(item.title)}
              </a>
            </li>
          ))}
        </ul>
        {/* ปุ่มเปลี่ยนภาษา */}
        <div className="flex gap-2">
          <MdLanguage size={20} className="mt-1.5" />
          <button
            className={`${lang === "en" && "border-2"} px-1`}
            onClick={() => changeLang("en")}
          >
            EN
          </button>
          <button
            className={`${lang === "th" && "border-2"} px-1`}
            onClick={() => changeLang("th")}
          >
            TH
          </button>
        </div>
      </div>
      {/* mobile */}
      {showMenu && (
        <ul className="md:hidden flex flex-col mt-10 bg-black fixed inset-x-0 text-center">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`list-none m-3 ${
                item.key === hash
                  ? "text-white font-bold animate-pulse"
                  : "text-zinc-400"
              }`}
            >
              {/* <Link to={item.key}>{item.title}</Link> */}
              <a
                href={item.key}
                onClick={() => {
                  setShowMenu(false);
                  setHash(item.key);
                }}
              >
                {t(item.title)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
