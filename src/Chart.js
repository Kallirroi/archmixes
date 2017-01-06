import React, { Component } from 'react';
import * as d3 from 'd3';
import Shapes from './Shapes';


class SvgRenderer extends Component {
  constructor() {
    super();
    this.onRef = ref => this.ref = ref;
    this.onDrag = d3.drag().on("drag", (d) => {
      d.x = d3.event.x;
      d.y = d3.event.y;
    });
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
    let svg = d3.select(this.ref);
    let width = this.props.width;
    let height = this.props.height;
    
  	let padding = 10 * this.props.n, // separation between same-color nodes
    maxRadius = 20;


	var n = this.props.n, // total number of nodes
	    m = 1; // number of distinct clusters

	// The largest node for each cluster.
	var clusters = new Array(m);

	var nodes = d3.range(n).map(function() {
	  var i = Math.floor(Math.random() * m),
	      r = 5,
	      d = {
	        cluster: i,
	        radius: r,
	        x: Math.cos(i / m * 2 * Math.PI) * 100 + width / 2 + Math.random(),
	        y: Math.sin(i / m * 2 * Math.PI) * 100 + height / 2 + Math.random()
	      };
	  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
	  return d;
	});


	var force = d3.forceSimulation()
	  // keep entire simulation balanced around screen center
	  .force('center', d3.forceCenter(width/3, height))
	  // cluster by section
	  .force('cluster', cluster()
	    .strength(0.1))
	  // apply collision with padding
	  .force('collide', d3.forceCollide(d => d.radius + padding)
	    .strength(0))
	  .on('tick', layoutTick)
		.nodes(nodes);

	var node = svg.selectAll("path")
	      .data(nodes)
	  .enter().append("path")
	  	  .attr('d', (d) => Shapes[1].path)
	  .call(d3.drag()
	      .on("start", dragstarted)
	      .on("drag", dragged)
	      .on("end", dragended));



	function layoutTick(e) {
	  node
	      .attr("transform", function(d) { 
	      	let dx = (d.x > width) || (d.x < 100) ? d.x/2 : d.x ; 
	      	let dy =  (d.y > height) || (d.y < 0) ? d.y/2 : d.y ;  
	      	return `translate(${dx},${dy})`;
	      })

	  force.force('collide').strength(1);
	}

	// Move d to be adjacent to the cluster node.
	// from: https://bl.ocks.org/mbostock/7881887
	function cluster () {
	  var nodes,
	    strength = 0.1;

	  function force (alpha) {

	    // scale + curve alpha value
	    alpha *= strength * alpha;

	    nodes.forEach(function(d) {
				var cluster = clusters[d.cluster];
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