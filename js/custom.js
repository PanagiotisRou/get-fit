// Smooth Scrolling
$(document).ready(function()  {
    $("a").on('click', function(event)  {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate(  {
          scrollTop: $(hash).offset().top 
        }, 800, function()  {
          window.location.hash = hash;
        });
      } //End if
    });
  });

let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
  header.classList.toggle('menu-open');
})


window.addEventListener('scroll', function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition)
})
  
$(document).ready(function() { 
  $(window).scroll(function() { 
    if ($(this).scrollTop() > 500) {
      $('.top-scroll').fadeIn(); 
    } else {
      $('.top-scroll').fadeOut();
    }
  });
});

  $(document).ready(function(){
    $("#home").owlCarousel({
        items: 1,
        autoplay: 6000,
        smartSpeed: 900,
        rewind: true,
        loop: false,
        nav: true,
        dots: false,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>']
  }
  );
  });

  