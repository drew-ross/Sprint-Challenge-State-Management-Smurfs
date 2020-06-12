import React, { Component } from "react";
import "./App.scss";
import SmurfList from './SmurfList';
import Form from './Form';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <SmurfList />
      </div>
    );
  }
}

export default App;
