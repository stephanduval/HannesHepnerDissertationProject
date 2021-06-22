import './App.css';
import React, { Component } from 'react';
import ExamNavigation from './components/ExamNavigation';
import Photospace from './components/Photospace';


function logKey(e) {
  console.log('hit',e.keyCode)
  if(e.keyCode === 87) {
    console.log('W key, Log the Result, Run Next Image Function') 
    }
 if(e.keyCode === 79) {
      console.log('O Key, Log the Result, Run Next Image Function')
    }
}

class App extends Component {

  constructor() { // required to use the class object
    super(); // required to use .this
    this.state = {
      input: '',
    }
  }

componentDidMount() {
  document.addEventListener('keydown', logKey); 
}

  render () {
  return (
    <div className="App" onKeyDown={this.onKeyPressed}>
    
            <div className="headerBar">
                <div align="center">This is a Header (class topBar)</div>
            </div>

            <div className="navBarWrapper">
                  <ul className="navBar">
                  
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                    <li>five</li>
                </ul>
            </div>

            <Photospace/>
            <ExamNavigation
           // onInputChange={this.onInputChange} 

              
            />
                

    </div>
  );
}
}
export default App;
