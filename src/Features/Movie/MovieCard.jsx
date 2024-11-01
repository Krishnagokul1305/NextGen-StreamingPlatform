function MovieCard({ imageUrl }) {
  return (
    <div className="h-[170px] md:h-[210px] w-[250px] md:w-[300px] flex-none rounded-lg border border-gray-500 overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer">
      <img src={imageUrl} alt="" className="w-full h-full" />
    </div>
  );
}

export default MovieCard;
