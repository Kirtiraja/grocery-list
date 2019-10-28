$(document).ready(function(){
  $("form#groceryList").submit(function(event) {
    event.preventDefault();
    var numbers = [1, 2, 3, 4, 5];
    var items = [];

    numbers.forEach(function(number) {
      items.push($("#userInput" + number).val());
    });

    $("form#groceryList").hide();
    var upperCaseList = items.map(function(item){
    return  item.toUpperCase();
    });
    var abcList = upperCaseList.sort();
    abcList.forEach(function(item) {
      $("ul#results").append("<li>" + item + "</li>");

    })
  });
});
