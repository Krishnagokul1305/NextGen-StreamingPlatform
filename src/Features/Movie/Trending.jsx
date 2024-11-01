function Trending({index,imageUrl}) {
    return (
        <div className="movie-item p-5 relative text-center flex-none min-w-[250px] h-[300px] transition-transform duration-300 transform hover:scale-105 cursor-pointer">
            <div className="absolute flex items-center justify-center text-[200px] -left-6 font-extrabold z-10 outlined-number">
              {index + 1}
            </div>
            <img
              src={imageUrl}
              alt={`Movie ${index + 1}`}
              className="relative z-0 h-full w-full rounded-lg shadow-lg object-cover"
            />
          </div>
    )
}

export default Trending
