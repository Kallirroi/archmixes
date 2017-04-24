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
				<img style={{'transform': 'rotate(-90deg)'}} src="./images/event.png" role="presentation"/>
				<p style={{'fontSize': '1.5em'}}>Sam Ghantous </p>
				
				<p><Emoji emoji={{ id: 'classical_building'}} size={24} /><Emoji emoji={{ id: 'repeat'}} size={24}/> <br/>
				04.28.2017-05.11.2017 <br/>
				Opening: 04.28.2017 5PM-9PM </p>

				<p>Yve YANG Gallery is pleased to announce “<Emoji emoji={{ id: 'classical_building'}} size={24} /><Emoji emoji={{ id: 'repeat'}} size={24} /> ”, a solo exhibition by Sam Ghantous.</p>
				
				<p><Emoji emoji={{ id: 'classical_building'}} size={24} /><Emoji emoji={{ id: 'repeat'}} size={24}/> will be featured at an experimental environment at Yve YANG Loft. Exhibition dates are from April 28th through May 11th, 2017. The opening reception will be Friday April 28th, 5pm to 9pm.</p>
				
				<p>Tweeting from your couch, in your sweats, can be an architectural act </p>
				
				<p>Hope for architecture today is found, instead, in its ability to be shared online. There, its value is in its velocity, intensity, and spread - an ability to “get around,” a newfound promiscuity. Attention is a currency and the image, a visual byte that circulates, has already replaced the building in space. Architecture exists today as images -it is on and of the web, and it can shape public there.</p>
				
				<p><Emoji emoji={{ id: 'classical_building'}} size={24} /><Emoji emoji={{ id: 'repeat'}} size={24}/> emphasizes a collective experience of architecture through its circulation at a time when the image has killed the building. By shedding the cloak of representation, this exhibit depends on the presentation of “real things”: Twitter bots, YouTube tutorials, and screen captures, becoming domesticated objects. It distributes authorship in the making of new architectures by harvesting open source image debris found online and creating a platform for anyone to participate.</p>
				
				<p>This is a call to speed up and broadcast architecture made of the web, for the web. Creativity has been democratized: now anyone with a phone and repost button can sculpt their own aesthetic universes, be it on Instagram, YouTube, or SoundCloud. Through recycling the pixel, vector, and mesh-waste that lives online, architecture has the opportunity to sustain the archive of its disciplinary history; it stands the chance to engage publics, and it might even sustain an economy of attention in an era of perpetual distraction. </p>
				
				<p style={{'text-decoration': 'underline'}}>About the artist</p>

				<p>Sam Ghantous (b. 1989) explores architecture’s tension with technology and its effects on cultural production. His work exists both online and in real life as objects, images, videos, situations, and installations. He recently graduated from the MIT Department of Architecture where he has also taught and researched. Sam has contributed to exhibitions in Toronto, Canada; Cambridge, USA; and Venice, Italy. </p>

				<p style={{'text-decoration': 'underline'}}>About Yve YANG Gallery </p>

				<p>YveYANG is a gallery that presents emerging and newly established artists from all over the world. It is committed to carefully tracking the ever emerging technological moment alongside artists who wrestle with the conditions that this moment presents. This task requires a constant reconsideration of disciplinarity, forms of knowledge and representational modes. Yve YANG is eager to see the practice of art in turn generate its own technologies that shape the world and our perception of it. We believe great art is not just embellishment, but rather is an essential act that inspires the progression of human history.</p>

				<p style={{'text-decoration': 'underline'}}>Exhibition Team</p>

				<p> Crucial contributions in mounting this exhibition were generously provided by the following: <br/>
					Kristina Eldrenkamp <br/>
					Grigori Enikolopov <br/>
					Anran Li <br/>
					Jason Minor <br/>
					Kallirroi Retzepi <br/>
 					Austin Wade Smith
				</p>

			</div>
		</div>
	    )
	}
}


export default Event;

