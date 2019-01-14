import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

import Logo from '../../img/instagram-logo.png';
const SearchBar = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faInstagram} />
            <img src={Logo} />
            <input type="text" />
            <FontAwesomeIcon icon={faCompass} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faUser} />
        </div>
    );
}


export default SearchBar;