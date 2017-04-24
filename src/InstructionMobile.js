import React from 'react';
import { Share } from 'react-twitter-widgets';

import './App.css';
import './normalize.css';
import './skeleton.css';

class InstructionMobile extends React.Component {


	render() {
		return (
	        <div className="InstructionMobile">
	        	<div><a href="https://www.youtube.com/embed/GuQJ-B7MezA" target="_blank"> 1. Read the instructions </a></div>	        
	        	<div><a href="https://archmixlist.tumblr.com/" target="_blank"> 2. Choose a #</a></div>
				<Share url={( '_' )} text={( '_' )} />
			</div>
	    )
	}
}


export default InstructionMobile;

