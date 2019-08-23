import React from "react";

const Footer = props => {
  return (
    <div>
      <footer>
        <div className="footer-icons">
          <a
            className="icon-links"
            href="https://www.facebook.com/SafeParkingLA/"
            target="none"
          >
            <i class="fab fa-facebook-square footer-fabs" />
          </a>
          <a
            className="icon-links"
            href="https://www.instagram.com/safeparking_la/"
            target="none"
          >
            <i class="fab fa-instagram footer-fabs" />
          </a>
          <a className="icon-links" href="mailto:info@safeparkingla.org">
            <i class="far fa-envelope footer-fabs" />
          </a>
        </div>
        <div className="footer-tags">
          <a className="footer-links" href="#">
            About
          </a>
          <a className="footer-links" href="#">
            FAQ
          </a>
          <a className="footer-links" href="#">
            Donate
          </a>
          <a className="footer-links" href="#">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
