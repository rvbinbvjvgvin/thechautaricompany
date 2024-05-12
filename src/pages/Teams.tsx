
import React from "react";
import { Element } from "react-scroll";
import styles from "../styles/Teams.module.css";
import TeamsCard from "components/ProjectCard";
import CanvasTree from "components/shapes/Tree";
// Import the CSS file

const Teams = () => {
  return (
    <Element name="Teams" className="h-screen bg-black">
      <div className="h-full w-full flex justify-center items-center text-white text-4xl font-bold ">
        {/* <h1 className="text-8xl ml-5">Our Team</h1> */}
        <CanvasTree />
      
       
        
      </div>
    </Element>
  );
};

export default Teams;
