import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ListOfCars from './components/ListOfCars';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
          <ItemModal/>
          <ListOfCars />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
