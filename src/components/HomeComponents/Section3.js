import React from 'react';
import styled, {css} from "styled-components";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";


const Wrapper3 = styled.div`
// width: 100vw;
// // height: 90vh;
// padding: 5vw;
// display: flex;
// justify-content: space-between;

// @media screen and (min-width: 2100px) {
//   justify-content: space-around;
//   height: 110vh;
// }
// @media screen and (max-width: 1100px) {
//   flex-direction: column;
//   padding: 0;
//   justify-content: start;
//   height: 100%;
// }
`;

const Card = styled.div`
// width: 30%;
// // height: 100%;
// display: flex;
// flex-direction: column;
// align-items: center;
// >img {
//   height: auto;
//   width: 100%;
// }
// ${props => props.card === 1 && css`background-color: #FFEEDA;`}
// ${props => props.card === 2 && css`background-color: #DBEDDD;`}
// ${props => props.card === 3 && css`background-color: #FFF7E2;`}

// @media screen and (min-width: 2100px) {
//   width: 25%;
// }
// @media screen and (max-width: 1100px) {
//   width: 100vw;
//   background-color: white;
//   height: auto;
//   margin-bottom: 10%;
//   >img {
//     height: auto;
//   }
// }
`;

const CardText = styled.div`
// height: 55%;
// padding: 10%;
// display: flex;
// flex-direction: column;
// align-items: center;
// line-height: 1.5;
// font-size: 1vmax;
// letter-spacing: 1.5px;
// >span {
//   font-weight: 700;
//   font-size: 1.5vmax;
//   padding-bottom: 10%;
// }

// @media screen and (min-width: 2100px) {
//   padding-bottom: 5%;
// }
// @media screen and (max-width: 1100px) {
//   padding: 5% 10%;
//   justify-content: start;
//   font-size: 1.8vmax;
//   text-align: center;
//   line-height: 2;
//   >span {
//     font-size: 2.5vmax;
//     padding-bottom: 5%;
// }
// @media screen and (max-width: 500px) {
//   padding: 5%;
//   font-size: 1.5vmax;
// }
// `;

const CardButton = styled.a`
// width: 75%;
// padding: 0.5vmax;
// margin-top: auto;
// background-color: transparent;
// color: #12679b;
// font-size: 0.8vmax;
// text-align: center;
// font-weight: 700;
// border: 1px solid #12679b;
// border-radius: 30px;
// :hover{
//   color: white; 
//   background-color: #12679b;
//   text-decoration: none;
// }

// @media screen and (max-width: 1100px) {
//   padding: 2%;
//   font-size: 1.8vmax;
//   width: 85%;
//   margin-top: 10%;
//   ${props => props.card === 1 && css`--current-color: #E59638;`}
//   ${props => props.card === 2 && css`--current-color: #297F32;`}
//   ${props => props.card === 3 && css`--current-color: #E2B731;`}
//   color: var(--current-color);
//   border-color: var(--current-color);
//   :hover{
//     color: white; 
//     background-color: var(--current-color);
//     text-decoration: none;
//   }
// }
// @media screen and (max-width: 500px) {
//   font-size: 1.5vmax;
//   width: 85%;
//   margin-top: 10%;
//   padding: 5%;
//   ${props => props.card === 1 && css`--current-color: #E59638;`}
//   ${props => props.card === 2 && css`--current-color: #297F32;`}
//   ${props => props.card === 3 && css`--current-color: #E2B731;`}
//   color: var(--current-color);
//   border-color: var(--current-color);
//   :hover{
//     color: white; 
//     background-color: var(--current-color);
//     text-decoration: none;
//   }
// }
`;

const Section3 = () => {
    return ( 
      <Wrapper3 id="section3">
        <Card card={1}>
          <img src={image2} alt="couple checking hanfd with someone"/>
          <CardText>
              <span>WHO WE SERVE</span>
              <span>
                In Los Angeles County, there are over 15,700 people living in their vehicles each night. These vehicle dwellers represent over 25% of the population of people experiencing homelessness&nbsp;in&nbsp;LA&nbsp;County.
              </span>
          <CardButton card={1} href="https:www.safeparkingla.org/who-we-serve" target="_blank" rel="noopener noreferrer">READ MORE STORIES</CardButton>
          </CardText>
        </Card>

        <Card card={2}>
          <img src={image3} alt="man holding a dog"/>
          <CardText>
          <span>CAR BUT NO HOME?</span>
          <span>
            Safe Parking LA is an example of a relatively new effort on the West Coast to assist a specific group of individuals before they fall further to life on the street. Many of them may be working or have some source of income and are homeless for the&nbsp;first&nbsp;time. 
          </span>
          <CardButton card={2} href="https:www.safeparkingla.org/news" target="_blank" rel="noopener noreferrer">READ MORE NEWS</CardButton>
          </CardText>
        </Card>

        <Card card={3}>
          <img src={image4} alt="veterans"/>
          <CardText>
          <span>FOR VETERANS</span>
          <span>
            SafeParkingLA provides a safe and legal overnight parking place for veterans and their families who are currently living in their vehicles. We are in a secure lot with a portable bathroom&nbsp;and&nbsp;wash&nbsp;station.
          </span>
          <CardButton card={3} href="https:www.safeparkingla.org/resources-for-veterans" target="_blank" rel="noopener noreferrer">MORE INFO</CardButton>
          </CardText>
        </Card>
      </Wrapper3>
     );
}
 
export default Section3;