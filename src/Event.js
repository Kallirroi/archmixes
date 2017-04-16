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
				<img src="https://s-media-cache-ak0.pinimg.com/564x/75/5b/3e/755b3eb1c706980ad3ca75cfe08bceae.jpg" role="presentation"/>
				<p style={{'font-size': '1.5em'}}>Sam Ghantous </p>
				<p><Emoji emoji={{ id: 'classical_building'}} size={24} /><Emoji emoji={{ id: 'repeat'}} size={24}/> <br/>
				04.28.2017-05.11.2017 <br/>
				Opening: 04.28.2017 5PM-9PM </p>
				<p>Yve YANG Gallery is pleased to announce “<Emoji emoji={{ id: 'classical_building'}} size={24} /><Emoji emoji={{ id: 'repeat'}} size={24} /> ”, a solo exhibition by Sam Ghantous.</p>
				<p><Emoji emoji={{ id: 'classical_building'}} size={24} /><Emoji emoji={{ id: 'repeat'}} size={24}/> will be featured at an experimental environment at Yve YANG Loft. Exhibition dates are from April 28th through May 11th, 2017. The opening reception will be Friday April 28th, 5pm to 9pm.</p>
				<p>Today, architecture exists as a collection of images that live online rather than as a lived experience. Its agency is in its ability to circulate, its ability to “get around.” Afterall, attention is a currency, and images are made valuable by exchange: their velocity, intensity, and spread. </p>
				<p>Images are mutable: their resolution, reuse, and recombination at a time of visual acuity leaves the question of  “medium” deficient in the wake of “formatting”. The banality of the web makes this a reality for most of us as we Snap, Post, Pin, and Like, restructuring data while blurring the distinction between author and audience. We actively shape our respective aesthetic universes by “sharing”. Perhaps this is the closest thing we have to a collective act, today.</p>
				<p><Emoji emoji={{ id: 'classical_building'}} size={24} /><Emoji emoji={{ id: 'repeat'}} size={24}/> emphasizes a collective experience of architecture through its circulation at a time when the image has killed the building. Architecture’s hope in the 20th century  - to serve and shape a public through lived experience - has been weakened by the loss of urban public space at the hands privatization. Architecture now affects change through image by being on and of the web.</p>
				<p>Through shedding the cloak of representation, this exhibit depends on actual “things”: Twitter Bots, YouTube tutorials, and Screen Captures, becoming domesticated objects. It implicates distributed authorship in the making of new architectures by harvesting open source image debris found online and creating a platform for anyone to participate. It forms social relations through architecture’s imageability and mobility. </p>
				<p>Perhaps, Tweeting from your couch may even become an architectural act. </p>
			</div>
		</div>
	    )
	}
}


export default Event;

