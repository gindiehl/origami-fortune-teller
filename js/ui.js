////////////////User Logic ////////////////////
////////////////User Logic ////////////////////
////////////////User Logic ////////////////////


$(document).ready(function(){

  $("#name-button").click(function() {

    var name = $("#name").val();
    var times = name.length;
    var splitName = name.split("");

    (function myLoop (i) {
      setTimeout(function () {

          $(".teller").toggle();
          $("#output").text(splitName[(i-times)*-1]);

        if (--i) { myLoop(i); } else { }
      }, 600)
    })(times);

  });
});
