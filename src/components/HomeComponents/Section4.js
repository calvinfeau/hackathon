import React, {Component} from 'react';

class Section4 extends Component {
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
      <div id="section4">
        <div>
          HAVE AN OPEN LOT ?
        </div>
        <div>
          Help contribute to our cause and join in a meaningful partnership with Safe&nbsp;Parking&nbsp;LA.
        </div>
        <div>
          <div id="visit-sfpkla-link">
            <a href="https://www.safeparkingla.org" target="_blank" rel="noopener noreferrer">
              VISIT SAFEPARKINGLA.COM
            </a>
          </div>
          <div>
            <a href="#" onClick={this.handleClick} clicked={`${this.state.clicked}`}>
              FIND OUT DETAILS
            </a>
            {this.state.clicked ? <span clicked={`${this.state.clicked}`}>Coming soon!</span> : <span></span>}
          </div>
        </div>
      </div>
    );
  };
};
 
export default Section4;