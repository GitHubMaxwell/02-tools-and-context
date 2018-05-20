'use strict';
let List = require('../../lib/list.js');

describe('List Module', () => {

  it('push() returns the length of the list', () => {
    let myList = new List();
    myList.push('FOO');
    expect(myList.length).toBe(1);
  });

  it('push() adds an element to the end of a list', () => {
    let myList = new List();
    myList.push('FOO');
    expect(myList[0]).toBe('FOO');
  });

  it('pop() should return undefined if the list is empty', () => {
    let myList = new List();
    expect(myList.pop()).toBeUndefined();
  });

  it('pop() removes an element from the end of a list', () => {
    let myList = new List();
    myList.push('a');
    myList.push('b');
    expect(myList.pop()).toBe('b');
  });

  it('forEach() function should return undefined', () => {
    let myList = new List();
    expect(myList.forEach()).toBeUndefined();
  });

  it('forEach() array should be unchanged', () => {
    let myList = new List();
    expect(myList.forEach([1, 2, 3, 4])).toBe([1, 2, 3, 4]);
  });
});