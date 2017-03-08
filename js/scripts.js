

$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();

    var sentence = $("#userSentence").val();
    var splitSen = sentence.split(" ");
    var lengths = splitSen.map(function(word) {
      if (word.length > 3) {
        return word
      };
      });
    console.log(sentence);
    console.log(lengths);
    $("#outputs").text(lengths.reverse());
  });
});
