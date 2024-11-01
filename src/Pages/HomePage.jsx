import MovieCard from "../Features/Movie/MovieCard";
import MovieCarousel from "../Features/Movie/MovieCarousel";
import MovieCompare from "../Features/Movie/MovieCompare";
import MovieSlider from "../Features/Movie/MovieSlider";
import Trending from "../Features/Movie/Trending";

function HomePage() {
  const data1 = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f2c530130018421.617781321b26c.jpg",
    "https://img.rgstatic.com/content/movie/b9470b0f-b6cc-46b6-a892-9acc49788186/poster-500.jpg",
    "https://i.pinimg.com/736x/21/d6/21/21d62106e83e8bddfa41024dfc195356.jpg",
    "https://wallpapers.com/images/hd/oppenheimer-movie-poster-y59qclp4637z48oi.jpg",
    "https://i.pinimg.com/originals/8a/8b/34/8a8b34736490b9e521d9efc92d553c2c.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f2c530130018421.617781321b26c.jpg",
    "https://img.rgstatic.com/content/movie/b9470b0f-b6cc-46b6-a892-9acc49788186/poster-500.jpg",
  ];

  const data2 = [
    "https://live.staticflickr.com/5755/22355490820_165a439632_b.jpg",
    "https://images2.alphacoders.com/100/thumb-1920-1001031.jpg",
    "https://i.gadgets360cdn.com/large/Oppenheimer_1658473809872.jpg",
    "https://images2.alphacoders.com/118/1187424.jpg",
    "https://preview.redd.it/just-watched-arrival-2016-for-the-first-time-what-an-v0-ysz3ijamo44c1.jpg?width=640&crop=smart&auto=webp&s=acf484b9ba694e98c1e300e2f34c4599a6d24e52",
    "https://live.staticflickr.com/5755/22355490820_165a439632_b.jpg",
    "https://live.staticflickr.com/5755/22355490820_165a439632_b.jpg",
  ];

  return (
    <div>
      <MovieCarousel />

      <Trending data={data1} />
      <div className="px-5">
        <MovieSlider
          genre={"Latest & Trending"}
          data={data2}
          Component={MovieCard}
        />
        <MovieSlider
          genre={"Romance & Drama"}
          data={data2}
          Component={MovieCard}
        />
        <MovieSlider
          genre={"Action & Thriller"}
          data={data2}
          Component={MovieCard}
        />
      </div>
      <MovieCompare />
    </div>
  );
}

export default HomePage;
