import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export default function PortfolioItem({ title, imgUrl, stack, link }) {
  const { english } = useContext(LangContext);

  return (
    <a
      href={link}
      target="_blank"
      className="group basis-1/3 flex-1 duration-200 hover:scale-105"
    >
      <h1 className="text-2xl md:text-3xl text-center py-3 text-gray-700 tracking-widest dark:text-gray-100">
        {title}
      </h1>
      <div className="p-6 pt-0 border-b-2 border-r-4 border-gray-400 sm:p-8">
        <img
          className="object-cover duration-200 shadow-2xl"
          loading="lazy"
          src={imgUrl}
          alt={title}
        />
        <div className="my-3 md:my-5">
          <h2 className="text-xl text-gray-600 ml-2 py-1 md:tracking-wide md:text-2xl dark:text-gray-100">
            {english ? "Technologies used:" : "Tecnologías utilizadas:"}
          </h2>
          <ul className="text-sm text-gray-500 dark:text-gray-400 flex flex-wrap sm:text-lg">
            {stack.map((technologie) => (
              <li className="border-2 border-gray-400 rounded-md m-2 p-2 text-center">
                {technologie}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}
