'use strict';

exports.add = (a, b) => ((typeof a !== 'number' || typeof b !== 'number') ? null : a + b);

exports.sub = (a, b) => ((typeof a !== 'number' || typeof b !== 'number') ? null : a - b);
