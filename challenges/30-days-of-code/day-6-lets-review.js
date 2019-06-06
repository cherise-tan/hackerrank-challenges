function processData(input) {
    //Enter your code here

    let split = input.split("\n");

    for (let i = 1; i < split.length; i++){
        let splitWord = split[i].split("");
        let even = "";
        let odd = "";

        for (let j = 0; j < splitWord.length; j++){
            if (j % 2 === 0) {
                even += splitWord[j];
            } else {
                odd += splitWord[j];
            }
        }
        console.log(even + " " + odd);

    }

} 
