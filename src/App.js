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
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    return (
      <div className="App">
        <div className="container">
          <Title/>
          <Chart n={11} className={"Icons"} width={containerWidth} height={containerHeight * 0.2}/>
          <Chart n={4} className={"Images"} width={containerWidth} height={1.4*containerHeight}/>
          <Content/>
          <ContentFooter/>
        </div>
      </div>
    );
  }
}

export default App;
