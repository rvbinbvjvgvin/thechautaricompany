import React from "react";
import styled from "styled-components";

const AnimatedPolygon = styled.polygon`
  fill: none;
  stroke-width: 2;
`;
const CanvasTree: React.FC = () => {
  return (
    <svg 
      viewBox="0 0 400 400" 
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <g
        className="group"
  
      >
        <AnimatedPolygon
          id="1"
          points="200,150 130,100 170,100"
          fill="none"
          stroke="lime"
          strokeWidth="2"
          
        />
        <AnimatedPolygon
          id="2"
          points="200,150 230,100 270,100"
          fill="none"
          stroke="grey"
          strokeWidth="2"
          
        />
      </g>
      <g
        className="group">
     
        <AnimatedPolygon
          id="3"
          points="200,150 130,200 170,200"
          fill="none"
          stroke="lime"
          strokeWidth="2"
          
        />
        <AnimatedPolygon
          id="4"
          points="200,150 230,200 270,200"
          fill="none"
          stroke="grey"
          strokeWidth="2"
          
        />
      </g>
      <g
        className="group">
      
      
        <AnimatedPolygon
          id="5"
          points="200,150 170,80 170,120"
          fill="none"
          stroke="lime"
          strokeWidth="2"
          
        />
        <AnimatedPolygon
          id="6"
          points="200,150 230,80 230,120"
          fill="none"
          stroke="grey"
          strokeWidth="2"
          
        />
      </g>
      <g
        className="group"
        
      >
        <AnimatedPolygon
          id="7"
          points="200,150 170,180 170,220"
          fill="none"
          stroke="lime"
          strokeWidth="2"
          
        />
        <AnimatedPolygon
          id="8"
          points="200,150 230,180 230,220"
          fill="none"
          stroke="grey"
          strokeWidth="2"
          
        />
      </g>
    </svg>
  );

};
export default CanvasTree;
