import React, { useState, useContext, setState } from 'react'
import './ExamNavigation.css';
import UserContext from './createContextFunction';
import useStateCallback from './useStateCallback'
// redux tutoorial components:
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentImage } from '../actions/actions';



function ExamNavigation() {

    const handleClick = () =>
    setState(
      prev => prev + 1,
      // important: use `s`, not the stale/old closure value `state`
      s => console.log("handleClick, state:", s),
     // updateCurrentImage(state),
    );

    const [state, setState] = useStateCallback(0);
    const[count, setImageCount] = useState(0)
    const user = useContext(UserContext);

    let a=1

    const b = () => console.log(a=a+1)
    
    function buttonfunk(value) {
        console.log('handleClick',value);

       
    }





    //useEffect is passed a function that get executed after every render of the component
    // it runs the function every time the component renders
    // The second parameter after function is an array that only updates it when a variable in the array changes value.

    return (


        <div className="buttonSpace">
           
    <button variant="contained" intValue={10} stringValue={"Hello"}>"W" - Same as *n* photos Back
        </button>
        SetImageCount() in ExamNav. count: {count} Welcome, {user}
        <button variant="contained" onClick={()=>setImageCount(count+1)}>"R" - Does not repeat
        </button>
        <button onClick={handleClick}>ExamNav Handleclick</button>;

        ExamNav Handleclick State: {state}
        </div>

        )
}

export default ExamNavigation
