import React, { Component } from "react";

export class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1
    };
    // console.log(props);
    this.name = this.props.name
  }

  onIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  onDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  onReset() {
    this.setState({ count: 0, count2: 0 });
  }

  onIncrement2() {
    this.setState({ count2: this.state.count2 + 1 });
  }

  onDecrement2() {
    this.setState({ count2: this.state.count2 - 1 });
  }

  render() {
    // console.log("render");
    // console.log(this.state);
    return (
      <div>
        {/* {this.state.name} age is {this.state.age} */}
        {/* <div>
          <button onClick={() => this.changeName("abc")}>Change Name</button>
          <button onClick={() => this.changeAge(10)}>Change Age</button>
        </div> */}
        {this.name} <br />
        Count - {this.state.count}
        Count2 - {this.state.count2}
        <div>
          <button onClick={() => this.onIncrement()}>Increment</button>
          <button onClick={() => this.onDecrement()}>Decrement</button>
          <button onClick={() => this.onReset()}>Reset</button>
        </div>
        <div>
          <button onClick={() => this.onIncrement2()}>Increment2</button>
          <button onClick={() => this.onDecrement2()}>Decrement2</button>
        </div>
      </div>
    );
  }
}

export default ClassComp;
