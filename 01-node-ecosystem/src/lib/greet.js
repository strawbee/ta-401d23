'use strict';

const greet = str => ((typeof str !== 'string' || !str) ? null : `hello ${str}`);

module.exports = greet;
