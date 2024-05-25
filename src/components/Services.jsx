export default function Services() {
  return (
    <section>
      <div className="opacity-0 animate-fade">
        <h3 className="text-3xl py-1 dark:text-white ">Expertise</h3>
        <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
          I'm always trying to grow by building my own projects
        </p>
        <p className="text-md py-2 leading-8 text-gray-500 dark:text-gray-400">
          Nowadays my expert
        </p>
      </div>
      <div className="lg:flex gap-10 justify-center opacity-0 animate-fade">
        <div className="text-center shadow-xl shadow-gray-300 p-10 rounded-xl my-10 flex-1 dark:shadow-none duration-200 hover:scale-105 dark:bg-gray-800">
          <img className="mx-auto" src="code.png" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
            App functionality
          </h3>
          <p className="py-2 text-gray-500 dark:text-gray-400">
            Keeping a special focus on project functionalities.
          </p>
          <h4 className="py-4 text-teal-500 dark:text-amber-500">
            Coding tools I use
          </h4>
          <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
          <p className="text-gray-800 py-1 dark:text-gray-400">Ilustrator</p>
          <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
        </div>
        <div className="text-center shadow-xl shadow-gray-300 p-10 rounded-xl my-10 flex-1 dark:shadow-none duration-200 hover:scale-105 dark:bg-gray-800">
          <img className="mx-auto" src="design.png" width={100} height={100} />
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
          <p className="text-gray-800 py-1 dark:text-gray-400">Ilustrator</p>
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
          <p className="text-gray-800 py-1 dark:text-gray-400">Ilustrator</p>
          <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
        </div>
      </div>
    </section>
  );
}
