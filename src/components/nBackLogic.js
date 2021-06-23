
// Set path of photo folder here

const testFolder = './images/FeeliePhotos/';

/* Import fs.realpath() which we will use to create an array of file names
 in the image folder
*/

const fs = require('fs');

// Establish the default values of the n-back function

let numberOfPhotos = 126;
let numberOfPredictivePhotos = 12;
let NumberofnBackMatches = 26;
let nBackDegree = 2;
let timerSeconds = 5;





/*  ================================== BEING n-Back Code 
              REFACTOR THIS INTO ITS OWN MODULES LATER
=====================================================
              */

/* fs.readdirSync takes a folder as a parameter and
returns an array consisting of filenames.
*/

var files = fs.readdirSync(testFolder);

// CONSOLE TESTING
console.log("first item in the array",files[0]);
console.log("second item in the",files[1]);
console.log("all files",files);
// END OF CONSOLE TESTING

/* Shuffle the array function (randomizes it) by using the array.sort(compareFunction)
to create a random relationship between each value as the sort() fucntion crawls across
the array
*/

/* It's the same as this function:
console.log(files.sort(function(){return 0.5 - Math.random()}));
*/
let randomizedImageArray = files.sort(()=> 0.5 - Math.random())

// CONSOLE TESTING
console.log("randomizedImageArray",randomizedImageArray)
// END OF CONSOLE TESTING


// Get sub-array of the selected test photo size

let slicedRandomizedImageArray = randomizedImageArray.slice((numberOfPhotos) => 0, numberOfPhotos);



// CONSOLE TESTING
console.log("slicedRandomizedImageArray",slicedRandomizedImageArray);
console.log("slicedRandomizedImageArray length:",slicedRandomizedImageArray.length);
// END OF CONSOLE TESTING

// Create an array of the indexes of numbers to select the predictive values

function predictiveSet() {
  var arr = [];
while(arr.length < numberOfPredictivePhotos){
    var r = Math.floor(Math.random() * (slicedRandomizedImageArray.length - 0 + 1) + 0);
    if(arr.indexOf(r) === -1) arr.push(slicedRandomizedImageArray[r]);
    
}
return arr;
}

let predictiveSetOfImages = predictiveSet()

// CONSOLE TESTING
console.log("predictiveSetOfImages",predictiveSetOfImages);
console.log("predictiveSetOfImages: ???",predictiveSetOfImages.length);
// END OF CONSOLE TESTING


// splice in the n-backs into the array:
/*
function spliceNBacksIntoArray() {
  i = 0
  arr = []
  while (i < NumberofnBackMatches) {



    var r = Math.floor(Math.random() * (numberOfPhotos - NumberofnBackMatches - 0 + 1) + 0);
    
  
      slicedRandomizedImageArray.splice(r-nBackDegree,0,slicedRandomizedImageArray[r] + "MATCH");
      j = 0;
      while (j<nBackDegree)
      {
      arr.push(r+1-j);
      j++
      }
      i++;
    }
  }
  console.log("arr",arr);
  return slicedRandomizedImageArray;
}

*/

function spliceNBacksIntoArray(excluded = []) {
  /*
  *  Function: spliceNBacksIntoArray

  *  Purpose: It creates a list of unique random integers and uses that to decide which images
  *  In the array will be duplicated for the purpose of creating the n-back test
  * 
  * It also marks each file name as "predictive or matching" for testing purposes
  * 
  *  Parameters: None
  * 
  *  Returns: A modified array of the image list with the n-back matches inserted
  * 
  */ 



// Map each index of items that match the predictiveSetOfImages
predictiveSetOfImages.map(x => excluded.push(slicedRandomizedImageArray.indexOf(x)));
excluded.sort((a,b)=>a-b);
console.log(excluded);

// adds values that will protect the predictive set of images 
excluded.map((element) => excluded.push(element+nBackDegree));
excluded.sort((a,b)=>a-b);
console.log(excluded);

let j =0  // changed hastily - sD
let i = 0;
while (i < NumberofnBackMatches) {
let num = Math.floor(Math.random() * (numberOfPhotos + 1) + 0);

if (!(excluded.includes(num))
    //&& !(excluded.includes(num+nBackDegree))
    && !(excluded.includes(num-nBackDegree))
      ) 
      {
        console.log("Match",num);
        excluded.push(num,num-nBackDegree);
        slicedRandomizedImageArray.splice(num+nBackDegree,1,slicedRandomizedImageArray[num] + " MATCH " + num + !(excluded.includes(slicedRandomizedImageArray[num])) );
        }

 i++   
  }

  j = 0
   while (j < slicedRandomizedImageArray.length) {
     
    if (predictiveSetOfImages.includes(slicedRandomizedImageArray[j])) 
     //slicedRandomizedImageArray[j])) 
     {
   //    console.log("FLAG");
    slicedRandomizedImageArray[j] = slicedRandomizedImageArray[j] + " predictive";
     }
     j++
   }

  excluded.sort((a,b)=>a-b);
  console.log(excluded);
}
console.log(spliceNBacksIntoArray());
console.log(slicedRandomizedImageArray);


// spliceNBacksIntoArray.findIndex(num)




  /* ===================================================  let's try this again.
  i = 0;
  while (i < NumberofnBackMatches) {
  let num = Math.floor(Math.random() * (numberOfPhotos - NumberofnBackMatches - 0 + 1) + 0);
  excluded
    .push(num);
    .sort((a, b) => a-b);
    // .every() returns a boolean value
    
  if (excluded.map(element)) => {}  

    if (!(predictiveSetOfImages.includes(slicedRandomizedImageArray[num])))
    {
      excluded.push(num,num+nBackDegree);
      slicedRandomizedImageArray.splice(num+nBackDegree,0,slicedRandomizedImageArray[num] + " MATCH " + num + "i: " + i);
    }

    if (!(excluded.includes(num))) 
    {
      excluded.push(num,num+nBackDegree);
      slicedRandomizedImageArray.splice(num+nBackDegree,0,slicedRandomizedImageArray[num] + " MATCH " + num + "i: " + i);
    }
==================================================================== 
*/
    /*
    if (!(predictiveSetOfImages.includes(slicedRandomizedImageArray[num])) 
      || !(excluded.every((exception) => exception = num))
      || !(excluded.every((exception) => exception = num-2))
      || !(excluded.every((exception) => exception = num+2))
      )
      /*
      || predictiveSetOfImages.indexOf(slicedRandomizedImageArray[num]) > -1 
      || predictiveSetOfImages.indexOf(slicedRandomizedImageArray[num+nBackDegree-1]) > -1)
      */
     /*
      {
        excluded.push(num,num+nBackDegree);
        slicedRandomizedImageArray.splice(num+nBackDegree,1,slicedRandomizedImageArray[num] + " MATCH " + num);
        console.log("FFFFFFFUCK",slicedRandomizedImageArray[num]);
       

    }

    */
    /*
    if (excluded.every((exception) => exception != num
     || predictiveSetOfImages.indexOf(slicedRandomizedImageArray[num]) > -1 
     || predictiveSetOfImages.indexOf(slicedRandomizedImageArray[num+nBackDegree]) > -1
     ))
    {
      excluded.push(num,num+nBackDegree);
      slicedRandomizedImageArray.splice(num+nBackDegree,1,slicedRandomizedImageArray[num] + " MATCH");
      console.log("FFFFFFFUCK",slicedRandomizedImageArray[num]);
    }
   
    i++
   }
   
   */
 
//  Lets mark the files that are predictive for testing (This may come in handy later when we have to evaluate the scoreing data)
/*  

j = 0
   while (j < slicedRandomizedImageArray.length) {
     
    if (predictiveSetOfImages.includes(slicedRandomizedImageArray[j])) 
     //slicedRandomizedImageArray[j])) 
     {
   //    console.log("FLAG");
    slicedRandomizedImageArray[j] = slicedRandomizedImageArray[j] + " predictive";
     }
     j++
   }
   function interpretData(value, index, array) {
    console.log(value,index);
  }
   let data = slicedRandomizedImageArray.map(interpretData);


   
   console.log("DATA",data)
   console.log("Excluded",excluded);
   return slicedRandomizedImageArray
  }

  */
  






  // =======================================


  /* ========================================================================
  i = 0
  arr = []
  while (i < NumberofnBackMatches) {
    var r = Math.floor(Math.random() * (numberOfPhotos - NumberofnBackMatches - 0 + 1) + 0);
      arr.sort((a,b) => a-b);
      if (arr.indexOf(r) === -1 && r-arr[-1] != nBackDegree) arr.push(r);
      i++
    }
    arr.sort((a,b) => a-b);
    arr.forEach(element => {
      slicedRandomizedImageArray.splice(element+nBackDegree,0,slicedRandomizedImageArray[element] + " MATCH");
    });
  
  console.log("arr",arr);
  return slicedRandomizedImageArray;
} 
*/
/*

finalArray = spliceNBacksIntoArray()


console.log("finalArray",finalArray);
console.log("finalArray length:",finalArray.length);

*/





// CONSOLE TESTING
//Check array length 
// compare array length to input length
// END OF CONSOLE TESTING

/* PSEUDOCODE EXPLANATION OF PROCESS:




Varibles:
How many photos are used for predictice memory test
How many unique photos are used in the array
The degree of n back
the number-of-n-backs in each test
number of seconds the user is shown each card





1) ESTABLISH AN ARRAY OF PHOTOS with 106 or more photos drawn from the dictionary
1.5) create a dictionary of photo names to filenames 
2) Randomize the array
3) remove ${six}photos out of the array into a new array for the array called predictiveSet
(since its random the photos can be sequential)

4) Create a random array out of the remaining photos

5) randomly shuffle in duplicate photos
6) Apply a function that finds the number of natural n-backs
7) if the number is greater or lower, replace the n-backs (at
    random places) until the number of n-backs is at the level we want.
4) Take a number-of-nbacks number of unique random numbers between  and
replace the values of the array[${random_number}] back into the array to create the nback effect 
the result should be an array of the same size


5) Apply function that creates an array or a dictionary that evaluates 
what the correct button press should be for that test
5.5) send the data to the frontend!
6) Present the user the test and record the feedback
7) store the user input array alongside the correct answer array and the actual test
8) have a snickers.

*/