// Buisness Logic---------------------------party in the back say whaaa--------------------------------------
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}
Pizza.prototype.addToppings = function (toppings) {
  this.toppings.push(toppings.sauce, toppings.cheeses[0], toppings.peperoni, toppings.jalapeno, toppings.olives, toppings.mushroom, toppings.chicken, toppings.artichoke, toppings.pepperchini, toppings.bacon); //this array identifier is temorary
}
function Toppings(sauce, peperoni, jalapeno, olives, mushroom, chicken, artichoke, pepperchini, bacon) {
  this.sauce = sauce;
  this.cheeses = []; //making this an array for the ability to add multiple types of cheese later
  this.peperoni = peperoni;
  this.jalapeno = jalapeno;
  this.olives = olives;
  this.mushroom = mushroom;
  this.chicken = chicken;
  this.artichoke = artichoke;
  this.pepperchini = pepperchini;
  this.bacon = bacon;
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
    var peperoni = $("input:radio[name=peperoni]:checked").val();
    var jalapeno = $("input:radio[name=jalapeno]:checked").val();
    var olives = $("input:radio[name=olives]:checked").val();
    var mushroom = $("input:radio[name=mushroom]:checked").val();
    var chicken = $("input:radio[name=chicken]:checked").val();
    var artichoke = $("input:radio[name=artichoke]:checked").val();
    var pepperchini = $("input:radio[name=pepperchini]:checked").val();
    var bacon = $("input:radio[name=bacon]:checked").val();
    console.log('cheese', cheese)
    var toppings = new Toppings(sauce, peperoni, jalapeno, olives, mushroom, chicken, artichoke, pepperchini, bacon);
    toppings.addCheeses(cheese)
    pizza.addToppings(toppings);


    console.log('pizza size:', pizza.size);
    console.log('pizza topping:', pizza.toppings);
    console.log('order received');
  })
})