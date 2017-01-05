import React from 'react';

import './App.css';
import './normalize.css';
import './skeleton.css';

class ButtonHome extends React.Component {
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
          <button onClick={this.clicked} className="button" id="buttonstylz3">HOME</button>
        </div>
	    )
	}
}


export default ButtonHome;

