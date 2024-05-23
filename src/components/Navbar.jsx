import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <nav className="py-10 mb-12 flex justify-between opacity-0 animate-slideInFromTop rounded-xl">
      <h1 className="text-xl font-thin dark:text-white font-sans">Portfolio</h1>
      <ul className="flex items-center">
        <li className="animate-bounceOnce mr-8">
          {darkMode ? (
            <BsFillSunFill
              onClick={() => setDarkMode(!darkMode)}
              className="text-white cursor-pointer text-2xl duration-200 hover:scale-125"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl duration-200 hover:scale-125"
            />
          )}
        </li>
        <li className="duration-200 hover:scale-110">
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md dark:bg-gradient-to-r dark:from-yellow-500 dark:to-amber-500 dark:text-black"
            href="https://www.canva.com/design/DAGFYdHGwIo/zdWLCik4aVj_LC3387hGPg/view?utm_content=DAGFYdHGwIo&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
