


function windowSizeOptions(){
  var win = $(this);
  if (win.width() >= 600) {
    $('#fullpage').fullpage({
      autoScrolling: false,
      touchSensitivity: 10,
      scrollingSpeed: 800,
      navigation: false,
      navigationPosition: 'left',
      navigationTooltips: ['Home', 'UI/UX Design','Experimental', 'About', 'Connect'],
      anchors: ['home', 'ui-ux','experimental', 'about', 'connect'],
      scrollOverflow: false,
      onLeave: function(origin, destination, direction){
            if(destination==1){
                $("#home-logo img").css(
                    {'box-shadow': "0px 0px 5px rgba(255, 255, 255, 0.5)",
                        'border-radius':'25px'}
                );
                $("#ui-ux-nav").css("font-weight", "300");
                $("#experimental-nav").css("font-weight", "300");
                $("#about-nav").css("font-weight", "300");
                $("#resume-nav").css("background-color", "transparent");

            }
            if(destination==2){
                $("#home-logo img").css('box-shadow', "none");
                $("#ui-ux-nav").css("font-weight", "600");
                $("#experimental-nav").css("font-weight", "300");
                $("#about-nav").css("font-weight", "300");
                $("#resume-nav").css("background-color", "transparent");
            }
            if(destination==3){
                $("#home-logo img").css('box-shadow', "none");
                $("#ui-ux-nav").css("font-weight", "300");
                $("#experimental-nav").css("font-weight", "600");
                $("#about-nav").css("font-weight", "300");
                $("#resume-nav").css("background-color", "transparent");
            }
            if(destination==4){
                $("#home-logo img").css('box-shadow', "none");
                $("#ui-ux-nav").css("font-weight", "300");
                $("#experimental-nav").css("font-weight", "300");
                $("#about-nav").css("font-weight", "600");
                $("#resume-nav").css("background-color", "#121721");
            }
        }

    });

  }
  else {$('#fullpage').fullpage({
    autoScrolling: false,
    touchSensitivity: 10,
    scrollingSpeed: 800,
    navigation: false,
    navigationPosition: 'left',
    navigationTooltips: ['Home', 'UI/UX Design','Experimental', 'About', 'Connect'],
    anchors: ['home', 'ui-ux','experimental', 'about', 'connect'],
    scrollOverflow: false
    });
  }
}



function modalFreezePageScrolling(){
    //disable main page scrolling when modal is open
    $(".modal").on("hidden.bs.modal", function () {
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
      
        $("body").removeClass("modal-open")

        //unblur nav
        $("nav").css({
            "filter": "blur(0px)",
            "transition": "0.2s"
        });
      

    });

    $(".modal").on("show.bs.modal", function (event) {


        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);

      
        $("body").addClass("modal-open");
        $('input').focus();

        //blur nav
        $("nav").css({
            "filter": "blur(2px)",
            "transition": "0.2s"
        });
    });
}

//from https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
function isMobileDevice() {
    //console.log((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1))
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function onResize(){
    var win = $(this);
    //Desktop
    // if (win.width() >= 600) {


    
    if (!isMobileDevice()){
        $('#fp-nav').css('display', 'block');

        $('#ui-ux-desktop').css('display', 'block');
        $('#ui-ux-mobile').css('display', 'none');

        $('#experimental-mobile').css('display', 'none');
        $('#experimental-desktop').css('display', 'block');

        $('#about-placeholder').css('display', 'block');
    }
    //Touch Screen
    else{
        $('#fp-nav').css('display', 'none');

        $('#ui-ux-desktop').css('display', 'none');
        $('#ui-ux-mobile').css('display', 'block');

        $('#experimental-mobile').css('display', 'block');
        $('#experimental-desktop').css('display', 'none');

        $('#about-profile').css('font-weight', '300')
    
    }
    //Remove about image if screen is too narrow
    if (win.width() <= 750){
        $('#about-placeholder').css('display', 'none');
    }
    else{
        $('#about-placeholder').css('display', 'block');
    }

    //if portrait, make about text wide
    if (win.height() + 220 > win.width()){
        $( "#about-profile" ).removeClass( "col-md-4" ).addClass( "col-md-8" );
    }
    else{
        $( "#about-profile" ).removeClass( "col-md-8" ).addClass( "col-md-4" );
    }
}

function carouselOptions(){

    //setup Flickity Carousel
    $('.carousel-container').each( function( i, container ) {
        
        var $container = $( container );


        // var $carousel = $container.find('#ui-ux-mobile.main-gallery').flickity({
        //   // options
        //     cellSelector: '.gallery-cell',
        //     imagesLoaded: true,
        //     prevNextButtons: false,
        //     wrapAround: true
        // });
        if($container.find('.main-gallery').hasClass('desktop')){
            var $carousel = $container.find('.main-gallery').flickity({
              // options
                cellSelector: '.gallery-cell',
                imagesLoaded: true,
                lazyLoad: false,
                prevNextButtons: false,
                wrapAround: false
            });

        }
        else{
            var $carousel = $container.find('.main-gallery').flickity({
              // options
                cellSelector: '.gallery-cell',
                imagesLoaded: true,
                prevNextButtons: false,
                wrapAround: true
            });
        }

        //Load modal if center carousel is clicked, 
        //change selected modal if left or right is clicked
        $('.modal-link').on('click', function(e){
            if ($(this).hasClass('is-selected')){
                if(!$(this).hasClass('no-modal')){ //if it's searching, don't open modal
                    $('#theModal').modal('show');
                    $('#myModalContent').load('assets/html/' +this.getAttribute('modal') + '.html');
                }
                
             }
             else{
                //for searching, don't open new tab before the thumbnail is selected
                if ($(this).hasClass('no-modal')){
                    e.preventDefault();
                }
                var index = $(this).index();
                setTimeout(function() {
                    $carousel.flickity( 'select', index );
                }, 5);
                 
             }

             
         });

            
            


        // Flickity instance
        $carousel.on( 'select.flickity', function(event, index) {
//data-target=#theModal
            //add modal click options
            
            


          // set image caption using img's alt
          var flkty = $carousel.data('flickity');
          var caption = $container.find('.caption');
          var elem = flkty.selectedElement;
          caption.text(elem.getAttribute("alt"));

          var description = $container.find('.description');
            description.text(elem.getAttribute("desc"));
        });

        //no vertical scroll on carousel swipe

        $carousel.on( 'dragStart.flickity', function( event, pointer ) {
        document.ontouchmove = function (e) {
            e.preventDefault();
        }
        });
        $carousel.on( 'dragEnd.flickity', function( event, pointer ) {
            document.ontouchmove = function (e) {
                return true;
            }
        });

    });
}


$( document ).ready(function() {

    carouselOptions();
    windowSizeOptions();
    onResize();

    $(window).on('resize', function(){
        onResize();
    });

    //if load on home, give home icon glow
    if ($("#section0").hasClass("active")){
        $("#home-logo img").css(
                    {'box-shadow': "0px 0px 5px rgba(255, 255, 255, 0.5)",
                        'border-radius':'25px'}
        );
    }

    //sticky detail page header
    $('.modal').scroll(function(){ 
        var pxToTop = $(this).scrollTop();                         
        if ($(this).scrollTop() > 5) {
            $('.modal-header').css({
              'border-radius': '0',
              'box-shadow': '0px 2px 8px rgb(0, 0, 0, 0.5)',
              'background-color': '#191C22',
              'transition': '0.2s',
              'opacity': '1'

              });

        } else {
            $('.modal-header').css({
              'border-radius': '20px 20px 0px 0px',
              'box-shadow': 'none',
              'background-color': '#121924',
              'transition': '0.2s'

            });
        }
    });
    modalFreezePageScrolling();
    $(document).on('hidden.bs.modal', function (event) {
        if ($('.modal:visible').length) {
            $('body').addClass('modal-open');
        }
    });

    $("#connect-icons").on('mouseenter', '#email', function(event){
        $('#email p').fadeTo(500, 1.0);
    });

    //focus searchbar when searching modal is clicked
    $('#theModal').on('shown.bs.modal', function () {
        $('input').focus();
    });
    
    //fade in home screen
    $('body').removeClass('fade-out');

 });



