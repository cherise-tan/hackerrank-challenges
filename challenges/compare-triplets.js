function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;

    let compare = [];

    for (let i = 0; i < 3; i++){
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }

    }

    compare.push(alice);
    compare.push(bob);

    return compare;


}
