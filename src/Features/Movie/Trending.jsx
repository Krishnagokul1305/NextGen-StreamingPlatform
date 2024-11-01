function Trending({ data }) {
  return (
    <div className="px-5 py-3">
      <h1 className="text-2xl font-bold">Weekly Top</h1>
      <div className="flex items-center gap-10 overflow-x-scroll overflow-y-hidden px-7 mt-2">
        {data.map((imageUrl, index) => (
          <div
            className="movie-item p-5 relative text-center flex-none min-w-[220px] h-[270px] md:h-[300px] md:w-[250px] transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            key={index}
          >
            <div className="absolute flex items-center justify-center text-[150px] -left-5 md:-left-6 md:text-[200px] font-extrabold z-10 outlined-number">
              {index + 1}
            </div>
            <img
              src={imageUrl}
              alt={`Movie ${index + 1}`}
              className="relative z-0 h-full w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
