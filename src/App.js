import React, { Component } from 'react';
import { Router, Link  } from 'react-router';
import Routes from './Routes';
import Title from './Title';
import Chart from './Chart';
import Content from './Content';
import ContentFooter from './ContentFooter';

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
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return (  

      <div className="App">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/connect">Connect</Link></p>
        <p><Link to="/instruction">Instruction</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/event">Event</Link></p>
        {this.props.children}

        <div className="container">
          <Chart className={"Images"} width={windowWidth} height={windowHeight}/>
          <Title/>
          <Chart className={"Icons"} width={windowWidth} height={windowHeight}/>
          <Content />
          <ContentFooter/>
        </div>
      </div>
    );
  }
}

export default App;
