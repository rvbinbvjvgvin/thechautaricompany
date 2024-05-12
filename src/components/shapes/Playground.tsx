import React from 'react';

const Playground: React.FC = () => {
    return (
        <svg viewBox="0 0 100 100" width="10vw" height="10vh">
            <circle cx="50" cy="50" r="40" stroke="white" fill="transparent">
                <animate attributeName="r" values="40;0;40" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke" values="white;green;blue;white" dur="4s" repeatCount="indefinite" />
            </circle>
            <line x1="50" y1="0" x2="50" y2="100" stroke="white">
                <animate attributeName="stroke" values="white;green;blue;white" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dasharray" values="100,100;0,200;100,100" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="0" y1="50" x2="100" y2="50" stroke="white">
                <animate attributeName="stroke" values="white;green;blue;white" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dasharray" values="100,100;0,200;100,100" dur="4s" repeatCount="indefinite" />
            </line>
        </svg>
    );
};

export default Playground;