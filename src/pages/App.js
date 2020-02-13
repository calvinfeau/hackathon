import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/HomeComponents/Footer";
import FormsPage from "./FormsPage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import FormContextProvider from '../context/FormContext';
import Disclaimer from "../components/Disclaimer";

class App extends Component {
  render() {
    return (
      <div id="app">
        <NavBar />
        <Disclaimer />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <FormContextProvider>
            <Route exact path="/form" render={() => <FormsPage />} />
            <Route exact path="/profile" render={() => <ProfilePage />} />
          </FormContextProvider>
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;