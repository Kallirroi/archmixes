import React, { Component } from 'react';
import * as d3 from 'd3';

import Title from './Title';
import Chart from './Chart';
import Content from './Content';
import ContentFooter from './ContentFooter';

import './App.css';
import './normalize.css';
import './skeleton.css';

class App extends Component {
  render() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return (  
      <div className="App">
        <div className="container">
          <Chart className={"Images"} width={windowWidth} height={windowHeight}/>
          <Title/>
          <Chart className={"Icons"} width={windowWidth} height={0.2 * windowHeight}/>
          <Content/>
          <ContentFooter/>
        </div>
      </div>
    );
  }
}

export default App;
