$(document).ready(function() {
  //Scroll animation  
  AOS.init({offset:0, duration:1000, delay:200});

  //Scrollbar
  $(".scrollbar").mCustomScrollbar();

  //Sidebar
  $('.action').click(function(){
    $('.sidebar').toggleClass('show');
  });
});