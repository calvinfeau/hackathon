import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FormContext } from '../context/FormContext';

const LoginForm = () => {
  const { form, onChange, onChangeNested, checkUser } = useContext(FormContext);

  return ( 
    <Wrapper>
      <Form onSubmit={checkUser}>
        <FirstName>
          <div><span>First Name</span></div>
          <TextInput type="text" required value={form.applicant.firstName} name="firstName" onChange={(e) => onChangeNested(e.target.name, e.target.value, 'applicant')} />
        </FirstName>
        <LastName>
          <div><span>Last Name</span></div>
          <TextInput type="text" required value={form.applicant.lastName} name="lastName" onChange={(e) => onChangeNested(e.target.name, e.target.value, 'applicant')} />
        </LastName>
        <Birth>
          <div><span>Date of Birth</span></div>
          <TextInput type="date" required value={form.birth} name="birth" onChange={(e) => onChange(e.target.name, e.target.value)} />
        </Birth>
        <Button>
          <Submit type="submit" value="LOG IN" />
        </Button>
        <Button>
          <Link to="/"><Back>MAIN PAGE</Back></Link>
        </Button>
      </Form>
    </Wrapper>
  );
}

export default LoginForm;

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

const Form = styled.form`
  padding: 6vh 0;
  display: grid;
  grid-template-columns: 20vw 20vw;
  grid-template-rows: auto;
  grid-template-areas:
  "firstname login"
  "lastname mainpage"
  "birth .";
  justify-content: space-between;

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    padding: 3vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Text = styled.div`
  width: 100%;
  padding: 1vh 0;
  display: flex;
  flex-direction: column;
  >div {
    padding-bottom: 0.5vh;
    >span {
      font-weight: 700;
    }
  }
  >input {
    width: 80%;
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 100%;
    >input {
      width: 100%;
    }
    >div {
      padding-bottom: 1vh;
    }  
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 100%;
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
  align-self: end;

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 100%;
    text-align: center;
  }
`;

const FirstName = styled(Text)`
  grid-area: firstname;
`;

const LastName = styled(Text)`
  grid-area: lastname;
`;

const Birth = styled(Text)`
  grid-area: birth;
`;

const Submit = styled.input`
  grid-area: login;
  width: 80%;
  font-size: 1.2vmax;
  padding: 0.6vmax;
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
    text-decoration: none;
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 30%;
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 50%;
    font-size: 1.5vmax;
  }
`;

const Back = styled.div`
  grid-area: mainpage;
  width: 80%;
  font-size: 1.2vmax;
  padding: 0.6vmax;
  color: #12679b;
  background-color: transparent;
  text-align: center;
  font-weight: 700;
  border-radius: 30px;
  border: 1px #12679b solid;
  letter-spacing: 1.5px;

  :hover{
    color: white; 
    background-color: #12679b; 
    text-decoration: none;
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 30%;
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 50%;
    font-size: 1.5vmax;
  }
`;

const TextInput = styled.input`
  padding: 5px;
  border: 1px #12679b solid;
  letter-spacing: 1.5px;
  border-radius: 2px;
  color: #12679b;
`;