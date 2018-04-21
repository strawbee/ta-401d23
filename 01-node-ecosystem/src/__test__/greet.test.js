'use strict';

const greet = require('../lib/greet');

describe('Greet Module', () => {
  it('should return null when supplied with non-string values', () => {
    expect(greet(123)).toBeNull();
    expect(greet(['a'])).toBeNull();
    expect(greet({ a: '1' })).toBeNull();
    expect(greet(true)).toBeNull();
    expect(greet('')).toBeNull();
    expect(greet('123')).not.toBeNull();
  });

  it('should return "hello world" when invoked with "world" as first argument', () => {
    expect(greet('world')).toBe('hello world');
  });
});
