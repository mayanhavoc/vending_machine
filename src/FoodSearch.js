import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
    constructor(props){
        super(props);
        this.state = { query: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({ query: event.target.value });
    }
    render() {
        return (
            <div>
                <h1>Search for a food</h1>
                <input 
                type="text"
                placeholder="Search for food"
                value={this.state.query}
                onChange={this.handleChange}
                /> 
                <Link to={`/food/${this.state.query}`} >Search</Link>
            </div>
        )
    }
}

export default FoodSearch
