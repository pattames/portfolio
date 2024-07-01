import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export default function Profile() {
  //Contexts
  const { english } = useContext(LangContext);

  //Dynamic text for translation
  //English
  const jobTitle = "Web Developer.";
  const introduction = () => {
    const span = (
      <span className="text-teal-500 dark:text-amber-500">technologies</span>
    );
    return (
      <>
        {/* I'm a junior full-stack developer, proficient in the MERN stack and
        passionate about learning new {span} that allow me to keep building
        digital experiences. */}
        I'm a junior full-stack developer, proficient in the use of
        JavaScript-based {span} and passionate about learning new tools that
        allow me to keep building digital experiences.
      </>
    );
  };
  //Spanish
  const tituloProfesional = "Desarrollador Web.";
  const introducción = () => {
    const span = (
      <span className="text-teal-500 dark:text-amber-500">tecnologías</span>
    );
    const span2 = (
      <span className="text-teal-500 dark:text-amber-500">construyendo</span>
    );
    return (
      <>
        {/* Desarrollador full stack junior, competente en el uso del stack MERN y
        apasionado por aprender nuevas {span} que me permitan seguir
        construyendo experiencias digitales. */}
        Desarrollador full stack junior, competente en el uso de {span} basadas
        en JavaScript y apasionado por aprender nuevas herramientas que me
        permitan seguir {span2} aplicaciones y sitios web.
      </>
    );
  };

  return (
    <section>
      <div className="text-center p-10">
        <h2 className="text-5xl py-3 text-teal-500 font-bold md:text-7xl dark:text-amber-500 animate-ping font-sans">
          Patricio Tamés
        </h2>
        <h3 className="text-2xl py-3 md:text-3xl dark:text-white opacity-0 animate-fade">
          {english ? jobTitle : tituloProfesional}
        </h3>
        <p className="text-md py-6 leading-8 text-gray-500 md:text-xl max-w-3xl mx-auto dark:text-gray-400 opacity-0 animate-fade">
          {english ? introduction() : introducción()}
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-300 opacity-0 animate-fade">
        <a href="https://github.com/pattames" target="_blank">
          <AiFillGithub className="duration-200 hover:scale-125" />
        </a>
        <a href="https://www.linkedin.com/in/patriciotames/" target="_blank">
          <AiFillLinkedin className="duration-200 hover:scale-125" />
        </a>
        <a href="https://www.instagram.com/pat.tames/" target="_blank">
          <AiFillInstagram className="duration-200 hover:scale-125" />
        </a>
      </div>
      <div className="mt-20 mb-10 flex justify-center opacity-0 animate-fade shadow-2xl shadow-gray-400 rounded-full max-w-96 mx-auto dark:shadow-none">
        <img
          className="rounded-full w-96"
          src="profilepic.png"
          alt="Patricio's profile picture"
        />
      </div>
    </section>
  );
}
