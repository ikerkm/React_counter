import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  increment() {
    this.state.count += 1;
    console.log(this.state.count);
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>{this.state.count}</button>
      </div>
    );
  }
}

export default App;
