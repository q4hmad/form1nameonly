$(document).ready(function() {
  $("#nameForm form").submit(function(event) {
    var blanks = ["theirName", "theirAge"];
    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    })

    $("#letter").show();

    event.preventDefault();
  });
});
