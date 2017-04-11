//////////////////Business Logic //////////////////
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

    $("#output")text(newUser.name);




});











});
