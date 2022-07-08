import React, { Component } from "react";

class App extends Component {
  state = {
    name: "Godfrey",
    age: "25",
    school: "Moringa",
    count: 0,
  }; 
  Add = () => {
    this.setState({
      count: this.state.count +1,
      school: (this.state.school = "The East African University"),
    });
  };
  Sub = () => {
    this.setState({
      count: this.state.count -1,
    });
  
  };
  render(){
    return (
      <>
      <h1>REACT STATE</h1>
      <h2>Name: {this.state.name}</h2>
      <h2>Age: {this.state.age}</h2>
      <h2>School: {this.state.school}</h2>
      <h3>Counter Value: {this.state.count}</h3>
      <button onClick = {this.Add}>Add One</button>
      <button onClick = {this.Sub}>Sub One</button>
      </>
    )
  }
}

export default App;
