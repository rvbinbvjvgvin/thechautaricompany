import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radaial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather',  'serif'],
        mono: ['"Fira Code  ', 'monospace'],
      },
      colors:{
        'green-dark':'#1b1d22ff',
        'green-high':'#5C8374',
        'green-mid':'#5C8374',
        'green-low':'#93B1A6',
        'brown-dark':'#121212',
        'brown-high':'#503C3C',
        'brown-mid':'#7E6363',
        'brown-low':'#A87C7C',
        'ideal-white':'#969ba3ff',
        'white-low':'#c2c5caff'
      },
      boxShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': '0 35px 35px rgba(0, 0, 0, 0.25), 0 45px 65px rgba(0, 0, 0, 0.15)',
      },
      transitionDelay: {
        '0': '0ms',
        '200': '200ms',
        '500': '500ms',
        '1000': '1000ms',
      },
      keyframes: {

        bounce: {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(50px)' },
          '40%': { transform: 'translateY(100px)' },
          '60%': { transform: 'translateY(150px)' },
          '80%': { transform: 'translateY(200px)' },
          '100%': { transform: 'translateY(250px)' },
        },

        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left bottom'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom'
          }
        }
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        bounce: 'bounce 3s linear infinite',
        
      },
      backgroundImageNext: () => ({
        'gradient-radial': 'radial-gradient(ellipse at left, #1fe4f5, #3fbafe, #3a1c71)',
        'gradient-radial-reverse': 'radial-gradient(ellipse at left, #3a1c71, #3fbafe, #1fe4f5)'
      }),
      opacity: {
    
      'group-hover': 'group-hover',
      'focus': 'focus',
      'hover': 'hover',
      'responsive': 'responsive',
    },
    transitionDuration: {
      '2000': '2000ms',
    },

    },   
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
 

function addVariablesForColors({ addBase, theme }: any) {
   let allColors = flattenColorPalette(theme("colors"));
   let newVars = Object.fromEntries(
     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
   );
  
   addBase({
     ":root": newVars,
   });
}
export default config;