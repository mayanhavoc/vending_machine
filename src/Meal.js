import React, { Component } from 'react';

class Meal extends Component {
    render() {
        const foodName = this.props.match.params.foodName;
        const drinkName = this.props.match.params.drinkName;
        const foodUrl = `https://source.unsplash.com/400x225/?${foodName}`;
        const drinkUrl = `https://source.unsplash.com/400x225/?${drinkName}`;
        return (
            <div className="Meal">
                <div>
                    <h1>Your meal for today</h1>
                    <h2>{this.props.match.params.foodName}</h2> 
                    <img src={foodUrl} alt={foodName} />
                </div>
                <span> with </span> 
                <div>
                    <h3>{this.props.match.params.drinkName}</h3>
                    <img src={drinkUrl} alt={drinkName} />
                </div>
            </div>
        )
    }
}

export default Meal
