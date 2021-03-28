import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import Details from './components/Details';
import Default from './components/Default';
import Tray from './components/Tray';
import Modal from './components/Modal';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={FoodList} />
          <Route path="/details" component={Details} />
          <Route path="/tray" component={Tray} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;