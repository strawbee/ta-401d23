'use strict';

class Bitmap {
  constructor(buffer) {
    this.allData = buffer;
    this.size = buffer.readInt32LE(2);
    this.offset = buffer.readUInt32LE(10);
    this.colorTable = buffer.slice(54, this.offset);
    this.pixelArray = buffer.slice(this.offset, this.size);
  }
}

module.exports = Bitmap;
