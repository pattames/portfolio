import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  const { darkMode } = useContext(ThemeContext);

  //Aquí mis proyectos:

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <Navbar />
        <Profile />
        <Services />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
