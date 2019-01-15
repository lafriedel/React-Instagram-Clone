import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="ig-icon-container">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>

        <img className="ig-logo" alt="Instagram logo" src={Logo} />
      </div>

      <div className="search-input-container" >
        <input type="text" placeholder="Search" />
      </div>
      <div className="search-icons-container">
        <FontAwesomeIcon size="2x" icon={faCompass} />
        <FontAwesomeIcon size="2x" icon={faHeart} />
        <FontAwesomeIcon size="2x" icon={faUser} />
      </div>
    </div>
  );
};

export default SearchBar;
