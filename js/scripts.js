$(document).ready(function() {
  $("#nameForm form").submit(function(event) {
    var theirName = $("#theirName").val();
    console.log(theirName);
    var theirAddress = $("#theirAddress").val();
    console.log(theirAddress);
    // var blanks = ["theirName", "theirAge"];
    // blanks.forEach(function(blank){
    //   var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    // })
    //
    // $("#letter").show();
    //
    event.preventDefault();
  });
});
