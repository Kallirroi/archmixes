import React, { Component } from 'react';
import {Link} from 'react-router';

import Title from './Title';

import './App.css';
import './normalize.css';
import './skeleton.css';


class App extends Component {

  render() {
    return (  
      <div className="App">
          <div className="Links Connect"><Link activeStyle={{ 'textDecoration': 'underline' ,'fontWeight': '700'}} to="/">Connect</Link></div>
          <div className="Links Instruction"><Link activeStyle={{ 'textDecoration': 'underline'}}  to="/instruction">Instruction</Link></div>
          <div className="Links About"><Link activeStyle={{ 'textDecoration': 'underline'}}  to="/about">About</Link></div>
          <div className="Links Event"><Link activeStyle={{ 'textDecoration': 'underline'}}  to="/event">Event</Link></div>
          <Title/>
          {this.props.children}
      </div>
    );
  }
}

export default App;
