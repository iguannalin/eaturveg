import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Data scraped from https://cuesa.org/eat-seasonally/charts/vegetables
import data from './beautifulveggiesdata.json';

const currentMonth = 9;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      veggies: []
    }
  }

  componentDidMount() {
    this.getVeggies();
  }

  getVeggies() {
    let veggies = [];

    data.forEach(function(item) {
      console.log(item);
      if (item.months[currentMonth]) {
        veggies.push(item.name);
      }
    })

    this.setState({
      veggies: veggies
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.veggies}
        </p>
      </div>
    );
  }
}

export default App;
