// Complete the rotLeft function below.
function rotLeft(a, d) {


    let array = a;

    // divide array length by number of rotations

    let rem = d % array.length;

    for (let i = 0; i < rem; i++){
        array.push(array.shift());
    }

    return array;
}
