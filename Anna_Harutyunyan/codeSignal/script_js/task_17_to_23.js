//Task 17
/*
You are given an array of integers. 
On each move you are allowed to increase exactly 
one of its element by one. Find the minimal number of 
moves required to obtain a strictly increasing sequence from the input.
*/
function arrayChange(inputArray) {
    let min = 0;
    let sum = 0;
    let len = inputArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArray[j] > inputArray[j + 1]) {
                min = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = min;
            }
        }         
    }
    for (let i = 0; i < len - 1; i++) {
        sum = sum + Math.abs(inputArray[i + 1] - inputArray[i] - 1);
    }
    return sum;
}
let arr = [6, 1, 8, 3, 1];
console.log(arrayChange(arr));


//Task 18
/*
Given a string, find out if its characters can 
be rearranged to form a palindrome.
*/
function polindrom(st) {
    let kent = st.length % 2;
    for (let i = 0; i < st.length; ++i) {
        let symboli_qanak = st.match(new RegExp(st[i], 'g')).length;
        if (symboli_qanak % 2 === 0 || kent) {
            kent = false;
            continue;
        }
        return false;
    }
    return true;
}
  
let polindromString = polindrom('abbcabb');
console.log(polindromString);

//Task 19
/*
Call two arms equally strong if the heaviest weights they each are able 
to lift are equal.
Call two people equally strong if their strongest arms are equally 
strong (the strongest arm can be both the right and the left), 
and so are their weakest arms.
Given your and your friend's arms' lifting capabilities find out if you 
two are equally strong.
*/
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if ((friendsLeft === yourLeft || friendsLeft === yourRight) && (friendsRight === yourLeft || friendsRight === yourRight)) {
        return true;
    } else {
        return false;
    }
}

let equallyStrong = areEquallyStrong(10, 15, 15, 10);
console.log(equallyStrong);

//Task 20
/*
Given an array of integers, find the maximal absolute difference 
between any two of its adjacent elements.
*/
function arrayMaximalAdjacentDifference(inputArray) {
    let newArr = [];
    let length = inputArray.length;
    for (let i = 0; i < length - 1; i ++) {
        newArr.push(Math.abs(inputArray[i] - inputArray[i + 1]));
    }
    for (let i = 0; i < newArr.length - 1; i ++) {
       return newArr.reduce((max, val) => val > max ? val : max, newArr[0]);
    }  
}

let array = arrayMaximalAdjacentDifference([10, 15, 1, 3, 32]);
console.log(array);

//Task 21
/*
Given a string, find out if it satisfies the IPv4 address naming rules.
*/
function isIPv4Address(inputString) {
    let  result  = inputString.split('.');
    return result.length === 4 && result.every(x => x !== '' && !isNaN(x) && x >= 0 && x < 256)
}

let string = isIPv4Address('172.16.254.1');
console.log(string);

//Task 22
/*
You are given an array of integers representing coordinates 
of obstacles situated on a straight line.
Assume that you are jumping from the point with coordinate 0 
to the right. You are allowed only to make jumps of the same length 
represented by some integer.
Find the minimal length of the jump enough to avoid all the obstacles.
*/
function avoidObstacles(inputArray) {
    for(let i = 2; ; i++){
        let t = true;
        for(let jump = 0; jump < inputArray.length; jump++)   
            t = t && inputArray[jump] % i !== 0;
        if(t) {
            return i;
        }
    }
}

let coordinates = avoidObstacles([5, 3, 6, 7, 9]);
console.log(coordinates);

//Task 23
/*
Last night you partied a little too hard. 
Now there's a black and white photo of you that's about to go viral! 
You can't let this ruin your reputation, so you want to apply 
the box blur algorithm to the photo to hide its content.
The pixels in the input image are represented as integers. 
The algorithm distorts the input image in the following way: 
Every pixel x in the output image has a value equal to the average 
value of the pixel values from the 3 × 3 square that has its 
center at x, including x itself. All the pixels on the border of 
x are then removed.

Return the blurred image as an integer, 
with the fractions rounded down.
*/
function boxBlur(image) {
    let first_row = image[0].length - 2;
    let im_length = image.length - 2;
    let photo = new Array(im_length);    
    for(let i = 0; i < im_length; i++) {
        photo[i] = new Array(first_row);
        for(let j = 0; j < first_row; j++) {
            photo[i][j] = image[i][j] + image[i][j+1] + image[i][j+2] +
                      image[i+1][j] + image[i+1][j+1] + image[i+1][j+2] +
                      image[i+2][j] + image[i+2][j+1] + image[i+2][j+2];
            photo[i][j] = Math.floor(photo[i][j] / 9);
        }
    }
    return photo;
}

let image = boxBlur( [[0,18,9], 
                     [27,9,0], 
                     [81,63,45]]);
console.log(image);

