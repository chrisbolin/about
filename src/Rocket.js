import React, { Component } from "react";

export default class Rocket extends Component {
  constructor() {
    super();
    this.state = {
      animating: false
    };
  }
  animate = () => {
    const { animating } = this.state;
    if (!animating) {
      this.setState({ animating: true });
      setTimeout(() => this.setState({ animating: false }), 7000);
    }
  };
  render() {
    const { animating } = this.state;
    return (
      <div
        className="rocket"
        onMouseMove={this.animate}
        onTouchStart={this.animate}
      >
        <div className={`glyph ${animating && "animate"}`}>{"🚀"}</div>
      </div>
    );
  }
}
