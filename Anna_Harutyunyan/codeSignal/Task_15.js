//Task 15
/*
Given a rectangular matrix of characters, add a border 
of asterisks(*) to it.

For
picture = ["abc",
           "ded"]

the output should be
addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/
function addBorder(picture) {
    const borderFirst = picture.map((i) => '*'+i+"*");
    const border = '*'.repeat(borderFirst[0].length);
    borderFirst.push(border);
    borderFirst.unshift(border);
    return borderFirst;
}
