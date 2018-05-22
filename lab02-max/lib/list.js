'use strict';
class List {

  constructor(array = []) {
    this.length = array.length;
    for(let i = 0; i < array.length; i++) {
      this[i] = array[i];
    }
  }

  toArray(array) {
    let newArray =[];
    for(let i = 0; i < this.length; i++) {
      array[i] = this[i];
    }
    return newArray;
  }

  push(item) {
    this[this.length++] = item;
    return this.length;
  }

  map(func) {
    let newArr =[];
    for (let i = 0; i < this.length; i++) {
      newArr[i] = func(this[i]);
    }
    return newArr;
  }

  pop() {
    let remove = this[this.length - 1];
    this.length--;
    if(this.length < 0) {
      return undefined;
    }
    else {
      delete this[this.length];
    }
    return remove;
  }

  forEach(func) {
    for(let i = 0; i < this.length; i++) {
      this.length++;
      this[i] = func(this[i]);
    }
    return undefined;
  }

  filter(func) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      if(func(this[i])) {
        newArr = this[i];
      }
    }
    console.log(newArr);
    return newArr;
  }
}

module.exports = List;