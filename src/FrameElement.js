import React from 'react';

import './App.css';
import './normalize.css';
import './skeleton.css';

class FrameElement extends React.Component {

	constructor() {
	    super();
	    this.renderFrame = this.renderFrame.bind(this);
	}

	renderFrame(url) { 
	  	// console.log(url);
	  	window.open(url)
	}

	render() {
		return (
			<div className="FrameElement" onClick={ () =>  this.renderFrame(this.props.url)}  >
				<img style={{'width': '50px' }} src={this.props.pathToImage} role="presentation"  />
			</div>
	    )
	}
}

export default FrameElement;

