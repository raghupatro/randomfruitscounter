import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";
import getRandomFruitsName from "random-fruits-name";
import createUID from "create-unique-id";

class App extends Component {
  state = {
    numberOfCounters: 4,
    counters: [],
  };

  // constructor() {
  //   super();
  //   console.log("App-constructor");
  //   //set states acc to outside data received in the constructor
  //   //we need to set the state directly, we CANNOT use this.setState
  //   //this.state = this.props.something;
  //   //props need to be passed to the constructor and super() too
  // }

  // componentDidMount() {
  //   // perfect place to make AJAX calls...
  //   //do db calls here !
  //   console.log("app mounted");
  // }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAddCounter = () => {
    const counters = this.state.counters;
    const newId = createUID(10);
    const newFruit = getRandomFruitsName("en");
    counters.push({ id: newId, value: 0, item: newFruit });
    this.setState({ newId, counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //clones the array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; //clones the array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value =
      counters[index].value === 0 ? 0 : counters[index].value - 1;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    //console.log("app rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onAddCounter={this.handleAddCounter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
