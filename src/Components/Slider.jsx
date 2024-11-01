function Slider({ data, renderItem }) {
  return (
    <div className="slider flex items-center gap-5 md:gap-10 overflow-x-scroll overflow-y-hidden md:px-5 py-3">
      {data.map(renderItem)}
    </div>
  );
}

export default Slider;
