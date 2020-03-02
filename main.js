$(document).ready(function() {
  $(".menu-illu__bowl").click(function() {
    $(".menu-illu__bowl").hide();
    $(".menu-illu-spilled__bowl").show();
    $(".menu-illu-spilled__bowl__links").show();
  });

  $(".menu-illu-spilled__bowl").click(function() {
    $(".menu-illu-spilled__bowl").hide();
    $(".menu-illu__bowl").show();
    $(".menu-illu-spilled__bowl__links").hide();
  });
});
