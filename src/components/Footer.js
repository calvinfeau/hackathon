import React, {Component} from "react";
import '../style/footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    e.preventDefault();
    this.setState(state => ({clicked: !state.clicked}));
  };

  render() {
    return (
      <div id="footer">
        <div>
          <a href="https://www.facebook.com/SafeParkingLA/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square footer-fabs" />
          </a>
          <a href="https://www.instagram.com/safeparking_la/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram footer-fabs" />
          </a>
          <a href="mailto:info@safeparkingla.org">
            <i className="far fa-envelope footer-fabs" />
          </a>
        </div>
        <div>
          <a href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">
            About
          </a>
          <a href="https://www.safeparkingla.org/faq" target="_blank" rel="noopener noreferrer">
            FAQ
          </a>
          <a href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer">
            Donate
          </a>
          <a href="https://www.safeparkingla.org/contact" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
          <a href="#" clicked={`${this.state.clicked}`} onClick={this.handleClick}>
            Contribute
          {this.state.clicked ? <span clicked={`${this.state.clicked}`}>Coming&nbsp;soon!</span> : <span></span>}
          </a>
        </div>
      </div>
    );
  };
};

export default Footer;