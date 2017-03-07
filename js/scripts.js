$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();

    var sentence = $("#userSentence").val();
    var splitSen = sentence.split(" ");

    $("#outputs").text(splitSen);
  });
});
