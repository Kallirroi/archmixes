import React from 'react';
import { Timeline, Share } from 'react-twitter-widgets';
import InstructionMobile from './InstructionMobile';

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
					<InstructionMobile />
					<Timeline
					    dataSource={{
					      sourceType: 'profile',
					      screenName: 'archmixes'
					    }}
					    options={{
					      username: 'Archmixes',
					      height: '10vh'
					    }}
					  />
					<iframe src="https://docs.google.com/spreadsheets/d/1RrZKh8pdTDijKsjTITJU33WQLNjhkjU3Z5hGIVUYIO8/pubhtml?gid=211184092&amp;single=true&amp;widget=true&amp;headers=false" allowFullScreen></iframe>
					<iframe src="https://www.youtube.com/embed/GuQJ-B7MezA"  allowFullScreen></iframe>
				</div>
			</div>
	    )
	}
}


export default Instruction;

