import React from 'react';
import './Photospace.css';
//import logo from '/../../Alcohol.jpg';

// import { files } from './nBackLogic';

//const testFolder = './images/FeeliePhotos/';

/*
var fs = require('browserify-fs');

fs.mkdir('/home', function() {
	fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
		fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
			console.log(data);
		});
	});
});
*/

/*
const path = require('../');
console.log(path);
*/

//var fs = require('browserify-fs');
//var fs = require('fs');

/*
var fs = require('fs');

fs.readFile('TestFile.txt', function (err, data) {
                    if (err) throw err;

    console.log(data);
});
*/


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('./../images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
  
console.log(images);
let imageFileNameArray = Object.keys(images);
console.log(imageFileNameArray);
let n =0;

//const currentImage = require('./../images/FeeliePhotos/'+imageFileNameArray[0]);
//console.log(currentImage);
console.log(imageFileNameArray[0]);



const Photospace = ({onInputChange}) => {  // this destructing allows us to use onInputChange instead of props.onInputChange
    return (
<div className="photospace">
       <img src={process.env.PUBLIC_URL + './images/FeeliePhotos/'+imageFileNameArray[n]} alt='Current nBack Image'/>;
        


</div>
    )
}
export default Photospace;

/*
<img src={require('./../images/FeeliePhotos/${imageFileNameArray[0]}.jpg')}/>
        <img src={require('./../images/FeeliePhotos/Acorns 1.jpg')}/>
  <img src={'./../images/FeeliePhotos/Acorns 1.jpg'} />
*/