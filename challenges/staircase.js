// Complete the staircase function below.
function staircase(n) {
    for (let row = 0; row < n; row++){
        let stair = "";
        for (let col = 0; col < n; col++){
            if (col <= row) {
                stair += "#";
            } else {
                stair += " ";
            }

        }
        stair = stair.split("").reverse().join("");
        console.log(stair);
    }


}
