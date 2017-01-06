import React, { Component } from 'react';
import * as d3 from 'd3';


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
    
  	let padding = 1.5, // separation between same-color nodes
    maxRadius = 20;


	var n = this.props.n, // total number of nodes
	    m = 1; // number of distinct clusters

	var color = d3.scaleSequential(d3.interpolateRainbow)
	    .domain(d3.range(m));

	// The largest node for each cluster.
	var clusters = new Array(m);

	var nodes = d3.range(n).map(function() {
	  var i = Math.floor(Math.random() * m),
	      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
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
	  .force('center', d3.forceCenter(width/2, height/2))

	  // cluster by section
	  .force('cluster', cluster()
	    .strength(0.2))

	  // apply collision with padding
	  .force('collide', d3.forceCollide(d => d.radius + padding)
	    .strength(0))

	  .on('tick', layoutTick)
		.nodes(nodes);

	var node = svg.selectAll("circle")
	    .data(nodes)
	  .enter().append("circle")
	    .style("fill", function(d) { return color(d.cluster/10); })
	  .call(d3.drag()
	      .on("start", dragstarted)
	      .on("drag", dragged)
	      .on("end", dragended));


	function layoutTick(e) {
	  node
	      .attr("cx", function(d) { return d.x; })
	      .attr("cy", function(d) { return d.y; })
	      .attr("r", function(d) { return d.radius; });
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