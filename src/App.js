import React, { Component } from 'react';
import Title from './Title';
import ButtonYoutube from './ButtonYoutube';
import ButtonFeed from './ButtonFeed';
import Icons from './Icons';
import ContentImages from './ContentImages';
import Content from './Content';
import ContentFooter from './ContentFooter';

import './App.css';
import './normalize.css';
import './skeleton.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <ButtonYoutube onClick={this.clicked}/>
          <ButtonFeed/>
          <Title/>
          <Icons/>
          <ContentImages/>
          <Content/>
          <ContentFooter/>
        </div>
      </div>
    );
  }
}

export default App;
