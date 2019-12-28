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
    $('#ui-ux-desktop .carousel-design').flickity({
  // options
        cellSelector: '.gallery-cell',
        imagesLoaded: true,
        // lazyLoad: false,
        // prevNextButtons: false,
        wrapAround: false,
    });
        $('#experimental-desktop .carousel-experimental').flickity({
  // options
        cellSelector: '.gallery-cell',
        imagesLoaded: true,
        // lazyLoad: false,
        // prevNextButtons: false,
        wrapAround: false
    });

    $('#ui-ux-mobile .carousel-design').flickity({
  // options
        cellSelector: '.gallery-cell',
        imagesLoaded: true,
        // lazyLoad: false,
        prevNextButtons: false,
        wrapAround: false,
    });
        $('#experimental-mobile .carousel-experimental').flickity({
  // options
        cellSelector: '.gallery-cell',
        imagesLoaded: true,
        // lazyLoad: false,
        prevNextButtons: false,
        wrapAround: false
    });

    $('.carousel-design .flickity-prev-next-button.next').html(
        '<svg xmlns="http://www.w3.org/2000/svg" width="12.99" height="22.988"'
            + 'viewBox="0 0 12.99 22.988"><path id="Path_65" data-name="Path 65"' 
            + 'd="M-24182.766,17957.246l-9.371,9.373,9.371,9.373"' 
            + 'transform="translate(-24180.645 17978.113) rotate(180)"'
            + 'fill="none" stroke="#fff" stroke-linecap="round"'
            + 'stroke-linejoin="round" stroke-width="3"/></svg>');
    $('.carousel-design .flickity-prev-next-button.previous').html(
        '<svg xmlns="http://www.w3.org/2000/svg" width="12.99" height="22.988" viewBox="0 0 12.99 22.988"><path id="Path_65" data-name="Path 65" d="M-24182.766,17957.246l-9.371,9.373,9.371,9.373" transform="translate(24193.635 -17955.125)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></svg>');

     $('.carousel-experimental .flickity-prev-next-button.next').html(
        '<svg xmlns="http://www.w3.org/2000/svg" width="12.99" height="22.988"'
            + 'viewBox="0 0 12.99 22.988"><path id="Path_65" data-name="Path 65"' 
            + 'd="M-24182.766,17957.246l-9.371,9.373,9.371,9.373"' 
            + 'transform="translate(-24180.645 17978.113) rotate(180)"'
            + 'fill="none" stroke="#fff" stroke-linecap="round"'
            + 'stroke-linejoin="round" stroke-width="3"/></svg>');
    $('.carousel-experimental .flickity-prev-next-button.previous').html(
        '<svg xmlns="http://www.w3.org/2000/svg" width="12.99" height="22.988" viewBox="0 0 12.99 22.988"><path id="Path_65" data-name="Path 65" d="M-24182.766,17957.246l-9.371,9.373,9.371,9.373" transform="translate(24193.635 -17955.125)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></svg>')
    




    // $('.carousel-container').each( function( i, container ) {
    //     var $container = $( container );
    //     console.log($container);
    //     if($container.find('.main-gallery').hasClass('desktop')){
    //         var $carousel = $container.find('.main-gallery').flickity({
    //           // options
    //             cellSelector: '.gallery-cell',
    //             imagesLoaded: true,
    //             lazyLoad: false,
    //             prevNextButtons: false,
    //             wrapAround: false
    //         });

    //     }
    //     else{
    //         var $carousel = $container.find('.main-gallery').flickity({
    //           // options
    //             cellSelector: '.gallery-cell',
    //             imagesLoaded: true,
    //             prevNextButtons: false,
    //             wrapAround: true
    //         });
    //     }

        
        
        $('.modal-link').on('click', function(e){
            //Load modal if center carousel is clicked, 
            if ($(this).hasClass('is-selected')){
                if(!$(this).hasClass('no-modal')){ //if it's searching, don't open modal
                    $('#theModal').modal('show');
                    $('#myModalContent').load('assets/html/' +this.getAttribute('modal') + '.html');
                }
                
             }
             //change selected modal if left or right is clicked
             else{
                //for searching, don't open new tab before the thumbnail is selected
                if ($(this).hasClass('no-modal')){
                    e.preventDefault();
                }
                var index = $(this).index();
                myHTML = $(this);
                setTimeout(function() {

                    if(myHTML.hasClass('design-project')){
                        $('.carousel-design').flickity('select', index );
                    }
                    else{
                        $('.carousel-experimental').flickity('select', index );
                    }

                    //change opacity of left right buttons
                    if(myHTML.hasClass('design-project')){
                        var selectedIndex = $('.carousel-design .is-selected').index();
                        if(selectedIndex == 0){
                            $('.carousel-design .flickity-prev-next-button.previous').css('opacity', '0.1');
                        }
                        else{
                            $('.carousel-design .flickity-prev-next-button.previous').css('opacity', '0.7');
                        }
                        var selectedIndex = $('.carousel-design .is-selected').index();
                        if(selectedIndex == 3){
                            $('.carousel-design .flickity-prev-next-button.next').css('opacity', '0.1');
                        }
                        else{
                            $('.carousel-design .flickity-prev-next-button.next').css('opacity', '0.7');
                        }
                    }
                    else{
                        var selectedIndex = $('.carousel-experimental .is-selected').index();
                        if(selectedIndex == 0){
                            $('.carousel-experimental .flickity-prev-next-button.previous').css('opacity', '0.1');
                        }
                        else{
                            $('.carousel-experimental .flickity-prev-next-button.previous').css('opacity', '0.7');
                        }
                        if(selectedIndex == 2){
                            $('.carousel-experimental .flickity-prev-next-button.next').css('opacity', '0.1');
                        }
                        else{
                            $('.carousel-experimental .flickity-prev-next-button.next').css('opacity', '0.7');
                        }

                    }



                }, 1);

                                 
            }
        });

            
            


//         // Flickity instance
        $('.carousel-container').on( 'select.flickity', function(event, index) {
//data-target=#theModal
            //add modal click options
    

          // set image caption using img's alt
          var flkty =     $('.carousel-container').data('flickity');
          var caption =     $('.carousel-container').find('.caption');
          var elem = flkty.selectedElement;
          caption.text(elem.getAttribute("alt"));

          var description =     $('.carousel-container').find('.description');
            description.text(elem.getAttribute("desc"));
        });

        //no vertical scroll on carousel swipe

        $('.carousel-container').on( 'dragStart.flickity', function( event, pointer ) {
            document.ontouchmove = function (e) {
            e.preventDefault();
        }
        });
            $('.carousel-container').on( 'dragEnd.flickity', function( event, pointer ) {
            document.ontouchmove = function (e) {
                return true;
            }
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

    //hover styling on left and right carousel cells
    $('.carousel-design .modal-link').hover(function() {
        var hoverIndex = $(this).index();
        var selectedIndex = $('.is-selected').index();
        if (hoverIndex > selectedIndex){
            $('.carousel-design .flickity-prev-next-button.next').css('opacity', '1');
            $('.carousel-design .flickity-prev-next-button.next').css('box-shadow', '2px 2px 5px 5px rgba(0,0,0,0.1');
        }
        else if (hoverIndex != selectedIndex){
            $('.carousel-design .flickity-prev-next-button.previous').css('opacity', '1');
        }
        }, function() {
        // on mouseout, reset the background colour
        $('.carousel-design .flickity-prev-next-button').css('opacity', '0.7');
        $('.carousel-design .flickity-prev-next-button').css('box-shadow', 'none');
        var selectedIndex = $('.carousel-design .is-selected').index();
        if(selectedIndex == 0){
            $('.carousel-design .flickity-prev-next-button.previous').css('opacity', '0.1');
        }
        else if(selectedIndex == 3){
            $('.carousel-design .flickity-prev-next-button.next').css('opacity', '0.1');
        }
    });

    $('.carousel-experimental .modal-link').hover(function() {
        var hoverIndex = $(this).index();
        var selectedIndex = $('.carousel-experimental .is-selected').index();
        if (hoverIndex > selectedIndex){
            $('.carousel-experimental .flickity-prev-next-button.next').css('opacity', '1');
            $('.carousel-experimental .flickity-prev-next-button.next').css('box-shadow', '2px 2px 5px 5px rgba(0,0,0,0.1');
        }
        else if (hoverIndex != selectedIndex){
            $('.carousel-experimental .flickity-prev-next-button.previous').css('opacity', '1');
            
        }
        }, function() {
        // on mouseout, reset the background colour
        $('.carousel-experimental .flickity-prev-next-button').css('opacity', '0.7');
        $('.carousel-experimental .flickity-prev-next-button').css('box-shadow', 'none');
        var selectedIndex = $('.carousel-experimental .is-selected').index();
        if(selectedIndex == 0){
            $('.carousel-experimental .flickity-prev-next-button.previous').css('opacity', '0.1');
        }
        else if(selectedIndex == 2){
            $('.carousel-experimental .flickity-prev-next-button.next').css('opacity', '0.1');
        }
    });

    // $("#connect-icons").on('mouseenter', '#email', function(event){
    //     $('#email p').fadeTo(500, 1.0);
    // });

    //focus searchbar when searching modal is clicked
    $('#theModal').on('shown.bs.modal', function () {
        $('input').focus();
    });
    
    //fade in home screen
    $('body').removeClass('fade-out');

 });



