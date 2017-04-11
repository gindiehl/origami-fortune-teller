////////////////User Logic ////////////////////
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
