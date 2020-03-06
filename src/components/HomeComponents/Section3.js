import React from 'react';
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import '../../style/homepage/section3.scss';

const Section3 = () => {
  return ( 
    <div id="section3">
      <div>
        <img src={image2} alt="couple checking hanfd with someone"/>
        <div>
          <span>
            WHO WE SERVE
          </span>
          <span>
            In Los Angeles County, there are over 15,700 people living in their vehicles each night. These vehicle dwellers represent over 25% of the population of people experiencing homelessness&nbsp;in&nbsp;LA&nbsp;County.
          </span>
          <a href="https:www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">
            READ MORE STORIES
          </a>
        </div>
      </div>
      <div>
        <img src={image3} alt="man holding a dog"/>
        <div>
          <span>
            CAR BUT NO HOME?
          </span>
          <span>
            Safe Parking LA is an example of a relatively new effort on the West Coast to assist a specific group of individuals before they fall further to life on the street. Many of them may be working or have some source of income and are homeless for the&nbsp;first&nbsp;time. 
          </span>
          <a href="https:www.safeparkingla.org/news" target="_blank" rel="noopener noreferrer">
            READ MORE NEWS
          </a>
        </div>
      </div>
      <div>
        <img src={image4} alt="veterans"/>
        <div>
          <span>
            FOR VETERANS
          </span>
          <span>
            SafeParkingLA provides a safe and legal overnight parking place for veterans and their families who are currently living in their vehicles. We are in a secure lot with a portable bathroom&nbsp;and&nbsp;wash&nbsp;station.
          </span>
          <a href="https:www.safeparkingla.org/resources-for-veterans" target="_blank" rel="noopener noreferrer">
            MORE INFO
          </a>
        </div>
      </div>
    </div>
  );
};
 
export default Section3;