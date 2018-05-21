'use strict';
let list = require('../lib/list.js');

describe('List Module', () => {

  // it('push() returns array filled with new items', () => {
  //   let myList = new List();
  //   //trying to compare this javscript class with an array which arent the same
  //   myList.push(1);
  //   expect(myList.length).toBe(1);
  // });

  //   it('push() returns the length of the list', () => {
  //     let myList = new List();
  //     myList.push('FOO');
  //     expect(myList.length).toBe(1);
  //   });

  //   it('push() adds an element to the end of a list', () => {
  //     let myList = new List();
  //     myList.push('FOO');
  //     expect(myList[0]).toBe('FOO');
  //   });

  // it('pop() should return undefined if the list is empty', () => {
  //   let myList = new List();
  //   expect(myList.pop()).toBeUndefined();
  // });

  // it('pop() removes an element from the end of a list', () => {
  //   let myList = new List();
  //   myList.push('a');
  //   myList.push('b');
  //   expect(myList.pop()).toBe('b');
  // });

  //   it('forEach() function should return undefined', () => {
  //     let myList = new List();
  //     // (myList.toArray())
  //     expect(myList.forEach()).toBeUndefined();
  //   });

  // it('forEach() array should equal the source value inputted', () => {
  //   let source = [1,2,3,4];
  //   let myList = new List();
  //   myList.forEach(source);
  // (myList.toArray());
  // expect(myList.forEach([1, 2, 3, 4])).toEqual([1,2,3,4]);
  //   expect(myList).toEqual([1,2,3,4]);
  // });

  //   it('forEach() array should equal', () => {
  //     // let source = [1,2,3,4];
  //     let myList = new List();
  //     // (myList.toArray());
  //     // expect(myList.forEach([1, 2, 3, 4])).toEqual([1,2,3,4]);
  //     expect(myList.toArray()).toEqual([1,2,3,4]);
  //   });

  it('map() array should equal "this is 1"', () => {
    let myList = new list.List();
    // let newList = list.toArray(myList.push(1));
    myList.push(1);
    expect(myList.map(list.logging)).toEqual([`this is ${1}`]);
  });
});
