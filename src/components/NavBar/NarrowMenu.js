import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import heart from "../../assets/heart.png";

const NarrowMenu = () => {
    // the state 0 means the page just loaded so the menu should not have the open nor the close animation
    const [ menu, setMenu ] = useState(0);
    let menuIsOpen = menu == 2 ? 'menu-open' : menu == 1 ? 'menu-close' : '';

    return (   
        <div id="navbar-narrow-container">
            <div id="navbar-text-closed">
                <div>
                    <a href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer">
                        <img src={heart} alt="heart image" />
                    </a>
                </div>
                <div>
                    <Link to="/">
                        <img src={logo} alt="safeparking logo" />
                    </Link>
                </div>
                <i onClick={() => setMenu(2)} className="material-icons">menu</i>
            </div>
            <div id="navbar-text-open" className={menuIsOpen}>
                <a onClick={() => setMenu(1)} href="https://www.safeparkingla.org/green-streets" target="_blank" rel="noopener noreferrer">
                    FIND&nbsp;SPOT
                </a>
                <a onClick={() => setMenu(1)} href="https://www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">
                    STORIES
                </a>
                <a onClick={() => setMenu(1)} href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">
                    ABOUT
                </a>
                <i onClick={() => setMenu(1)} className="material-icons">close</i>
            </div>     
        </div>
    );
};
 
export default NarrowMenu;