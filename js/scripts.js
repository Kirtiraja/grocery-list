var numbers = [1, 2, 3, 4, 5];
var items = [];


$(document).ready(function(){
  $("form#groceryList").submit(function(event) {
    event.preventDefault();

    numbers.forEach(function(number) {
      items.push($("#userInput" + number).val());
    });

    $("form#groceryList").hide();
    var upperCaseList = items.map(function(item){
    return  item.toUpperCase();
    });
    var abcList = upperCaseList.sort();
    var finalList = abcList.filter(item => item.length > 1);
    finalList.forEach(function(item) {
      $("ul#results").append("<li>" + item + "</li>");
    });
  });
  $("form#userSentence").submit(function(event){
    event.preventDefault();
    var userSentence = $("#inputSentence").val();
    var inputSentence = userSentence.split(" ");
    var shortSentence = inputSentence.filter(word => word.length > 2);
    var reverseSentence = shortSentence.reverse();
    var finalSentence = reverseSentence.join(" ");
    $("p#finalSentence").empty();
    $("p#finalSentence").text(finalSentence);


  });
});
