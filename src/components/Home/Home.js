import { useContext, useEffect, useState } from "react";
import Gif from "../Gif/Gif";
import Search from "../Search/Search";
import { searchGif } from "../../api/searchGif";
import ContextGifs from "../../context/GifsContext";
import buscaGif from "../../assets/images/BuscaGif.png";
import "./_home.css";
import trendingIcon from "../../assets/icons/trending__icon.png";
import Header from "./Header/Header";
const Home = () => {
  const [keyWord, setKeyword] = useState("dbz");
  const { gifs, setGifs } = useContext(ContextGifs);

  useEffect(() => {
    searchGif(keyWord).then((res) => {
      setGifs([...res.data]);
    });
  }, [keyWord]);
  return (
    <>
      <Header />
      <div className="logo">
        <img className="logo__img" src={buscaGif} alt="Busca gif logo" />
      </div>
      <Search
        onSubmit={(searchString) => {
          setKeyword(searchString);
        }}
      />
      <section className="trending__section">
        <img
          className="trending__icon"
          src={trendingIcon}
          alt="trending-icon"
        />
        <h2>Trending</h2>
      </section>
      <div className="list__gifs">
        {gifs?.map((gif) => {
          return <Gif key={gif.id} gif={gif} />;
        })}
      </div>
    </>
  );
};

export default Home;
