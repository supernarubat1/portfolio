import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content bg-black md:px-40">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
