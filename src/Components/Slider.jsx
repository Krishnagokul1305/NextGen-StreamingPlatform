function Slider({ data, renderItem }) {
  return (
    <div className="slider flex items-center gap-10 overflow-x-scroll overflow-y-hidden px-10 py-3">
      {data.map(renderItem)}
    </div>
  );
}

export default Slider;
