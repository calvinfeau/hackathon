import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import InterestForm from "../../components/InterestForm/InterestForm";
import FormIntro from "../../components/FormIntro/FormIntro";
import Form2 from "../../components/Form2/Form2";
import Form3 from "../../components/Form3/Form3";
import Form4 from "../../components/Form4/Form4";
import FormEnd from "../../components/FormEnd/FormEnd";

const Banner = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 5vh;
background-color: #F4F4F4;
color: #12679B;
font-weight: 700;
`;

const Wrapper = styled.div`
// DESKTOP
height: calc(100vh - 30vh - 130px);
`;

class FormsPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <Banner>FIND YOUR SPOT</Banner>
        <Switch>
          <Route exact path="/forms/intro" render={() => <FormIntro />} />
          <Route exact path="/forms/1" render={() => <InterestForm />} />
          <Route exact path="/forms/2" render={props => <Form2 {...props} />} />
          <Route exact path="/forms/3" render={props => <Form3 {...props} />} />
          <Route exact path="/forms/4" render={props => <Form4 {...props} />} />
          <Route exact path="/forms/end" render={props => <FormEnd {...props} />} />
        </Switch>
      </Wrapper>
    );
  }
}

export default FormsPage;
