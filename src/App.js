import { useEffect, useState } from "react";
import { searchGif } from "./api/searchGif";
import "./App.css";
import Gif from "./components/Gif/Gif";
import Search from "./components/Search/Search";

function App() {
  const [gifs, setGifs] = useState([]);
  const [keyWord, setKeyword] = useState("dbz");
  useEffect(() => {
    searchGif(keyWord).then((res) => {
      setGifs([...res.data]);
    });
  }, [keyWord]);
  return (
    <div className="app">
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
}

export default App;
