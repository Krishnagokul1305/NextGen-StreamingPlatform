import { HiPlay } from "react-icons/hi";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Movie({ movieData = {} }) {
  return (
    <div
      className="h-screen flex items-center py-10 relative w-full"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(1, 1, 1, 0.577) 0%, rgba(0, 0, 0, 0.445) 100%), url(${movieData.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="relative z-20 flex items-center text-white gap-20 w-[80%] mx-auto mt-10">
        <div className="w-[320px]">
          <img
            src={movieData.poster}
            alt="Movie Poster"
            className="object-contain h-100 w-100 rounded-2xl"
          />
        </div>
        <div className="text-[#FFFFFFCC] w-[50%] space-y-3">
          <div>
            <img src={movieData.titleImage} alt="Movie Title" />
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-5 justify-center">
              <div className="px-4 py-2 border rounded-full">
                {movieData.rating}
              </div>
              {movieData?.genres?.map((genre, index) => (
                <span key={index}>
                  {genre}
                  {index < movieData.genres.length - 1 && " ."}
                </span>
              ))}
              <span>{movieData.duration}</span>
            </div>
            <div className="text-sm w-[80%] block text-center mx-auto">
              {movieData.description}
            </div>
            <div className="gap-5 flex items-center justify-center">
              <button className="gap-1 flex items-center px-5 py-2 border rounded-full bg-white text-gray-900">
                <HiPlay /> Watch now
              </button>
              <button className="gap-1 flex items-center px-5 glassy py-2 border rounded-full">
                <IoIosArrowDroprightCircle /> More info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
