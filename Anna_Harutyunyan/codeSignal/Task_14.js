//Task 14
/*
Several people are standing in a row and need to be divided into two teams.
 The first person goes into team 1, the second goes into team 2, 
 the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. 
Return an array of two integers, where the first element is the total 
weight of team 1, and the second element is the total weight of team 
2 after the division is complete.
*/
function alternatingSums(arr) {
    let s1 = 0;
    let s2 = 0;
    let len = arr.length;
    for(let m = 0; m < len; m += 2 ) {
        s1 = s1 + arr[m];
    }
    for(let n = 1; n < len; n += 2) {
        s2 = s2 + arr[n];
    }   
    return [s1, s2];
}