import React from 'react';
import styled, {css} from "styled-components";


const Wrapper2 = styled.div`
color: black;
height: 40vh;
width: 100vw;
background-color: #D7E3EC;
display: flex;
flex-direction: column;
font-size: 1.2vmax;

@media screen and (max-width: 1100px) {
  height: 25vh;
  text-align: center;
}
`;

const Title2 = styled.div`
font-weight: 700;
height: 30%;
display: flex;
align-items: flex-end;
justify-content: center;
font-size: 1.5vmax;
letter-spacing: 1.5px;

@media screen and (max-width: 1100px) {
  font-size: 1.7vmax;
}
`;

const Items = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 70%;
`;

const Item = styled(Items)`
flex-direction: column;
justify-content: space-between;
`;

const Section2 = () => {
    return ( 
        <Wrapper2>
        <Title2>The Process</Title2>
        <Items>
            <Item>STEP 1 <i className="material-icons" style={{fontSize: "3vmax"}}>assignment</i> Fill out safe parking&nbsp;form</Item>
            <Item>STEP 2 <i className="material-icons" style={{fontSize: "3vmax"}}>headset_mic</i> We will contact you&nbsp;in&nbsp;24 hrs</Item>
            <Item>STEP 3 <i className="material-icons" style={{fontSize: "3vmax"}}>local_parking</i> Receive a parking&nbsp;permit</Item>
        </Items>
        </Wrapper2>
     );
};
 
export default Section2;