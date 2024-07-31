import "./App.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  //Contexts
  const { darkMode } = useContext(ThemeContext);

  //Prevent scroll restoration
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    // Prevent default scroll restoration behavior
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Reset scroll restoration to auto on unmount
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <div className={darkMode ? "dark bg-gray-900" : "bg-white"}>
      <main className="px-10 md:px-20 lg:px-40">
        <Navbar />
        <Profile />
        {/* <Services /> */}
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
