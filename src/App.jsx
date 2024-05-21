import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Patricio Tamés</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Patricio Tamés
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Junior Full-Stack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              odit. Dignissimos sapiente voluptas voluptates velit! Possimus
              fugiat reiciendis beatae ad.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          <div className="mt-20 mb-10 flex justify-center">
            <img
              className="rounded-full w-96"
              src="profilepic.png"
              alt="Patricio's profile picture"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="text-teal-500">Consectetur </span>
              maiores illo itaque minus veritatis perferendis{" "}
              <span className="text-teal-500">molestias</span> deserunt facere
              animi enim!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              perspiciatis.
            </p>
          </div>
          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <img
                className="mx-auto"
                src="design.png"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Ilustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <img
                className="mx-auto"
                src="code.png"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Ilustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <img
                className="mx-auto"
                src="consulting.png"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Ilustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="text-teal-500">Consectetur </span>
              maiores illo itaque minus veritatis perferendis{" "}
              <span className="text-teal-500">molestias</span> deserunt facere
              animi enim!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              perspiciatis.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src="web1.png" alt="" />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src="web2.png" alt="" />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src="web3.png" alt="" />
            </div>
            <div className="basis-1/3 flex-1">
              <img className="rounded-lg object-cover" src="web4.png" alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
