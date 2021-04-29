$(document).ready(function(e) {
  $('#body').on('load', acesse());
  function acesse() {
    slide()
  }

  function slide(){
      if ($("#myCarousel").attr("data-interval")) {
          $("#myCarousel").removeAttr("data-interval");
          $(".carousel-item>.active").removeAttr("active");
          setTimeout(function() {
          $(".carousel-control-next").trigger('click');
          $(".carousel-inner").trigger('mouseenter');
          $("#myCarousel").trigger('mouseenter');
          }, 5000);
      } else {
          $("#myCarousel").attr("data-interval", "2000");
          setTimeout(function() {
          $(".carousel-control-next").trigger('click');
          $(".carousel-inner").trigger('mouseenter');
          $("#myCarousel").trigger('mouseenter');
          $("#myCarousel").trigger('mouseleave');
          }, 1000);
      }
  };

  // Enable Carousel Indicators
  $(".item1").click(function() {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function() {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function() {
    $("#myCarousel").carousel(2);
  });

  // Enable Carousel Controls
  $(".carousel-control-prev").click(function() {
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function() {
    $("#myCarousel").carousel("next");
  });
});

