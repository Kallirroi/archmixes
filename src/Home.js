import React from 'react';

import Content from './Content';
import ContentFooter from './ContentFooter';

import './App.css';
import './normalize.css';
import './skeleton.css';

class Home extends React.Component {

	render() {
		return (
        <div className="container">
          <Content />
          <ContentFooter/>
        </div>
	    )
	}
}


export default Home;

