import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/portfolio";

export default function Portfolio() {
  return (
    <section className="opacity-0 animate-fade">
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
          All{" "}
          <span className="text-teal-500 dark:text-amber-500">projects</span>{" "}
          listed on this site are created from the ground up, starting with
          basic wireframing and progressing to fully functional{" "}
          <span className="text-teal-500 dark:text-amber-500">
            applications
          </span>
          .
        </p>
        <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
          Technologies used: React for the frontend, and Node.js, Express, and
          MongoDB for the backend.
        </p>
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
