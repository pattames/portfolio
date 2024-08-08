import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export default function PortfolioItem({
  title,
  description,
  type,
  stack,
  imgUrl,
  link,
}) {
  const { english } = useContext(LangContext);

  return (
    <a
      href={link}
      target="_blank"
      className="basis-1/3 flex-1 max-w-[39rem] text-gray-700 dark:text-gray-100 sm:duration-200 sm:hover:scale-105"
    >
      <h1 className="text-2xl text-center py-1 tracking-widest md:text-3xl">
        {title}
      </h1>
      <h3 className="text-center pb-1 text-md text-gray-500 dark:text-gray-400 sm:text-xl">
        {type}
      </h3>
      <div className="p-6 pt-2 border-b-2 border-r-4 border-gray-400 sm:p-8 sm:pt-4">
        <img
          className="object-cover duration-200 shadow-2xl"
          src={imgUrl}
          alt={title}
        />
        <p className="text-md my-3 text-gray-500 dark:text-gray-400 md:my-5 sm:text-xl">
          {english ? description.english : description.spanish}
        </p>
        <div className="my-3 md:my-5">
          <h2 className="text-xl text-gray-600 py-1 md:tracking-wide md:text-2xl dark:text-gray-100">
            {english ? "Technologies used:" : "Tecnologías utilizadas:"}
          </h2>
          <ul className="text-sm text-gray-500 dark:text-gray-400 flex flex-wrap sm:text-lg">
            {stack.map((technologie) => (
              <li
                key={technologie}
                className="border-2 border-gray-400 rounded-md m-2 p-2 text-center"
              >
                {technologie}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}
