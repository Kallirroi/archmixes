import React, { Component } from 'react';
import * as d3 from 'd3';

import Title from './Title';
import Icons from './Icons';
import ContentImages from './ContentImages';
import Content from './Content';
import ContentFooter from './ContentFooter';

import './App.css';
import './normalize.css';
import './skeleton.css';

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
class App extends Component {
  render() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    return (
      <div className="App">
        <div className="container">
          <Title/>
          <Icons data={data} width={containerWidth} height={containerHeight/4}/>
          <ContentImages/>
          <Content/>
          <ContentFooter/>
        </div>
      </div>
    );
  }
}

export default App;
