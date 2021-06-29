import React, { useState } from 'react'
import './ExamNavigation.css';


function ExamNavigation() {
    const[count, setImageCount] = useState(0)

    //useEffect is passed a function that get executed after every render of the component
    // it runs the function every time the component renders
    // The second parameter after function is an array that only updates it when a variable in the array changes value.

    return (


        <div className="buttonSpace">
    
    <button variant="contained" intValue={10} stringValue={"Hello"}>"W" - Same as *n* photos Back
        </button>
        Count: {count}
        <button variant="contained" onClick={()=>setImageCount(count+1)}>"R" - Does not repeat
        </button>
    </div>
    )
}

export default ExamNavigation
export {count}