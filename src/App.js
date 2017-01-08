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
     this.toggleState = this.sendRequest.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.toggleState);
    window.addEventListener('click', this.sendRequest);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.toggleState);
    window.removeEventListener('click', this.sendRequest);
  }

  toggleState() {
    this.setState({ motion: !this.state.motion});
  }  

  sendRequest() {
       // ID of the Google Spreadsheet
      var spreadsheetID = "1pTiFvBhlodR067hZZ3en48tt4EahDShWK6PIGVRKcC8";

      // Make sure it is public or set to Anyone with link can view 
      var url = "https://spreadsheets.google.com/feeds/list/"+spreadsheetID+"/od6/public/values?alt=json";

      var image = d3.json(url, function (data) {
         var entry = data.feed.entry;
         console.log(entry[0]["gsx$pinterest"]["$t"]);
         this.setState({image: entry[0]["gsx$pinterest"]["$t"]});
      });     


  }

  render() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    return (  

      <div className="App">
        <div className="container">
          <Chart timer={this.props.time} className={"Images"} width={windowWidth} height={windowHeight}/>
          <Title onClick={this.sendRequest}/>
          <Button onClick={this.toggleState} />
          <Chart className={"Icons"} width={windowWidth} height={0.2 * windowHeight}/>
          <Content />
          <ContentFooter/>
        </div>
      </div>
    );
  }
}

export default Gameloop(App);
