import React, { Component } from "react";
import TimeApp from "./components/TimeApp";
import ShoppingApp from "./components/ShoppingApp";

export default class App extends Component {
  state = {
    show: false,
  };
  Toggle = () => {
    this.setState({
      show: !this.state.show,
    });
    console.log(this.state.show);
  };
  render() {
    return (
      <div>
        {this.state.show ? <ShoppingApp /> : <TimeApp />}
        <button onClick={this.Toggle}>Show</button>
      </div>
    );
  }
}
