import React, { usestate } from 'react';
import { CURRENT_IMAGE } from "./../actions/types";

const initialState = {
    count: 0
  };

export default function(state = initialState, action) {
        switch(action.type) {
          case CURRENT_IMAGE:
              return {
                ...state,
                items: state.count  // this may be causing an error
               }
        default:
        return state;
      }
}