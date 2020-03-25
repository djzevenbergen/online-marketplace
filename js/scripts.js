$(document).ready(function() {
  $('input:radio[name="supply"]').click(function() {
    $("#btnConfirm").removeClass("hide");
  });

  $("#item-form").submit(function(event) {
    $("#user-form").removeClass("hide");

    event.preventDefault();
  });
});