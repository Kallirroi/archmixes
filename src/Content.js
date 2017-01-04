import React from 'react';


class Content extends React.Component {
	render() {
		return (
			<div className="Content">
			  	<div className="container">
			        <div className="row a" style={{marginLeft: '0%'}}> </div>
			        {/*      ARCHMIXES TITLE     */}
			        <div className="row">
			          <div className="one column fixed" id="titlestylz">
			            <h1>Archmixes</h1>
			          </div>
			        </div>
			        {/*  THIS CONTAINS THE BUTTON FOR THE YOUTUBE LINK */}
			        <div className="row">
			          <button className="button" id="buttonstylz1">WATCH IT LIVE</button>
			          <button className="button" id="buttonstylz2">FEED ME</button>
			        </div>
			        {/*EDIT YOUTUBE CONTENT HERE*/}
			        <div id="myModal" className="modal">
			          <div className="modal-content">
			            <span className="close">×</span>
			          </div>
			        </div>
			        {/*      ICONS = SVGS     */}
			        <div className="row" style={{paddingTop: '10em'}}>
			          <div className="one column rotate1" id="insta" style={{paddingLeft: '6em'}}>
			            <a href="http://www.instagram.com/archmixes/" target="_blank">
			              <img role="presentation"  src="images/insta.svg" width={40} height={40} style={{paddingLeft: '1.2em'}} />
			            </a>
			            {/* <h6> instagram </h6> */}
			          </div>
			          <div className="one column rotate2" id="twitter" style={{paddingLeft: '6em'}}>
			            <a href="https://twitter.com/archmixes" target="_blank">
			              <img role="presentation"  src="images/twitter.svg" width={40} height={40} style={{paddingLeft: '0.6em'}} />
			            </a>
			            {/* <h6> twitter </h6> */}
			          </div>
			          <div className="one column rotate3" id="email" style={{paddingLeft: '6em'}}>
			            <a href="mailto:archmixes@gmail.com?Subject=Hello" target="_top">
			              <img role="presentation"  src="images/email.svg" width={40} height={40} style={{paddingLeft: '.2em'}} />
			            </a>
			            {/*  <h6> email </h6> */}
			          </div>
			          <div className="one column rotate2" id="pinterest" style={{paddingLeft: '6em'}}>
			            <a href="https://www.pinterest.com/amixes/?etslf=2407&eq=arc" target="_blank">
			              <img role="presentation"  src="images/pinterest.svg" width={40} height={40} style={{paddingLeft: '.7em'}} />
			            </a>
			            {/* <h6> pinterest </h6> */}
			          </div>
			          <div className="one-third column rotate1" id="youtube" style={{paddingLeft: '6em'}}>
			            <a href="https://www.youtube.com/channel/UC5hDO86UUlnEsX2c6c3b1ZA" target="_blank">
			              <img role="presentation"  src="images/youtube.svg" width={40} height={40} style={{paddingLeft: '.2em'}} />
			            </a>
			            {/*  <h6> youtube </h6> */}
			          </div>
			          <div className="one column rotate3" id="tumblr" style={{paddingLeft: '6em'}}>
			            <a href="http://archmixes.tumblr.com/" target="_blank">
			              <img role="presentation"  src="images/tumblr.svg" width={40} height={40} style={{paddingLeft: '1.2em'}} />
			            </a>
			            {/*  <h6> tumblr </h6> */}
			          </div>
			          <div className="one column rotate4" id="ello" style={{paddingLeft: '6em'}}>
			            <a href="https://ello.co/archmixes" target="_blank">
			              <img role="presentation"  src="images/ello.svg" width={40} height={40} style={{paddingLeft: '1.2em'}} />
			            </a>
			            {/*  <h6> ello </h6> */}
			          </div>
			          <div className="one-third column rotate4" id="ebay" style={{paddingLeft: '6em'}}>
			            <a href="http://www.ebay.com/usr/arcmixe_0" target="_blank">
			              <img role="presentation"  src="images/ebay.svg" width={40} height={40} style={{paddingLeft: '1.2em'}} />
			            </a>
			            {/*  <h6> ebay </h6> */}
			          </div>
			          <div className="one column rotate3" style={{paddingLeft: '6em'}}>
			            <a href="https://www.etsy.com/shop/ArchMixes?ref=hdr_shop_menu" target="_blank">
			              <img role="presentation"  src="images/etsy.svg" width={40} height={40} style={{paddingLeft: '1.2em'}} />
			            </a>
			            {/*  <h6> etsy </h6> */}
			          </div>
			          <div className="one column rotate4" style={{paddingLeft: '2em'}}>
			            <a href="http://sketchfab.com/samtous" target="_blank">
			              <img role="presentation"  src="images/sketchfab.svg" width={40} height={40} style={{paddingLeft: '1.2em'}} />
			            </a>
			            {/*  <h6> sketchfab </h6> */}
			          </div>
			          <div className="one column rotate2" style={{paddingLeft: '6em'}}>
			            <a href="http://tab-pile.tumblr.com/" target="_blank">
			              <img role="presentation"  src="images/tumblr2.svg" width={40} height={40} style={{paddingLeft: '1.2em'}} />
			            </a>
			            {/*  <h6> tab-pile </h6> */}
			          </div>
			          <div className="one column rotate2" style={{paddingLeft: '4em'}}>
			            <a href="https://archmixlist.tumblr.com/" target="_blank">
			              <img role="presentation"  src="images/tumblr3.svg" width={40} height={40} style={{paddingLeft: '1.2em'}} />
			            </a>
			            {/*  <h6> tab-pile </h6> */}
			          </div>
			          {/*       <div class="one column rotate1"  style="padding-left:6em;">
			        <a href="https://www.reddit.com/user/archmixes/" target="_blank">
			          <img role="presentation"  src="images/reddit.svg" width="40" height="40" style="padding-left:1.2em">
			        </a>
			      </div> */}
			          <div className="one-half column rotate2" style={{paddingLeft: '6em'}}>
			            <a href="https://www.reddit.com/user/archmixes/" target="_blank">
			              <img role="presentation"  src="images/reddit.svg" width={40} height={40} style={{paddingLeft: '1.2em'}} />
			            </a>
			            {/*  <h6> reddit </h6> */}
			          </div>
			        </div>
			        {/*      BACKGROUND IMAGES       */}
			        {/*    NOTE FOR SAM:  edit size and positions of the images here in the 'style' section    */}
			        <div className="row">
			          <img role="presentation" className="images1 disappear" src="images/bld1.png" style={{top: 5, left: '-5em', width: 304, height: 'auto'}} />
			          <img role="presentation" className="images1" src="images/bld2.png" style={{top: '10%', left: '-3em', width: 150}} />
			          <img role="presentation" className="images1" src="images/bld3.png" style={{top: '10%', right: '-3em', width: 200}} />
			          <img role="presentation" className="images1" src="images/bld4.png" style={{top: '3%', right: '-8em', width: 230}} />
			          <img role="presentation" className="images1" src="images/bld5.png" style={{top: '18%', width: 230}} />
			          <img role="presentation" className="images1" src="images/bld6.png" style={{top: '24%', right: '-5em', width: 200}} />
			          <img role="presentation" className="images1" src="images/bld7.png" style={{top: '31%', right: '1em', width: 300}} />
			          <img role="presentation" className="images1" src="images/bld8.png" style={{top: '28%', left: '-2em', width: 100}} />
			          <img role="presentation" className="images1" src="images/bld9.png" style={{top: '31%', left: '-3em', width: 340}} />
			          <img role="presentation" className="images1" src="images/bld10.png" style={{top: '37%', right: '-4em', width: 60}} />
			          <img role="presentation" className="images1" src="images/bld11.png" style={{top: '41%', left: '-8em', width: 500}} />
			          <img role="presentation" className="images1" src="images/bld12.png" style={{top: '41%', right: '-3em', width: 300}} />
			          <img role="presentation" className="images1" src="images/bld13.png" style={{top: '51%', right: '-8em', width: 450}} />
			          <img role="presentation" className="images1" src="images/bld14.png" style={{top: '52%', left: '2em', width: 100}} />
			          <img role="presentation" className="images1" src="images/bld15.png" style={{top: '58%', right: '4em', width: 100}} />
			          <img role="presentation" className="images1" src="images/bld16.png" style={{top: '63%', left: '-6em', width: 340}} />
			          <img role="presentation" className="images1" src="images/bld17.png" style={{top: '74%', right: '-4em', width: 300}} />
			          <img role="presentation" className="images1" src="images/bld18.png" style={{top: '80%', left: '-9em', width: 400}} />
			          <img role="presentation" className="images1" src="images/bld19.png" style={{top: '94%', left: '-3em', width: 300}} />
			        </div>
			          {/*       MAIN TEXT SECTION         */}
			          <div className="row">
			            <div className="seven column" style={{paddingLeft: '10em', paddingRight: '10em', paddingTop: '5em'}}>
			              <p>Tweeting from your couch, in your sweats, can be an architectural act.</p>
			              <p>Architecture’s ability to serve and shape a public has been weakened by its disciplinary exclusivity and the privatization of public space. </p>
			              <p>Hope for architecture today is found, instead, in its ability to be shared online. There, its value is in its newfound velocity, intensity, and spread - an ability to “get around”. Attention is a currency and the image, a visual byte that circulates, has already replaced the building in space, as such. Architecture is on and of the web, and it can shape public there.</p>
			              <p>If you Tweet <a href="https://twitter.com/archmixes" target="_blank">@archmixes</a> with selections from the archive of 3D meshes i’ve compiled, you can make architecture. Appropriated from 3D models uploaded to Sketchup Warehouse, anyone can make anew from preexisting digitized disciplinary matter. This is a call for the regime of a new six points of architecture: Search, Select, Combine, Tag, Archive, Share. Sharing is a creative act that will disperse into the fiber optic infinitum your architecture rendered specific by its anxious formats: JPEGs, 3d meshes, videos, GIFs, 3d print files, Shopify listings, Instagram posts, Pins. Files are promiscuous and will degrade in order to be as mobile as possible, to be reused and misused; they just want to be save-as’ed. </p>
			              <p>This is a call to speed up and broadcast architecture made of the web, for the web. Creativity has been democratized: now anyone with a phone and repost button can sculpt their own aesthetic universes, be it on Instagram, YouTube, or SoundCloud. Through recycling the pixel, vector, and mesh-waste that lives online, architecture has the opportunity to sustain the archive of its disciplinary history; it stands the chance to engage publics, it might even sustain an economy of attention in the era of perpetual distraction. </p>
			              <p>This thesis is a performance that will be hosted in the ACT Cube and broadcast on YouTube. Bring your phone.</p>
			              <p>Architecture in the Afternet is an M.Arch thesis delivered and performed at MIT Architecture by Sam Ghantous. The project was advised by William O’Brien Jr., and readers Antonio Furgiuele, Curtis Roth, Andrew Kovacs.</p>
			            </div>
			          </div>
			          {/*      ACKNOWLEDGMENTS     */}
			          <div className="row" id="footer">
			            <p>
			              This project was made possible with the support of many individuals.</p>
			            <p> To make the twitter bot a functioning thing, Austin Wade Smith and Anran Li provided tremendous technical support and critical feedback.</p>
			            <p>Wenfei Xu made this a real website. </p>
			            <p>My team at large also included Alex Kobald, Grisha Enikolopov, Jamie Farrell, Jason Minor, Kalli Retzepi, Liz Galvez, Xhulio Binjaku, Yasaman Tahouni.</p>
			            <p>Additional critical feedback provided by Albert Lopez, Austin Wade Smith, Eli Keller, Faiyaz Khan, John May, Lucy Lui, and Peter Osborne.</p>
			          </div>
		        </div>
	    	</div>
	    )
	}
}


export default Content;