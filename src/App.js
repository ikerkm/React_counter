import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js'
import Stepper from './Stepper.js'
class App extends Component {

  render() {
    return (
      <div>
        <Counter back_color="red"></Counter>
        <Counter startFrom={100}></Counter>
        <Counter step={5}></Counter><br></br>
        <Stepper text="adults" max={10} min={0} default={3} ></Stepper>
        <Stepper text="niños" max={20} min={0} default={0} ></Stepper>
        <Stepper text="Entes" max={20} min={5} default={25} ></Stepper>
      </div>
    );
  }
}

export default App;
