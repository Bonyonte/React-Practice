import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)
  // state = {
  //   name: "Godfrey",
  //   age: "25",
  //   school: "Moringa",
  //   count: 0,
  // }; 
   const Add = () => {
  //   this.setState({
  //     count: this.state.count +1,
  //     school: (this.state.school = "The East African University"),
  //   });
    setCount(count +1)
   };
  const Sub = () => {
  //   this.setState({
  //     count: this.state.count -1,
  //   });
    setCount(count -1)
   };
    return (
      <>
      <h1>REACT STATE</h1>
      <h3>Counter Value: {count}</h3>
      <button onClick = {Add}>Add One</button>
      <button onClick = {Sub}>Sub One</button>
      </>
    );
};

export default App;
