$(document).ready(function() {
  var totalPrice;

  $('input:radio[name="supply"]').click(function() {
    $("#btnConfirm").removeClass("hide");
  });

  $("#item-form").submit(function(event) {
    $("#user-form").removeClass("hide");
    var item = $("input:radio[name=supply]:checked").val();

    if (item === "Corsair") {
      totalPrice = 59.99 * 1.1;

    } else if (item === "Asus") {
      totalPrice = 79.99 * 1.1;
    } else {
      totalPrice = 99.99 * 1.1;
    }
    

    event.preventDefault();
  });

  $("#user-form").submit(function(event) {

    var name = $("input#name").val();
    var item = $("input:radio[name=supply]:checked").val();
    var address = $("input#address").val();

    $("#uName").text(name);
    $("#price").append("<em>$" + totalPrice.toFixed(2) + "</em>");
    $("#purch").append("<em>" + item + "</em>");
    $("#uAddress").text(address); 
    $("#receipt").removeClass("hide");
    event.preventDefault();
  });
});