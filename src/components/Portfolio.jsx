import PortfolioItem from "./PortfolioItem";
import { portfolio } from "../data/portfolio";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import parse from "html-react-parser";

export default function Portfolio() {
  //Contexts
  const { english } = useContext(LangContext);

  //Dynamic text for translation
  const portfolioDescription = {
    english:
      'All projects listed on this site are created from the <span className="text-teal-500 dark:text-amber-500">ground up</span>, starting with basic wireframing and progressing to fully functional applications.',
    spanish:
      'Todos los proyectos que aparecen a continuación fueron creados <span className="text-teal-500 dark:text-amber-500">desde cero</span>, comenzando con diagramas básicos y avanzando hasta tener como resultado aplicaciones totalmente funcionales.',
  };
  const timeWarning = {
    english:
      '<span className="text-teal-500 dark:text-amber-500">Important</span>: Due to the use of a free backend deployment service, the full-stack websites may take approximately 40 seconds to load all data before running smoothly.',
    spanish:
      '<span className="text-teal-500 dark:text-amber-500">Importante</span>: Los sitios full-stack pueden llegar a tardar hasta 40 segundos en cargar todos los datos debido al uso de un servicio de alojamiento gratuito para los servidores backend.',
  };

  return (
    <section className="opacity-0 animate-fade">
      <div className="max-w-6xl text-center mx-auto sm:text-left">
        <h3 className="text-2xl py-1 underline underline-offset-8 md:text-3xl text-gray-700 dark:text-gray-100">
          {english ? "Portfolio" : "Portafolio"}
        </h3>
        <p className="text-md py-4 md:text-xl leading-8 text-gray-500 dark:text-gray-400">
          {english
            ? parse(portfolioDescription.english)
            : parse(portfolioDescription.spanish)}
        </p>
        {/* En caso de no pagar backend deployment: */}
        {/* <p className="text-md py-2 md:text-xl leading-8 text-gray-500 dark:text-gray-400">
          {english ? parse(timeWarning.english) : parse(timeWarning.spanish)}
        </p> */}
      </div>
      <div className="flex flex-col gap-10 py-7 justify-center max-w-7xl mx-auto md:flex-row md:flex-wrap">
        {portfolio.map((project) => (
          <PortfolioItem
            key={project.id}
            title={project.title}
            description={project.description}
            type={project.type}
            stack={project.stack}
            imgUrl={project.imgUrl}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
