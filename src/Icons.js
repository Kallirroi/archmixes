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
      <div className="Icons">
        <svg className="Icons-SVG" width={this.props.width} height={this.props.height} ref={this.onRef} />
      </div>
    );
  }

  renderSvg() {
    if (!this.ref) {
      return;
    }

    /*----------------------------- Main Vis --------------------*/
    let svg = d3.select(this.ref);

    let padding=1.5,
    clusterPadding = 1, // separation between different-color circles
    maxRadius = 12;
    
	let n = 10, // total number of nodes
	    m = 1, // number of distinct clusters
	    clusters = new Array(m);

	let nodes = d3.range(n).map(() => {
	    let i = Math.floor(Math.random() * m),
	        radius = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
	        d = {cluster: i, r: radius};
	    if (!clusters[i] || (radius > clusters[i].r)) clusters[i] = d;
	    return d;
	});

	let circles = svg.append('g')
	      .datum(nodes)
	    .selectAll('.circle')
	      .data(d => d)
	    .enter().append('circle')
	      .attr('r', (d) => d.r)
	      .attr('fill', 'orange')
	      .call(this.onDrag);

	d3.forceSimulation(nodes)
	    .velocityDecay(0.1)
	    .force("collide", collide)
	    .force("cluster", clustering)
	    .on("tick", ticked);

	function ticked() {
	    circles
	        .attr('cx', (d) => d.x)
	        .attr('cy', (d) => d.y);
	}   

	function clustering(alpha) {
	    nodes.forEach(function(d) {
	      var cluster = clusters[d.cluster];
	      if (cluster === d) return;
	      var x = d.x - cluster.x,
	          y = d.y - cluster.y,
	          l = Math.sqrt(x * x + y * y),
	          r = 100*(d.r + cluster.r);
	      if (l !== r) {
	        l = (l - r) / l * alpha;
	        d.x -= x *= l;
	        d.y -= y *= l;
	        cluster.x += x;
	        cluster.y += y;
	      }  
	    });
	}

	function collide(alpha) {
	  var quadtree = d3.quadtree()
	      .x((d) => d.x)
	      .y((d) => d.y)
	      .addAll(nodes);

	  nodes.forEach(function(d) {
	    var r = d.r + maxRadius + Math.max(padding, clusterPadding),
	        nx1 = d.x - r,
	        nx2 = d.x + r,
	        ny1 = d.y - r,
	        ny2 = d.y + r;
	    quadtree.visit(function(quad, x1, y1, x2, y2) {

	      if (quad.data && (quad.data !== d)) {
	        var x = d.x - quad.data.x,
	            y = d.y - quad.data.y,
	            l = Math.sqrt(x * x + y * y),
	            r = d.r + quad.data.r + (d.cluster === quad.data.cluster ? padding : clusterPadding);
	        if (l < r) {
	          l = (l - r) / l * alpha;
	          d.x -= x *= l;
	          d.y -= y *= l;
	          quad.data.x += x;
	          quad.data.y += y;
	        }
	      }
	      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
	    });
	  });
	}

	}

}


export default SvgRenderer;