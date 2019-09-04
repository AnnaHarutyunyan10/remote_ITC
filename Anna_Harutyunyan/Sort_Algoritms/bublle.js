function bubble_sort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 1; j < length; j++) {
            if (arr[j] < arr[j - 1]) {
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }
    return arr;
}
let arr = [2, 11, 0, 4, 1, 8, 0];

console.log(bubble_sort(arr));