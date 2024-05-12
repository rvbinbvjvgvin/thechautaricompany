import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import Animat from "./shapes/Animat";
import AboutStack from "./home/AboutStack";
import Sphere from "./shapes/Abstract";
import { Canvas } from "react-three-fiber";
import { Text } from "@react-three/drei";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Element name="Home">
      <div className="flex bg-black flex-col justify-center flex-grow h-[200vh]">
        <div
          className="relative w-full h-full z-2"
          style={{ perspective: "10000px" }}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sphere />
          </Canvas>
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-2xl md:text-4xl">
            Chautari is a moon-shot project to cocreate a community of creators.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center h-[100vh]">
          <AboutStack />
        </div>
        <div className="bg-gradient-to-b from-black via-blue-900 to-black justify-center place-items-end h-[100vh]">
          <Animat />
        </div>
      </div>
    </Element>
  );
};

export default Hero;
