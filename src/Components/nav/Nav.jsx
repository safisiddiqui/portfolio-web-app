import React, { useState } from "react";
import "../nav/Nav.styles.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("");

  const handleAbout = () => {
    setActiveNav("#about");
  };

  const handleHome = () => {
    setActiveNav("#");
  };

  const handleExperience = () => {
    setActiveNav("#experience");
  };

  const handlePortfolio = () => {
    setActiveNav("#portfolio");
  };

  const handleContact = () => {
    setActiveNav("#contact");
  };
  return (
    <nav>
      <a
        href="#"
        onClick={handleHome}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={handleAbout}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUserAdd />
      </a>
      <a
        href="#experience"
        onClick={handleExperience}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#portfolio"
        onClick={handlePortfolio}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#contact"
        onClick={handleContact}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
