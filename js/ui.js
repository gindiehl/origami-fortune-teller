////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////


$(document).ready(function() {

  var newUser = new User("", "");// instantiate new user object instance

  $("#name").click(function() {
    var inputtedName = $("#userName").val();//collect & store user input for name
    newUser.name = inputtedName;


    // Gather input length just to have that number to use for an animation


    //------------------------------------------shuffle animation
    // animate(userName.name);
    $("#show-name").hide();
    $("#color-div").show();
    $("#number-div").hide();
  });
  //---------------------------------------------------------------color input
  $("#color").click(function() {
    var userColor =$("#userColor").val(); //collect ui for color
    newUser.color = userColor;
        //---------------------------------------------shuffle animation
    $("#color-div").hide();
    // call new shuffle function
    // check if it returns "even"
    $("#number-div").show();
    if (shuffle(newUser.name, newUser.color) === "even") {
      var options = newFortuneTeller.availOptions[1];
    }
    else {
      var options = newFortuneTeller.availOptions[0];

    }

    $("#output").text("Available options: ");
    // loop through the options, and for each option, append to the output
    // <span>singlen option</span>
    options.forEach(function(option) {
      $("#output").append("<span class='option-span'>" + option + "</span> ");
    });
    //----------------------------------------------------------option click
    $(".option-span").click(function() {
      alert();
    });

  });

});
