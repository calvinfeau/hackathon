import React, {Component} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
background-color: #1b1b1b
height: 30vh;
width: 100vw;
padding: 5vh 0;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 1100px) {
  height: 20vh;
  padding: 0;
}
@media screen and (max-width: 1100px) and (orientation: landscape) {
  height: 30vh;
}
`;

const Flex = styled.div`
height: 50%;
display: flex;
justify-content: space-around;
`;

const Icons = styled(Flex)`
height: 60%;
width: 20%;
align-items: center;
padding: 0 0 5vh;
>a {
  font-size: 2vmax;
  padding: 0.4vmax 1vmax;
  background-color: white;
  color: #1b1b1b;
  border-radius: 50%;
}

@media screen and (max-width: 1100px) {
  width: 50%;
  padding: 0;
  >a {
    font-size: 2.5vmax;
    padding: 0.8vmax 1.6vmax;
    background-color: white;
    color: #1b1b1b;
    border-radius: 50%;
  }
}
@media screen and (max-width: 500px) {
  width: 75%;
}
`;

const Links = styled(Flex)`
height: 40%;
width: 50%;
>a, >span {
  width: 10%;
  color: white;
  text-align: center;
  :hover {
    text-decoration: none;
  }
}
>span {
  :hover {
    cursor: pointer;
  }
}
@media screen and (max-width: 1100px) {
  width: 70%;
  font-size: 1.5vmax;
  >a, >span {
    width: 20%;
    text-align: center;
  }
}
@media screen and (max-width: 500px) {
  width: 90%;
  font-size: 1.2vmax;
}
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
          <a href="https://www.facebook.com/SafeParkingLA/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square footer-fabs" /></a>
          <a href="https://www.instagram.com/safeparking_la/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram footer-fabs" /></a>
          <a href="mailto:info@safeparkingla.org"><i className="far fa-envelope footer-fabs" /></a>
        </Icons>
        <Links>
          <a href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">About</a>
          <a href="https://www.safeparkingla.org/faq" target="_blank" rel="noopener noreferrer">FAQ</a>
          <a href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer">Donate</a>
          <span clicked={`${this.state.clicked}`} onClick={this.handleClick}>Contribute<br />
          {this.state.clicked ? 
            <span clicked={`${this.state.clicked}`}>Coming&nbsp;soon!</span> : <span></span>
          }
          </span>
          <a href="https://www.safeparkingla.org/contact" target="_blank" rel="noopener noreferrer">Contact</a>
        </Links>
      </Wrapper>
    )
  }
}

export default Footer;