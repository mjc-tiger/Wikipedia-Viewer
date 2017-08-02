$(document).ready(function() {

  sweetAlert("Welcome!", "To generate a random Wikipedia article click the Wikipedia logo", "info");

  $('#button-search').click(function() {

    var article = $("#usr").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + article + "&limit=8&callback=?";

    $.getJSON(url, function(data) {

      $("#outputId").html("");
      for (var j = 0; j < data[1].length; j++) {
        $("#outputId").append("<h2><a href=" + data[3][j] + " target='_blank'>" + data[1][j] + "</a></h2><p>" + data[2][j] + "</p>");
      }
      $("#usr").val('');
    });
  });

  $("#usr").keypress(function(k) {
    if (k.which == 13) {
      $("#button-search").click();
    };
  });
});
