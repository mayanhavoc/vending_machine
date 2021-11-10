import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
    constructor(props){
        super(props);
        this.state = { query: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange = (event) => {
        this.setState({ query: event.target.value });
    }
    handleClick(){
        alert("Saved your food to DB");
        this.props.history.push(`/food/${this.state.query}`);
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
                <button onClick={this.handleClick}>Save new food</button>
            </div>
        )
    }
}

export default FoodSearch
