////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////


$(document).ready(function() {


  // animation
  // animation
  // animation
  var animate = function(word, after) {
    $("#letters").show();

    var times = word.length;
    var splitWord = word.split("");

    (function myLoop (i) {
      setTimeout(function () {

          $(".run").toggle();
          $("#letters").text(splitWord[(i-times)*-1]);

        if (--i) {
           myLoop(i);
          } else {
             $(after).show();
             $("#letters").hide();
          }
      }, 600)
    })(times);
  }


  // instantiate new user object instance
  var newUser = new User("", "");



  $("#name").click(function() {
    var inputtedName = $("#userName").val();//collect & store user input for name
    newUser.name = inputtedName;
      $(".section").hide();
      var showThis = "#color-div";
    // animation function, passing name
    animate(inputtedName, showThis);

  });



  //---------------------------------------------------------------color input
  $("#color").click(function() {
    var inputtedColor =$("#userColor").val(); //collect ui for color
    newUser.color = inputtedColor;

    $(".section").hide();
    var showThis = "#output";
    // animation function, passing name
    animate(inputtedColor, showThis);

    // check to see if total length of both inputs are even or odd
    if (shuffle(newUser.name, newUser.color) === "even") {
      var options = newFortuneTeller.availOptions[1];
    }
    else {
      var options = newFortuneTeller.availOptions[0];
    }

    $("#output").text("Available options: ");
    // loop through the options, and for each option, append to the output
    options.forEach(function(option, i = 0) {
      $("#output").append("<span class='option-span'>" + option + "</span> ");
      $('.hover-click:nth-child(' + (i+1) + ')').attr('data-value', option);
    });
    //----------------------------------------------------------option click
    $(".option-span").click(function() {
      $(".final-output").show();
      $("#teller-wrapper").hide();
      $(".final-output").html("<p>" + newFortuneTeller.fortunes[$(this).text()-1] + "</p>");
      $(".final-output").append("<div id='play-again' onClick='window.location.reload()'>Play Again</div>");

      $("#number-div").hide();
      });

    });

    $(".hover-click").click(function() {
      alert($(this).attr('data-value'));
    });


  });
