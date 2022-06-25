$(document).ready(function() {
  
  //Water effect
  $(".swiper-slide, .group-video,.group-image-text, .footer-bottom").ripples({
    resolution: 100,
    perturbance: 0.02,
  });

  //Map
  var $items = $(".tab-item");
  var $tabs = $(".tab-content");

  $(".tab-item").on("click", (event) => {
      var $item = $(event.target);
      var identifier = $item.data("tab");
      var $tab = $tabs.filter(`[data-tab="${identifier}"]`);

      $items.removeClass("is-active");
      $tabs.removeClass("is-active");

      $item.addClass("is-active");
      $tab.addClass("is-active");
      
  });

  //Scroll animation  
  AOS.init({offset:0, duration:1000, delay:200});

  //Scrollbar
  $(".scrollbar").mCustomScrollbar();

  //Sidebar
  $('.action').click(function(){
    $('.sidebar').toggleClass('show');
  });

  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: false,
    spaceBetween: 0,
    mousewheel: true,
    speed: 600,
  }); 

  //Close map
  $('.tab-content .close').click(function(){
    $items.removeClass("is-active");
    $tabs.removeClass("is-active");
  });
  $('.show-map').click(function(){
    $('.full-map').addClass('is-active');
    $items.removeClass("is-active");
    $tabs.removeClass("is-active");
  });
  $('.full-map .close').click(function(){
    $('.full-map').removeClass('is-active');
  });

  //Map slider
  $('.map-detail.owl-carousel').owlCarousel({
    margin: 10,
    responsiveClass: true,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText: ["<img src='img/arrow-left.png'  alt='' />","<img src='img/arrow-right.png'  alt='' />"],
    responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        }
    }
  });

  //Close youtube
  $('.modal-video').on('hidden.bs.modal', function (e) {
    var $this = $(this).find('iframe'),
            tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });

});
