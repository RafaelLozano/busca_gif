import "./_gif.css";
const Gif = (props) => {
  const { gif } = props;
  return (
    <div>
      {/* <h1>{gif.title}</h1> */}
      <p>{gif.title}</p>
      <img
        className="gif"
        src={gif.images.downsized_medium.url}
        alt={gif.title}
      />
    </div>
  );
};

export default Gif;
