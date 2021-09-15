import { useContext, useEffect, useState } from "react";
import Gif from "../Gif/Gif";
import Search from "../Search/Search";
import { searchGif } from "../../api/searchGif";
import ContextGifs from "../../context/GifsContext";

const Home = () => {
  const [keyWord, setKeyword] = useState("dbz");
  const { gifs, setGifs } = useContext(ContextGifs);

  useEffect(() => {
    searchGif(keyWord).then((res) => {
      setGifs([...res.data]);
    });
  }, [keyWord]);
  return (
    <div>
      <Search
        onSubmit={(searchString) => {
          setKeyword(searchString);
        }}
      />
      <div className="list__gifs">
        {gifs?.map((gif) => {
          return <Gif key={gif.id} gif={gif} />;
        })}
      </div>
    </div>
  );
};

export default Home;
