import React, {Component} from "react";
import styled from "styled-components"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import FormsPage from "../FormPage/FormsPage";
import HomePage from "../HomePage/HomePage";
import { Route, Switch } from "react-router-dom";

const Wrapper = styled.div`
font-family: 'Montserrat', sans-serif;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path={"/forms/:form"} render={() => <FormsPage />} />
      </Switch>
      <Footer />
      </Wrapper>
    )
  }
}

export default App;