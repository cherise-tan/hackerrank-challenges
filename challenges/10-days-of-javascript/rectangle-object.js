// jshint esversion:6

// Create an object which returns the value length/width/perimeter/area

function Rectangle(a, b) {
  var object = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b
  };
  return object;
}
