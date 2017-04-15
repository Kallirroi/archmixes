import React from 'react';
import { Emoji } from 'emoji-mart';

import './App.css';
import './normalize.css';
import './skeleton.css';

class Event extends React.Component {
	render() {
		return (
        <div className="Event">
			<div className="Content">
				<img src="http://placehold.it/755x380" role="presentation"/>
				<p>Sam Ghantous <Emoji emoji={{ id: 'classical_building'}} size={24} /><Emoji emoji={{ id: 'repeat'}} size={24} /> </p>
				<p>Yve YANG Gallery is pleased to announce “<Emoji emoji={{ id: 'classical_building'}} size={24} /><Emoji emoji={{ id: 'repeat'}} size={24} /> ”, a solo exhibition by Sam Ghantous.</p>
				<p>It will be featured at an experimental environment at Yve YANG Loft. </p>
				<p>Exhibition dates are from April 28th through May 11th, 2017.</p> 
				<p>The opening reception will be Friday April 28th, 5pm to 9pm.</p>
			</div>
		</div>
	    )
	}
}


export default Event;

