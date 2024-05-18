import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profpic from "../public/profilepic.png";

export default function App() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Patricio Tamés</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Linkedln
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Patricio Tamés
          </h2>
          <h3 className="text-2xl py-2">Junior Full-Stack Developer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
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
        <div>
          <img src={profpic} alt="Patricio's profile picture" />
        </div>
      </section>
    </main>
  );
}
