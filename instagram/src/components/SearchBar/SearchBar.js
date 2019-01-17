import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faCompass,
  faHeart,
  faUser
} from "@fortawesome/free-regular-svg-icons";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import "./SearchBar.css";

import Logo from "../../img/instagram-logo.png";

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid lightgrey;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 10px;
  background: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-evenly;

  .magnify {
    position: relative;
    top: 19px;
    left: 48px;
    color: grey;
    
  }

  input[type=text] {
    width: 100%;
    padding: 5px;
    background: whitesmoke;
    border: 1px solid lightgrey;
    border-radius: 2px;
    font-size: 0.8rem;

    &::placeholder {
      text-align: center;
    }

    &:focus {
      outline: none;
      background: white;
    }

    &:focus::placeholder {
      text-align: left;
    }
  }
`;

const IconContainer = styled.div`
  padding-right: 20px;
  border-right: 1px solid grey;
`;

const RightIconsContainer = styled(LogoContainer)`
  width: 150px;
`;


const SearchBar = props => {
  return (
    <SearchContainer>
      <LogoContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </IconContainer>
        <img className="ig-logo" alt="Instagram logo" src={Logo} />
      </LogoContainer>

      <LogoContainer>
        <form onSubmit={props.handleSearch}>
          <div>
            <FontAwesomeIcon className="magnify" icon={faSearch} size="1x" />
            <input type="text" placeholder="Search" name="searchTerm" onChange={props.handleChange}/>
          </div>

        </form>
      </LogoContainer>

      <RightIconsContainer>
        <FontAwesomeIcon size="2x" icon={faCompass} />
        <FontAwesomeIcon size="2x" icon={faHeart} />
        <FontAwesomeIcon size="2x" icon={faUser} />
      </RightIconsContainer>
    </SearchContainer>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
}

export default SearchBar;
