import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        // this.handleBack = this.handleBack.bind(this);
    }
    handleLogin(){
        alert("logged in");
        this.props.history.push("/food/salmon");
    }
    // handleBack(){
    //     this.props.history.goBack();
    // }
    render() {
        return (
            <div>
                <button onClick={this.handleLogin}>Log in</button>
                <button onClick={this.props.history.goBack}>Back</button>
            </div>
        )
    }
}

export default withRouter(Navbar);
