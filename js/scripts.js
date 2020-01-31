// Buisness Logic---------------------------party in the back say whaaa--------------------------------------
function Pizza(size) {
  this.size = size;
}
// Pizza.prototype.addPizza = function (size) {
//   var pizza = new Pizza(size);
//   return pizza;
// }


// User Interface Logic -----------------------------------------------------------

$(document).ready(function () {
  $('form#pizza-order').submit(function (event) {
    event.preventDefault();
    var size = $('#size').val();

    var pizza = new Pizza(size);
    console.log('pizza size:', pizza.size);
    console.log('order received');
  })
})