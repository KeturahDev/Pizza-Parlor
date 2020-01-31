// Buisness Logic---------------------------party in the back say whaaa--------------------------------------



// User Interface Logic -----------------------------------------------------------

$(document).ready(function () {
  $('form#pizza-order').submit(function (event) {
    event.preventDefault();
    console.log('order received');
  })
})