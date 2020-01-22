import React, { Component } from 'react';
import './App.css';
// Data scraped from https://cuesa.org/eat-seasonally/charts/vegetables
import data from './beautifulveggiesdata.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: new Date().getMonth(),
      veggies: [],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
  }

  componentDidMount() {
    this.getVeggies();
  }

  getVeggies() {
    let veggies = [];
    let m = this.state.currentMonth;

    data.forEach(function(item) {
      console.log(item);
      if (item.months[m]) {
        veggies.push(<a href={item.link}><p className="veggie">{item.name}</p></a>);
      }
    })

    this.setState({
      veggies: veggies
    })
  }

  getRandomVeggie() {
    return this.state.veggies[Math.round(Math.random()*10) % this.state.veggies.length];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.months[this.state.currentMonth]}</p>
          <span className="random-secret">(psst, try {this.getRandomVeggie()})</span>
          <span className="dot">...</span>
        </header>
        <div className="App-body">
          <p className="title">What's in season?</p>
          {this.state.veggies}
        </div>
        <footer>
          <p>All data from <a href="https://cuesa.org/eat-seasonally/charts/vegetables">CUESA</a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;
