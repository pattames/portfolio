import { useContext, useState } from "react";
import { LangContext } from "../context/LangContext";
import classNames from "classnames";

export default function Switch() {
  //Contexts
  const { english, setEnglish } = useContext(LangContext);

  return (
    <div className="flex items-center sm:mr-28">
      <p
        className={classNames("text-gray-500 dark:text-gray-400 text-lg", {
          "text-gray-950 dark:text-white cursor-pointer": english,
        })}
        onClick={() => setEnglish(true)}
      >
        {english ? "English" : "Inglés"}
      </p>
      <div
        className={classNames(
          "flex w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer mx-3"
        )}
        onClick={() => setEnglish(!english)}
      >
        <span
          className={classNames(
            "h-6 w-6 bg-gray-600 dark:bg-white rounded-full transition-all duration-200",
            {
              "ml-6": !english,
            }
          )}
        ></span>
      </div>
      <p
        className={classNames(
          "text-gray-500 dark:text-gray-400 text-lg cursor-pointer",
          {
            "text-gray-950 dark:text-white": !english,
          }
        )}
        onClick={() => setEnglish(false)}
      >
        {english ? "Spanish" : "Español"}
      </p>
    </div>
  );
}
