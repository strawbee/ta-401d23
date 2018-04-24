'use strict';

/* HOW TO IN NODE:
const reader = require('./src/lib/reader');
reader(input-path, output-path, transform-name);
    * Transform names: invert, greyscale, randomize

Ex:
reader('./src/asset/bitmap.bmp', './src/asset/inverted-bitmap.bmp', 'invert');
*/

const fs = require('fs');
const Bitmap = require('./bitmap');
const transform = require('./transform');

const reader = (inputPath, outputPath, transformName) => {
  // error checking for string arguments
  if (typeof (inputPath) !== 'string' || typeof (outputPath) !== 'string' || typeof (transformName) !== 'string') {
    return new Error('ERROR: Invalid Input - only string inputs are accepted');
  }

  let buffer;
  try {
    // read file using built in fs.readFileSync - data comes back in form of buffer
    buffer = fs.readFileSync(inputPath);
  } catch (err) {
    return new Error('ERROR: Invalid Input Path');
  }

  // pass in data from fs.readFileSync into our Bitmap constructor to translate into readable format
  const bmp = new Bitmap(buffer);

  // transform file data and save the new data in variable transformedBmp
  let transformedBmp;
  if (transformName === 'invertPixelArray' || transformName === 'inversePixelArray') {
    // INVERT PIXEL ARRAY
    transformedBmp = transform.invertPixelArray(bmp);
  } else if (transformName === 'invert' || transformName === 'inverse') {
    // INVERT COLOR TABLE
    transformedBmp = transform.invert(bmp);
  } else if (transformName === 'greyscale' || transformName === 'grayscale') {
    // GREYSCALE
    transformedBmp = transform.greyscale(bmp);
  } else if (transformName === 'randomize' || transformName === 'random') {
    // RANDOMIZE
    transformedBmp = transform.randomize(bmp);
  } else {
    return new Error('ERROR: Invalid Transform Name - the parameters to this function are inputPath, outputPath, and transformName, where valid transform names are invert, greyscale, and randomize.');
  }

  try {
    // pass in the transformedBmp to fs.writeFileSync - write the new data to a new bmp file
    fs.writeFileSync(outputPath, transformedBmp.allData);
    return `SUCCESS: Transformed file created. Your bitmap at ${inputPath} has been modified using our ${transformName} function. The modified bitmap has been written to ${outputPath}.`;
  } catch (err) {
    return 'ERROR: Invalid Output Path';
  }
};

module.exports = reader;
