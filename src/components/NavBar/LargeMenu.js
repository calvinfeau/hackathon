import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import heart from "../../assets/heart.png";

const LargeMenu = () => 
    <div id="navbar-large-container">
        <Link className={"link-image"} to="/">
            <img src={logo} alt="safeparking logo" />
        </Link>
        <div id="navbar-text">
            <a href="https://www.safeparkingla.org/green-streets" target="_blank" rel="noopener noreferrer">
                FIND&nbsp;SPOT
            </a>
            <a href="https://www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">
                STORIES
            </a>
            <a href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">
                ABOUT
            </a>
            <a className={"link-image"} href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer">
                <img src={heart} alt="heart image" />
            </a>
        </div>
    </div>
;
 
export default LargeMenu;