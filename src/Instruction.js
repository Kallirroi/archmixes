import React from 'react';
import { Timeline, Share } from 'react-twitter-widgets';


import './App.css';
import './normalize.css';
import './skeleton.css';

class Instruction extends React.Component {

	render() {

		return (
        	<div className="Instruction">
				<div className="Content">
					<Share url={( '_' )} text={( '_' )} />
					<br/>
					<br/>
					<Timeline
					    dataSource={{
					      sourceType: 'profile',
					      screenName: 'archmixes'
					    }}
					    options={{
					      username: 'Archmixes',
					      width: '25%',
					      height: '550'
					    }}
					  />
					<iframe src="https://archmixlist.tumblr.com/" allowFullScreen></iframe>
					<iframe src="https://www.youtube.com/embed/GuQJ-B7MezA"  allowFullScreen></iframe>
				</div>
			</div>
	    )
	}
}


export default Instruction;

