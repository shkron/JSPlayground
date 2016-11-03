'use strict';

/*
* Binary Tree can be used.
* Using array is faster.
* Parent -> Children (2n+1 and 2n+2)
* Child -> Parent  (m-1)/2 and (m-2)/2
*/

class MinHeap{
  constructor(){
    this.storage = [];
  }

  swap(index1, index2){
    var temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  peek(){
    return this.storage[0];
  }

  size() {
    return this.storage.length;
  }

  insert(value){
    this.storage.push(value);
    this.bubbleUp(this.size() - 1);
  }

  bubbleUp(index){
    if (index < 1){
      return;
    }

    var childIndex = index;
    var parentIndex;

    if (childIndex % 2 === 0){
      //even child case
      parentIndex = (childIndex - 2) / 2;
    } else if (childIndex % 2 === 1){
      //odd childIndex
      parentIndex = (childIndex - 1) / 2;
    }

    while (childIndex > 0 && this.storage[parentIndex] > this.storage[childIndex]) {
      this.swap(parentIndex, childIndex);

      childIndex = parentIndex;
      if (childIndex % 2 === 0){
        //even child case
        parentIndex = (childIndex - 2) / 2;
      } else if (childIndex % 2 === 1){
        //odd childIndex
        parentIndex = (childIndex - 1) / 2;
      }

    }
  }

  removeSmallest() {
    this.swap(0, this.size() - 1);
    var toReturn = this.storage.pop();
    this.bubbleDown(0);
    return toReturn;
  }

  bubbleDown(index){
    if (index >= this.size() - 1) {
      return;
    }

    var parentIndex = index;
    var childIndex1 = 2 * parentIndex + 1;
    var childIndex2 = 2 * parentIndex + 2;
    var masterChildIndex;

    if (childIndex1 >= this.size()){
      return;
    } else if (childIndex2 >= this.size()){
      masterChildIndex = childIndex1;
    } else if (this.storage[childIndex1] < this.storage[childIndex2]){
      masterChildIndex = childIndex1;
    } else {
      masterChildIndex = childIndex2;
    }

    while (parentIndex < this.size() - 1 && this.storage[parentIndex] > this.storage[masterChildIndex]) {
      this.swap(parentIndex, masterChildIndex);

      parentIndex = masterChildIndex;
      childIndex1 = 2 * parentIndex + 1;
      childIndex2 = 2 * parentIndex + 2;

      if (childIndex1 >= this.size()){
        return;
      } else if (childIndex2 >= this.size()){
        masterChildIndex = childIndex1;
      } else if (this.storage[childIndex1] < this.storage[childIndex2]){
        masterChildIndex = childIndex1;
      } else {
        masterChildIndex = childIndex2;
      }
    }
  }

  remove(){

  }


}



var test = new MinHeap();

test.insert(1);
test.insert(5);
test.insert(3);
test.insert(2);
test.insert(6);
test.insert(10);
test.insert(3);
test.insert(4);
test.insert(8);
console.log(test.storage);

test.insert(-1);
console.log(test.storage);

test.removeSmallest();
console.log(test.storage);
