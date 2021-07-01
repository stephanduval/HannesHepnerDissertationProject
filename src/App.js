import './App.css';
import React, {  useState, useEffect, setState } from 'react';
import Photospace from './components/Photospace';
import ExamNavigation from './components/ExamNavigation.js';
import { Button } from '@material-ui/core';
import './components/ExamNavigation.js';
import useStateCallback from './components/useStateCallback'

import { Provider } from 'react-redux';

import store from './store';

const user = 'fsdfsdf';






function logKey(e) {
  console.log('hit',e.keyCode)
  if(e.keyCode === 87) {
    console.log('W key, Log the Result, Run Next Image Function') 
    }
 if(e.keyCode === 79) {
      console.log('O Key, Log the Result, Run Next Image Function')
    }
}

function App() { 
  // going from classes and props to hooks we lose the constructor, super and this.state                             
  // we use the UseState hook and destructuring to recreate the state constructor
  // First we create an array with the variable that changes and a function that changes the state of that variable
  // the useState function takes the initial state of the variable as an argument
  // Hooks is not a JS construct, its a bit of react magic
  // hole shit is that so much cleaner or what?!
  // we are using array destructuring to name our variables


  
// Old version using props
/*  
 class App extends Component {
  state = {
    count: 0
  };
*/
const [state, setState] = useStateCallback(0);

const handleClick = () =>
    setState(
      prev => prev + 1,
      // important: use `s`, not the stale/old closure value `state`
      s => console.log("I am called after setState, state:", s)
    );



const componentDidMount = () => {
  document.addEventListener('keydown', logKey); 
}

// removed this from className = "App"  onKeyDown={this.onKeyPressed}


return false ?
// Dis plays a loading message if the asynchronous call hasn't come back (this.state.robots.lenght is 0)
// we no longer need .this so we take it out
//if (this.state.robots.length === 0) {

<h1>Loading</h1> :
(
<div className="App" >
    <Provider store={store}>
    <div className="headerBar">
        <div align="center">This is a Header (class topBar)
        </div>
    </div>
     <div className="navBarWrapper">
          <ul className="navBar">
          
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
            <li>{user} five</li>
          </ul>
          
    </div>
    <Photospace />
    <ExamNavigation />
    <div className="headerBar">
            
      <p>Handleclick in App.JS state: {state} </p>
      <button onClick={handleClick}>Click me</button>
      </div>
      </Provider>
</div>

)
//ford04 on https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react     

}



export default App;
