import { HiPlay } from "react-icons/hi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Movie({ movieData = {} }) {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    const encodedVideoUrl = encodeURIComponent(movieData.trailer);
    navigate(`/trailer/${encodedVideoUrl}`);
  };

  return (
    <div
      className="h-screen flex items-center py-10 relative w-full"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(1, 1, 1, 0.577) 0%, rgba(0, 0, 0, 0.445) 100%), url(${movieData.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
           <div className="h-100 overlay absolute z-20 inset-0"></div>
      <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="relative z-20 flex items-center text-white gap-20 w-[80%] mx-auto mt-10">
        <div className="w-[320px] max-h-[450px] overflow-hidden rounded-2xl">
          <img
            src={movieData.poster}
            alt="Movie Poster"
            className="object-contain  w-100 h-[100%]"
          />
        </div>
        <div className="text-[#FFFFFFCC] w-[50%] space-y-3">
          <div>
            <img src={movieData.titleImage} alt="Movie Title" className="w-[100%]" />
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
              <button
                className="gap-1 flex items-center px-5 py-2 border rounded-full bg-white text-gray-900 cursor-pointer"
                onClick={handleWatchNow}
              >
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
