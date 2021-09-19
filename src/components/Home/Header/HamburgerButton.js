import { useEffect, useRef, useState } from "react";
import "./_hamburgerButton.css";
const HamburgerButton = ({ isActive }) => {
  const [open, setOpen] = useState(false);
  const menuBtnRef = useRef(null);
  const hanldeClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  useEffect(() => {
    open
      ? menuBtnRef.current.classList.add("open")
      : menuBtnRef.current.classList.remove("open");
    isActive(open);
  }, [open]);

  return (
    <div ref={menuBtnRef} onClick={hanldeClick} className="menu-btn">
      <div className="menu-btn__burger"></div>
    </div>
  );
};

export default HamburgerButton;
