function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('./../images/FeeliePhotos/', false, /\.(png|jpe?g|svg)$/));
  
console.log(images);
let imageFileNameArray = Object.keys(images);