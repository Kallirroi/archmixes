import React from 'react';

import './App.css';
import './normalize.css';
import './skeleton.css';

class FrameElement extends React.Component {

	constructor() {
	    super();
	    this.onRef = ref => this.ref = ref;
	    this.renderFrame = this.renderFrame.bind(this);
	}

	renderFrame(url) { 
	  	// console.log(d);
	  	window.open(url)
	}

	render() {
		return (
			<div className="FrameElement"  >
				<img style={{'width': '50px' }} src={this.props.pathToImage} onClick={this.renderFrame(this.props.url)} role="presentation"  />
			</div>
	    )
	}
}

export default FrameElement;

