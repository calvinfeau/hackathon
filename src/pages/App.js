import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormsPage from "./FormsPage";
import HomePage from "./HomePage";
import FormContextProvider from '../context/FormContext';

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
          <FormContextProvider>
            <Route exact path="/form" render={() => <FormsPage />} />
          </FormContextProvider>
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
        <Footer />
      </Wrapper>
    )
  }
}

export default App;