import React from 'react';
import './App.css';

function hello(){
  debugger
  return(
    alert('Hello')
  )
}
hello()

function App() {
  debugger
  return (
    <div>
     This is App
     <Rating />
     <Accordion />
    </div>
  );
}

function Rating() {
  debugger
  return (
    <div>
      <h3>Menu</h3>
    <Star />
    </div>
  )
}

function Accordion(){
  debugger
  return(
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

function Star(){
  return (
    <div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
    </div>
  )
}

export default App;
