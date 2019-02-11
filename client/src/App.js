import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ListOfCars from './components/ListOfCars';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ListOfCars />
      </div>
    );
  }
}

export default App;
