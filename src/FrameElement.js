import React from 'react';

import './App.css';
import './normalize.css';
import './skeleton.css';

class FrameElement extends React.Component {

	render() {
		return (
			<div dangerouslySetInnerHTML={{__html: this.props.url}}></div>
	    )
	}
}

export default FrameElement;

