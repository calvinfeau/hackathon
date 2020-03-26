import React, {useState} from 'react';
import styled, {css} from "styled-components";
import disclaimerIcon from "../assets/disclaimer-icon.svg";
import leftArrow from "../assets/left-arrow-icon.svg";
import rightArrow from "../assets/right-arrow-icon.svg";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import "../style/app/disclaimer.scss";

const Disclaimer = () => {
    const [currentDisclaimer, setCurrentDisclaimer] = useState(true);

    return (
        <div>
            {currentDisclaimer ?
                <div id="disclaimer">
                    <img src={disclaimerIcon} />
                    <Carousel defaultWait={20000} currentDisclaimer={currentDisclaimer} setCurrentDisclaimer={setCurrentDisclaimer}>
                        <Slide right>
                            <div className="slide-content">
                                This website is not used by SafeparkingLA.
                                <br />
                                <span>Please make sure to not use personnal relevant information!</span>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="slide-content">
                                Click on <span>Find&nbsp;your&nbsp;spot</span> and complete at least the first part of the&nbsp;form
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="slide-content">
                                To verify the profile created by your input, go&nbsp;to <span>Retrieve your&nbsp;application</span>
                            </div>
                        </Slide>
                    </Carousel>
                </div>
            : ''}
        </div>
    );
};

export default Disclaimer;

const Arrow = styled.div`
${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;

const CarouselUI = ({ position, total, handleClick, children, currentDisclaimer, setCurrentDisclaimer}) => {

    return (
    <div id="carouselUI-container">
        <div id="top-container">
            <Arrow className="arrows" onClick={handleClick} data-position={position - 1}>
                <img src={leftArrow} />
            </Arrow>
            <div className="slide-container">
                {children}
            </div>
            <Arrow className="arrows" right onClick={handleClick} data-position={position + 1}>
                <img src={rightArrow} />
            </Arrow>
        </div>
        <div id="bottom-container">
            <div id="dots">
                {Array(...Array(total)).map( (val, index) =>
                    <div className="dot" key={index} onClick={handleClick} data-position={index}>{index === position ? '●' : '○' }</div>
                )}
            </div>
            <div id="close-button" onClick={() => setCurrentDisclaimer(!currentDisclaimer)}>Close</div>
        </div>
    </div>
    );
}

const Carousel = makeCarousel(CarouselUI);