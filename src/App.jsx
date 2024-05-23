import "./App.css";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  //Aquí mis proyectos:

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <Navbar />
        <section>
          <div className="text-center p-10">
            <h2 className="text-6xl py-3 text-teal-500 font-bold md:text-7xl dark:text-amber-500 animate-ping font-sans">
              Patricio Tamés
            </h2>
            <h3 className="text-2xl py-3 md:text-3xl dark:text-white opacity-0 animate-fade">
              Web Developer.
            </h3>
            <p className="text-md py-6 leading-8 text-gray-500 md:text-xl max-w-3xl mx-auto dark:text-gray-400 opacity-0 animate-fade">
              I’m a junior full-stack developer, proficient in the MERN stack,
              but also very passionate about learning new technologies that
              allow me to keep building digital experiences.{" "}
              {/* All coding projects
              listed on this site are created from the ground up, starting with
              basic wireframing all the way up to fully functional applications. */}
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-300 opacity-0 animate-fade">
            <a href="https://github.com/pattames" target="_blank">
              <AiFillGithub className="duration-200 hover:scale-125" />
            </a>
            <a
              href="https://www.linkedin.com/in/patriciotames/"
              target="_blank"
            >
              <AiFillLinkedin className="duration-200 hover:scale-125" />
            </a>
            <a href="https://www.instagram.com/pat.tames/" target="_blank">
              <AiFillInstagram className="duration-200 hover:scale-125" />
            </a>
          </div>
          <div className="mt-20 mb-10 flex justify-center opacity-0 animate-fade shadow-2xl shadow-gray-400 rounded-full max-w-96 mx-auto dark:shadow-none">
            <img
              className="rounded-full w-96"
              src="profilepic.png"
              alt="Patricio's profile picture"
            />
          </div>
        </section>
        <section>
          <div className="opacity-0 animate-fade">
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="text-teal-500 dark:text-amber-500">
                Consectetur{" "}
              </span>
              maiores illo itaque minus veritatis perferendis{" "}
              <span className="text-teal-500 dark:text-amber-500">
                molestias
              </span>{" "}
              deserunt facere animi enim!
            </p>
            <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              perspiciatis.
            </p>
          </div>
          <div className="lg:flex gap-10 justify-center opacity-0 animate-fade">
            <div className="text-center shadow-xl shadow-gray-300 p-10 rounded-xl my-10 flex-1 dark:shadow-none duration-200 hover:scale-105 dark:bg-gray-800">
              <img
                className="mx-auto"
                src="design.png"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 text-gray-500 dark:text-gray-400">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-500 dark:text-amber-500">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Ilustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
            </div>
            <div className="text-center shadow-xl shadow-gray-300 p-10 rounded-xl my-10 flex-1 dark:shadow-none duration-200 hover:scale-105 dark:bg-gray-800">
              <img
                className="mx-auto"
                src="code.png"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 text-gray-500 dark:text-gray-400">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-500 dark:text-amber-500">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Ilustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
            </div>
            <div className="text-center shadow-xl shadow-gray-300 p-10 rounded-xl my-10 flex-1 dark:shadow-none duration-200 hover:scale-105 dark:bg-gray-800">
              <img
                className="mx-auto"
                src="consulting.png"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 text-gray-500 dark:text-gray-400">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-500 dark:text-amber-500">
                Design tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Ilustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
            </div>
          </div>
        </section>
        <section className="opacity-0 animate-fade">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="text-teal-500 dark:text-amber-500">
                Consectetur{" "}
              </span>
              maiores illo itaque minus veritatis perferendis{" "}
              <span className="text-teal-500 dark:text-amber-500">
                molestias
              </span>{" "}
              deserunt facere animi enim!
            </p>
            <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              perspiciatis.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="rounded-xl group basis-1/3 flex-1 duration-200 hover:scale-105 shadow-2xl shadow-gray-400 dark:shadow-none hover:shadow-none">
              <h1 className="bg-white p-3 bg-opacity-60 rounded-md text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-200 text-black z-10 tracking-wide">
                Petfect Match
              </h1>
              <img
                className="rounded-xl object-cover group-hover:blur-sm duration-200"
                src="web1.png"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1 duration-200 hover:scale-105">
              <img className="rounded-lg object-cover" src="web2.png" alt="" />
            </div>
            <div className="basis-1/3 flex-1 duration-200 hover:scale-105">
              <img className="rounded-lg object-cover" src="web3.png" alt="" />
            </div>
            <div className="basis-1/3 flex-1 duration-200 hover:scale-105">
              <img className="rounded-lg object-cover" src="web4.png" alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
