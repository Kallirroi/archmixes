import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import Title from './Title';
import Chart from './Chart';
import FrameElement from './FrameElement';
import FrameContent from './FrameContent';

import './App.css';
import './normalize.css';
import './skeleton.css';


class App extends Component {

  render() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    return (  
      <div className="App">
          <div className="Links Connect"><Link activeStyle={{ 'textDecoration': 'underline'}} to="/connect">Connect</Link></div>
          <div className="Links Instruction"><Link activeStyle={{ 'textDecoration': 'underline'}}  to="/instruction">Instruction</Link></div>
          <div className="Links About"><Link activeStyle={{ 'textDecoration': 'underline'}}  to="/about">About</Link></div>
          <div className="Links Event"><Link activeStyle={{ 'textDecoration': 'underline'}}  to="/event">Event</Link></div>

          <Title/>
          <Chart className={"Images"} width={windowWidth} height={windowHeight}/>
          <Chart className={"Icons"} width={windowWidth} height={windowHeight}/>
          {this.props.children}
          {FrameContent.map((d,i) => <FrameElement key={i} id={i} url={d.url} />) }
      </div>
    );
  }
}

export default App;
