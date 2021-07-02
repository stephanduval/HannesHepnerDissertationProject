import { UPDATE_CURRENT_IMAGE } from "./types";
const updateCurrentImage = (currentImage) => ({ 
    /* wrapping it in curly brackets avoids the return statement 
    (it immediately returns an object)
    */
    type: UPDATE_CURRENT_IMAGE,  
    payload: currentImage
});


export default updateCurrentImage;