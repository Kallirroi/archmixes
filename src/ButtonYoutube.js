import React from 'react';
import './App.css';
import './normalize.css';
import './skeleton.css';

class ButtonYoutube extends React.Component {
	constructor() {
	    super();
	    this.clicked = this.clicked.bind(this);
	  }

	  clicked() {
	    console.log('Youtube')
	  }

	render() {
		return (
        <div className="row">
          <button  onClick={this.clicked} className="button" id="buttonstylz1">WATCH IT LIVE</button>
        </div>
	    )
	}
}


export default ButtonYoutube;

