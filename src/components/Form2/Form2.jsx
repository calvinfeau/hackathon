import React, { Component } from "react";
import { Redirect } from "react-router-dom";


class Form2 extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        var self = this;
        var userId = this.props.location.state.id;
        self.setState({userId: userId})
    }

    render() {

        var form2;
         return (
             <div>
                 FORM 2
             </div>
         )
    }
}


export default Form2;