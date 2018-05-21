'use strict';
class List {

  constructor() {
    //   constructor(array = []) {
    this.length = 0;
    // if (!array) {
    //   return undefined;
    // }
    // this.length = array.length;
    
    //want to populate the list with itme in array

    // for(let i = 0; i < array.length; i++) {
    //   this[i] = array[i];
    // }
  }

  map(func) {
    let newArr =[];
    for (let i = 0; i < this.length; i++) {
      newArr.push(func(this,i));
    }
    console.log(newArr);
    return newArr;
  }

  // logging(arr, i) {
  //   return console.log(`this is ${arr[i]}`);
  // }
  
  push(item) {
    this[this.length++] = item;
    return this.length;
  }

  toArray(array) {
  // convert object list to JS array
  // start at zero and end at 
    for(let i = 0; i < this.length; i++) {
      array[i] = this[i];
    }
    return array;
  }

  // pop() {
  //   let remove = this[this.length - 1];
  //   this.length--;
  //   if(this.length < 0) {
  //     return undefined;
  //   }
  //   else {
  //     delete this[this.length];
  //   }
  //   return remove;
  // }

//   forEach(array) {
//     if(!array) {
//       return undefined;
//     }
//     let newArray = [];
//     for(let i = 0; i < array.length; i++) {
//       newArray.length++;
//       newArray[i] = array[i];
//     }
//     return newArray;
//   }
//   map(array) {
//     
//   }
//   filter(array) {
//     
//   }
//   reduce(array) {
//     
//   }

}

module.exports = exports = {};
exports.List = List;
exports.logging = (arr,i) => {return console.log(`this is ${arr[i]}`);};