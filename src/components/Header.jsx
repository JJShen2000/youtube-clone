import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef(null);

  const expandInput = () => {
    setExpanded(true);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to={`/`}>
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="header__center">
        <div className={`header__input ${expanded ? "expanded" : ""}`}>
          {expanded && <SearchSharpIcon className="header__leftSearchIcon" />}
          <input
            onClick={expandInput}
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            type="text"
            placeholder="Search"
            ref={inputRef}
          />
        </div>
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
        <MicIcon className="header__mic" />
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <NotificationsNoneSharpIcon className="header__icon" />
        <Avatar
          alt="JJShen"
          src="https://avatars.githubusercontent.com/u/40858520?v=4"
          className="header__icon"
        />
      </div>
    </div>
  );
};

export default Header;
