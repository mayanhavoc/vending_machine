import { Component } from 'react';
// import VendingMachine from './VendingMachine';
import Food from './Food';
import Meal from './Meal';
import { Route, Switch } from 'react-router-dom';
import FoodSearch from './FoodSearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={FoodSearch} />
          <Route exact path="/food/:name" render={(props) => <Food {...props} />} />
          <Route
            exact
            path='/food/:foodName/drink/:drinkName'
            component={Meal}
          />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
