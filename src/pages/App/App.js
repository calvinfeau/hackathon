import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import FormsPage from "../FormPage/FormsPage";
import { Route, Switch, Link } from "react-router-dom";
import image1 from "./image1.png";
import image2 from "./image2.png";
import button from "./button.png";
import mandog from "./mandog.png";
import veteran from "./veteran.png";
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
                <Link className="btn btn-primary btn-lg links" to="/forms/1">
                  FIND YOUR SPOT
                </Link>{" "}
              </div>
              <div className="wrapper">
                <div className="icon-box">
                  <i class="fas fa-file-alt" />
                  <p>Fill Out Forms</p>
                </div>
                <div />
                <div className="icon-box">
                  <i class="fas fa-phone-alt" />
                  <p>Call Now</p>
                </div>
                <div className="icon-box">
                  <i class="fas fa-parking" />
                  <p>Find Your Spot!</p>
                </div>
              </div>
              <div className="wrapper-div">
                <img id="img2" src={image2} />
                <h2 className="p-headers">WHO WE SERVE</h2>
                <p>
                  In Los Angeles County, there are over 15,700 people living in
                  their vehicles each night. These vehicle dwellers represent
                  over 25% of the population of people experiencing homelessness
                  in LA County.
                </p>
                <Link
                  className="btn btn-outline-warning btn-lg links"
                  to="/forms/1"
                >
                  READ MORE STORIES
                </Link>{" "}
              </div>
              <div className="wrapper-div">
                <img id="img2" src={mandog} />
                <h2 className="p-headers">WHO WE SERVE</h2>
                <p>
                  Safe Parking LA is an example of a relatively new effort on
                  the West Coast to assist a specific group of individuals
                  before they fall further to life on the street. Many of them
                  may be working or have some source of income and are homeless
                  for the first time.
                </p>
                <Link
                  className="btn btn-outline-success btn-lg links"
                  to="/forms/1"
                >
                  READ MORE STORIES
                </Link>{" "}
              </div>
              <div className="wrapper-div">
                <img id="img2" src={veteran} />
                <h2 className="p-headers">WHO WE SERVE</h2>
                <p>
                  SafeParkingLA provides a safe and legal overnight parking
                  place for veterans and their families who are currently living
                  in their vehicles. We are in a secure lot with a portable
                  bathroom and wash station.
                </p>
                <Link
                  className="btn btn-outline-warning btn-lg links"
                  to="/forms/1"
                >
                  MORE INFO
                </Link>{" "}
              </div>
              <footer>
                <div className="footer-icons">
                  <a
                    className="icon-links"
                    href="https://www.facebook.com/SafeParkingLA/"
                    target="none"
                  >
                    <i class="fab fa-facebook-square footer-fabs" />
                  </a>
                  <a
                    className="icon-links"
                    href="https://www.instagram.com/safeparking_la/"
                    target="none"
                  >
                    <i class="fab fa-instagram footer-fabs" />
                  </a>
                  <a
                    className="icon-links"
                    href="mailto:info@safeparkingla.org"
                  >
                    <i class="far fa-envelope footer-fabs" />
                  </a>
                </div>
                <div className="footer-tags">
                  <a className="footer-links" href="#">
                    About
                  </a>
                  <a className="footer-links" href="#">
                    FAQ
                  </a>
                  <a className="footer-links" href="#">
                    Donate
                  </a>
                  <a className="footer-links" href="#">
                    Contact
                  </a>
                </div>
              </footer>
            </div>
          )}
        />

        <Route exact path={"/forms/:form"} render={() => <FormsPage />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
