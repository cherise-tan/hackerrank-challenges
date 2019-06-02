
// Complete the repeatedString function below.
// It should return an integer representing the number of occurrences of a in the prefix of length 'n' 
// in the infinitely repeating string.
//
// repeatedString has the following parameter(s):
// s: a string to repeat
// n: the number of characters to consider

function repeatedString(s, n) {
     s = s.toLowerCase();
    let singleString = s.length;
    let number = 0;

    for (let i = 0; i < singleString; i++) {

        if (s.charAt(i) === "a") {
            number++;
        }
    }

    // now have number of a's in current string

    let repeats = Math.floor(n / singleString);
    number *= repeats;

    // deal with remainder
    let rem = n % singleString;

    for (let i = 0; i < rem; i++){
        if (s.charAt(i) === "a") {
            number++;
        }
    }
    return number;

}
