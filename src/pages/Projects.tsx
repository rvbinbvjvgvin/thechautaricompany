import React from "react";
import { Element } from "react-scroll";

import ProjectHero from "components/projects/ProjectHero";
import Playground from "components/shapes/Playground";
import TeamsCard from "components/ProjectCard";
interface Props {}

const Projects: React.FC<Props> = () => {
 

  
  return (
    <Element name="Projects">
      <div className="relative w-screen h-[100vh]">
        <div className="rounded-none bg-black text-white text-xl font-serif uppercase flex-col flex h-[100vh] w-screen border-t border-white">
            <div id ="Hero" className="h-full w-full m-3 flex justify-around">
              {/* <div className="h-full flex-1 flex items-center">
                <Playground />
              </div> */}
              <div className="h-full w-full flex-7">
                <TeamsCard />
              </div>
              {/* <div className="h-full flex flex-1">
                <Playground />
              </div> */}
            </div>
     
        
      </div>
      </div>
    </Element>
  );
};

export default Projects;
