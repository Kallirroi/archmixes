import React from 'react';
import './App.css';
import './normalize.css';
import './skeleton.css';

class Content extends React.Component {
	render() {
		return (
			<div className="Content">
				{/*       MAIN TEXT SECTION         */}
				<div className="row">
					<div className="seven column" style={{paddingLeft: '10em', paddingRight: '10em', paddingTop: '0em'}}>
					<p>Tweeting from your couch, in your sweats, can be an architectural act.</p>
					<p>Architecture’s ability to serve and shape a public has been weakened by its disciplinary exclusivity and the privatization of public space. </p>
					<p>Hope for architecture today is found, instead, in its ability to be shared online. There, its value is in its newfound velocity, intensity, and spread - an ability to “get around”. Attention is a currency and the image, a visual byte that circulates, has already replaced the building in space, as such. Architecture is on and of the web, and it can shape public there.</p>
					<p>If you Tweet <a href="https://twitter.com/archmixes" target="_blank">@archmixes</a> with selections from the archive of 3D meshes i’ve compiled, you can make architecture. Appropriated from 3D models uploaded to Sketchup Warehouse, anyone can make anew from preexisting digitized disciplinary matter. This is a call for the regime of a new six points of architecture: Search, Select, Combine, Tag, Archive, Share. Sharing is a creative act that will disperse into the fiber optic infinitum your architecture rendered specific by its anxious formats: JPEGs, 3d meshes, videos, GIFs, 3d print files, Shopify listings, Instagram posts, Pins. Files are promiscuous and will degrade in order to be as mobile as possible, to be reused and misused; they just want to be save-as’ed. </p>
					<p>This is a call to speed up and broadcast architecture made of the web, for the web. Creativity has been democratized: now anyone with a phone and repost button can sculpt their own aesthetic universes, be it on Instagram, YouTube, or SoundCloud. Through recycling the pixel, vector, and mesh-waste that lives online, architecture has the opportunity to sustain the archive of its disciplinary history; it stands the chance to engage publics, it might even sustain an economy of attention in the era of perpetual distraction. </p>
					<p>This thesis is a performance that will be hosted in the ACT Cube and broadcast on YouTube. Bring your phone.</p>
					<p>Architecture in the Afternet is an M.Arch thesis delivered and performed at MIT Architecture by Sam Ghantous. The project was advised by William O’Brien Jr., and readers Antonio Furgiuele, Curtis Roth, Andrew Kovacs.</p>
					</div>
				</div>
	    	</div>
	    )
	}
}


export default Content;