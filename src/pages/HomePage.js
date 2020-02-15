import React from "react";
import '../style/homepage/homepage.scss';
import Section1 from "../components/HomeComponents/Section1.js";
import Section2 from "../components/HomeComponents/Section2.js";
import Section3 from "../components/HomeComponents/Section3.js";
import Section4 from "../components/HomeComponents/Section4.js";

const HomePage = () => (
  <div>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <div id="visit-sfpkla-link"><a href="https://www.safeparkingla.org" target="_blank" rel="noopener noreferrer">VISIT SAFEPARKINGLA.COM</a></div>
  </div>
);

export default HomePage;