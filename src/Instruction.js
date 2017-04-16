import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline } from 'react-twitter-widgets'

import './App.css';
import './normalize.css';
import './skeleton.css';

class Instruction extends React.Component {

	render() {
		return (
        <div className="Instruction">
			<div className="Content">
				<iframe src="https://www.youtube.com/watch?v=GuQJ-B7MezA"></iframe>
				<iframe src="https://archmixlist.tumblr.com/"></iframe>
				
				<Timeline
				    dataSource={{
				      sourceType: 'profile',
				      screenName: 'archmixes'
				    }}
				    options={{
				      username: 'Archmixes',
				      height: '400'
				    }}
				  />

			</div>
		</div>
	    )
	}
}


export default Instruction;

