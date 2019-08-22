import React, { Component } from "react";
import './FormsPage';
import { Route, Switch, Link } from "react-router-dom";
import InterestForm from "../../components/InterestForm/InterestForm";
import Form2 from "../../components/Form2/Form2";
import Form3 from "../../components/Form3/Form3";
import Form4 from "../../components/Form4/Form4";


class FormsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                    exact path="/forms/1"
                    render={() => <InterestForm />}
                    />
                    <Route
                    exact path="/forms/2"
                    render={(props) => <Form2 {...props} />}
                    />
                    <Route 
                    exact path="/forms/3"
                    render={(props) => <Form3 {...props} />}
                    />
                    <Route 
                    exact path="/forms/4"
                    render={(props) => <Form4 {...props} />}
                    />
                </Switch>
            </div>
        )
    }
}

export default FormsPage;