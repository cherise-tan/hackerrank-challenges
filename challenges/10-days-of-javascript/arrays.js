// jshint esversion:6

// Complete the getSecondLargest function: it has one parameter: an array, "arr", of  numbers.
// The function must find and return the second largest number in "arr"

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {

    let sorted = nums.sort();

    let biggest = sorted[0];
    let secondBiggest = sorted[0];

    // Complete the function
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] < biggest && sorted[i] > secondBiggest) {
            secondBiggest = sorted[i];
        }

        if (sorted[i] > biggest) {
            secondBiggest = biggest;
            biggest = sorted[i];
        }
    }

    return secondBiggest;
}
