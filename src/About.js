import React from 'react';

import './App.css';
import './normalize.css';
import './skeleton.css';

class About extends React.Component {

	render() {
		return (
        	<div className="About">
				<div className="Content">
					<img style={{'float': 'right'}} src="./images/bld5.png" role="presentation"/> 
					<p> Archmixes is a project by <a href="http://samtous.wtf/" target="_blank"> Sam Ghantous</a>. </p>
					<p> In 2017 it was exhibited at YveYang in New York and the Keller Gallery at MIT, while having lived online since 2016. </p>
					<p> Its subject is architecture in a post-net condition. The archmixes twitter bot opens up restrictive form of architectural authorship through the production of images, an everyday act, leaving the objects that are created in this process to become domestic debris. </p>
					<p> Archmix.es is a website made by <a href="http://kalli.website/" target="_blank">Kalli Retzepi.</a> </p>
					<p> Archmixes would not have existed without the help of many people. Some of them are listed below. </p>
					<p>Archmixes would not have existed without the the direct assistance and otherwise guidance of many people; some of them are listed below.</p>
					<img style={{'float': 'right' }} src="./images/bld1.png" role="presentation"/>
					<p>Xhulio Binjaku, Kristina Eldrenkamp, Grisha Enikolopov, Alex Kobald, Anran Li, Jason Minor, Kalli Retzepi, Michael Rosada, Austin Smith</p>
				</div>
	    	</div>
	    )
	}
}


export default About;

