import React from 'react';
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
		return (
        <div className="row">
          <button onClick={this.clicked} className="button">Home</button>
        </div>
	    )
	}
}


export default Home;

