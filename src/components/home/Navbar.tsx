import React, { FC, useState, useEffect } from 'react';
import { useTheme } from 'contexts/ThemeContext';
import styles from '../../styles/Navbar.module.css';
import Image from 'next/image';
import { FiSun, FiMoon, FiHome, FiUsers, FiBox } from 'react-icons/fi';
import {useRouter} from 'next/router';
import { Link } from 'react-scroll';
const Navbar: FC = () => {
  const router = useRouter();
  const [iconClicked, setIconClicked] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleClick = (event: React.MouseEvent, element: string) => {
    event.preventDefault();
    setIconClicked(true);
    switch (element) {
      case 'Hero':
        // If you're already on the home page, scroll to the top
        if (router.pathname === '/') {
          window.scrollTo(0, 0);
        } else {
          // Otherwise, navigate to the home page
          router.push('/');
        }
        break;
      case 'Teams':
        router.push('/Teams');
        break;
      case 'Projects':
        router.push('/Projects');
        break;
      default:
        return false;
    }
  };
 
  // If theme is not defined, return null
  if (theme === undefined) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <nav className="bg-transparent relative px-4 grid grid-cols-3 items-center">
      <div className="flex items-center justify-start bg-transparent">
        <Image src="/chautarialt.svg" className="logo" alt="Company" width={100} height={100} />
      </div>

      <div className={`${styles.island} bg-yellow-300}`}>
        <div className={`fixed top-2 inset-x-0 max-w-2xl mx-auto z-20 rounded-full px-2 py-2 w-40 ${isDark ? 'bg-black' : 'bg-gray-100'}`}>
          <ul className='flex space-x-8 justify-center items-center'>
            <li>
                <Link to ="Home" smooth={true} duration={1000} className={`${isDark ? 'text-white' : 'text-black'} hover:text-gray-500 transition duration-200`}>
                <FiHome className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110" size={24}/>
                </Link>
            </li>
            <li>
            <Link to ="Teams" smooth={true} duration={1000} className={`${isDark ? 'text-white' : 'text-black'} hover:text-gray-500 transition duration-200`}>
                <FiUsers className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110" size={24}/>
                </Link>
            </li>
            <li>
            <Link to ="Projects" smooth={true} duration={1000} className={`${isDark ? 'text-white' : 'text-black'} hover:text-gray-500 transition duration-200`}>
                <FiBox className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110" size={24}/>
                </Link>
            </li>
            {/* Add more icons as needed */}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-end bg-transparent">
        <div className="bg-gray-200 rounded-full px-4 py-2 flex items-center justify-between">
          {isDark ? (
            <FiSun
              onClick={toggleTheme}
              className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110"
              size={24}
            />
          ) : (
            <FiMoon
              onClick={toggleTheme}
              className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110"
              size={24}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;