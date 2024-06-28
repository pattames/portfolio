import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/portfolio";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export default function Portfolio() {
  //Contexts
  const { english } = useContext(LangContext);

  //Dynamic text
  //English
  const description1 = "All projects listed on this site are created from the ";
  const description2 =
    ", starting with basic wireframing and progressing to fully functional applications.";
  const description3 = "Technologies used: React for the ";
  const description4 = " and Node.js, Express, and MongoDB for the ";
  //Spanish
  const descripción1 =
    "Todos los proyectos que aparecen a continuación fueron creados ";
  const descripción2 =
    ", comenzando con diagramas básicos y avanzando hasta tener como resultado aplicaciones totalmente funcionales.";
  const descripción3 = "Tecnologías utilizadas: React para el ";
  const descripción4 = ", y Node.js, Express y MongoDB para el ";

  return (
    <section className="opacity-0 animate-fade">
      <div>
        <h3 className="text-2xl py-1 md:text-3xl dark:text-white">Portfolio</h3>
        <p className="text-md py-2 md:text-xl leading-8 text-gray-500 dark:text-gray-400">
          {english ? description1 : descripción1}
          <span className="text-teal-500 dark:text-amber-500">
            {english ? "ground up" : "desde cero"}
          </span>
          {english ? description2 : descripción2}
        </p>
        {/* En caso de no mostrar las tecnologías en las cartas: */}
        <p className="text-md py-2 md:text-xl leading-8 text-gray-500 dark:text-gray-400">
          {english ? description3 : descripción3}
          <span className="text-teal-500 dark:text-amber-500">frontend</span>
          {english ? description4 : descripción4}
          <span className="text-teal-500 dark:text-amber-500">backend</span>.
        </p>
        {/* En caso de no pagar backend deployment: */}
        {/* <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
          <span className="text-teal-500 dark:text-amber-500">Important:</span>{" "}
          Due to the use of a free backend deployment service, the websites may
          take approximately 40 seconds to load all data initially before
          running smoothly.
        </p> */}
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {portfolio.map((project) => (
          <PortfolioItem
            key={project.title}
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
