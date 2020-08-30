import React, { Component } from "react";
class ClassCounterTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count}`;
  }
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count}`;
  }
  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Clicked {this.state.count} times
      </button>
    );
  }
}

export default ClassCounterTitle;
