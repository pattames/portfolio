import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/portfolio";

export default function Portfolio() {
  return (
    <section className="opacity-0 animate-fade">
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <span className="text-teal-500 dark:text-amber-500">
            Consectetur{" "}
          </span>
          maiores illo itaque minus veritatis perferendis{" "}
          <span className="text-teal-500 dark:text-amber-500">molestias</span>{" "}
          deserunt facere animi enim!
        </p>
        <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
          perspiciatis.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {portfolio.map((project) => (
          <PortfolioItem
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
