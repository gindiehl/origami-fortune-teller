//////////////////Business Logic //////////////////
/////////////////Backend Logic ////////////////////
/////////////////Backend Logic ////////////////////
/////////////////Backend Logic ////////////////////

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



/////////////////User Logic ////////////////////
$(document).ready(function(){

  var newUser = new User(userName, userColor); // instantiate new user object instance

  $("#inquire").click(function() {
    //set variable to collect & store user input for name
    var userName = $("#name").val();
    var userColor =$("#color").val();

    newUser.shuffle(newUser);

    $("#output").text(newUser.name + " " + newUser.color);



/////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////


$(document).ready(function(){

  // instantiate new user object instance
  var newUser = new User("", "");

  $("#inquire").click(function() {
    //set variable to collect & store user input for name
    var userName = $("#name").val();
    var userColor =$("#color").val();
    var userFortune = parseInt($("#number").val());
    newUser.name = userName;
    newUser.color = userColor;
    if (shuffle(newUser.name) === 0) {
      var options = newFortuneTeller.availOptions[0];
    } else {
      var options = newFortuneTeller.availOptions[1];
    }
    // $("#output").text(newFortuneTeller.fortunes[userFortune -1]);
    $("#output").text("Available options: " + options);


  });
});
