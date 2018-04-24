'use strict';

const Bitmap = require('./bitmap');

// Invert pixelArray
const invertPixelArray = (data) => {
  if (!(data instanceof Bitmap)) throw new Error('Data is not bitmap!');
  data.pixelArray.reverse();
  return data;
};


// Convert transformedBmp colorTable data
const invert = (data) => {
  if (!(data instanceof Bitmap)) throw new Error('Data is not bitmap!');
  
  // INVERT
  for (let i = 0; i < data.colorTable.length; i++) {
    data.colorTable[i] = 255 - data.colorTable[i];
  }
  return data;
};

const greyscale = (data) => {
  if (!(data instanceof Bitmap)) throw new Error('Data is not bitmap!');

  // GREYSCALE
  for (let i = 0; i < data.colorTable.length / 4; i += 4) {
    const grey = (data.colorTable[i] + data.colorTable[i + 1] + data.colorTable[i + 2]) / 3;
    data.colorTable[i] = grey;
    data.colorTable[i + 1] = grey;
    data.colorTable[i + 2] = grey;
  }
  return data;
};

const randomize = (data) => {
  if (!(data instanceof Bitmap)) throw new Error('Data is not bitmap!');

  // RANDOMIZE
  for (let i = 0; i < data.colorTable.length; i++) {
    data.colorTable[i] = ~~(Math.random() * 255);
  }
  return data;
};

module.exports = {
  invertPixelArray, invert, greyscale, randomize, 
};
