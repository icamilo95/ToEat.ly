// Code Execution

// on page load
$(function(){
  //ajax to foods index
  $.get("/foods", function(res){ 
    // parse the response
    var foods = JSON.parse(res);
    // render the results
    View.renderFoodItems(foods, "food-ul", "foods-template");
  })
});



// Code Definition

// a view object
function View() {};
// a 'class method' aka static method for the View object
View.renderFoodItems = function(foodItems, containerId, templateId) {
  // Here's where we're going to put our new elements
  var $targetContainer = $("#" + containerId);

  // First we grab our template and turn it into an html string
  var template_str = $("#" + templateId).html()

  // Then we use underscore to prepare a template that will accept our item data
  var compile = _.template(template_str);
  foodItems.forEach(function(item){
    // each loop, input item data into template...
    // compile is a function!
    var html_str = compile({food: item});
    // and append it to the target container
    $targetContainer.append(html_str);
  })
};
// target a parent and clear everything inside
View.clear = function(containerId) {
  $("#" + containerId).html("");
};