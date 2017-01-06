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
    var margin = 30;
    let width = this.props.width;
    let height = this.props.height;
    let className = this.props.className;
  	let padding =  className==="Icons" ? 10 : 20;
    let svg = d3.select(this.ref).attr("width", width + margin) .attr("height", height + 2*margin)

	var n = this.props.n, // total number of nodes
	    m = 1; // number of distinct clusters

	// The largest node for each cluster.
	var clusters = new Array(m);

	var nodes = d3.range(n).map(function() {
	  var i = Math.floor(Math.random() * m),
	      r =  className==="Icons" ? 20 : 130,
	      d = {
	        cluster: i,
	        radius: r,
	        x: width/2  + width/2 * (Math.random() - 0.5),
	        y: className==="Icons" ? height + 10 * (Math.random() - 1) : height/2 + height/2 * (Math.random() - 0.5)
	      };
	  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
	  return d;
	});


	var force = d3.forceSimulation()
	  // cluster by section
	  .force('cluster', cluster()
	    .strength(0))
	  // apply collision with padding
	  .force('collide', d3.forceCollide(d => d.radius + padding)
	    .strength(0))
	  .on('tick', layoutTick)
		.nodes(nodes);

	var node = svg.selectAll("path")
	      .data(nodes)
	  .enter().append("path")
	  	  .attr('d', function(d,i) { return Shapes[i].path})
	  	  // .attr('d', function(d,i) {return Shapes[i].path  })
	  .call(d3.drag()
	      .on("start", dragstarted)
	      .on("drag", dragged)
	      .on("end", dragended));



	function layoutTick(e) {
	  node
	      .attr("transform", function(d) { 
	      	let dx = (d.x > width) || (d.x < 0) ? width/2 : d.x ; 
	      	let dy =  (d.y > height) || (d.y < 0) ? height : d.y ; 
	      	let scale =  className==="Icons" ? 0.35 : 2;
	      	return `translate(${dx},${dy}) scale(${scale})`;
	      })

	  force.force('collide').strength(1);
	}

	// Move d to be adjacent to the cluster node.
	// from: https://bl.ocks.org/mbostock/7881887
	function cluster () {
	  var nodes,
	    strength = 0.01;

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