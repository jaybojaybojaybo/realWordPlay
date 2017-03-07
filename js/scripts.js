$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();

    var sentence = $("#userSentence").val();

    $("#outputs").text(sentence);
  });
});
