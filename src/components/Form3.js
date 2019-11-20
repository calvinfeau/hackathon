import React, { useContext, useEffect } from "react";
// import { Redirect, Link } from "react-router-dom";
// import {updateUser} from "../services/api";
import styled from "styled-components";
import progress3 from "../assets/progress3.png";
import FormHeader from "./FormHeader";
import { FormContext } from '../context/FormContext';

const EmployerLocation = (props) => {
  return ( 
      <Text>
          <Text>
              <div><span>Where is your employer located ?</span></div>
              <Item>
                  <TextInput type="text" value={props.form.employerLocation} name="employerLocation" onChange={(e) => {props.onChange(e.target.name, e.target.value)}} />
              </Item>
          </Text>

          <Text>
              <div><span>Please list any other sources of income</span></div>
              <TextArea name="otherIncome" value={props.form.otherIncome} rows="3" onChange={(e) => {props.onChange(e.target.name, e.target.value)}} />
          </Text>
    </Text>
   );
}

const GovAssistance = (props) => {
  return ( 
      <Radio>
          <div><span>Please select all that apply</span></div>
          <Choices>
              <Choice>
                  <Item>
                      <RadioButton 
                      type="checkbox" name="calworks"
                      value={!props.form.govIncome.calworks}
                      checked={!!props.form.govIncome.calworks}
                      onChange={(e) => {props.onChangeNested(e.target.name, e.target.value, "govIncome")}}  />
                      <RadioButtonLabel />
                      <div>CalWorks</div>
                  </Item>
                  <Item>
                      <RadioButton 
                      type="checkbox" name="cashProgImmigrants" 
                      value={!props.form.govIncome.cashProgImmigrants}
                      checked={!!props.form.govIncome.cashProgImmigrants}
                      onChange={(e) => {props.onChangeNested(e.target.name, e.target.value, "govIncome")}}  />
                      <RadioButtonLabel /> 
                      <div>Cash Assistance Program for Immigrants</div>
                  </Item>
                  <Item>
                      <RadioButton 
                      type="checkbox" name="ebt"
                      value={!props.form.govIncome.ebt}
                      checked={!!props.form.govIncome.ebt}
                      onChange={(e) => {props.onChangeNested(e.target.name, e.target.value, "govIncome")}}  />
                      <RadioButtonLabel />
                      <div>Electronic Benefit Transfer (EBT)</div>
                  </Item>
              </Choice>
              <Choice>
                  <Item>
                      <RadioButton 
                      type="checkbox" name="gr"
                      value={!props.form.govIncome.gr}
                      checked={!!props.form.govIncome.gr}
                      onChange={(e) => {props.onChangeNested(e.target.name, e.target.value, "govIncome")}}  />
                      <RadioButtonLabel />
                      <div>General Relief (GR)</div>
                  </Item>
                  <Item>
                      <RadioButton 
                      type="checkbox" name="medIncome"
                      value={!props.form.govIncome.medIncome}
                      checked={!!props.form.govIncome.medIncome} 
                      onChange={(e) => {props.onChangeNested(e.target.name, e.target.value, "govIncome")}}  />
                      <RadioButtonLabel />
                      <div>Medical Advocacy Program</div>
                  </Item>
              </Choice>
          </Choices>
          <Text>
              <div><span>Please list any other sources of income</span></div>
              <TextArea rows="3" name="other" onChange={(e) => {props.onChangeNested(e.target.name, e.target.value, "govIncome")}}  />
          </Text>
      </Radio>

   );
}

const Form3 = () => {
  const { form, onChange, onChangeNested, onSubmit, onPrevious } = useContext(FormContext);

  var isEmployed = () => {
      return form.employed ? <EmployerLocation form={form} onChange={onChange} /> : ''
  }

  var isGovAssist = () => {
      return form.govAssistance ? <GovAssistance form={form} onChangeNested={onChangeNested} /> : ''
  }

  useEffect(() => {
    isEmployed();
    console.log('from.employed: ', form.employed);
  }, [form.employed]);

  useEffect(() => {
    isGovAssist();
    console.log('from.govAssistance: ', form.govAssistance);
  }, [form.govAssistance]);

  return ( 
    <div>
      <FormHeader />
      <Wrapper>
          <Title>Interest Form</Title>
          <div><img src={progress3} alt="progress bar"/></div>  
          <form onSubmit={onSubmit}>
              <Radio>
                  <div><span>Are you currently employed ?</span></div>
                  <Item>
                      <RadioButton type="radio" value="true" name="employed" checked={form.employed === true} onChange={(e) => {onChange(e.target.name, e.target.value)}} />
                      <RadioButtonLabel />
                      <div>Yes</div>
                  </Item>
                  <Item>
                      <RadioButton type="radio" value="false" name="employed" checked={form.employed === false} onChange={(e) => {onChange(e.target.name, e.target.value)}} />
                      <RadioButtonLabel />
                      <div>No</div>
                  </Item>
              </Radio>

              {isEmployed()}

              <Radio>
                  <div><span>Are you currently recieving any form of government assistance ?</span></div>
                  <Item>
                      <RadioButton
                      type="radio"
                      value="true"
                      name="govAssistance"
                      checked={form.govAssistance === true}
                      onChange={(e) => {onChange(e.target.name, e.target.value)}}
                      />
                      <RadioButtonLabel />
                      <div>Yes</div>
                  </Item>
                  <Item>
                      <RadioButton
                      type="radio"
                      value="false"
                      name="govAssistance"
                      checked={form.govAssistance === false}
                      onChange={(e) => {onChange(e.target.name, e.target.value)}}
                      />
                      <RadioButtonLabel />
                      <div>No</div>
                  </Item>
              </Radio>

              {isGovAssist()}

              <Button>
                  <Back onClick={onPrevious}>BACK</Back>
                  <Submit type="submit" value="NEXT" />
              </Button>
          </form>
      </Wrapper>
    </div>
   );
}

export default Form3;

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

// class Form3 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employerLocation: "",
//       otherIncome: "",
//       govIncome: {
//         calworks: false,
//         cashProgImmigrants: false,
//         ebt: false,
//         gr: false,
//         medIncome: false,
//         other: ""
//       }
//     };
//   }

//   componentDidMount() {
//     var self = this;
//     var userId = this.props.location.state.id;
//     self.setState({userId: userId})
//   }

//   handleChange = e => {
//     this.setState({[e.target.name]: e.target.value});
//   };

//   handleEmployment = e => {
//     this.setState({employed: this.strToBool(e.target.value)});
//   };

//   handleGovAssistance = e => {
//     this.setState({govAssistance: this.strToBool(e.target.value)});
//   };

//   handleGovIncome = e => {
//     let property = e.target;
//     this.setState(prevState => ({...prevState, govIncome:{...prevState.govIncome, [property.name]: property.value}}));
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log('submit button hit')
//     updateUser(this.state);
//     this.setState({completed: true})
//   }

//   strToBool = value => {
//     if (value && typeof value === "string") {
//       if (value.toLowerCase() === "true") return true;
//       if (value.toLowerCase() === "false") return false;
//     }
//     return value;
//   };

//   render() {
//     var employed;
//     if(this.state.employed) {
//       employed = 
//       <Text>
//         <Text>
//         <div><span>Where is your employer located ?</span></div>
//         <Item><TextInput type="text" name="employerLocation" onChange={this.handleChange} /></Item>
//         </Text>

//         <Text>
//         <div><span>Please list any other sources of income</span></div>
//         <TextArea name="otherIncome" rows="3" onChange={this.handleChange} />
//         </Text>
//       </Text>
//     }

//     var gov;
//     if(this.state.govAssistance) {
//       gov = 
//         <Radio>
//         <div><span>Please select all that apply</span></div>
//         <Choices>
//           <Choice>
//           <Item>
//             <RadioButton type="checkbox" name="calworks" onChange={this.handleGovIncome} />
//             <RadioButtonLabel />
//             <div>CalWorks</div>
//           </Item>
//           <Item>
//             <RadioButton type="checkbox" name="cashProgImmigrants" onChange={this.handleGovIncome} />
//             <RadioButtonLabel />
//             <div>Cash Assistance Program for Immigrants</div>
//           </Item>
//           <Item>
//             <RadioButton type="checkbox" name="ebt" onChange={this.handleGovIncome} />
//             <RadioButtonLabel />
//             <div>Electronic Benefit Transfer (EBT)</div>
//           </Item>
//           </Choice>
//           <Choice>
//           <Item>
//             <RadioButton type="checkbox" name="gr" onChange={this.handleGovIncome} />
//             <RadioButtonLabel />
//             <div>General Relief (GR)</div>
//           </Item>
//           <Item>
//             <RadioButton type="checkbox" name="medIncome" onChange={this.handleGovIncome} />
//             <RadioButtonLabel />
//             <div>Medical Advocacy Program</div>
//           </Item>
//           </Choice>
//           </Choices>
//           <Text>
//             <div><span>Please list any other sources of income</span></div>
//             <TextArea rows="3" name="other" onChange={this.handleChange} />
//           </Text>
//         </Radio>
//     }

//     var form3;
//     if(this.state.completed) {
//         form3 = <Redirect to={{pathname: '/forms/4', state:{id: this.state.userId}}} />
//     }
//     else {
//         form3 =
//       <div>
//         <FormHeader />
//         <Wrapper>
//         <div><img src={progress3} alt="progress bar"/></div>  
//         <Title>Interest Form</Title>
//         <form onSubmit={this.handleSubmit}>

//         <Radio>
//         <div><span>Are you currently employed ?</span></div>
//         <Item>
//           <RadioButton type="radio" value="true" checked={this.state.employed === true} onChange={this.handleEmployment} />
//           <RadioButtonLabel />
//           <div>Yes</div>
//         </Item>
//         <Item>
//           <RadioButton type="radio" value="false" checked={this.state.employed === false} onChange={this.handleEmployment} />
//           <RadioButtonLabel />
//           <div>No</div>
//         </Item>
//         </Radio>

//         {employed}

//         <Radio>
//           <div><span>Are you currently recieving any form of government assistance ?</span></div>
//           <Item>
//             <RadioButton
//               type="radio"
//               value="true"
//               checked={this.state.govAssistance === true}
//               onChange={this.handleGovAssistance}
//             />
//             <RadioButtonLabel />
//             <div>Yes</div>
//           </Item>
//           <Item>
//             <RadioButton
//               type="radio"
//               value="false"
//               checked={this.state.govAssistance === false}
//               onChange={this.handleGovAssistance}
//             />
//             <RadioButtonLabel />
//             <div>No</div>
//           </Item>
//         </Radio>

//         {gov}

//         <Button>
//           <Back to='/forms/2'>BACK</Back>
//           <Submit type="submit" value="NEXT" />
//         </Button>
//       </form>
//       </Wrapper>
//       </div>
//     }
//     return (
//       <div>
//         {form3}
//       </div>
//     )
//   }
// }

// export default Form3;
