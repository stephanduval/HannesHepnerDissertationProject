import { UPDATE_CURRENT_IMAGE } from "./types";

export const UpdateCurrentImage = (currentImage) => ({ 
    /* wrapping it in curly brackets avoids the return statement 
    (it immediately returns an object)
    */
    type: UPDATE_CURRENT_IMAGE,  
    payload: currentImage
},
console.log("currentImage, you had ONE job. and you did it well.",currentImage)
);