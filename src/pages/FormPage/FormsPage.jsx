import React, { Component } from "react";
import './FormsPage';
import { Route, Switch, Link } from "react-router-dom";
import InterestForm from "../../components/InterestForm/InterestForm";
import Form2 from "../../components/Form2/Form2";

class FormsPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                    exact path="/forms"
                    render={() => <InterestForm />}
                    />
                    <Route
                    exact path="/form2"
                    render={() => < Form2/>}
                    />
                </Switch>
            </div>
        )
    }
}

export default FormsPage;