import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/portfolio";

export default function Portfolio() {
  return (
    <section className="opacity-0 animate-fade">
      <div>
        <h3 className="text-2xl py-1 md:text-3xl dark:text-white">Portfolio</h3>
        <p className="text-md py-2 md:text-xl leading-8 text-gray-500 dark:text-gray-400">
          All projects listed on this site are created from the{" "}
          <span className="text-teal-500 dark:text-amber-500">ground up</span>,
          starting with basic wireframing and progressing to fully functional
          applications.
        </p>
        {/* En caso de no mostrar las tecnologías en las cartas: */}
        <p className="text-md py-2 md:text-xl leading-8 text-gray-500 dark:text-gray-400">
          Technologies used: React for the{" "}
          <span className="text-teal-500 dark:text-amber-500">frontend</span>,
          and Node.js, Express, and MongoDB for the{" "}
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
