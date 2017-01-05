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
      <div className="ContentImages">
        <svg className="ContentImages-SVG" width={this.props.width} height={this.props.height} ref={this.onRef} />
      </div>
    );
  }

  renderSvg() {
    if (!this.ref) {
      return;
    }

    const svg = d3.select(this.ref);

    /*----------------------------- Main Vis --------------------*/

    const actors = svg.selectAll('path') /* should be g */
      .data(this.props.data, d => d.id);


    actors.enter().append('circle')
      .attr('cx', (d,i) => Math.random()*i * 100 + 10)
      .attr('cy', (d,i) => Math.random() * this.props.height + 10)
      .attr('r', '5')
      .call(this.onDrag);

    actors.exit()
      .remove();
  }
}


export default SvgRenderer;