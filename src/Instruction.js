import React from 'react';
import { Timeline } from 'react-twitter-widgets';


import './App.css';
import './normalize.css';
import './skeleton.css';

class Instruction extends React.Component {

	render() {

		return (
        	<div className="Instruction">
				<div className="Content">
					<iframe  src="https://archmixlist.tumblr.com/" allowFullScreen></iframe>
					<iframe  src="https://www.youtube.com/embed/GuQJ-B7MezA"  allowFullScreen></iframe>
					<Timeline style={{'position': 'absolute'}}
					    dataSource={{
					      sourceType: 'profile',
					      screenName: 'archmixes'
					    }}
					    options={{
					      username: 'Archmixes',
					      width: '400',
					      height: '250'
					    }}
					  />
				</div>
			</div>
	    )
	}
}


export default Instruction;

