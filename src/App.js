import React, { Component } from 'react';

import Gameloop from './Gameloop';
import Title from './Title';
import Button from './Button';
import Chart from './Chart';
import Content from './Content';
import ContentFooter from './ContentFooter';
import * as d3 from 'd3';

import './App.css';
import './normalize.css';
import './skeleton.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      motion: true,
      image: ""
    }
     this.toggleState = this.toggleState.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.toggleState);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.toggleState);
  }

  toggleState() {
    this.setState({ motion: !this.state.motion});
  }  



  render() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    return (  

      <div className="App">
        <div className="container">
          <Chart className={"Images"} width={windowWidth} height={windowHeight}/>
          <Title/>
          <Chart className={"Icons"} width={windowWidth} height={0.2 * windowHeight}/>
          <Content />
          <ContentFooter/>
        </div>
      </div>
    );
  }
}

export default App;
