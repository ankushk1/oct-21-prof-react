import React, { Component } from "react";

export class ClassLCComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      dataFromApi: null
    };
  }


  // componentWillUpdate() {
  //   console.log("ComponentWillUpdate");
  // }

  // componentDidUpdate() {
  //   console.log("ComponentDidUpdate");
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  
  async componentWillMount() {
    console.log("componentWillMount");
  }

  async componentDidMount() {
    console.log("componentDidMount");
    await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => this.setState({
      dataFromApi:json
    }));
  }

  onIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    console.log("render", this.state.dataFromApi);
    return (
      <div>
        {this.state?.dataFromApi && this.state?.dataFromApi.map(elem =>(
          <div>
            {elem.id} <br />
            {elem.title}
          </div>
        ))}
        <div>
          <button onClick={() => this.onIncrement()}>Increment</button>
        </div>
      </div>
    );
  }
}

export default ClassLCComp;
