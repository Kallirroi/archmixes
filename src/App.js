import React, { Component } from 'react';
import { Router, Link  } from 'react-router';
import Routes from './Routes';


import './App.css';
import './normalize.css';
import './skeleton.css';


class App extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (  

      <div className="App">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/connect">Connect</Link></p>
        <p><Link to="/instruction">Instruction</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/event">Event</Link></p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
