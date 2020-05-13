import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import heart from "../../assets/heart.png";

const MenuOpen = (props) => 
    <div id="navbar-text-open">
        <a onClick={() => props.setMenu(!props.menu)} href="https://www.safeparkingla.org/green-streets" target="_blank" rel="noopener noreferrer">
            FIND&nbsp;SPOT
        </a>
        <a onClick={() => props.setMenu(!props.menu)} href="https://www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">
            STORIES
        </a>
        <a onClick={() => props.setMenu(!props.menu)} href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">
            ABOUT
        </a>
        <div>
            <i onClick={() => props.setMenu(!props.menu)} className="material-icons">dehaze</i>
        </div>
    </div>
;

const MenuClose = (props) => 
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
        <div>
            <i onClick={() => props.setMenu(!props.menu)} className="material-icons">dehaze</i>
        </div>
    </div>
;

const NarrowMenu = () => {
    const [menu, setMenu] = useState(false);

    return ( 
        <div id="navbar-layout-narrow">
            { menu ? <MenuOpen menu={menu} setMenu={setMenu} /> : <MenuClose menu={menu} setMenu={setMenu} /> }
        </div>
     );
};
 
export default NarrowMenu;