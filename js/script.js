/*============================

============== java Script index ==============

1.Typed js
2.Navbar js
3.Bckground image
4.isotope js
5.magnific-popup JS
6.Smooth Scroll JS

/*============================ */ 



(function($){
    "use strict"

setTimeout(function(){
    $('#preloader').addClass('preloaded');
},800);

setTimeout(function(){
    $('#preloader').remove();
},2000);
    /**
     * 
     * 1.Typed js 
    */  
    var typed = new Typed("#typed",{
        stringsElement : '#typed-string',
        typeSpeed: 100,
        startDelay : 100,
        backSpeed: 80,
        loop: true,
        loopCount: Infinity,
    });

    /**
     * 
     * 2.Navbar js 
    */

    $(window).bind('scroll',function() {
        if ($(this).scrollTop() > 150) {
            $('.navbar').addClass('fixed');
        }else{
            $('.navbar').remove('fixed');
        }   
    });


    /**
     * 
     * 3.Bckground image js 
    */ 
    $("#home").css('background-image','url(' + 'assets/img/bg.jpg' + ')');

    /*
    
    4.isotope JS
    
    */ 

    // init Isotope
    var $grid = $('.portfolio-wrapper').isotope({
        // options
        itemSelector: '.portfolio-grid',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.portfolio-grid'
        }
    });

    // filter items on button click
    $('.portfolio-filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // active button Selection
    $('.portfolio-filter button').click(function(){
        $(this).siblings('button').removeClass('active');
        $(this).addClass('active');
    });

    /*
    5.magnific-popup JS
    */ 

    $('.expand-img').magnificPopup({
        type: 'image',
        // other options

        gallery: {
            enabled: true
          },
      });


      /**
     * 
     * 6.Smooth Scroll JS
    */

      // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

    

})(jQuery);
