import Carousel from "../../Components/Carousel";
import NavBar from "../../Components/NavBar";
import Movie from "./Movie";

function MovieCarousel() {
  const moviesData = [
    {
      background:
        "https://c4.wallpaperflare.com/wallpaper/739/262/425/movies-hollywood-movies-wallpaper-preview.jpg",
      poster: "testMovie1",
      titleImage: "testMovieTile1",
      rating: "CBFC: U/A",
      genres: ["Action", "Adventure"],
      duration: "2h 28m",
      description:
        "The movie is inspired by the real-life incident in Hiroshima and Nagasaki.",
    },
    {
      background:
        "https://c4.wallpaperflare.com/wallpaper/364/270/424/movies-hollywood-movies-wallpaper-preview.jpg",
      poster: "testMovie2",
      titleImage: "testMovieTile2",
      rating: "CBFC: U",
      genres: ["Drama", "Biography"],
      duration: "1h 50m",
      description:
        "A touching story of a musician who overcomes all odds to achieve his dreams.",
    },
    {
      background:
        "https://live.staticflickr.com/5755/22355490820_165a439632_b.jpg",
      poster: "testMovie3",
      titleImage: "testMovieTile3",
      rating: "CBFC: U/A",
      genres: ["Sci-Fi", "Thriller"],
      duration: "2h 15m",
      description:
        "A futuristic tale of artificial intelligence gaining control over human minds.",
    },
    {
      background: "https://images2.alphacoders.com/100/thumb-1920-1001031.jpg",
      poster: "testMovie4",
      titleImage: "testMovieTile4",
      rating: "CBFC: A",
      genres: ["Horror", "Mystery"],
      duration: "2h 05m",
      description:
        "A group of friends faces terrifying secrets hidden in an abandoned mansion.",
    },
    {
      background:
        "https://i.gadgets360cdn.com/large/Oppenheimer_1658473809872.jpg",
      poster: "testMovie5",
      titleImage: "testMovieTile5",
      rating: "CBFC: U/A",
      genres: ["Comedy", "Romance"],
      duration: "1h 45m",
      description:
        "A light-hearted romantic comedy set against the backdrop of a bustling city.",
    },
  ];

  return (
    <div className="h-screen relative">
        <NavBar/>
        <div className="h-100 overlay absolute z-50 inset-0"></div>
      <Carousel>
        {moviesData.map((movie, index) => (
          <Movie key={index} movieData={movie} />
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
