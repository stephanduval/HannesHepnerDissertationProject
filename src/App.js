import './App.css';
import React, { Component } from 'react';

import Photospace from './components/Photospace';
import './components/ExamNavigation.css';
import { Button } from '@material-ui/core';



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
  state = {
    count: 0
  };


  advanceImage = () => {
      this.setState(prev => ({ count: prev.count +1}));
      console.log(this.props.count);
  }

  handleChange(e) {
      this.props.onCountChange(e.target.value);
      console.log(this.props.count)
      return this.props.count;
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

            <Photospace count = {this.state.count} />
          

      <div className="buttonSpace">
            
            <Button variant="contained" onClick={this.handleChange}>"W" - Same as *n* photos Back
            </Button>
            
            <Button variant="contained" onClick={this.advanceImage} >"R" - Does not repeat
            </Button>

        <div className="navigationbuttons">{this.state.count}</div>
        </div>
        )
                

    </div>
  );
}
}

export default App;
