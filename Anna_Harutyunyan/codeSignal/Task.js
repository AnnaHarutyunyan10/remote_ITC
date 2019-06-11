//Task
/*
Veradarcnel masiv ayn elementneric kazmvac, 
voronc tarerov kareli e stanal nuyn bare
(tareri texapoxutyan hetevanqov):
Orinak` "adc" ev "dca" chisht e:
*/
function sortString(str) {
    const arr = str.split('');
    const sorted = arr.sort();
    return sorted.join('');
}
function equal(st1, st2) {
    return sortString(st1) === sortString(st2);
} 
function sort(arr) {
    let result = [];
    let len = arr.length;
    for(let i = 0; i < len; ++i) {
        const res = [arr[i]];
        for(let j = i + 1; j < len; ++j) {
            if (equal(arr[i], arr[j])) {
                res.push(arr[j])
            }
        }
        if (res.length > 1 && result.indexOf(arr[i]) < 0) {
            result = [].concat.apply(result, res);
        }
    }
    return result;
}
let arr = ["serje", "skdm", "esrej", "acd", "ab", "mnsk", "dca", "ba",];
let sorted = sort(arr);
console.log(sorted);

