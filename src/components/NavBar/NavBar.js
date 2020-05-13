import React, {useContext} from "react";
import LargeMenu from "./LargeMenu";
import NarrowMenu from "./NarrowMenu";
import {ViewportContext} from "../../context/ViewportContext";
import '../../style/components/NavBar/navbar.scss';

const NavBar = () => {
  const { width, height } = useContext(ViewportContext);

  return ( 
    <div id="navbar">
      {(width <= 1024 && width < height) || (height >= 1367 && width < height) ? <NarrowMenu /> : <LargeMenu /> }
    </div>
   );
};
 
export default NavBar;