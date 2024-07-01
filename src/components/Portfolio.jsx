import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/portfolio";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export default function Portfolio() {
  //Contexts
  const { english } = useContext(LangContext);

  //Dynamic text for translation
  //English
  const description1 = () => {
    const span = (
      <span className="text-teal-500 dark:text-amber-500">ground up</span>
    );
    return (
      <>
        All projects listed on this site are created from the {span}, starting
        with basic wireframing and progressing to fully functional applications.
      </>
    );
  };
  const description2 = () => {
    const span1 = (
      <span className="text-teal-500 dark:text-amber-500">frontend</span>
    );
    const span2 = (
      <span className="text-teal-500 dark:text-amber-500">backend</span>
    );
    return (
      <>
        Technologies used: React for the {span1} and Node.js, Express, and
        MongoDB for the {span2}.
      </>
    );
  };
  const description3 = () => {
    const span = (
      <span className="text-teal-500 dark:text-amber-500">Important</span>
    );
    return (
      <>
        {span}: Due to the use of a free backend deployment service, the
        websites may take approximately 40 seconds to load all data before
        running smoothly.
      </>
    );
  };
  //Spanish
  const descripción1 = () => {
    const span = (
      <span className="text-teal-500 dark:text-amber-500">desde cero</span>
    );
    return (
      <>
        Todos los proyectos que aparecen a continuación fueron creados {span},
        comenzando con diagramas básicos y avanzando hasta tener como resultado
        aplicaciones totalmente funcionales.
      </>
    );
  };
  const descripción2 = () => {
    const span1 = (
      <span className="text-teal-500 dark:text-amber-500">frontend</span>
    );
    const span2 = (
      <span className="text-teal-500 dark:text-amber-500">backend</span>
    );
    return (
      <>
        Tecnologías utilizadas: React para el {span1}, y Node.js, Express y
        MongoDB para el {span2}.
      </>
    );
  };
  const descripción3 = () => {
    const span = (
      <span className="text-teal-500 dark:text-amber-500">Importante</span>
    );
    return (
      <>
        {span}: Los sitios web pueden llegar a tardar hasta 40 segundos en
        cargar todos los datos, debido al uso de un servicio de alojamiento
        gratuito para los servidores backend.
      </>
    );
  };

  return (
    <section className="opacity-0 animate-fade">
      <div>
        <h3 className="text-2xl py-1 md:text-3xl dark:text-white">
          {english ? "Portfolio" : "Portafolio"}
        </h3>
        <p className="text-md py-2 md:text-xl leading-8 text-gray-500 dark:text-gray-400">
          {english ? description1() : descripción1()}
        </p>
        {/* En caso de no mostrar las tecnologías en las cartas: */}
        <p className="text-md py-2 md:text-xl leading-8 text-gray-500 dark:text-gray-400">
          {english ? description2() : descripción2()}
        </p>
        {/* En caso de no pagar backend deployment: */}
        {/* <p className="text-md py-2 md:text-xl leading-8 text-gray-500 dark:text-gray-400">
          {english ? description3() : descripción3()}
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
