import React, { useContext, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import styled from "styled-components";
// import {updateUser} from "../services/api";
import FormHeader from "./FormHeader";
import progress2 from "../../assets/progress2.png";
import { FormContext } from '../../context/FormContext';

const LanguageInput = (props) => {
  return (
      <Item>
          <TextInput type="text" value={props.form.language} name="language" required onChange={(e) => {props.onChange(e.target.name, e.target.value)}} />
      </Item>  
  );
}

const VeteranHealthcare = (props) => {
  return ( 
    <Healthcare>
      <div><span>Are you healthcare eligible?</span></div>
      <Choices>
        <Choice>
          <Item>
            <RadioButton type="radio" value="yes"
            name="healthcare"
            checked={props.form.healthcare === "yes"}
            onChange={(e) => {props.onChange(e.target.name, e.target.value)}} />
            <RadioButtonLabel />
            <div>Yes</div>
          </Item>
          <Item>
            <RadioButton type="radio" value="no"
            name="healthcare"
            checked={props.form.healthcare === "no"}
            onChange={(e) => {props.onChange(e.target.name, e.target.value)}} />
            <RadioButtonLabel />
            <div>No</div>
          </Item>
        </Choice>
        <Choice>
          <Item>
            <RadioButton type="radio" value="unsure"
            name="healthcare"
            checked={props.form.healthcare === "unsure"}
            onChange={(e) => {props.onChange(e.target.name, e.target.value)}} />
            <RadioButtonLabel />
            <div>Unsure</div>
          </Item>
        </Choice>
      </Choices>
    </Healthcare>
  );
}

const Form2 = () => {
  const { form, onChange, onChangeNested, onSubmit, onPrevious } = useContext(FormContext);

  var otherLanguage = () => {
      return form.language !== "english" && form.language !== "spanish" && form.language !== "" ? <LanguageInput form={form} onChange={onChange}/> : ''
  }

  var isVeteran = () => {
      return form.veteran ? <VeteranHealthcare form={form} onChange={onChange} /> : ''
  }

  useEffect(() => {
      otherLanguage();
      console.log('form.language value: ', form.language);
  }, [form.language]);

  useEffect(() => {
      isVeteran();
      console.log('from.veteran value: ', form.veteran);
  }, [form.veteran]);

  return ( 
    <div>
      <FormHeader />
      <Wrapper>
          <Title>Basic Demographic</Title>
          <div><img src={progress2} alt="progress bar"/></div>
          <form onSubmit={onSubmit}>
              <Grid1>
                  <Gender>
                      <div><span>Gender</span></div>
                      <Choices>
                          <Choice>
                              <Item>
                                  <RadioButton
                                  type="radio" value="male" 
                                  checked={form.gender === "male"}
                                  name="gender"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>Male</div>
                              </Item>
                              <Item>
                                  <RadioButton  
                                  type="radio" value="female" 
                                  checked={form.gender === "female"}
                                  name="gender"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>Female</div>
                              </Item>
                          </Choice>
                          <Choice>
                              <Item>
                                  <RadioButton type="radio" value="other" 
                                  checked={form.gender === "other"}
                                  name="gender"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>Other</div>
                              </Item>
                              <Item>
                                  <RadioButton type="radio" value="prefer not to say" 
                                  checked={form.gender === "prefer not to say"}
                                  name="gender"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>Prefer not to say</div>
                              </Item>
                          </Choice>
                      </Choices>
                  </Gender>

                  <Race>
                  <div><span>Race & Ethnicity</span></div>
                  <Choices>
                      <Choice>
                          <Item>
                              <RadioButton type="radio" value="african american" 
                              checked={form.race === "african american"}
                              name="race"
                              onChange={(e) => onChange(e.target.name, e.target.value)} />
                              <RadioButtonLabel />
                              <div>African American</div>
                          </Item>
                          <Item>
                              <RadioButton type="radio" value="hispanic/latino"
                              checked={form.race === "hispanic/latino"}
                              name="race"
                              onChange={(e) => onChange(e.target.name, e.target.value)} />
                              <RadioButtonLabel />
                              <div>Hispanic/Latino</div>
                          </Item>
                          <Item>
                              <RadioButton type="radio" value="two or more races; other"
                              checked={form.race === "two or more races; other"}
                              name="race"
                              onChange={(e) => onChange(e.target.name, e.target.value)} />
                              <RadioButtonLabel />
                              <div>Two or More Races</div>
                          </Item>
                      </Choice>
                      <Choice>
                          <Item>
                              <RadioButton type="radio" value="asian"
                              checked={form.race === "asian"}
                              name="race"
                              onChange={(e) => onChange(e.target.name, e.target.value)} />
                              <RadioButtonLabel />
                              <div>Asian</div>
                          </Item>
                          <Item>
                              <RadioButton type="radio" value="caucasian"
                              checked={form.race === "caucasian"}
                              name="race"
                              onChange={(e) => onChange(e.target.name, e.target.value)} />
                              <RadioButtonLabel />
                              <div>Caucasian</div>
                          </Item>
                          <Item>
                              <RadioButton type="radio" value="middle eastern"
                              checked={form.race === "middle eastern"}
                              name="race"
                              onChange={(e) => onChange(e.target.name, e.target.value)} />
                              <RadioButtonLabel />
                              <div>Middle Eastern</div>
                          </Item>
                      </Choice>
                  </Choices>
                  <Item>
                      <RadioButton type="radio" value="prefer not to say"
                      checked={form.race === "prefer not to say"}
                      name="race"
                      onChange={(e) => onChange(e.target.name, e.target.value)} />
                      <RadioButtonLabel />
                      <div>Prefer not to say</div>
                  </Item>
                  </Race>

                  <Language>
                      <div><span>Preferred language</span></div>
                      <Choices>
                          <Choice>
                              <Item>
                                  <RadioButton type="radio" value="english"
                                  checked={form.language === "english"}
                                  name="language"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>English</div>
                              </Item>
                              <Item>
                                  <RadioButton type="radio" value="spanish"
                                  checked={form.language === "spanish"}
                                  name="language"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>Spanish</div>
                              </Item>
                          </Choice>
                          <Choice>
                              <Item>
                                  <RadioButton type="radio" value=" "
                                  checked={form.language !== "english" && form.language !== "spanish" && form.language !== ""}
                                  name="language"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>Other</div>
                              </Item>
                              {otherLanguage()}
                          </Choice>
                      </Choices>
                  </Language>

                  <Veteran>
                      <div><span>Are you a veteran ?</span></div>
                      <Item>
                          <RadioButton 
                          type="radio" value="true"
                          checked={form.veteran === true} 
                          name="veteran"
                          onChange={(e) => onChange(e.target.name, e.target.value)} />
                          <RadioButtonLabel />
                          <div>Yes</div>
                      </Item>
                      <Item>
                          <RadioButton 
                          type="radio" value="false"
                          checked={form.veteran === false} 
                          name="veteran"
                          onChange={(e) => onChange(e.target.name, e.target.value)} />
                          <RadioButtonLabel />
                          <div>No</div>
                      </Item>
                  </Veteran>

                  {isVeteran()}
              </Grid1>

              <div><Title>Current Situation</Title></div>
              
              <Grid2>
                  <Vehicle>
                      <div><span>What kind of vehicle are you driving ?</span></div>
                      <Choices>
                          <Choice>
                              <Item>
                                  <RadioButton type="radio" value="compact"
                                  checked={form.vehicleType === "compact"}
                                  name="vehicleType"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>Compact</div>
                              </Item>
                              <Item>
                                  <RadioButton type="radio" value="suv"
                                  checked={form.vehicleType === "suv"}
                                  name="vehicleType"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>SUV</div>
                              </Item>
                          </Choice>
                          <Choice>
                              <Item>
                                  <RadioButton type="radio" value="truck"
                                  checked={form.vehicleType === "truck"}
                                  name="vehicleType"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>Truck</div>
                              </Item>
                              <Item>
                                  <RadioButton type="radio" value="rv"
                                  checked={form.vehicleType === "rv"}
                                  name="vehicleType"
                                  onChange={(e) => onChange(e.target.name, e.target.value)} />
                                  <RadioButtonLabel />
                                  <div>RV</div>
                              </Item>
                          </Choice>
                      </Choices>
                  </Vehicle>

                  <People>
                      <div><span>How many people live in the vehicle including yourself ?</span></div>
                      <Item>
                          <TextInput type="number" value={form.people} name="people" onChange={(e) => onChange(e.target.name, e.target.value)} />
                      </Item>
                  </People>

                  <Pets>
                      <div><span>Do any pets live in the vehicle ?</span></div>
                      <Item>
                          <TextInput type="number" value={form.pets} name="pets" onChange={(e) => onChange(e.target.name, e.target.value)} />
                      </Item>
                  </Pets>

                  <Parking>
                      <div><span>Current night parking situation:</span></div>
                      <div>Please be as specific as possible</div>
                      <Item>
                          <TextInput type="text" name="street" value={form.currParking.street} placeholder="Street" onChange={(e) => onChangeNested(e.target.name, e.target.value, 'currParking')} />
                      </Item>
                      <Item>
                          <TextInput type="text" name="city" value={form.currParking.city} placeholder="City" onChange={(e) => onChangeNested(e.target.name, e.target.value, 'currParking')} />
                      </Item>
                      <Item>
                          <TextInput type="text" name="zip" value={form.currParking.zip} placeholder="Zip" onChange={(e) => onChangeNested(e.target.name, e.target.value, 'currParking')} />
                      </Item>
                      <div><span>Other;</span> explain:</div>
                      <Item>
                          <TextInput type="text" name="other" value={form.currParking.other}  onChange={(e) => onChangeNested(e.target.name, e.target.value, 'currParking')} />
                      </Item>
                  </Parking>

                  <Neighborhood>
                      <div><span>What is your desired neighborhood ?</span></div>
                      <Item>
                          <TextInput type="text" name="desired" value={form.neighborhood.desired} onChange={(e) => onChangeNested(e.target.name, e.target.value, 'neighborhood')} />
                      </Item>
                  </Neighborhood>
                  
                  <Factors>
                      <div><span>What factors are associated with your chosen neighborhood ?</span></div> 
                      <div>*Select all that apply</div>
                      <Item>
                          <RadioButton
                           type="checkbox" name="work" 
                           value={!form.neighborhood.work}
                           checked={!!form.neighborhood.work}
                           onChange={(e) => onChangeNested(e.target.name, e.target.value, 'neighborhood')}  />
                          <RadioButtonLabel />
                          <div>Work</div>
                      </Item>
                      <Item>
                          <RadioButton 
                          type="checkbox" name="school" 
                          value={!form.neighborhood.school}
                          checked={!!form.neighborhood.school}
                          onChange={(e) => onChangeNested(e.target.name, e.target.value, 'neighborhood')}  />
                          <RadioButtonLabel />
                          <div>School</div>
                      </Item>
                      <Item>
                          <RadioButton 
                          type="checkbox" name="family" 
                          value={!form.neighborhood.family}
                          checked={!!form.neighborhood.family}
                          onChange={(e) => onChangeNested(e.target.name, e.target.value, 'neighborhood')}  />
                          <RadioButtonLabel />
                          <div>Family / Friends</div>
                      </Item>
                      <div>Other; brief explanation:</div>
                      <Item>
                          <TextInput type="text" value={form.neighborhood.other} name="other" onChange={(e) => onChangeNested(e.target.name, e.target.value, 'neighborhood')}  />
                      </Item>
                  </Factors>
              </Grid2>
              <Button>
                  <Back onClick={onPrevious}>BACK</Back>
                  <Submit type="submit" value="NEXT" />
              </Button>
          </form>
      </Wrapper>
    </div>
   );
}

export default Form2;

const Wrapper = styled.div`
  background-color: #E5EDF2;
  padding: 3vh 20vw 6vh;
  font-size: 1.2vmax;
  >div {
    text-align: center;
    padding: 3vh 0 3vh;
    >img {
      width: auto;
      height: 50px;
    }
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    padding: 0 20vw;
    font-size: 1.5vmax;
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    padding: 3vh 20vw;
    >div {
      >img {
        width: auto;
        height: 25px;
      }
    }
  }
`;

const Title = styled.div`
  font-size: 1.5vmax;
  font-weight: 700;
  text-align: center;
  padding: 3vh 0 3vh;

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    font-size: 2vmax;
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
    >div {
      padding-bottom: 1vh;
    }  
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 100%;
  }
`;

const Grid1 = styled.div`  
display: grid;
height: 60vh
grid-template-columns: 25vw 25vw;
grid-template-rows: auto;
grid-template-areas: 
"gender language"
"race veteran"
"race healthcare";
justify-content: space-between;

@media screen and (max-width: 1100px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    height: 100%;
}
`;

const Gender = styled(Radio)`
grid-area: gender;
`;
const Race = styled(Radio)`
grid-area: race;
`;
const Language = styled(Radio)`
grid-area: language;
`;
const Veteran = styled(Radio)`
grid-area: veteran;
`;
const Healthcare = styled(Radio)`
grid-area: healthcare;
`;

const Grid2 = styled.div`
display: grid;
grid-template-columns: 25vw 25vw;
grid-template-rows: 20vh 20vh auto;
grid-template-areas: 
"people pets"
"vehicle neighborhood"
"parking factors";
justify-content: space-between;
margin-bottom: 6vh;

@media screen and (max-width: 1100px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Vehicle = styled(Radio)`
grid-area: vehicle;
`;
const People = styled(Text)`
grid-area: people;
`;
const Pets = styled(Text)`
grid-area: pets;
`;
const Parking = styled(Text)`
grid-area: parking;
`;
const Neighborhood = styled(Text)`
grid-area: neighborhood;
`;
const Factors = styled(Radio)`
grid-area: factors;
`;

const Choices = styled.div`
  display: flex;

  @media screen and (max-width: 500px) and (orientation: portrait) {
    flex-direction: column;
  }
`;

const Choice = styled.div`
width: 50%;
  >div {padding: 0.5vh 0;}
  @media screen and (max-width: 500px) and (orientation: portrait) {
      width: 100%;
  }
`;

const Item = styled.div`
  display: flex;
`;

const TextInput = styled.input`
  padding: 5px 10px;
  border: 1px #12679b solid;
  letter-spacing: 1.5px;
  border-radius: 2px;
  color: #12679b;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #12679B;
    border: 1px solid #12679B;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;

const Button = styled(Radio)`
display: flex;
justify-content: space-around;
@media screen and (max-width: 1100px) and (orientation: portrait) {
  flex-direction: column;
}
`;

const Submit = styled.input`
  width: 30%;
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
width: 30%;
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