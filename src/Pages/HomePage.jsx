import MovieCarousel from "../Features/Movie/MovieCarousel";
import MovieCompare from "../Features/Movie/MovieCompare";
import MovieTrending from "../Features/Movie/MovieTrending";

function HomePage() {
  return (
    <div>
      <MovieCarousel />
      <MovieTrending />
      <MovieCompare />
    </div>
  );
}

export default HomePage;
