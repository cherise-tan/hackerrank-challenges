// jshint esversion:6

// n = number of steps
// s = string stating steps taken (U = up; D = down)

function countingValleys(n, s) {
    let valleys = 0;
    let valleyDown = false;
    let level = 0;

    for (let i = 0; i < n; i++){
        if (s[i] === "D") {
            level--;
            valleyDown = true;
        }
        else if (s[i] === "U") {
            level++;
            if (level === 0 && valleyDown) {
                valleys++;
                valleyDown = false;
            }
        }
    }
    return valleys;

}
