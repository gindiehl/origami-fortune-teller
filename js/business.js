/////////////////Business Logic ////////////////////
/////////////////Business Logic ////////////////////
/////////////////Business Logic ////////////////////
function FortuneTeller(fortunes, availOptions) {
  this.fortunes = fortunes;
  this.availOptions = availOptions;
}

var newFortuneTeller = new FortuneTeller([], [[1,4,8,5],[2,3,6,7]]);

newFortuneTeller.fortunes = [
  "Caffeine will no longer save you",
  "Uncaught ReferenceError: 'Your Variable' is not defined",
  "Aw shucks! Your partner will push empty code to your master repo.",
  "Ack! Your life is like a Cathy comic!",
  "You will receive per diem in your next job",
  "You will end up pairing up with the same person everyday until you graduate!!",
  "Congrats! You got a paid internship!",
  "Eeek !! You will forget to add document.ready to your UI!!"
]

// create User Object constructor
function User(name, color) {
  this.name = name;
  this.color = color;
}

// function to return lengths of User object parameters
var shuffle = function(input1, input2) {
  // var timesShuffled = input.length;
  var sum = input1.length + input2.length;
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
