import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export default function PortfolioItem({ title, imgUrl, stack, link }) {
  const { english } = useContext(LangContext);

  //Dynamic text based on language
  //English
  const techTitle = "Technologies used:";
  //Spanish
  const tituloTec = "Tecnologías utilizadas:";

  return (
    <a
      href={link}
      target="_blank"
      className="group basis-1/3 flex-1 duration-200 hover:scale-105"
    >
      <h1 className="text-2xl md:text-3xl text-center py-3 text-gray-700 tracking-widest dark:text-gray-100">
        {title}
      </h1>
      <div className="p-8 pt-0 border-b-2 border-r-4 border-gray-400">
        <img
          className="object-cover duration-200 shadow-2xl"
          loading="lazy"
          src={imgUrl}
          alt={title}
        />
        <div className="my-3 md:my-5">
          <h2 className="text-xl text-gray-600 md:tracking-wide md:text-2xl dark:text-gray-100">
            {english ? techTitle : tituloTec}
          </h2>
          <ul>
            {stack.map((technologie) => (
              <li>{technologie}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}
