// Task 1
/*
Write a function that returns the sum of two numbers.
*/
function add(param1, param2) {
    return param1 + param2;
}

// Task 2
/*
Given a year, return the century it is in. 
The first century spans from the year 1 up to and including 
the year 100, the second - from the year 101 up to and including 
the year 200, etc.
*/
function centuryFromYear(year) {
    let century;
    if (year % 100 === 0 ) {
        century = year / 100;
    } else {
        century = parseInt(year / 100) + 1;
    }
    return century;
}

//Task 3
/* 
Given the string, check if it is a palindrome.
*/
function checkPalindrome(inputString) {
    let len = inputString.length;
    for ( let i = 0; i < Math.floor(len/2); i++ ) {
        if (inputString[i] !== inputString[len - 1 - i]) {
            return false;       
        }
    }
    return true;
}

//Task 4
/*
Given an array of integers, find the pair of adjacent elements
that has the largest product and return that product.
*/
function adjacentElementsProduct(inputArray) {
    let len = inputArray.length;
    let result = inputArray[0] * inputArray[1]; 
    for (let i = 1; i < len - 1; i++) {
        if(inputArray[i] * inputArray[i + 1] > result) {
            result =  inputArray[i] * inputArray[i + 1];
        } 
        
    }
    return result;
}

//Task 5
/*
Below we will define an n-interesting polygon. 
Your task is to find the area of a polygon for a given n.
*/
function shapeArea(n) { 
    if (n !== 1) {
    return (n * n) - (n - 2) * (n - 2) + shapeArea(n - 1);
    } else {
      return 1;
    } 
}

//Task 6
/*
Ratiorg got statues of different sizes as a present 
from CodeMaster for his birthday, each statue 
having an non-negative integer size. 
Since he likes to make things perfect, he wants to arrange them 
from smallest to largest so that each statue will be bigger 
than the previous one exactly by 1. He may need some additional 
statues to be able to accomplish that. Help him figure out the 
minimum number of additional statues needed.
*/
function makeArrayConsecutive2(statues) {
    let max = statues[0];
    let min = statues[statues.length - 1];
    for(let i = 0; i < statues. length; i++) {
        if(statues[i] > max) {
            max = statues[i];
        }
        if(statues[i] < min) {
            min = statues[i];
        }
    }
    let count = (max - min + 1) - statues.length;
    return count;
}

//Task 7
/* 
Given a sequence of integers as an array, determine whether 
it is possible to obtain a strictly increasing sequence by 
removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly 
increasing if a0 < a1 < ... < an. Sequence containing only one 
element is also considered to be strictly increasing.
*/
function almostIncreasingSequence(sequence) {
    let count = 0;
    for(let i = 0; i < sequence.length; i++) {
       if(sequence[i] >= sequence[i + 1] || sequence[i - 1] === sequence[i + 1]) {
           count++;
       } 
   }
   if (count <= 1) {
       return true;
   } else {
       return false;
   }
}

//Task 8
/* 
Given matrix, a rectangular matrix of integers, 
where each value represents the cost of the room, 
your task is to return the total sum of all rooms that are 
suitable for the CodeBots (ie: add up all the values that 
don't appear below a 0).
*/
function matrixElementsSum(matrix) {
    let sum = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            if(matrix[j][i] !== 0) {
                sum = sum + matrix[j][i];
            } else {
                matrix[j++][i] = 0
            };
        }
    }
    return sum;
}

//Task 11
/* 
Ticket numbers usually consist of an even number of digits. 
A ticket number is considered lucky if the sum of the first 
half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.
*/
function isLucky(n) {
    let m = n;
    let num;
    let arr = [];
    let s1 = 0;
    let s2 = 0;
    let count = 0;

    do {
        m /= 10; 
        count++;
    } 
    while (m >= 1);      
    for (let i = 0; i < count; i++) {
        num = n % 10;
        n = parseInt(n / 10);       
        arr[i] = num;
    }
    for (let j = 0; j < count/2; j++) {
        s1 = s1 + arr[j];
        s2 = s2 + arr[count - j - 1];
    }
    if(s1 === s2) {
        return true;
    } else {
        return false;
    } 
}


