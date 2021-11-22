import logo from './logo.svg';
import './App.css';
import ProptTypes from 'prop-types';

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super(); // instantiate parent component di sini
    this.state = {
      title: "Session 19 - React JS",
      name: "Ryan",
      scope: {
        project: "FasterAPI",
        founded: 2021
      }
    }
  }

  getScope(){
    return this.state.scope
  }

  // changeTitle = () => {
  //   this.setState({
  //     title: "Final Project - React JS"
  //   })
  // }

  changeTitle = (event) => {
    console.log(event);
    this.setState({
      title: "Final Project - React JS"
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            {this.state.title} by {this.state.name}
          </h2>
          <h3>
            Project Name: {this.getScope().project} |
            Founded: {this.getScope().founded} | 
            Score: {this.props.score}
          </h3>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            className="App-link"
            onClick={(e) => this.changeTitle(e)}
            //onClick={this.changeTitle}
          >
            Learn React
          </button>
        </header>
      </div>
    )
  }
}

App.ProptTypes = {
  score: ProptTypes.number
}

export default App;
