import "./Counter.css";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  handeladd = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handelmun = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  handelreset = () => {
    this.setState({ count: this.state.count =0 });
  };
  render() {
    return (
      <div className="counter">
        
        <Button variant="info" className="butto" onClick={this.handeladd}>
          +
        </Button>
        <span> {this.state.count}</span>
        <Button variant="info" className="butto" onClick={this.handelmun}>
          -
        </Button>
        <hr></hr>
        <div className="res">
          <Button variant="info" className="butto" onClick={this.handelreset}>
            reset
          </Button>
        </div>
      </div>
    );
  }
}
