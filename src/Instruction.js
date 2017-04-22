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
					<Timeline style={{'position': 'relative', 'float': 'left'}}
					    dataSource={{
					      sourceType: 'profile',
					      screenName: 'archmixes'
					    }}
					    options={{
					      username: 'Archmixes',
					      width: '28%',
					      height: '550'
					    }}
					  />
					 <Share 
					 	url={( 'http://twitter.com/archmixes' )}
					 	
					 />
					  <iframe style={{'position': 'relative', 'float': 'right'}} src="https://archmixlist.tumblr.com/" allowFullScreen></iframe>
					<iframe style={{'position': 'relative', 'float': 'right'}} src="https://www.youtube.com/embed/GuQJ-B7MezA"  allowFullScreen></iframe>
				</div>
			</div>
	    )
	}
}


export default Instruction;

