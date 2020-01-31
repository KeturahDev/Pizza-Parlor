// Buisness Logic---------------------------party in the back say whaaa--------------------------------------
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}
Pizza.prototype.addToppings = function (pizza, toppings) {
  // var pizzaTopping = pizza.toppings
  pizza.toppings.push(toppings);
}
function Toppings(sauce) {
  this.sauce = sauce;
}


// User Interface Logic -----------------------------------------------------------

$(document).ready(function () {
  $('form#pizza-order').submit(function (event) {
    event.preventDefault();
    var size = $('#size').val();
    var pizza = new Pizza(size);
    var sauce = $('#sauce').val();
    var toppings = new Toppings(sauce);
    pizza.addToppings(pizza, toppings);


    console.log('pizza size:', pizza.size);
    console.log('pizza topping:', pizza.toppings);
    console.log('order received');
  })
})