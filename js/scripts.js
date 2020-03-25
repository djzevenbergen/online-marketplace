$(document).ready(function() {
  $('input:radio[name="supply"]').click(function() {
    $("#btnConfirm").removeClass("hide");
  });

  $("#item-form").submit(function(event) {
    $("#user-form").removeClass("hide");

    event.preventDefault();
  });

  $("#user-form").submit(function(event) {

    var name = $("input#name").val();
    var item = $("input:radio[name=supply]:checked").val();
    var address = $("input#address").val();

    $("#uName").text(name);
    $("#purch").append("<em>" + item + "</em>");
    $("#uAddress").text(address); 
    $("#receipt").removeClass("hide");
    event.preventDefault();
  });
});