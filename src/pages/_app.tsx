// Importing necessary libraries and components
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import { UserProvider } from "../contexts/UserContext";
import { AppProps } from "next/app";
import Navbar from "../components/home/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Teams from "./Teams";
import Projects from "./Projects";
import '../styles/globals.css'
// Main function that wraps the entire application in context providers and theme provider
// Importing styles
import "../styles/globals.css";

// Importing external libraries
import ProgressBar from "react-scroll-progress-bar";
function capitalizeSentences(text: string) {
  return text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c) {
    return c.toUpperCase();
  });
}

// MyApp component
function MyApp({ Component, pageProps }: AppProps) {
    // AppContent component
    const AppContent = () => {
      // Using theme from ThemeContext
      const { theme } = useTheme();
      // Capitalize the first letter of each sentence in pageProps
      const capitalizedPageProps = Object.fromEntries(
        Object.entries(pageProps).map(([key, value]) => {
          if (typeof value === 'string') {
            return [key, capitalizeSentences(value)];
          }
          return [key, value];
        })
      );

    return (
      <div
        className={`${
          theme === "dark"
            ? "bg-green-dark bg-dot-black/[0.2]"
            : "bg-slate-500 bg-dot-black/[0.2]"
        }`}
      >
        <ProgressBar />
        <Navbar />
        <div>
          <Hero />
          <Teams />
          <Projects />
          
          <Footer/>
        </div>
      </div>
    );
  };

  // Wrapping the AppContent with UserProvider and ThemeProvider
  return (
    <UserProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </UserProvider>
  );
}

// Exporting MyApp as default
export default MyApp;
