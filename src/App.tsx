import React from 'react';
import './App.css';

function hello() {
  debugger
  return (
    alert('Hello')
  )
}
// hello()

function App() {
  console.log('App rendering')
  return (
    <div>
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}
function AppTitle() {
  console.log('AppTitle rendering')
  return (<>This is App component</>)
}

function Rating() {
  console.log('Rating rendering')
    return (
    <>
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
    </>
  )
}

function Accordion() {
  console.log('Accordion rendering')
  return (
    <div>
    <AccordionTitle />
    <AccordionBody />
    </div>
  )
}

function Star() {
  console.log('Star rendering')
  return (
      <div>star</div>
  )
}

function AccordionTitle(){
  console.log('rendering AccordionTitle')
  return(
    <h3>Menu</h3>
  )
}

function AccordionBody(){
  console.log('rendering AccordionBody')
  return(
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  )
}

export default App;
