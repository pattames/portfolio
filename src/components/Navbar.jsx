import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";
import Switch from "./Switch";

export default function Navbar() {
  //Contexts
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { english } = useContext(LangContext);

  //Variables
  const linkResume =
    "https://www.canva.com/design/DAGFYdHGwIo/zdWLCik4aVj_LC3387hGPg/view?utm_content=DAGFYdHGwIo&utm_campaign=designshare&utm_medium=link&utm_source=editor";
  const linkCV =
    "https://www.canva.com/design/DAGKLPndbJs/Dng5_QlkFOtYqUWdhRrQPA/view?utm_content=DAGKLPndbJs&utm_campaign=designshare&utm_medium=link&utm_source=editor";

  return (
    <nav className="py-10 flex justify-center opacity-0 animate-slideInFromTop rounded-xl flex-wrap gap-8 sm:mb-12 sm:justify-between sm:flex-nowrap">
      <Switch />
      <ul className="flex items-center gap-24 sm:gap-0">
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
            className="flex justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md dark:bg-gradient-to-r dark:from-yellow-500 dark:to-amber-500 dark:text-black min-w-20"
            href={english ? linkResume : linkCV}
            target="_blank"
          >
            {english ? "Resume" : "CV"}
          </a>
        </li>
      </ul>
    </nav>
  );
}
