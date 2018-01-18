
function wordPuzzle(stringInput) {
  var newString = stringInput.replace(/[aeiou]/gi, "-");
  return newString;
}

function toggle(){
  $("#wordstring").toggle();
  $("#puzzle").toggle();

}

$(document).ready(function () {
  $("#wordstring").submit(function (event) {
    event.preventDefault();


    var userInput = $("#words").val();
    $("#puzzle p").text(wordPuzzle(userInput));
    toggle();



    //document.write(newString);



    // $("#puzzle").show();
    //   $("#wordsrtring").hide();

  });
});
