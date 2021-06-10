import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onAddCounter,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onAddCounter}>
          Add New Counter
        </button>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset All Counters
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
