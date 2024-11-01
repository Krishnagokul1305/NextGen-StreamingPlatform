import Slider from "../../Components/Slider";

function MovieSlider({ genre, data, Component}) {
  return (
    <div className="text-white my-10 space-y-2">
      <h1 className="text-2xl font-bold">{genre}</h1>
      <Slider
        data={data}
        renderItem={(imageUrl, index) => (
          <Component key={index} imageUrl={imageUrl} index={index} />
        )}
      />
    </div>
  );
}

export default MovieSlider;
