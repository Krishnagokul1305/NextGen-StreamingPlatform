import MovieComparisonCard from "./MovieComparisonCard";

function MovieCompare() {
  return (
    <div className="h-[40vh] p-10 ">
      <h1 className="text-2xl font-bold ms-5">Best of Bests</h1>
      <div className=" flex items-center justify-center">
        <MovieComparisonCard />
        <h1 className="text-5xl">vs</h1>
        <MovieComparisonCard />
      </div>
    </div>
  );
}

export default MovieCompare;
