(function($) {
    'use strict';

    var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/

    //* Navbar Fixed
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area').addClass('navbar_fixed');
                } else {
                    $('.header_area').removeClass('navbar_fixed');
                }
            });
        }
    }
    navbarFixed();


    /*----------------------------------------------------*/
    /*  MailChimp Slider
    /*----------------------------------------------------*/
    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();

    $('select').niceSelect();
    /* ---------------------------------------------
            Isotope js Starts
         --------------------------------------------- */
    $(window).on('load', function() {
        $('.portfolio-filter ul li').on('click', function() {
            $('.portfolio-filter ul li').removeClass('active');
            $(this).addClass('active');

            var data = $(this).attr('data-filter');
            $workGrid.isotope({
                filter: data
            });
        });

        if (document.getElementById('portfolio')) {
            var $workGrid = $('.portfolio-grid').isotope({
                itemSelector: '.all',
                percentPosition: true,
                masonry: {
                    columnWidth: '.all'
                }
            });
        }
    });

    /*----------------------------------------------------*/
    /* Start Magnific Pop Up
    /*----------------------------------------------------*/
    if ($('.img-gal').length > 0) {
        $('.img-gal').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    /*----------------------------------------------------*/
    /*  End  Magnific Pop Up
    /*----------------------------------------------------*/

    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider() {
        if ($('.testi_slider').length) {
            $('.testi_slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 2,
                autoplay: true,
                smartSpeed: 2500,
                dots: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    991: {
                        items: 2
                    }
                }
            });
        }
    }
    testimonials_slider();

    /* Lightbox - Magnific Popup */
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        /* keep it false to avoid html tag shift with margin-right: 17px */
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


})(jQuery);

function btnBTC() {
  /* Get the text field */
  var copyText = document.getElementById("btcin");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied Bitcoin Address");
}

function btnETH() {
  /* Get the text field */
  var copyText = document.getElementById("ethin");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied Ethereum Address");
}
