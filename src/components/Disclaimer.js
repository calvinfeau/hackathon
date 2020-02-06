import React from 'react';
import styled, {css} from "styled-components";
import disclaimerIcon from "../assets/disclaimer-icon.svg";
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

const Disclaimer = () => {
    return ( 
        <Wrapper>
            <img src={disclaimerIcon}></img>
            <Carousel defaultWait={5000}>
                <Slide right>
                    <SlideContent>
                        This website is a prototype and is not used by the SafeparkingLA&nbsp;organization. 
                        <br />Please make sure to not use personnal relevant&nbsp;information.
                    </SlideContent>
                </Slide>
                <Slide right>
                    <SlideContent>
                        To test the application, click on <b>Find&nbsp;your&nbsp;spot</b> and follow the&nbsp;instructions. 
                        <br />You can complete the entire process or just the first part of&nbsp;the&nbsp;form.
                    </SlideContent>
                </Slide>
                <Slide right>
                    <SlideContent>To verify the profile created by your&nbsp;input, 
                        <br />simply go back to the home page and click on <b>Retrieve&nbsp;your&nbsp;application</b>.
                        </SlideContent>
                </Slide>
            </Carousel>
        </Wrapper>
    );
}
 
export default Disclaimer;

const Wrapper = styled.div`
position: fixed;
z-index: 2;    
right: 25px;
bottom: 25px;
height: 80px;
width: 80px;
padding: 20px;
border-radius: 25px;
background-color: #f5f5f5;
box-shadow: 0px 0px 5px 1px #f5f5f5;
-webkit-transition: width 0.3s, height 0.3s;
transition: width 0.3s, height 0.3s;
display: flex;
justify-content: center;
align-items: center;

>div {
    opacity: 0;
    display: none;
    animation: disclaimer 0.2s linear 0.3s both;
    animation-play-state: paused;   
}

:hover, :active {
    cursor: pointer;
    width: 300px;
    height: 200px;
    justify-content: space-between;
    >img {
        display: none;
    }
    >div {
        animation-play-state: running;
        display: block;
    }
}

@keyframes disclaimer {
    from {opacity: 0;}
    to {opacity: 1;}
}
`;

const width = '260px', height='160px';
const Container = styled.div`
position: relative;
overflow: hidden;
width: ${width};
height: ${height};
display: flex;
flex-direction: column;
justify-content: center;
`;
const Children  = styled.div`
width: ${width};
position: relative;
height: 140px;
`;
const SlideContent = styled.div`
padding: 0 20px;
font-size: 10px;
`;
const Arrow = styled.div`
text-shadow: 1px 1px 1px #fff;
z-index: 100;
line-height: ${height};
text-align: center;
position: absolute;
top: 0;
width: 20px;
font-size: 10px;
cursor: pointer;
user-select: none;
${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const Dot = styled.span`
font-size: 20px;
cursor: pointer;
text-shadow: 1px 1px 1px #fff;
user-select: none;
`;
const Dots = styled.div`
text-align: center;
width: ${width};
z-index: 100;
`;

const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
        <Children>
            {children}
            <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
            <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
        </Children>
        <Dots>
            {Array(...Array(total)).map( (val, index) =>
                <Dot key={index} onClick={handleClick} data-position={index}>{index === position ? '● ' : '○ ' }</Dot>
            )}
        </Dots>
    </Container>
);
const Carousel = makeCarousel(CarouselUI);
