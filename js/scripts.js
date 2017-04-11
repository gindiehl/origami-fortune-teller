//////////////////Business Logic //////////////////

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




// prototype to return lengths of User object parameters
User.prototype.shuffle = function(input) {
  return input.length;
}



/////////////////User Logic ////////////////////
$(document).ready(function(){
  $("#inquire").click(function() {
    //set variable to collect & store user input for name
    var userName = $("#name").val();
    var userColor =$("#color").val();
    // instantiate new user object instance
    var newUser = new User(userName, userColor);

    $("#output").text(newUser.name + " " + newUser.color);


  });
});
