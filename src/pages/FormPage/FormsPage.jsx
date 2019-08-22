import React, { Component } from "react";
import './FormsPage';
import { Route, Switch, Link } from "react-router-dom";
import InterestForm from "../../components/InterestForm/InterestForm";


class FormsPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Route
                exact path="/form-1"
                render={() => <InterestForm />}
                 />
            </div>
        )
    }
}

export default FormsPage;