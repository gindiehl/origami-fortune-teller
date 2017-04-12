////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////


$(document).ready(function() {

  var newUser = new User("", "");// instantiate new user object instance

  $("#name").click(function() {
    var inputtedName = $("#userName").val();//collect & store user input for name
    // newUser.name = inputtedName;
    if (shuffle(newUser.name) === 0) {
      var options = newFortuneTeller.availOptions[0];
    } else {
      var options = newFortuneTeller.availOptions[1];
    }
    //------------------------------------------shuffle animation
    $("#show-name").hide();
    $("#color-div").show();
    $("#number-div").hide();
  });
  //---------------------------------------------------------------color input
  $("#color").click(function() {
    var userColor =$("#userColor").val(); //collect ui for color
    // newUser.color = userColor;
    if (shuffle(newUser.color) === 0) {
      var options = newFortuneTeller.availOptions[0];
    } else {
      var options = newFortuneTeller.availOptions[1];
    }
        //---------------------------------------------shuffle animation
    $("#color-div").hide();
    $("#output").text("Available options: " + options);
    $("#number-div").show();

  });
    //----------------------------------------------------------number input
  $("#number").click(function() {
    var userNumber = parseInt($("#userNumber").val()); //
    // newUser.number = userNumber;
    alert(newFortuneTeller.fortunes[userNumber-1]);

    // $("#output").text(newFortuneTeller.fortunes[userFortune -1]);

  });

});
