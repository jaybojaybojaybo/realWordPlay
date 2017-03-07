// function isLongEnough(value) {
//   return value >= 3;
// }

$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();

    var sentence = $("#userSentence").val();
    var splitSen = sentence.split(" ");
    var lengths = splitSen.map(function(word) {
      return word.length;
    })

    // var newSen = splitSen.filter(isLongEnough);
    $("#outputs").text(lengths);
  });
});
