// Buisness Logic---------------------------party in the back say whaaa--------------------------------------
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}
Pizza.prototype.addToppings = function (toppings) {
  this.toppings.push(toppings.sauce, toppings.cheeses[0]); //this array identifier is temorary
}
function Toppings(sauce) {
  this.sauce = sauce;
  this.cheeses = []; //making this an array for the ability to add multiple types of cheese later
}
Toppings.prototype.addCheeses = function (cheese) {
  this.cheeses.push(cheese);
}

// User Interface Logic -----------------------------------------------------------

$(document).ready(function () {
  $('form#pizza-order').submit(function (event) {
    event.preventDefault();
    var size = $('#size').val();
    var pizza = new Pizza(size);
    var sauce = $('#sauce').val();
    var cheese = $("input:radio[name=motzerela]:checked").val();
    console.log('cheese', cheese)
    var toppings = new Toppings(sauce);
    toppings.addCheeses(cheese)
    pizza.addToppings(toppings);


    console.log('pizza size:', pizza.size);
    console.log('pizza topping:', pizza.toppings);
    console.log('order received');
  })
})