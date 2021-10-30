import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Drinks extends Component {
    render() {
        return (
            <div className="Drinks">
                <h2>Drinks</h2>
                <NavLink
                to="/"
                >
                Back
                </NavLink>                
            </div>
        )
    }
}

export default Drinks
