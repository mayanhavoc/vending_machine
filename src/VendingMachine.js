import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Snacks from './Snacks';
import Drinks from './Drinks';
import Candy from './Candy';
import Message from './Message';

class VendingMachine extends Component {
    render() {
        return (
            <div className="Vending component-wrapper">
                <h1>Vending Machine</h1>
                <nav>   
                    <NavLink
                    exact
                    activeClassName="active-link"
                    to="/Snacks"
                    >
                        Snacks
                    </NavLink>
                    <NavLink
                    exact
                    activeClassName="active-link"
                    to="/Drinks"
                    >
                        Drinks
                    </NavLink>
                    <NavLink
                    exact
                    activeClassName="active-link"
                    to="/Candy"
                    >
                        Candy
                    </NavLink>
                </nav>
                <Message>
                    <h3>Pick from our varied selection</h3>
                </Message>
                <Switch>
                    <Route exact path="/Snacks" component={Snacks} />
                    <Route exact path="/Drinks" component={Drinks} />
                    <Route exact path="/Candy" component={Candy} />
                </Switch>
            </div>
        );
    }
}

export default VendingMachine
