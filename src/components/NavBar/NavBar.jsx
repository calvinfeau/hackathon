import React, { Component } from "react";
import styled from "styled-components";
import heart from "./heart.png";
import logo from "./logo.png";
import "./NavBar.css";


const Wrapper = styled.div`
top: 0;
position: sticky;
width: 100%;
padding: 2% 5%;
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
z-index: 10;
letter-spacing: 1.5px;
`;

const Div1 = styled.div`
>a>img {
  height: 50px;
}`;
const Div2 = styled.div``;
const Div3 = styled.div`
display: flex;
align-items: flex-end;
color: black;

>a {
  color: black;
  font-weight: 700;
  font-size: 18px;
  padding: 0 5%;
  font-family: 'Montserrat', sans-serif;
}
>a:hover {
  text-decoration: none;
}
>a>img {
  height: 50px;
}
`;



class Nav extends Component {
  render() {
    return (
      <Wrapper>
        <Div1>
          <a href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="safeparking logo" />
          </a>
        </Div1>
        <Div2></Div2>
        <Div3>
          <a href="https://www.safeparkingla.org/green-streets" target="_blank" rel="noopener noreferrer">FIND&nbsp;SPOT</a>
          <a href="https://www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">STORIES</a>
          <a href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">ABOUT</a>
          <a href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer"><img src={heart} alt="heart image" /></a>
        </Div3>
      </Wrapper>
    )
  }
}

// const NavBar = props => {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="nav-icons">
//         <div className="donate">
//           <a class="navbar-brand" href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer">
//             <img id="heart-img" src={heart} alt="heart image" />
//           </a>
//           <img className="logo" src={logo} alt="logo" />
//         </div>
//         <div
//           class="collapse navbar-collapse justify-content-end mr-auto mt-2"
//           id="navbarNavAltMarkup"
//         >
//           <div class="navbar-nav">
//             <a class="nav-item nav-link active" href="#">
//               Home <span class="sr-only">(current)</span>
//             </a>
//             <a class="nav-item nav-link" href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">
//               About
//             </a>
//             <a class="nav-item nav-link" href="https://www.safeparkingla.org/green-streets" target="_blank" rel="noopener noreferrer">
//               Find Spot
//             </a>
//             <a class="nav-item nav-link disabled" href="https://www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">
//               Stories
//             </a>
//           </div>
//         </div>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon" />
//         </button>
//       </div>
//     </nav>
//   );
// };

export default Nav;
