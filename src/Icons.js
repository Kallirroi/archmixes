import React from 'react';


class Icons extends React.Component {
	render() {
		return (
			<div className="Icons">
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
	    	</div>
	    )
	}
}


export default Icons;