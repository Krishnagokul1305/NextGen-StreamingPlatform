import { arrival, avengers, jb, testMovieTile, testMovieTile2 } from "../../assets/index";
import Carousel from "../../Components/Carousel";
import NavBar from "../../Components/NavBar";
import Movie from "./Movie";

function MovieCarousel() {
  const moviesData = [
    {
      background:
        "https://images2.alphacoders.com/118/1187424.jpg",
      poster: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f2c530130018421.617781321b26c.jpg",
      titleImage: testMovieTile2,
      rating: "CBFC: U/A",
      genres: ["Action", "Adventure"],
      duration: "2h 28m",
      description:
        "The movie is inspired by the real-life incident in Hiroshima and Nagasaki.",
      trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg", // Add your video URL here
    },
    {
      background:
        "https://preview.redd.it/just-watched-arrival-2016-for-the-first-time-what-an-v0-ysz3ijamo44c1.jpg?width=640&crop=smart&auto=webp&s=acf484b9ba694e98c1e300e2f34c4599a6d24e52",
      poster: "https://i.pinimg.com/originals/8a/8b/34/8a8b34736490b9e521d9efc92d553c2c.png",
      titleImage: arrival,
      rating: "CBFC: U",
      genres: ["Drama", "Biography"],
      duration: "1h 50m",
      description:
        "A touching story of a musician who overcomes all odds to achieve his dreams.",
      trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg", // Add your video URL here
    },
    {
      background:
        "https://live.staticflickr.com/5755/22355490820_165a439632_b.jpg",
      poster: "https://img.rgstatic.com/content/movie/b9470b0f-b6cc-46b6-a892-9acc49788186/poster-500.jpg",
      titleImage:jb,
       rating: "CBFC: U/A",
      genres: ["Sci-Fi", "Thriller"],
      duration: "2h 15m",
      description:
        "A futuristic tale of artificial intelligence gaining control over human minds.",
      trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg", // Add your video URL here
    },
    {
      background: "https://images2.alphacoders.com/100/thumb-1920-1001031.jpg",
      poster: "https://i.pinimg.com/736x/21/d6/21/21d62106e83e8bddfa41024dfc195356.jpg",
      titleImage: avengers,
      rating: "CBFC: A",
      genres: ["Horror", "Mystery"],
      duration: "2h 05m",
      description:
        "A group of friends faces terrifying secrets hidden in an abandoned mansion.",
      trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg", // Add your video URL here
    },
    {
      background:
        "https://i.gadgets360cdn.com/large/Oppenheimer_1658473809872.jpg",
      poster: "https://wallpapers.com/images/hd/oppenheimer-movie-poster-y59qclp4637z48oi.jpg",
      titleImage: testMovieTile,
      rating: "CBFC: U/A",
      genres: ["Comedy", "Romance"],
      duration: "1h 45m",
      description:
        "A light-hearted romantic comedy set against the backdrop of a bustling city.",
      trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg", // Add your video URL here
    },
  ];
  
  return (
    <div className="h-screen relative">
        <NavBar/>
   
      <Carousel>
        {moviesData.map((movie, index) => (
          <Movie key={index} movieData={movie} />
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
