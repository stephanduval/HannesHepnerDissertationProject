import './App.css';
import { connect } from 'react-redux'
import React, {  useState, useEffect, setState, getState } from 'react';
import Photospace from './components/Photospace';
import ExamNavigation from './components/ExamNavigation.js';
import { Button } from '@material-ui/core';
import './components/ExamNavigation.js';
import useStateCallback from './components/useStateCallback'

import updateCurrentImage from './actions/actions'

// import the react store component
import store from './store';

/*
the count value that we are going to return
is going to be used by props in the app component
comes from: state.updateCurrentImage.searchField  
-> this comes from the reducer.js file
VIA
the createStore(updateCurrentImage)   (this will change to a rootReducer)
*/
const mapStateToProps = state => {
  return {
    count: state.count
  }
};

/*
dispatch comes from react-redux, based on the flux model (as opposed to MVC for example)
dispatch sends information to the reducer
*/
const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateCurrentImage: (event) => dispatch(updateCurrentImage(event.target.value))
  }
};

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


  console.log("Store",store.getState())
  
// Old version using props
/*  
 class App extends Component {
  state = {
    count: 0
  };
*/

/*
const [state, setState] = useStateCallback(0);

const handleClick = () =>
    setState(
      prev => prev + 1,
      // important: use `s`, not the stale/old closure value `state`
      s => console.log("I am called after setState, state:", s)
    );


*/
const componentDidMount = () => {
  document.addEventListener('keydown', logKey);
  console.log("Store",this.props.store); 
}


//console.log({state})

const componentWillMount= () => {
  store.subscribe(() => setState(store.getState()));
}

// removed this from className = "App"  onKeyDown={this.onKeyPressed}



return false ?
// Dis plays a loading message if the asynchronous call hasn't come back (this.state.robots.lenght is 0)
// we no longer need .this so we take it out
//if (this.state.robots.length === 0) {

<h1>Loading</h1> :
(
<div className="App" >
    
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
    
    {/*
    <button onClick={handleClick}>ExamNav Handleclick</button>;
    */}
    <Photospace />
    {/*
    <ExamNavigation />
    <div className="headerBar">
            State from redux generated by ExamNav {state}
      <p>Handleclick in App.JS state: {state} </p>
      <button onClick={handleClick}>Click me</button>
      
    
      </div>
      */}
     
</div>

)
//ford04 on https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react     

}

/*
 connect is a higher order function
 this means it returns another function
 so when we call connect() it returns a function
 that wraps App and acts upon it

 SUMMARY:  this function subscribes App.js to any state changes in the redux store
*/
 export default connect(mapStateToProps, mapDispatchToProps)(App); 

