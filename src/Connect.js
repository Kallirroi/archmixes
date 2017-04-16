import React from 'react';
import Chart from './Chart';

import './App.css';
import './normalize.css';
import './skeleton.css';

class Connect extends React.Component {
	render() {
	    const windowWidth = window.innerWidth;
    	const windowHeight = window.innerHeight;

		return (
			<Chart className={"Images"} width={windowWidth} height={windowHeight}/>
	    )
	}
}


export default Connect;

