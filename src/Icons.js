import React from 'react';


class Icons extends React.Component {
	render() {
		return (
			<div className="Icons">
				{/*      ICONS = SVGS     */}
				<div className="row" style={{paddingTop: '10em'}}>
					<div className="one column rotate1" id="insta" style={{paddingLeft: '6em'}}>
						<a href="http://www.instagram.com/archmixes/" target="_blank">
						<div className="icon insta"> </div>
						</a>
					</div>
					<div className="one column rotate2"  style={{paddingLeft: '6em'}}>
						<a href="https://twitter.com/archmixes" target="_blank">
						<div className="icon twitter"> </div>
						</a>
					</div>
					<div className="one column rotate3" id="email" style={{paddingLeft: '6em'}}>
					<a href="mailto:archmixes@gmail.com?Subject=Hello" target="_top">
					<div className="icon email"> </div>
					</a>
					</div>
					<div className="one column rotate2" id="pinterest" style={{paddingLeft: '6em'}}>
					<a href="https://www.pinterest.com/amixes/?etslf=2407&eq=arc" target="_blank">
					<div className="icon pinterest"> </div>
					</a>
					</div>
					<div className="one-third column rotate1" id="youtube" style={{paddingLeft: '6em'}}>
					<a href="https://www.youtube.com/channel/UC5hDO86UUlnEsX2c6c3b1ZA" target="_blank">
					<div className="icon youtube"> </div>
					</a>
					</div>
					<div className="one column rotate3" id="tumblr" style={{paddingLeft: '6em'}}>
					<a href="http://archmixes.tumblr.com/" target="_blank">
					<div className="icon tumblr"> </div>
					</a>
					</div>
					<div className="one column rotate4" id="ello" style={{paddingLeft: '6em'}}>
					<a href="https://ello.co/archmixes" target="_blank">
					<div className="icon ello"> </div>
					</a>
					</div>
					<div className="one-third column rotate4" id="ebay" style={{paddingLeft: '6em'}}>
					<a href="http://www.ebay.com/usr/arcmixe_0" target="_blank">
					<div className="icon ebay"> </div>
					</a>
					</div>
					<div className="one column rotate3" style={{paddingLeft: '6em'}}>
					<a href="https://www.etsy.com/shop/ArchMixes?ref=hdr_shop_menu" target="_blank">
					<div className="icon etsy"> </div>
					</a>
					</div>
					<div className="one column rotate4" style={{paddingLeft: '2em'}}>
					<a href="http://sketchfab.com/samtous" target="_blank">
					<div className="icon sketchfab"> </div>
					</a>
					</div>
					<div className="one column rotate2" style={{paddingLeft: '6em'}}>
					<a href="http://tab-pile.tumblr.com/" target="_blank">
					<div className="icon tumblr2"> </div>
					</a>
					</div>
					<div className="one column rotate2" style={{paddingLeft: '4em'}}>
					<a href="https://archmixlist.tumblr.com/" target="_blank">
					<div className="icon tumblr3"> </div>
					</a>
					</div>
					<div className="one-half column rotate2" style={{paddingLeft: '6em'}}>
					<a href="https://www.reddit.com/user/archmixes/" target="_blank">
					<div className="icon reddit"> </div>
					</a>
					</div>
					<div className="one column rotate2" style={{paddingLeft:'6em'}}>
			        <a href="http://arch-mixes.myshopify.com/" target="_blank">
			        <div className="icon shopify"> </div>
			        </a>
			        </div>
			</div>
	    </div>
	    )
	}
}


export default Icons;