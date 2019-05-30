//jshint esversion:6

function sockMerchant(n, ar) {
  // sort array
  let sorted = ar.sort();
  // initialise 'totalPairs' at zero
  let totalPairs = 0;

  for (let i = 0; i < n; i++) {
    // check if item at position 'i' is the same as that of position 'i+1'
    if (sorted[i] === sorted[i + 1]) {
      // increment total pairs
      totalPairs++;
      // increase 'i' by 1 -> to move ahead to the next pair
      i++;
    }
  }

  return totalPairs;

}
