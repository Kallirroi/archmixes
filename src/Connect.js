import React from 'react';
import Chart from './Chart';
import Grid from './Grid';

import './App.css';
import './normalize.css';
import './skeleton.css';

class Connect extends React.Component {
	render() {
	    let windowWidth = window.innerWidth;
    	let windowHeight = window.innerHeight;

		return (
          	<div>
          		<Grid  className={"Grid"} />
	          	<Chart className={"Icons"} width={windowWidth} height={windowHeight}/>
				<Chart className={"Images"} width={windowWidth} height={windowHeight}/>
			</div>
	    )
	}
}


export default Connect;

