import React, {useState} from "react";
import '../style/app/footer.scss';

const Footer = () => {

  const [contribute, setContribute] = useState(false);

  return ( 
    <div id="footer">
      <div>
        <div>
          <a href="https://www.facebook.com/SafeParkingLA/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square footer-fabs" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/safeparking_la/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram footer-fabs" />
          </a>
        </div>
        <div>
          <a href="mailto:info@safeparkingla.org">
            <i className="far fa-envelope footer-fabs" />
          </a>
        </div>
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
        <div>
          <span onClick={() => setContribute(!contribute)}>
            Contribute
          </span>
          <span>
            {contribute ? 'Coming soon!' : ''}
          </span>
        </div>
      </div>
    </div>
  );
};
 
export default Footer;