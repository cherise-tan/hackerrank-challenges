function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let number of arr) {
        if (Math.sign(number) === 1) {
            positive++;
        } else if (Math.sign(number) === -1) {
            negative++;
        } else {
            zero++;
        }
    }

    console.log(positive / arr.length);
    console.log(negative / arr.length);
    console.log(zero / arr.length);

}
