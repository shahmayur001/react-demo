import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends Component {
  sayHello(){
    alert("Say Hello!")
  }

  render() {
    var user = {
      name: "Mayur Shah",
      Init_age: 25,
      hobbies : ["Music", "Movie", "Game"]
    };
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div>
          <Home user={user} greet={this.sayHello}>
          <p> My Email address is => shahmayur001@gmail.com </p>
          </Home>
        </div>
      </div>
    );
  }
}

export default App;
