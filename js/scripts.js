$(document).ready(function() {
  $("#nameForm form").submit(function(event) {
    var theirNameInput = $("input#theirName").val();

    $(".theirName").text(theirNameInput);
    $("#letter").show();

    event.preventDefault();
  });
});
