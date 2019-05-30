/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(lengths) {
        this.lengths = lengths;

    }
    perimeter() {
        let sum = 0;

        for (let length of this.lengths) {
            sum += length;
        }

        return sum;
    }
}
