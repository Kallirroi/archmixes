import React, { Component } from 'react';
import * as d3 from 'd3';
import Shapes from './Shapes';


class SvgRenderer extends Component {
  constructor() {
    super();
    this.onRef = ref => this.ref = ref;
    this.renderSvg = this.renderSvg.bind(this);
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

  renderSvg() {
    if (!this.ref) {
      return;
    }

    /*----------------------------- Main Vis --------------------*/
    let margin = 30;
    let width = this.props.width;
    let height = this.props.height;
    let svg = d3.select(this.ref).attr("width", width + margin) .attr("height", height + 2*margin);

  	let padding =  this.props.className === "Icons" ?  10 :  20;
	let m = 1; // number of distinct clusters
	let clusters = new Array(m);

	let ShapesSubset = Shapes.filter( (element) => element.className===this.props.className);
	let nodes = ShapesSubset.map(function(element) {
	  	let i = 1,
	      r =  element.className==="Icons" ? 20 : 130,
	      d = {
	      	url: element.url,
	      	className: element.className,
	        cluster: i,
	        radius: r,
	        x: width/2  + width/2 * (Math.random() - 0.5),
	        y: element.className==="Icons" ? height * 0.95 + 10 * (Math.random() - 1) : height/2 + height/2 * (Math.random() - 0.5)
	      };
	  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
	  return d;
	});

	let force = d3.forceSimulation()
		.force('cluster', cluster().strength(0))
		.force('collide', d3.forceCollide(d => d.radius + padding).strength(0))
		.on('tick', layoutTick)
		.nodes(nodes);

	let node = svg.selectAll("path")
		.data(nodes)
		.enter()
		.append("path")
		.attr('d', function(d,i) { return ShapesSubset[i].path})
		.style("fill", "#00f")
		.call(d3.drag()
		.on("start", dragstarted)
		.on("drag", dragged)
		.on("end", dragended));

	svg.selectAll("path")
	    .filter( (d) => d.className==="Icons")
	 	.classed("icons", true)
	  	.append("a").attr("xlink:href", (d) => d.url);	

	svg.selectAll("path")
	    .filter( (d) => d.className==="Images")
	 	.classed("images", true)
		.style("opacity", "0.5")
		.attr("z-index", "-1")

	svg.selectAll('path.icons')
		.on('click', (d) => window.open(d.url));

	function layoutTick(e) {
	  node
	      .attr("transform", function(d) { 
	      	let dx = (d.x > width) || (d.x < 0) ? width/2 : d.x ; 
	      	let dy =  (d.y > height) || (d.y < 0) ? height : d.y ; 
	      	let scale =  d.className==="Icons" ? 0.35 : 3;
	      	return `translate(${dx},${dy}) scale(${scale})`;
	      })

	  force.force('collide').strength(1);
	}

	// Move d to be adjacent to the cluster node.
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