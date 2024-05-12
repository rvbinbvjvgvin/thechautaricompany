import React, { useState } from "react";
import Sphere from "../shapes/Abstract";
import { Canvas } from "react-three-fiber";
import { useSpring, animated } from "react-spring";

const AboutStack = () => {
  const [accordionState, setAccordionState] = useState([
    {
      name: "Mission",
      show: false,
      expand: false,
      clicked: false,
      content: (
        <div>
          <p className=" m-8 font-4xl tracking-widest">
            We’re catalyzing the advent of SaaS services that are scalable
            beyond Nepal. Our projects not only empowers community but
            revolutionizes the way digital services are made more intuitive and
            accessible. At the heart of our endeavors lies a mission to position
            Nepal as a global hub for supercomputing, driving innovation and
            progress on a global scale.
          </p>
        </div>
      ),
    },
    {
      name: "Vision",
      show: false,
      expand: false,
      clicked: false,
      content: (
        <div>
          <p className=" m-8 font-4xl tracking-widest">
            At Chautari, we see endless possibilities for startups in the
            digital realm. With our projects, we attempt to immerse ourselves in
            every facet of the digital infrastructure that currently coexists,
            fragmented and disparate. Our vision is to create a unified
            ecosystem that is not only more efficient but also more accessible
            to the masses.
          </p>
        </div>
      ),
    },
    {
      name: "Value",
      show: false,
      expand: false,
      clicked: false,
      content: (
        <div>
          <p className=" m-8 font-4xl tracking-widest ">
            Unifying communities and fostering collaboration is at the core of our values. We believe that the future of digital services is not just about technology, but about the people who use it. Our projects are designed to be inclusive, accessible, and user-friendly, ensuring that everyone can benefit from the digital revolution.
          </p>
        </div>
      ),
    },
  ]);

  const toggleAccordion = (index: number) => {
    setAccordionState(
      accordionState.map((section, i) => {
        if (i === index) {
          return {
            ...section,
            show: !section.show,
            expand: !section.expand,
            clicked: !section.clicked,
          };
        } else {
          return { ...section, show: false, expand: false };
        }
      })
    );
  };

  return (
    <div className="w-full h-full">
      {accordionState.map((section, index) => {
        const marginProps = useSpring({
          transform: section.expand
            ? `translateY(-${25 * (index + 1)}px)`
            : "translateY(0px)",
          config: { mass: 5, tension: 120, friction: 100 },
          reset: section.expand,
        });

        return (
          <animated.div
            key={index}
            style={marginProps}
            className="w-full p-5 relative text-white border-b border-white"
            onClick={() => toggleAccordion(index)}
          >
            <div
              className={`relative font-serif font-medium text-2xl cursor-pointer ${
                section.expand ? "-mt-60 z-20" : "mt-0"
              }`}
            >
              <h1 className="pl-1">{section.name}</h1>
              <h1 className="absolute right-1 top-0 text-2xl font-medium">{`0${
                index + 1
              }`}</h1>
            </div>
            {section.show && (
              <div className="h-80 w-screen flex flex-cols rounded-lg items-center justify-center opacity-90 bg-gradient-radaial from-green-dark to-black via-green-dark">
                {section.content}
              </div>
            )}
          </animated.div>
        );
      })}
    </div>
  );
};

export default AboutStack;
