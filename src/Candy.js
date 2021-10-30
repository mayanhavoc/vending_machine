import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Candy extends Component {
    render() {
        return (
            <div className="Candy">
                <h2>Candy</h2>
                <NavLink
                to="/"
                >
                Back
                </NavLink>                 
            </div>
        )
    }
}

export default Candy
