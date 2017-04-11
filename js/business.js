/////////////////Business Logic ////////////////////
/////////////////Business Logic ////////////////////
/////////////////Business Logic ////////////////////
function FortuneTeller(fortunes, availOptions) {
  this.fortunes = fortunes;
  this.availOptions = availOptions;
}

var newFortuneTeller = new FortuneTeller([], [[1,4,5,8],[2,3,6,7]]);

newFortuneTeller.fortunes = [
  "You are fortune 1!",
  "You are fortune 2!",
  "You are fortune 3!",
  "You are fortune 4!",
  "You are fortune 5!",
  "You are fortune 6!",
  "You are fortune 7!",
  "You are fortune 8!"
]

// create User Object constructor
function User(name, color) {
  this.name = name;
  this.color = color;
}


// function to return lengths of User object parameters
var shuffle = function(input) {
  // var timesShuffled = input.length;
  var number = input.length;
  if (number % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}
