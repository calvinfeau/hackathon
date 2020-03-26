import React, { useContext } from "react";
import styled from "styled-components";
import progress4 from "../../assets/progress4.png";
import FormHeader from "./FormHeader";
import { FormContext } from '../../context/FormContext';

const Form4 = () => {
  const { form, onChange, onChangeNested, onSubmit, onPrevious } = useContext(FormContext);

  return (
    <div>
    <FormHeader />
    <Wrapper>
      <Title>Origin</Title>
      <div><img src={progress4} alt="progress bar"/></div>
      <form onSubmit={onSubmit}>
        <Radio>
          <div><span>What are the main reasons for your current situation?</span></div>
          <div>*Select all that apply</div>
          <Choices>
            <Choice>
              <Item>
                <RadioButton type="checkbox" name="jobLoss" 
                value={!form.situation.jobLoss}
                checked={!!form.situation.jobLoss}
                onChange={(e) => { onChangeNested(e.target.name, e.target.value, "situation") }} />
                <RadioButtonLabel />
                <div>Loss of Job</div>
              </Item>
              <Item>
                <RadioButton type="checkbox" name="highBills" 
                value={!form.situation.highBills}
                checked={!!form.situation.highBills}
                onChange={(e) => { onChangeNested(e.target.name, e.target.value, "situation") }} />
                <RadioButtonLabel />
                <div>Bills Higher than Earning</div>
              </Item>
              <Item>
                <RadioButton type="checkbox" name="eviction" 
                value={!form.situation.eviction}
                checked={!!form.situation.eviction}
                onChange={(e) => { onChangeNested(e.target.name, e.target.value, "situation") }} />
                <RadioButtonLabel />
                <div>Eviction</div>
              </Item>
              <Item>
                <RadioButton type="checkbox" name="homeAbuse" 
                value={!form.situation.homeAbuse}
                checked={!!form.situation.homeAbuse}
                onChange={(e) => { onChangeNested(e.target.name, e.target.value, "situation") }} />
                <RadioButtonLabel />
                <div>Abuse at Home</div>
              </Item>
              <Item>
                <RadioButton type="checkbox" name="expensiveHouse" 
                value={!form.situation.expensiveHouse}
                checked={!!form.situation.expensiveHouse}
                onChange={(e) => { onChangeNested(e.target.name, e.target.value, "situation") }} />
                <RadioButtonLabel />
                <div>Lack of Affordable Housing</div>
              </Item>
            </Choice>
            <Choice>
              <Item>
                <RadioButton type="checkbox" name="incarceration" 
                value={!form.situation.incarceration}
                checked={!!form.situation.incarceration}
                onChange={(e) => { onChangeNested(e.target.name, e.target.value, "situation") }} />
                <RadioButtonLabel />
                <div>Incarceration</div>
              </Item>
              <Item>
                <RadioButton type="checkbox" name="sick" 
                value={!form.situation.sick}
                checked={!!form.situation.sick}
                onChange={(e) => { onChangeNested(e.target.name, e.target.value, "situation") }} />
                <RadioButtonLabel />
                <div>Sick/Disabled/Mental Illness</div>
              </Item>
              <Item>
                <RadioButton type="checkbox" name="familyChange" 
                value={!form.situation.familyChange}
                checked={!!form.situation.familyChange}
                onChange={(e) => { onChangeNested(e.target.name, e.target.value, "situation") }} />
                <RadioButtonLabel />
                <div>Change in Family Status</div>
              </Item>
              <Item>
                <RadioButton type="checkbox" name="substance" 
                value={!form.situation.substance}
                checked={!!form.situation.substance}
                onChange={(e) => { onChangeNested(e.target.name, e.target.value, "situation") }} />
                <RadioButtonLabel />
                <div>Substance Abuse</div>
              </Item>
            </Choice>
          </Choices>
          <Text>
            <div><span>Other;</span> please list specific reasons</div>
            <TextArea rows="3" value={form.situation.other} name="other" onChange={(e) => { onChangeNested(e.target.name, e.target.value, "situation") }} />
          </Text>
        </Radio>

        <Text>
          <Text>
            <div><span>Tell us your story in as much or as little detail as you feel comfortable&nbsp;sharing.</span></div>
            <TextArea rows="3" value={form.story} name="story" onChange={(e) => { onChange(e.target.name, e.target.value) }} />
          </Text>
        </Text>

        <Title>As It Stands</Title>

        <Radio>
          <div><span>How long have you been sleeping in your vehicle ?</span></div>
          <Choices>
            <Choice>
              <Item>
                <RadioButton type="radio" name="length" value="less than a month" checked={form.homelessness.length === "less than a month"} onChange={(e) => { onChangeNested(e.target.name, e.target.value, "homelessness") }} />
                <RadioButtonLabel />
                <div>Less than a month</div>
              </Item>
              <Item>
                <RadioButton type="radio" name="length" value="between two and six months" checked={form.homelessness.length === "between two and six months"} onChange={(e) => { onChangeNested(e.target.name, e.target.value, "homelessness") }} />
                <RadioButtonLabel />
                <div>Between two and six months</div>
              </Item>
            </Choice>
            <Choice>
              <Item>
                <RadioButton type="radio" name="length" value="six months to one year" checked={form.homelessness.length === "six months to one year"} onChange={(e) => { onChangeNested(e.target.name, e.target.value, "homelessness") }} />
                <RadioButtonLabel />
                <div>Six months to one year</div>
              </Item>
              <Item>
                <RadioButton type="radio" name="length" value="more than one year" checked={form.homelessness.length === "more than one year"} onChange={(e) => { onChangeNested(e.target.name, e.target.value, "homelessness") }} />
                <RadioButtonLabel />
                <div>More than one year</div>
              </Item>
            </Choice>
          </Choices>
        </Radio>

        <Text>
          <Text>
            <div><span>Approximate start date of homelessness</span></div>
            <TextInput type="date" value={form.homelessness.date} name="date" onChange={(e) => { onChangeNested(e.target.name, e.target.value, "homelessness") }} />
          </Text>
        </Text>

        <Radio>
          <div><span>Do you have any major or immediate health concerns ?</span></div>
          <div>*Select all that apply</div>
          <Choices>
            <Choice>
              <Item>
                <RadioButton type="checkbox" name="none" 
                value={!form.healthConcern.none}
                checked={!!form.healthConcern.none}                
                onChange={(e) => { onChangeNested(e.target.name, e.target.value, "healthConcern") }} />
                <RadioButtonLabel />
                <div>None</div>
              </Item>
            </Choice>
            {form.healthConcern.none ?
              ''
              :
              <Choice>
                <Item>
                  <RadioButton type="checkbox" name="pregnancy"
                  value={!form.healthConcern.pregnancy}
                  checked={!!form.healthConcern.pregnancy}                  
                  onChange={(e) => { onChangeNested(e.target.name, e.target.value, "healthConcern") }} />
                  <RadioButtonLabel />
                  <div>Pregnancy</div>
                </Item>
                <Item>
                  <RadioButton type="checkbox" name="handicapped"
                  value={!form.healthConcern.handicapped}
                  checked={!!form.healthConcern.handicapped}                  
                  onChange={(e) => { onChangeNested(e.target.name, e.target.value, "healthConcern") }} />
                  <RadioButtonLabel />
                  <div>Handicapped/Disabled</div>
                </Item>
              </Choice>
            }
          </Choices>
          {form.healthConcern.none ?
            ''
            :
            <Text>
              <div><span>Other;</span> please list specific reasons</div>
              <TextArea rows="3" value={form.healthConcern.other} name="other" onChange={(e) => { onChangeNested(e.target.name, e.target.value, "healthConcern") }} />
            </Text>
          }
        </Radio>

        <Text>
          <div><span>Emergency Contact</span></div>
          <Choices>
            <Choice>
              <Text>
                <div>First & Last name:</div>
                <TextInput type="text" value={form.emergencyContact.name} name="name" onChange={(e) => { onChangeNested(e.target.name, e.target.value, "emergencyContact") }} />
              </Text>
              <Text>
                <div>Relationship:</div>
                <TextInput type="text" value={form.emergencyContact.relation} name="relation" onChange={(e) => { onChangeNested(e.target.name, e.target.value, "emergencyContact") }} />
              </Text>
            </Choice>
            <Choice>
              <Text>
                <div>Phone number:</div>
                <TextInput type="text" value={form.emergencyContact.phone} name="phone" onChange={(e) => { onChangeNested(e.target.name, e.target.value, "emergencyContact") }} />
              </Text>
              <Text>
                <div>Email:</div>
                <TextInput type="text" value={form.emergencyContact.email} name="email" onChange={(e) => { onChangeNested(e.target.name, e.target.value, "emergencyContact") }} />
              </Text>
            </Choice>
          </Choices>
        </Text>

        <Button>
          <Back onClick={onPrevious}>BACK</Back>
          <Submit type="submit" value="NEXT" />
        </Button>
      </form>
    </Wrapper>
  </div>
  );
}

export default Form4;

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
  >form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    padding: 0 20vw 3vh;
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
  width: 75%;
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
    width: 100%;
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 100%;
    >input {
      width: 75%;
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
  width: 75%;
  padding: 1vh 0;
  >div {
    padding-bottom: 0.5vh;
    >span {
    font-weight: 700;
    }
  }

  @media screen and (max-width: 1100px) and (orientation: portrait) {
    width: 100%;
    >div {
      padding-bottom: 1vh;
    }  
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
    width: 100%;
  }
`;

const Choices = styled.div`
  display: flex;

  @media screen and (max-width: 500px) and (orientation: portrait) {
    flex-direction: column;
  }
`;

const Choice = styled.div`
  width: 50%;
  padding-right: 1vw;
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

const TextArea = styled.textarea`
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
  text-align: center;
`;

const Submit = styled.input`
  width: 50%;
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

  @media screen and (max-width: 500px) and (orientation: portrait) {
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