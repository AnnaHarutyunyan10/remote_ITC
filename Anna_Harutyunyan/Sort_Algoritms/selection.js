function selection_sort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) { 
        let min = i;
        for (let j = i + 1; j < length; j++) {  
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        arr[i] = arr.splice(min, 1, arr[i])[0]; //swap
        /*let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;*/
    }
    return arr;
}

console.log(selection_sort([5, 0, 45, 8, 1, 0, -88, 3]));
