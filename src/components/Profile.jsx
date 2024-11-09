import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import parse from "html-react-parser";
import Typewriter from "typewriter-effect";

export default function Profile() {
  //Contexts
  const { english } = useContext(LangContext);

  //Dynamic text for translation
  const profilePersonalDescription = {
    english: `I'm a junior full-stack developer, <span className="text-teal-500 dark:text-amber-500">proficient</span> in the use of JavaScript-based technologies and passionate about implementing the latest tools to keep <span className="text-teal-500 dark:text-amber-500">building</span> digital experiences.`,
    spanish: `Desarrollador full-stack junior, competente en el uso de <span className="text-teal-500 dark:text-amber-500">tecnologías</span> basadas en JavaScript y apasionado por implementar las últimas herramientas para seguir <span className="text-teal-500 dark:text-amber-500">construyendo</span> experiencias digitales.`,
  };
  const profileCorporateDescription = {
    english: `I'm a junior full-stack developer, <span className="text-teal-500 dark:text-amber-500">proficient</span> in the use of JavaScript-based technologies and passionate about applying the <span className="text-teal-500 dark:text-amber-500">latest</span> tools in a corporate environment.`,
    spanish: `Desarrollador full stack junior, competente en el uso de <span className="text-teal-500 dark:text-amber-500">tecnologías</span> basadas en JavaScript y apasionado por aplicar las <span className="text-teal-500 dark:text-amber-500">últimas</span> herramientas en un entorno corporativo.`,
  };

  return (
    <section>
      <div className="text-center pb-8 pt-5 sm:py-10">
        <h2 className="text-5xl py-3 text-teal-500 font-bold animate-ping font-sans md:text-7xl dark:text-amber-500">
          Patricio Tamés
        </h2>
        <h3 className="text-2xl py-3 md:text-3xl dark:text-white opacity-0 animate-fade">
          {english ? (
            <Typewriter
              options={{
                strings: ["Web Developer."],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 75,
              }}
            />
          ) : (
            <Typewriter
              options={{
                strings: ["Desarrollador Web."],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 75,
              }}
            />
          )}
        </h3>
        {/* <div className="my-6 flex justify-center opacity-0 animate-fade shadow-2xl shadow-gray-400 max-w-96 mx-auto dark:shadow-none">
          <img
            className="rounded-xl w-72"
            src="profilepic.png"
            alt="Patricio's profile picture"
          />
        </div> */}
        <p className="text-md py-6 px-4 leading-8 text-gray-500 md:text-xl max-w-6xl mx-auto dark:text-gray-400 opacity-0 animate-fade border-b-2 border-r-4 border-gray-400">
          {english
            ? parse(profileCorporateDescription.english)
            : parse(profileCorporateDescription.spanish)}
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-12 text-gray-600 opacity-0 animate-fade mb-20 dark:text-gray-300 sm:gap-16">
        <a href="https://github.com/pattames" target="_blank">
          <AiFillGithub className="hover:text-gray-900 hover:dark:text-white sm:duration-200 sm:hover:scale-125" />
        </a>
        <a href="https://www.linkedin.com/in/patriciotames/" target="_blank">
          <AiFillLinkedin className="hover:text-gray-900 hover:dark:text-white sm:duration-200 sm:hover:scale-125" />
        </a>
        <a href="https://www.instagram.com/pat.tames/" target="_blank">
          <AiFillInstagram className="hover:text-gray-900 hover:dark:text-white sm:duration-200 sm:hover:scale-125" />
        </a>
      </div>
    </section>
  );
}
