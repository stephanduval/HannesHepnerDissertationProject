
export const importAll = (r) => {
    
    /**
     **  Summary: This function takes a string filename as an argument and returns an object of the files in the folder
     * 
     * @param {string}   var           The relative path to the folder within which we want to check the filenames
     * @return {object} Returns an object with each filename separated
     */ 
     let images = {};
     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
     return images;
       }


