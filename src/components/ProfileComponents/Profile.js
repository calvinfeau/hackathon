import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FormContext } from '../../context/FormContext';
import uuidv1 from "uuid/v1";

const Profile = () => {
  const { form, isLoggedIn, resetForm, grid1, grid2, grid3, grid4, grid5 } = useContext(FormContext);
    const displayData = (application, currGrid) => {
      var appProperties = Object.keys(application);
      var appDeepProperties;
      var appSubObject;
      var property;
      console.log('value of appProperties: ', appProperties);
      console.log('value of currGrid: ', currGrid);


      return typeof application === 'object' && application !== null ? 
        currGrid.map(item => {
          console.log('current item in map: ', item)
          return item.parentObject ? 
            (
              // current sub object from application
              appSubObject = appProperties.find(appProperty => appProperty === item.parentObject),
              appDeepProperties = Object.keys(application[appSubObject]),
              property = appDeepProperties.find(appProperty => appProperty === item.data),
              console.log('appSubObject value: ', appSubObject),
              console.log('appDeepProperties value: ', appDeepProperties),
              console.log('property value: ', property),
              console.log('application[appSubObject[property]]: ', application[appSubObject][property]),
              <div key={uuidv1()}>
                <Title2>{item.display}</Title2>&nbsp;{application[appSubObject][property] === null || application[appSubObject][property] === '' ? 'N/A' : application[appSubObject][property] === 0 ? '0' : `${application[appSubObject][property]}`}
              </div>
            )
            : 
            (
              property = appProperties.find(appProperty => appProperty === item.data), 
              <div key={uuidv1()}>
                <Title2>{item.display}</Title2>&nbsp;{application[property] === null || application[property] === '' ? 'N/A' : application[property] === 0 ? '0' : `${application[property]}`}
              </div>
            )
        })
      : '';
    }

      return (
      <Wrapper>
          {
          isLoggedIn ? 
          <StyledItems>
            <Grid1>
              <Title>Your personal information</Title>
              {displayData(form, grid1)}
            </Grid1>
            <Grid2>
              <Title>Parking situation</Title>
              {displayData(form, grid2)}
            </Grid2>
            <Grid3>
              <Title>Income information</Title>
              {displayData(form, grid3)}
            </Grid3>
            <Grid4>
              <Title>Situation details</Title>
              {displayData(form, grid4)}
            </Grid4>
            <Grid5>
              <Title>Emergency contact</Title>
              {displayData(form, grid5)}
            </Grid5>
            <Grid6>
              <Button>
                <Link onClick={resetForm} to='/form'><Edit>EDIT APPLICATION</Edit></Link>
              </Button>
            </Grid6>
          </StyledItems>
          :
          isLoggedIn === false ? <h1>user doesn't exist</h1> : ''
          }
      </Wrapper>
  )
}

export default Profile;

const Title = styled.div`
font-size: 1.5vmax;
font-weight: 700;
`;

const Title2 = styled.span`
font-weight: 700;
`;

const Grid1 = styled.div`
grid-area: grid1;
`;
const Grid2 = styled.div`
grid-area: grid2;
`;
const Grid3 = styled.div`
grid-area: grid3;
`;
const Grid4 = styled.div`
grid-area: grid4;
`;
const Grid5 = styled.div`
grid-area: grid5;
`;
const Grid6 = styled.div`
grid-area: grid6;
align-self: center;
width: 80%;

`;

const StyledItems = styled.div`
display: grid;
grid-template-columns: 30vw 30vw;
grid-template-rows: auto;
grid-template-areas: 
"grid1 grid2"
"grid4 grid3"
"grid6 grid5";
justify-content: space-between;
grid-row-gap: 10px;
justify-items: start;
align-items: start;
`;

const Wrapper = styled.div`
  background-color: #E5EDF2;
  padding: 0 25vw;
  font-size: 1.2vmax;
  >div {
    padding: 3vh 0;
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    padding: 0 15vw;
    font-size: 1.5vmax;
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    >div {
      >img {
        width: auto;
        height: 25px;
      }
    }
  }
`;

const Radio = styled.div`
  width: 100%;
  padding: 1vh 0;
  >div {
    padding-bottom: 0.5vh;
    >span {
    font-weight: 700;
    }
  }
  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 50%;
    >div {
      padding-bottom: 1vh;
    }  
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 100%;
  }
`;

const Button = styled(Radio)`
>a {
  :hover{
    text-decoration: none;
  }
}
  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 100%;
    text-align: center;
  }
`;

const Edit = styled.div`
  font-size: 1.2vmax;
  padding: 0.6vmax ;
  color: white;
  background-color: #12679b;
  text-align: center;
  font-weight: 700;
  border-radius: 30px;
  border: 1px #12679b solid;
  letter-spacing: 1.5px;

  :hover{
    color: #12679b; 
    background-color: transparent; 
  }
  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 30%;
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 50%;
    font-size: 1.5vmax;
  }
`;