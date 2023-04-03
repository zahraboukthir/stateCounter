import React, { Component } from "react";

export default class ShoppingApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      textInput: "",
      textaff: "",
    };
    console.log("constructor()");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() ");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }
  componentDidMount() {
    console.log("componentDidMount()");
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  decrement = () => {
    // if (this.state.count == 0) {
    //   return null;
    // }
    this.setState({
      count: this.state.count && this.state.count - 1,
    });
    console.log(this.state.count);
  };
  handleChange = (value) => {
    this.setState({
      textInput: value,
    });
  };
  afficheText = () => {
    this.setState({
      textaff: this.state.textInput,
    });
  };
  render() {
    console.log("render()");
    return (
      <div>
        <div>
          <button onClick={this.increment}>+</button>
          <p>{this.state.count}</p>
          <button onClick={this.decrement}>-</button>
        </div>
        <div>
          <input
            type="text"
            onChange={(event) => this.handleChange(event.target.value)}
          />{" "}
          <button onClick={this.afficheText}>Add</button>
          <p> {this.state.textaff} </p>
        </div>
      </div>
    );
  }
}
