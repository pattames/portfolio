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
  );
}
