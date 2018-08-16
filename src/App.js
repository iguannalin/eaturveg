import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Data scraped from https://cuesa.org/eat-seasonally/charts/vegetables
import data from './beautifulveggiesdata.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: new Date().getMonth() + 1,
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="">{this.state.months[this.state.currentMonth]}</p>
        </header>
        <div className="App-body">
          <p className="title">What's in season?</p>
          {this.state.veggies}
        </div>
        <footer>
          <p>All data from <a href="https://cuesa.org/eat-seasonally/charts/vegetables">CUESA.</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
