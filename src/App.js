import { useEffect, useState } from "react";
import { searchGif } from "./api/searchGif";
import "./App.css";
import Gif from "./components/Gif/Gif";

function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    searchGif("panda").then((res) => {
      setGifs([...res.data]);
    });
  }, []);
  return (
    <div className="app">
      <div className="list__gifs">
        {gifs?.map((gif) => {
          return <Gif key={gif.id} gif={gif} />;
        })}
      </div>
    </div>
  );
}

export default App;
