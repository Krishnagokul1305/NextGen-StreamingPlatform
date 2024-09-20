import MovieCompare from "../Features/Movie/MovieCompare";
import MovieLander from "../Features/Movie/MovieLander";
import MovieTrending from "../Features/Movie/MovieTrending";

function HomePage() {
  return (
    <div>
      <MovieLander />
      <MovieTrending/>
      <MovieCompare/>
    </div>
  );
}

export default HomePage;
