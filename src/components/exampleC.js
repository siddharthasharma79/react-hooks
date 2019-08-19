import React, { Component } from "react";

class ExampleC extends Component {
  state = {
    count: 0,
    name: "sidd"
  };

  render() {
    return (
      <div className="border p-3">
        <h4>Using Class</h4>
        <p>Counter: {this.state.count} </p>

        {/* INCREMENT */}
        <button
          className="btn btn-sm btn-success mr-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          <span class="fas fa-plus-circle" />
        </button>

        {/* DECREMENT */}
        <button
          className="btn btn-sm btn-success"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          <span class="fas fa-minus-circle" />
        </button>
      </div>
    );
  }
}

export default ExampleC;
