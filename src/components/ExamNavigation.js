import React from 'react';
import './ExamNavigation.css';
import { Button } from '@material-ui/core';


const ExamNavigation = ({onInputChange}) => {  // this destructing allows us to use onInputChange instead of props.onInputChange
    return (
<div className="buttonSpace">
            
<Button variant="contained">"W" - Same as *n* photos Back</Button>

<Button variant="contained">"R" - Does not repeat</Button>

</div>
    )
}
export default ExamNavigation;