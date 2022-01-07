import React from "react";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-white px-4 md:px-40">
      <hr className="border-gray-500" />
      <div className="py-20 md:flex justify-between">
        <div className="flex justify-center gap-10">
          <a
            href="https://www.facebook.com/N4RUEBET/"
            target="_blank"
            rel="noreferrer"
          >
            <RiFacebookCircleLine
              className="text-gray-500 hover:text-blue-500"
              size={25}
            />
          </a>
          <RiInstagramLine className="text-gray-500" size={25} />
          <RiTwitterLine className="text-gray-500" size={25} />
          <RiLinkedinBoxLine className="text-gray-500" size={25} />
        </div>
        <h1 className="text-gray-500 flex justify-center mt-5 md:mt-0">
          React + Tailwind
        </h1>
        <div className="flex justify-center mt-5 md:mt-0">
          <MdOutlineMail className="text-gray-500 inline" size={25} />
          <h1 className="inline text-white pl-2">narubat1@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
