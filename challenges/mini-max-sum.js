function miniMaxSum(arr) {


    let newArr = arr.sort();

    let minArr = newArr.slice();
    let maxArr = newArr.slice();

    minArr.pop();
    maxArr.shift();

    let min = minArr.reduce((x, y) => x + y);
    let max = maxArr.reduce((x, y) => x + y);


    console.log(min, max);

}
