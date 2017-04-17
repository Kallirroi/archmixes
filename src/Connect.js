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
          	<div>
          	<Chart className={"Icons"} width={windowWidth} height={windowHeight}/>
			<Chart className={"Images"} width={windowWidth} height={windowHeight}/>
			</div>
	    )
	}
}


export default Connect;

