import React from 'react';
import './App.css';
import './normalize.css';
import './skeleton.css';

class ButtonFeed extends React.Component {
  constructor() {
    super();
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    console.log('Feed')
  }

	render() {
		return (
        <div className="row">
          <button onClick={this.clicked} className="button" id="buttonstylz2">FEED ME</button>
        </div>
	    )
	}
}


export default ButtonFeed;

