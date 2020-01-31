// Buisness Logic---------------------------party in the back say whaaa--------------------------------------
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}
Pizza.prototype.addToppings = function (toppings) {
  this.toppings.push(toppings.sauce, toppings.cheeses[0], toppings.peperoni, toppings.jalapeno, toppings.olives, toppings.mushroom, toppings.chicken, toppings.artichoke, toppings.pepperchini, toppings.bacon); //this array identifier is temorary
}
Pizza.prototype.getToppingPrice = function (topping) {
  if (topping.includes('extra')) {
    console.log('topping is extra:', topping)
    this.price = this.price += 1.25
  } else {
    this.price = this.price += 1
  }
  return this.price;
}
Pizza.prototype.getSizePrice = function () {
  if (this.size === 'small') {
    this.price = 10;
  } else if (this.size === 'medium') {
    this.price = 12;
  } else if (this.size === 'large') {
    this.price = 14;
  } else if (this.size === 'family') {
    this.price = 16;
  } else {
    this.price = 22;
  }
  return this.price;
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
function displayOrder(pizza) {
  $('#order-size').html(pizza.size);
  pizza.getSizePrice()
  pizza.toppings.forEach(function (topping) {
    if (topping === undefined || topping === 'none') {
    } else {
      $('#toppings-list').append('<li>' + topping + '</li>')
      pizza.price = pizza.getToppingPrice(topping)
    }
    // console.log('pizzas price', pizza.price)
  });
  $('#total').html('$' + pizza.price);
}

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
    var toppings = new Toppings(sauce, peperoni, jalapeno, olives, mushroom, chicken, artichoke, pepperchini, bacon);
    toppings.addCheeses(cheese)
    pizza.addToppings(toppings);

    $('.output').show();
    $('form#pizza-order').hide()
    displayOrder(pizza);
    // console.log('pizza size:', pizza.size);
    // console.log('pizza topping:', pizza.toppings);
    // console.log('order received');
    console.log('pizza price', pizza.price);
  })
})