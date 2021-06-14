import react, { Component } from "react";
import './counter.css'
class Counter extends Component {
  state = {
    count: 1,
    classes:""
  };

  increment=()=>
  {
    this.setState({count:this.state.count+1})
    console.log("increment",this.state.count)
    
  }
  render() {
      
        
    return (
      <react.Fragment>
        <h1 className={this.state.classes}>hello world!</h1>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.addclass}>add class</button>
      </react.Fragment>
    );
  }
addclass=()=>
{
    this.setState({classes:"addz"})
}
}

export default Counter;
