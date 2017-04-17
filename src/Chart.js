import React, { Component } from 'react';
import * as d3 from 'd3';

import Shapes from './Shapes';
// import FrameElement from './FrameElement';
import {isolate} from './utils/helpers';

class SvgRenderer extends Component {
  constructor() {
    super();
    this.onRef = ref => this.ref = ref;
    this.renderSvg = this.renderSvg.bind(this);
    this.renderFrame = this.renderFrame.bind(this);
  }

  componentDidMount() {
    this.renderSvg();
  }

  render() {
    return (
      <div className={this.props.className}>
        <svg width={this.props.width} height={this.props.height} ref={this.onRef} />
      </div>
    );
  }

  renderFrame(d) { 
  	// console.log(d);
  	window.open(d.url)
  }
  
  renderSvg() {
    if (!this.ref) {
      return;
    }

    /*----------------------------- SVG parameters --------------------*/
    let margin = this.props.className === "Icons" ? 30 : 0;
    let width = this.props.width;
    let height = this.props.height;
    let svg = d3.select(this.ref).attr("width", width).attr("height", height + 2*margin);
    
    /*----------------------------- Vis parameters --------------------*/
    let padding =  this.props.className === "Icons" ?  10 :  20;
	let m = 1; // number of distinct clusters
	let clusters = new Array(m);

    /*----------------------------- Shapes object--------------------*/
	let ShapesSubset = Shapes.filter( (element) => element.className===this.props.className);
	let nodes = ShapesSubset.map(function(element) {
	  	let i = 1,
		r =  element.className==="Icons" ? 40 : 90,
		d = {
			url: element.url,
			className: element.className,
		cluster: i,
		radius: r,
		pathToImage: element.pathToImage,
		x: element.className==="Icons" ? 
			width * 0.4  + 10 * (Math.random() - 0.5)
			:  width/2 + width * (Math.random() - 0.5),
		y: element.className==="Icons" ? 
			height * 0.25 + 10 * (Math.random() - 0.5) 
			: height/2 + height/2 * (Math.random() - 1)
		};
	  	
	  	if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
	 	
	 	return d;
	});

    /*----------------------------- Force --------------------*/
	let force = d3.forceSimulation()
		.force('cluster', cluster().strength(0))
		.force('collide', d3.forceCollide(d => d.radius + padding).strength(0))
		.force('iconsY', isolate(nodes, d3.forceY((d) => height/2 * (Math.random() - 0.5)), function(d) {return d.className==="Icons"; }))
		// .force('imagesX', isolate(nodes, d3.forceX((d) => (Math.random() - 0.5)* width), function(d) {return d.className==="Images"; }))
		.force('repel', d3.forceManyBody().strength(-90))
		.on('tick', layoutTick)
		.nodes(nodes);

	let node = svg.selectAll("image")
		.data(nodes)
		.enter()
		.append("svg:image")
		.attr('xlink:href', (d) => d.pathToImage)
		.attr('height', '10em')
		.attr('width', '10em')
		.attr('z-index', '100')
		.style("fill", "#00f")
		.call(d3.drag()
		.on("start", dragstarted)
		.on("drag", dragged)
		.on("end", dragended));

    /*----------------------------- SVG manipulations --------------------*/

	svg.selectAll("image")
	    .filter( (d) => d.className==="Icons")
	 	.classed("icons", true)
	  	.append("a").attr("xlink:href", (d) => d.url);	

	svg.selectAll("image")
	    .filter( (d) => d.className==="Images")
		.style("opacity", "0.9");

	svg.selectAll('image.icons')
		.on('click', (d) => this.renderFrame(d) );

	svg.selectAll("circle")
	    .data(nodes.slice(1))
	  .enter().append("svg:circle")
	    .attr("r", "2")


    /*----------------------------- Tick functions --------------------*/

	function layoutTick(e) {
	  	node
	      .attr("transform", function(d) { 
	      	let dx = (d.x > width) || (d.x < 0) ? width * 0.2 : d.x ; 
	      	let dy =  (d.y > height) || (d.y < 0) ? height * 0.4 : d.y ; 
	      	let scale =  d.className==="Icons" ? 0.25 : 2.4;
	      	return d.className==="Icons" ? `translate(${dx},${dy}) scale(${scale})` : `translate(${dx},${d.y}) scale(${scale})`;
	      })

		 force.force('collide').strength(1);
	}

    /*----------------------------- Helper functions --------------------*/
	
	function cluster () {
	  let nodes,
	    strength = 0.01;

	  function force (alpha) {

	    // scale + curve alpha value
	    alpha *= strength * alpha;

	    nodes.forEach(function(d) {
				let cluster = clusters[d.cluster];
	    	if (cluster === d) return;

	      let x = d.x - cluster.x,
	        y = d.y - cluster.y,
	        l = Math.sqrt(x * x + y * y),
	        r = d.radius + cluster.radius;

	      if (l !== r) {
	        l = (l - r) / l * alpha;
	        d.x -= x *= l;
	        d.y -= y *= l;
	        cluster.x += x;
	        cluster.y += y;
	      }
	    });

	  }

	  force.initialize = function (_) {
	    nodes = _;
	  }

	  force.strength = _ => {
	    strength = _ == null ? strength : _;
	    return force;
	  };

	  return force;

	}

	function dragstarted(d) {
	  if (!d3.event.active) force.alphaTarget(0.3).restart();
	  d3.select(this).raise().classed("active", true);
	  force.force('collide').strength(1);
	}

	function dragged(d) {
	  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
	  force.force('collide').strength(1);
	}

	function dragended(d) {
	  if (!d3.event.active) force.alphaTarget(0);
	  d3.select(this).classed("active", false);
	  force.force('collide').strength();

	}

	}

}


export default SvgRenderer;