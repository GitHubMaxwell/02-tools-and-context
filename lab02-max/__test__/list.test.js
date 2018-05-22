'use strict';
let List = require('../lib/list.js');

describe('List Module', () => {

  it('push() returns array filled with new items', () => {
    let myList = new List();
    myList.push(1);
    expect(myList.length).toBe(1);
  });

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
    let logging = (arr) => {
      return `this is ${arr}`;
    };
    let myList = new List();
    expect(myList.forEach(logging)).toBeUndefined();
  });

  it('map() array should equal "this is 1"', () => {
    let myList = new List();
    myList.push(1);
    let logging = (arr) => {
      return `this is ${arr}`;
    };
    expect(myList.map(logging)).toEqual([`this is 1`]);
  });
  
  it('map() array should equal "this is 1"', () => {
    let logging = (arr) => {
      return `this is ${arr}`;
    };
    let myList = new List([1,2,3]);
    myList.map(logging);
    expect(myList[0]).toEqual(1);
  });

  it('filter() should return 1', () => {
    let myList = new List([1,2,3]);
    let filtFun = ele => {
      return ele === 2;
    };
    expect(myList.filter(filtFun)).toEqual(2);
  });
  
});
