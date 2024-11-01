import { HiOutlineSearch } from "react-icons/hi";

function MovieComparisonCard() {
  return (
    <div className="min-w-[45%] m-5 p-5 rounded-lg space-y-7">
      {/* Movie Image */}
      <div className=" h-[250px] bg-[#272727] rounded-lg mb-4 border border-gray-600 p-5">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/f2c530130018421.617781321b26c.jpg"
          alt="Interstellar"
          className="h-full rounded-lg object-cover"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#272727] rounded-lg p-3 mb-4 border border-gray-600">
       <HiOutlineSearch className="text-gray-300"/>
        <input
          type="text"
          placeholder="Select the Movie, Drama, Series"
          className="w-full bg-transparent outline-none text-white placeholder-gray-400 ml-3"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {["Sci-fi", "Horror", "Action", "Romance", "Comedy", "Thriller"].map(
          (genre, index) => (
            <button
              key={index}
              className={`w-full px-4 py-2 rounded-lg ${
                genre === "Sci-fi"
                  ? "bg-[#1e251a] text-white  border border-green-700"
                  : "bg-[#272727] text-gray-300"
              }`}
            >
              {genre}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default MovieComparisonCard;
