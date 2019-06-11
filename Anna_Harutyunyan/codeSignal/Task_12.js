//Task 12
/*
Some people are standing in a row in a park. 
There are trees between them which cannot be moved. 
Your task is to rearrange the people by their heights 
in a non-descending order without moving the trees. 
People can be very tall!

For arr = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sort(arr) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/
function getAllIndexes(arr, val) {
    let ind = [];
    let len = arr.length;
    for(let i = 0; i < len; i++)
        if (arr[i] === val) 
        ind.push(i);
    return ind;
}  
function sort(arr) {
    let min = arr[0];
    let len = arr.length;
    let index = getAllIndexes(arr, '-1'); 
    for (let i = 1; i < len; i++) {
      for (let j = 0; j < len - i; j++) {
        if (arr[j] > arr[j + 1]) {
          min = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = min;
        }
      }
    } 
    if (index.length) {
        let i = arr.indexOf(-1);
        arr.splice(i, index.length);
        for (let i = 0; i < index.length; ++i) {
            arr.splice(index[i], 0, -1);
        }
    } 
    return arr;
}
let arr = [-1, 150, 190, 170, -1, -1, 160, 180];
let sorted = sort(arr);
console.log(sorted);

