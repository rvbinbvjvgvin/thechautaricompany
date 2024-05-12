import React, { useEffect, useRef } from "react";
import CanvasTree from "../shapes/Tree";
import { useState } from "react";


const ProjectHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-full box-border w-full bg-black border border-white rounded-xl flex flex-col">
      <div className="text-4xl font-bold text-white ml-4 flex justify-start items-center h-1/8">
        <h1>Projects</h1>
      </div>
      {/* first-row */}

      <div id="button" className=" h-1/4 flex  justify-center items-center">
        <div
          className="w-5/6 h-5/6 rounded-sm border border-white flex justify-center items-center"
          style={{
            background: "linear-gradient(270deg, lime 50%, black 50%)",
            backgroundSize: "200% 100%",
            transition: "all 0.5s ease",
            backgroundPosition: isHovered ? "-100% 0" : "initial",
          }}
        >
          <div className="w-5/6 h-5/6 rounded-sm border border-white flex justify-center items-center">
            <div
              className="flex justify-center items-center  bg-black border border-white rounded-sm"
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(270deg, white 50%, black 50%)",
                backgroundSize: "100% 50%",
                transition: "all 0.5s ease",
                backgroundPosition: isHovered ? "-100% 0" : "initial",
              }}
            >
              <div
                className="h-5/6 w-5/6 bg-black border-2 border-white justify-center items-center flex hover:transition-transform hover:scale-110 hover:bg-white hover:text-black hover:font-bold hover:rounded-lg hover:shadow-2xl hover:cursor-pointer hover:duration-200 hover:ease-in-out hover:transform hover:translate-y-2 hover:translate-x-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h1>Get notified</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
