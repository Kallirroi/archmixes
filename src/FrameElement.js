import React from 'react';

import './App.css';
import './normalize.css';
import './skeleton.css';

class FrameElement extends React.Component {

	render() {
		return (
			<div className="FrameElement" 
				style={{ 'left': this.props.id*100 , 'top': this.props.id*100*Math.random() }}>
				<iframe src={`${this.props.url}`} width={'200px'} height={'200px'} />
			</div>
	    )
	}
}

export default FrameElement;

