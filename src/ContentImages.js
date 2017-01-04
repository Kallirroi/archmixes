import React from 'react';
import './App.css';
import './normalize.css';
import './skeleton.css';

class Contentimages extends React.Component {
	render() {
		return (
			<div className="Contentimages">
				{/*      BACKGROUND images       */}
				{/*    NOTE FOR SAM:  edit size and positions of the images here in the 'style' section    */}
				<div className="row">
					<div className="images image1"> </div>
					<div className="images image2"> </div>
					<div className="images" src="images/bld3.png" style={{top: '10%', right: '-3em', width: 200}} />
					<div className="images" src="images/bld4.png" style={{top: '3%', right: '-8em', width: 230}} />
					<div className="images" src="images/bld5.png" style={{top: '18%', width: 230}} />
					<div className="images" src="images/bld6.png" style={{top: '24%', right: '-5em', width: 200}} />
					<div className="images" src="images/bld7.png" style={{top: '31%', right: '1em', width: 300}} />
					<div className="images" src="images/bld8.png" style={{top: '28%', left: '-2em', width: 100}} />
					<div className="images" src="images/bld9.png" style={{top: '31%', left: '-3em', width: 340}} />
					<div className="images" src="images/bld10.png" style={{top: '37%', right: '-4em', width: 60}} />
					<div className="images" src="images/bld11.png" style={{top: '41%', left: '-8em', width: 500}} />
					<div className="images" src="images/bld12.png" style={{top: '41%', right: '-3em', width: 300}} />
					<div className="images" src="images/bld13.png" style={{top: '51%', right: '-8em', width: 450}} />
					<div className="images" src="images/bld14.png" style={{top: '52%', left: '2em', width: 100}} />
					<div className="images" src="images/bld15.png" style={{top: '58%', right: '4em', width: 100}} />
					<div className="images" src="images/bld16.png" style={{top: '63%', left: '-6em', width: 340}} />
					<div className="images" src="images/bld17.png" style={{top: '74%', right: '-4em', width: 300}} />
					<div className="images" src="images/bld18.png" style={{top: '80%', left: '-9em', width: 400}} />
					<div className="images" src="images/bld19.png" style={{top: '94%', left: '-3em', width: 300}} />
				</div>
	    	</div>
	    )
	}
}


export default Contentimages;

