import React, { usestate } from 'react';
import { UPDATE_CURRENT_IMAGE } from "./../actions/types";

const initialState = {
    count: 0
  };


// the reducer
// define the parameters initially as a initial state template for the sate and
// a empty ojbect for the action
export const updateCurrentImage(state = initialState, action={}) {
        switch(action.type) {
          case UPDATE_CURRENT_IMAGE:


          console.log('Reducer for UPDATE_CURRENT_IMAGE, you had one job, and you did it well.');  
          // return an object containing a copy of state and modify it with the new count value
            return { ...state, count: action.payload }
            //The above is a destructured version of this:
            // return Object.assign({}, state, count: action.payload)
            /*The Object.assign() method copies all enumerable own properties
            from one or more source objects to a target object. It returns
              the modified target object.
            */  

              /*  The alternative way (doesn't work)
             {
                ...state,
                count: +1  // this may be causing an error
               }
               */
        default:
        return state;
      }
    }
     
