export default function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="rounded-xl group basis-1/3 flex-1 duration-200 hover:scale-105 shadow-2xl shadow-gray-400 dark:shadow-none hover:shadow-none">
      <h1 className="bg-white p-3 bg-opacity-60 rounded-md text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-200 text-black z-10 tracking-wide">
        {title}
      </h1>
      <img
        className="rounded-xl object-cover group-hover:blur-sm duration-200"
        src={imgUrl}
        alt={title}
      />
    </div>
  );
}
