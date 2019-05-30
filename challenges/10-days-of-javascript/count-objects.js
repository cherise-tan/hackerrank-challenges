//jshint esversion:6

// Complete the function in the editor.
// It has one parameter: an array, "a", of objects.
// Each object in the array has two integer properties denoted by "x" and "y".
// The function must return a count of all such objects "o" in array "a" that satisfy "o.x === o.y".

function getCount(objects) {

    let count = 0;

    for (var object of objects) {
        if (object.x === object.y) {
            count++;
        }
    }
    return count;
}
