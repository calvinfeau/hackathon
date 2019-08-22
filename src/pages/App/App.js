import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import FormsPage from "../FormPage/FormsPage";
import { Route, Switch, Link } from "react-router-dom";
import image1 from "./image1.png";
import image2 from "./image2.png";
import button from "./button.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="container">
              <div className="box1">
                <h2>Nobody Plans To Be Homeless</h2>
              </div>
              <div className="wrapper-div">
                <img id="img1" src={image1} />
                <p>
                  Safe Parking programs are a safe and legal homelessness
                  intervention to stabilize and connect to resources for people
                  who are living in their vehicles. All program locations
                  include access to a restroom facility and the security of a
                  guard.
                </p>
                <Link className="btn btn-primary btn-lg links" to="/forms">
                  FIND YOUR SPOT
                </Link>{" "}
              </div>
              <div className="wrapper-div">
                <img id="img2" src={image2} />
                <p>
                  In Los Angeles County, there are over 15,700 people living in
                  their vehicles each night. These vehicle dwellers represent
                  over 25% of the population of people experiencing homelessness
                  in LA County.
                </p>
                <Link className="btn btn-primary btn-lg links" to="/forms">
                  WHO WE SERVE
                </Link>{" "}
              </div>
            </div>
          )}
        />

        <Route exact path="/forms" render={() => <FormsPage />} />
      </Switch>
    </div>
  );
}

export default App;
