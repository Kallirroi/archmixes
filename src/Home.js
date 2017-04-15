import React from 'react';
import Title from './Title';
import Chart from './Chart';
import Content from './Content';
import ContentFooter from './ContentFooter';

import './App.css';
import './normalize.css';
import './skeleton.css';

class Home extends React.Component {

  constructor() {
    super();
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    console.log('Home');
  }

	render() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
        
		return (
        <div className="container">
          <Chart className={"Images"} width={windowWidth} height={windowHeight}/>
          <Title/>
          <Chart className={"Icons"} width={windowWidth} height={windowHeight}/>
          <Content />
          <ContentFooter/>
        </div>
	    )
	}
}


export default Home;

