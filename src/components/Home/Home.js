import { useContext, useEffect, useState } from "react";
import Gif from "../Gif/Gif";
import Search from "../Search/Search";
import { searchGif } from "../../api/searchGif";
import ContextGifs from "../../context/GifsContext";
import buscaGif from "../../assets/images/BuscaGif.png";
import buscaGifLogo from "../../assets/images/Logo-buscalo.png";
import "./_home.css";
import HamburgerButton from "./Header/HamburgerButton";

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
      <header>
        <div className="header__logo">
          <img src={buscaGifLogo} alt="Logo busca gif" />
        </div>
        <HamburgerButton />
        <nav>
          <ul>
            <li>Reactions</li>
            <li>Entretainment</li>
            <li>Sports</li>
            <li>Stickers</li>
          </ul>
        </nav>
      </header>
      <div className="logo">
        <img className="logo__img" src={buscaGif} alt="Busca gif logo" />
      </div>
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
    </>
  );
};

export default Home;
