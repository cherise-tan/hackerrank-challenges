function birthdayCakeCandles(ar) {
    let maxHeight = 0;
    for (let i = 0; i < ar.length; i++){
        if (ar[i] > maxHeight) {
            maxHeight = ar[i];
        }
    }


    let blown = 0;
    for (let i = 0; i < ar.length; i++){
        if (ar[i] === maxHeight) {
            blown++;
        }
    }
    return blown;
}
