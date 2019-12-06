import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FormContext } from '../context/FormContext';
import uuidv1 from "uuid/v1";

const Item = props => {
  let currProperty, currGrid;
  const currItem = () => 
    props.property === 'firstName' ? (currProperty = 'First name: ', currGrid = 'part1')
    : props.property === 'lastName' ? (currProperty = 'Last name: ', currGrid = 'part1')
    : props.property === 'birth' ? (currProperty = 'Birth date: ', currGrid = 'part1')
    : props.property === 'phone' ? (currProperty = 'Phone numer: ', currGrid = 'part1')
    : props.property === 'email' ? (currProperty = 'Email: ', currGrid = 'part1')
    : props.property === 'driverStatus' ? (currProperty = 'Driver status: ', currGrid = 'part1')
    : props.property === 'driverId' ? (currProperty = 'Driver license number: ', currGrid = 'part1')
    : props.property === 'drivable' ? (currProperty = 'Is your vehicle drivable ? ', currGrid = 'part1')
    : props.property === 'gender' ? (currProperty = 'Gender: ', currGrid = 'part1')
    : props.property === 'race' ? (currProperty = 'Ethnicity: ', currGrid = 'part1')
    : props.property === 'language' ? (currProperty = 'Language: ', currGrid = 'part1')
    : props.property === 'veteran' ? (currProperty = 'Are you a veteran ? ', currGrid = 'part1')

    : props.property === 'vehicleType' ? (currProperty = 'Vehicle type: ', currGrid = 'part2')
    : props.property === 'people' ? (currProperty = 'People in the vehicle (including you): ', currGrid = 'part2')
    : '';

    useEffect(currItem(), [])
  
  return (
      <div>
        <StyledTitle>{currProperty}</StyledTitle> {props.value === null || props.value === '' ? 'N/A' : `${props.value}`}
      </div>
    )
  }

// const Title = props => {
//     return (
//         <StyledTitle>
//             {
//             props.title === 'currParking' ? 'Current parking situation'
//             : props.title === 'neighborhood' ? 'Desired neighborhood'
//             : props.title === 'govIncome' ? 'Current government assistance'
//             : props.title === 'situation' ? 'Reasons for current situation'
//             : props.title === 'homelessness' ? 'Time of homelessness'
//             : props.title === 'healthConcern' ? 'Immediate health concern'
//             : props.title === 'emergencyContact' ? 'Emergency contact'
//             : ''
//             }
//         </StyledTitle>
//     )
// }


const Profile = () => {
    const { form, isLoggedIn, resetForm } = useContext(FormContext);

    const currApplication = (object) => {
      return Object.keys(object)
        .map(key => 
          object[key] ?
          typeof object[key] == 'object' ?
          <div key={uuidv1()}>
              {/* <Title key={uuidv1()} title={key} /> */}
              {currApplication(object[key])}
          </div>
          : <Item key={uuidv1()} property={key} value={object[key]} />
          : <Item key={uuidv1()} property={key} value={object[key]} />
        )
    }

    return (
        <Wrapper>
            {
            isLoggedIn ? 
                <Items>
                    {currApplication(form)}
                    <Link onClick={resetForm} to='/form'>Edit Application</Link>
                </Items>
                :
                isLoggedIn === false ?
                    <h1>user doesn't exist</h1>
                    : 
                    <></>
            }
        </Wrapper>
    )
}

export default Profile;

const StyledTitle = styled.div`
font-weight: 700;
`;

const Items = styled.div`
display: grid;
grid-template-columns: 20vw 20vw;
grid-template-rows: auto;
grid-template-areas:
"part1 part2"
"part3 part4"
"part5 part6"
;
justify-content: space-between;
`;

const Wrapper = styled.div`
  background-color: #E5EDF2;
  padding: 0 25vw;
  font-size: 1.2vmax;
  >div {
    text-align: center;
    padding: 3vh 0 0;
    >img {
      width: auto;
      height: 50px;
    }
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