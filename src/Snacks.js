import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Snack extends Component {
    render() {
        return (
            <div className="Snacks">
                <h2>Snacks</h2>
                <NavLink
                to="/"
                >
                Back
                </NavLink>                
            </div>
        )
    }
}

export default Snack
