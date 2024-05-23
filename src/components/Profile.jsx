import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Profile() {
  return (
    <section>
      <div className="text-center p-10">
        <h2 className="text-6xl py-3 text-teal-500 font-bold md:text-7xl dark:text-amber-500 animate-ping font-sans">
          Patricio Tamés
        </h2>
        <h3 className="text-2xl py-3 md:text-3xl dark:text-white opacity-0 animate-fade">
          Web Developer.
        </h3>
        <p className="text-md py-6 leading-8 text-gray-500 md:text-xl max-w-3xl mx-auto dark:text-gray-400 opacity-0 animate-fade">
          I’m a junior full-stack developer, proficient in the MERN stack, but
          also very passionate about learning new technologies that allow me to
          keep building digital experiences.{" "}
          {/* All coding projects
            listed on this site are created from the ground up, starting with
            basic wireframing all the way up to fully functional applications. */}
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-300 opacity-0 animate-fade">
        <a href="https://github.com/pattames" target="_blank">
          <AiFillGithub className="duration-200 hover:scale-125" />
        </a>
        <a href="https://www.linkedin.com/in/patriciotames/" target="_blank">
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
  );
}
