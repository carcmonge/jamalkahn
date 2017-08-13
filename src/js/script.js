jQuery(document).ready(function ($) {

  // Variables
  let boton_nav = document.querySelector('.nav-toggle');
  let nav_menu = document.querySelector('.nav-menu');

  // Eventos
  boton_nav.addEventListener('click', function() {
    nav_menu.classList.toggle('is-active');
  });

  $('.testimonials__slides').slick({
    dots: false,
    draggable: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: ".pp-testimonials",
    nextArrow: ".nn-testimonials",
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]


  });

  $('.latest__slides').slick({

    dots: false,
    draggable: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: ".pp-latest",
    nextArrow: ".nn-latest",
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]




  });

  $(".datetime").dropkick({
    mobile: true
  });
  $(".attibutes__options").dropkick({
    mobile: true
  });

  $( "#attibutes__title" ).change(function() {
    var option = $( "#attibutes__title" ).val();

    $("#prosper-canada-content").hide();
    $("#collaborations-content").hide();
    $("#non-profit-boards-content").hide();

    $("#"+option+"-content").show();

  });

  $( "#prosper-canada" ).click(function(){
    $("#prosper-canada").addClass("attibutes__options-bar__option--active");
    $("#collaborations").removeClass("attibutes__options-bar__option--active");
    $("#non-profit-boards").removeClass("attibutes__options-bar__option--active");

    $("#prosper-canada-content").show();
    $("#collaborations-content").hide();
    $("#non-profit-boards-content").hide();

    $("#attibutes__title").val("prosper-canada");

    return false;

  });
  
  $( "#collaborations" ).click(function(){
    $("#prosper-canada").removeClass("attibutes__options-bar__option--active");
    $("#collaborations").addClass("attibutes__options-bar__option--active");
    $("#non-profit-boards").removeClass("attibutes__options-bar__option--active");
  
    $("#prosper-canada-content").hide();
    $("#collaborations-content").show();
    $("#non-profit-boards-content").hide();

    $("#attibutes__title").val("collaborations");
    
    return false;
  });

  $( "#non-profit-boards" ).click(function(){
    $("#prosper-canada").removeClass("attibutes__options-bar__option--active");
    $("#collaborations").removeClass("attibutes__options-bar__option--active");
    $("#non-profit-boards").addClass("attibutes__options-bar__option--active");
  
    $("#prosper-canada-content").hide();
    $("#collaborations-content").hide();
    $("#non-profit-boards-content").show();

    $("#attibutes__title").val("collaborations");

    return false;

  });

  
  //Hide to load page
  $("#prosper-canada-content").show();
  $("#collaborations-content").hide();
  $("#non-profit-boards-content").hide();
  

  jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fa fa-angle-up" aria-hidden="true"></i></div><div class="quantity-button quantity-down"><i class="fa fa-angle-down" aria-hidden="true"></i></div></div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

});
