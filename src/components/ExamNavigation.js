import React, { useState, useContext } from 'react'
import './ExamNavigation.css';
import UserContext from './createContextFunction';



function ExamNavigation() {
    const[count, setImageCount] = useState(0)
    const user = useContext(UserContext);

    let a=1

    const b = () => console.log(a=a+1)
    
    const handleClick = value => () => console.log(value); b();

    function buttonfunk(value) {
        console.log(value);

    }



    //useEffect is passed a function that get executed after every render of the component
    // it runs the function every time the component renders
    // The second parameter after function is an array that only updates it when a variable in the array changes value.

    return (


        <div className="buttonSpace">
           
    <button variant="contained" intValue={10} stringValue={"Hello"}>"W" - Same as *n* photos Back
        </button>
        Count: {count} Welcome, {user}
        <button variant="contained" onClick={()=>setImageCount(count+1)}>"R" - Does not repeat
        </button>
        <button onClick={b}>Speak</button>;

        asasas
        </div>

        )
}

export default ExamNavigation
