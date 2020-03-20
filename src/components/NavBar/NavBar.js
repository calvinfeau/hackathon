import React from "react";
import BasicMenu from "./BasicMenu";
import NarrowMenu from "./NarrowMenu";
import '../../style/navbar.scss';

const NavBar = () => {
  return ( 
    <div id="navbar">
      <BasicMenu />
      <NarrowMenu />
    </div>
   );
}
 
export default NavBar;