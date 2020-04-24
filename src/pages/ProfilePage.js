import React, { useContext } from 'react';
import styled from "styled-components";
import { FormContext } from '../context/FormContext';
import LoginForm from '../components/ProfileComponents/LoginForm';
import Profile from '../components/ProfileComponents/Profile';

const ProfilePage = () => {
  const { isLoggedIn } = useContext(FormContext);

  return ( 
    <div>
      <Banner>RETRIEVE YOUR APPLICATION</Banner>
      {isLoggedIn ? <Profile /> : <LoginForm />}
    </div>
  );
}
 
export default ProfilePage;

const Banner = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 5vh;
margin-bottom: 3vh;
background-color: #F4F4F4;
color: #12679B;
font-weight: 700;
font-size: 1.2vmax;

@media screen and (max-width: 1100px) and (orientation: portrait) {
  font-size: 1.5vmax;
}
`;