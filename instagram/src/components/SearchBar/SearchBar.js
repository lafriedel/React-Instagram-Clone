import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCompass,
  faHeart,
  faUser
} from "@fortawesome/free-regular-svg-icons";
import "./SearchBar.css";

import Logo from "../../img/instagram-logo.png";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-logo-container">
      <FontAwesomeIcon icon={faInstagram} />
      <img className="ig-logo" alt="Instagram logo" src={Logo} />
      </div>

      <div className="search-input-container" placeholder="Search">
        <input type="text" />
      </div>
      <div className="search-icons-container">
        <FontAwesomeIcon icon={faCompass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default SearchBar;
