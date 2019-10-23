import React from "react";

const Footer = props => {
  return (
    <div>
      <footer>
        <div className="footer-icons">
          <a
            className="icon-links"
            href="https://www.facebook.com/SafeParkingLA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-square footer-fabs" />
          </a>
          <a
            className="icon-links"
            href="https://www.instagram.com/safeparking_la/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram footer-fabs" />
          </a>
          <a className="icon-links" href="mailto:info@safeparkingla.org">
            <i class="far fa-envelope footer-fabs" />
          </a>
        </div>
        <div className="footer-tags">
          <a className="footer-links" href="https://www.safeparkingla.org/about" target="_blank" rel="noopener noreferrer">
            About
          </a>
          <a className="footer-links" href="https://www.safeparkingla.org/faq" target="_blank" rel="noopener noreferrer">
            FAQ
          </a>
          <a className="footer-links" href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la" target="_blank" rel="noopener noreferrer">
            Donate
          </a>
          <a className="footer-links" href="#">
            Contribute
          </a>
          <a className="footer-links" href="https://www.safeparkingla.org/contact" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};


export default Footer;
