import React from 'react';
import FrameContent from './FrameContent';
import FrameElement from './FrameElement';

import './App.css';
import './normalize.css';
import './skeleton.css';

class Grid extends React.Component {


	render() {
		return (
	        <div className="Grid">
	        	{FrameContent.map((d,i) => <FrameElement key={i} id={i} url={d.url} pathToImage={d.pathToImage} />) }
			</div>
	    )
	}
}


export default Grid;

