let counting_sort = (arr, min, max) => {
    let i = min;
    let j = 0;
    let len = arr.length;
    let count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};

console.log(counting_sort([6, 2, -8, 21, 0, 9, 4], -8, 21));