function MovieCard({ imageUrl }) {
  return (
    <div className="h-[200px] w-[350px] flex-none rounded-lg border border-gray-500 overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer">
      <img src={imageUrl} alt="" className="w-full h-full" />
    </div>
  );
}

export default MovieCard;
