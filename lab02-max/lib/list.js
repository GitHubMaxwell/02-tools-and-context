'use strict';
class List {

  constructor() {
    this.length = 0;
  }

  push(item) {
    this[this.length++] = item;
    return this.length;
  }
  
//   pop() {
//     let remove = this[this.length - 1];
//     this.length--;
//     if(this.length < 0) {
//       return undefined;
//     }
//     else {
//       delete this[this.length];
//     }
//     return remove;
//   }
//   forEach(array) {
//     this.length = array;
//   }
//   reduce(array) {
//     this.length = array;
//   }
//   map(array) {
//     this.length = array;
//   }
//   filter(array) {
//     this.length = array;
//   }
}

module.exports = List;