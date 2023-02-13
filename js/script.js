/*============================

============== java Script index ==============

1.Typed js
2.Navbar js
3.Bckground image
4.isotope js
5.magnific-popup JS

/*============================ */ 



(function($){
    "use strict"

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
        }

        else{
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

    

})(jQuery);
