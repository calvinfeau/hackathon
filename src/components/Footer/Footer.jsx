import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled, {css} from "styled-components";

const Wrapper = styled.div`
background-color: #1b1b1b
height: 30vh;
width: 100vw;
padding: 5vh 0;
display: flex;
flex-direction: column;
align-items: center;
`;

const Flex = styled.div`
height: 50%;
display: flex;
justify-content: space-around;
`;

const Icons = styled(Flex)`
height: 60%;
width: 25%;
align-items: center;
padding: 0 0 5vh;
>a {
  font-size: 30px;
  padding: 7px 15px;
  background-color: white;
  color: #1b1b1b;
  border-radius: 50%;
}
`;

const Links = styled(Flex)`
height: 40%;
width: 50%;
>a, >span {
  color: white;
  width: 5vw;
  :hover {
    text-decoration: none;
  }
}
>span {
  :hover {
    cursor: pointer;
  }
}
`;

const Note = styled.div`
display: none;
color: white;
${props => props.clicked && css`
display: block;
`}
`;


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({clicked: !state.clicked}));
  }
  render() {
    return (
      <Wrapper>
        <Icons>
          <a href="https://www.facebook.com/SafeParkingLA/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square footer-fabs" /></a>
          <a href="https://www.instagram.com/safeparking_la/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram footer-fabs" /></a>
          <a href="mailto:info@safeparkingla.org"><i class="far fa-envelope footer-fabs" /></a>
        </Icons>
        <Links>
          <a href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">About</a>
          <a href="https://www.safeparkingla.org/faq" target="_blank" rel="noopener noreferrer">FAQ</a>
          <a href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer">Donate</a>
          <span clicked={this.state.clicked} onClick={this.handleClick}>Contribute<br /><Note clicked={this.state.clicked}>Coming&nbsp;soon!</Note></span>
          <a href="https://www.safeparkingla.org/contact" target="_blank" rel="noopener noreferrer">Contact</a>
        </Links>
      </Wrapper>
    )
  }
}

export default Footer;