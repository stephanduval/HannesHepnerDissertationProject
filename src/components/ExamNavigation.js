import React from 'react';
import './ExamNavigation.css';
import { Button } from '@material-ui/core';



class NavigationButtons extends React.Component {
    state = {
        count: 0
    };


    advanceImage = () => {
        this.setState(prev => ({ count: prev.count +1}));
        console.log(this.state.count);
    }

    render() {
        return (

<div className="buttonSpace">
            
            <Button variant="contained">"W" - Same as *n* photos Back
            </Button>
            
            <Button variant="contained" onClick={this.advanceImage} >"R" - Does not repeat
            </Button>

        <div className="navigationbuttons">{this.state.count}</div>
        </div>
        )
    };
    
}


let n=0


const ExamNavigation = ({advanceImage}) => {  // this destructing allows us to use onInputChange instead of props.onInputChange
    return (


<NavigationButtons />


    )
}
export default ExamNavigation;