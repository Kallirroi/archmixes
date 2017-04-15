import React, { Component } from 'react';
import {Link} from 'react-router';

import Title from './Title';
import Chart from './Chart';

import './App.css';
import './normalize.css';
import './skeleton.css';


class App extends Component {

  constructor() {
    super();
    // this.state = this.renderSvg.bind(this);
  }

  render() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    return (  
      <div className="App">
          <div className="Links Connect"><Link activeStyle={{ 'text-decoration': 'underline'}} to="/connect">Connect</Link></div>
          <div className="Links Instruction"><Link activeStyle={{ 'text-decoration': 'underline'}}  to="/instruction">Instruction</Link></div>
          <div className="Links About"><Link activeStyle={{ 'text-decoration': 'underline'}}  to="/about">About</Link></div>
          <div className="Links Event"><Link activeStyle={{ 'text-decoration': 'underline'}}  to="/event">Event</Link></div>

          <Title/>
          <Chart className={"Images"} width={windowWidth} height={windowHeight}/>
          <Chart className={"Icons"} width={windowWidth} height={windowHeight}/>
          {this.props.children}

      </div>
    );
  }
}

export default App;
