import React, { useEffect, useRef, useState } from "react";
import buscaGifLogo from "../../../assets/images/Logo-buscalo.png";
import HamburgerButton from "./HamburgerButton";
import "./_header.css";
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);
  const handleChange = () => {
    if (showMobileMenu) {
      mobileMenuRef.current.style.animation = "showMenu .5s ease-in";
      mobileMenuRef.current.style.right = "-100%";
    } else {
      mobileMenuRef.current.style.animation = "hideMenu .5s ease-out";
      mobileMenuRef.current.style.right = "0";
    }
  };
  return (
    <>
      <header>
        <div className="header__logo">
          <img src={buscaGifLogo} alt="Logo busca gif" />
        </div>
        <div className="hamburger" onClick={handleChange}>
          <HamburgerButton
            isActive={(value) => {
              setShowMobileMenu(value);
            }}
          />
        </div>

        <nav>
          <ul>
            <li>Reactions</li>
            <li>Entretainment</li>
            <li>Sports</li>
            <li>Stickers</li>
          </ul>
        </nav>
      </header>

      <div ref={mobileMenuRef} className="mobile__menu">
        HOLA MENU ACTIVO
      </div>
    </>
  );
};

export default Header;
