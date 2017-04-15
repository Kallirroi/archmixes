import React from 'react';

import './App.css';
import './normalize.css';
import './skeleton.css';

class About extends React.Component {

	render() {
		return (
        	<div className="About">
				<div className="Content">
					<img src="http://placehold.it/255x280" role="presentation"/> 
					<img src="http://placehold.it/255x280" role="presentation"/>
					<p> Archmixes is a project by Sam Ghantous. </p>
					<p> It has been exhibited at the Yve Yang Loft in New York in 2017 and the MIT ACT Cube in 2016. It has lived online since 2016. </p>
					<p> Its subject is architecture in a post-net condition. The archmixes twitter bot makes architectural authorship through the prodcution of images, an everyday act, and the objects created become domestic debris. </p>
					<p> Archmix.es is a website made by Kallirroi Retzepi. </p>
					<p> Archmixes would not have existed without the help of many people. Some of them are listed below. </p>
					<p> To make the twitter bot a functioning thing, Austin Wade Smith and Anran Li provided tremendous technical support and critical feedback.</p>
					<p>My team at large also included Alex Kobald, Grisha Enikolopov, Jamie Farrell, Jason Minor, Liz Galvez, Xhulio Binjaku, Yasaman Tahouni.</p>
					<p>Additional critical feedback provided by Albert Lopez, Austin Wade Smith, Eli Keller, Faiyaz Khan, John May, Lucy Lui, and Peter Osborne.</p>
				</div>
	    	</div>
	    )
	}
}


export default About;

