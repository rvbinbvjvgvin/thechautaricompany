import React from "react";
import { Element } from "react-scroll";
import CanvasTree from "./shapes/Tree";
const Footer = () => {
  return (
    <Element name="Footer">
      <div className="h-20 w-screen flex items-center justify-center bg-black">
        <CanvasTree />
        <p className="text-white text-2xl flex items-center justify-center">
          &copy; {new Date().getFullYear()} The chautari Company
        </p>
      </div>
    </Element>
  );
};

export default Footer;
