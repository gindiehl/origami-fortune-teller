////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////
/////////////////User Logic ////////////////////


$(document).ready(function(){

  $("#name-button").click(function() {

    var name = $("#name").val();
    var times = name.length;
    var splitName = name.split("");

    (function myLoop (i) {
      setTimeout(function () {
        $("#target").addClass("right");
          setTimeout(function() {
            $("#target").removeClass("right");
          }, 300);

          $("#output").text(splitName[(i-times)*-1]);

        if (--i) myLoop(i);
      }, 600)
    })(times);


  });
});
