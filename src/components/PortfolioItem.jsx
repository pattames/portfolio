export default function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="rounded-xl group basis-1/3 flex-1 duration-200 hover:scale-105"
    >
      {/* Title over img: */}
      {/* <h1 className="bg-white p-3 bg-opacity-60 rounded-md text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-200 text-black z-10 tracking-wide">
        {title}
      </h1> */}
      {/* Titile above img: */}
      <h1 className="text-2xl text-center py-3 text-gray-700 tracking-widest dark:text-gray-100">
        {title}
      </h1>
      {/* Deleted group-hover:blur-sm for title above: */}
      <img
        className="rounded-xl object-cover duration-200 shadow-2xl"
        src={imgUrl}
        alt={title}
      />
    </a>
  );
}
