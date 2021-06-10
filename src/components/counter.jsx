import React, { Component } from "react";

class Counter extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  //   //if there are any changes, make an ajax call, otherwise don't

  // }
  componentWillUnmount() {
    console.log("counter-unmount");
  }
  render() {
    //console.log("props", this.props);
    //console.log(this.props.children);
    return (
      <div>
        {/*this.props.children*/}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-3"
        >
          Delete
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-3"
        >
          Increase Count
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-3"
        >
          Decrease Count
        </button>

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <span>{this.props.counter.item}</span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
