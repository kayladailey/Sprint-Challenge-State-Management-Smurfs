import React, { Component } from "react";
import { SmurfContext } from '../contexts/SmurfContext';
import "./App.css";



class App extends Component {
  render() {
    return (
      <SmurfContext.Provider value={smurf}>
      <div className="container">
          <User />
      </div>
  </SmurfContext.Provider>
    );
  }
}

export default App;
