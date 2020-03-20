function windowSizeOptions(){
  var win = $(this);
  if (win.width() >= 600) {
    $('#fullpage').fullpage({
      autoScrolling: false,
      touchSensitivity: 10,
      scrollingSpeed: 800,
      navigation: false,
      navigationPosition: 'left',
      navigationTooltips: ['Home', 'UI/UX Design','Experimental', 'About'],
      anchors: ['home', 'ui-ux-projects','experimental-projects', 'about'],
      scrollOverflow: false,
      onLeave: function(origin, destination, direction){
            if(destination==1){
                $("#home-logo img").css(
                    {'box-shadow': "0px 0px 8px rgba(255, 255, 255, 0.9)",
                        'border-radius':'25px'}
                );
                $("#ui-ux-nav").css({"font-weight": "300", "color":"rgba(255,255, 255, 0.8)"});
                $("#experimental-nav").css({"font-weight": "300", "color":"rgba(255,255, 255, 0.8)"});
                $("#about-nav").css({"font-weight": "300", "color":"rgba(255,255, 255, 0.8)"});                
                $("#resume-nav").css("background-color", "transparent");

            }
            if(destination==2){
                $("#home-logo img").css('box-shadow', "none");
                $("#ui-ux-nav").css({"font-weight": "600", "color":"white"});
                $("#experimental-nav").css({"font-weight": "300", "color":"rgba(255,255, 255, 0.8)"});
                $("#about-nav").css({"font-weight": "300", "color":"rgba(255,255, 255, 0.8)"});
                $("#resume-nav").css("background-color", "transparent");
            }
            if(destination==3){
                $("#home-logo img").css('box-shadow', "none");
                $("#ui-ux-nav").css({"font-weight": "300", "color":"rgba(255,255, 255, 0.8)"});
                $("#experimental-nav").css({"font-weight": "600", "color":"white"});
                $("#about-nav").css({"font-weight": "300", "color":"rgba(255,255, 255, 0.8)"});
                $("#resume-nav").css("background-color", "transparent");
            }
            if(destination==4){
                $("#home-logo img").css('box-shadow', "none");
                $("#ui-ux-nav").css({"font-weight": "300", "color":"rgba(255,255, 255, 0.8)"});
                $("#experimental-nav").css({"font-weight": "300", "color":"rgba(255,255, 255, 0.8)"});
                $("#about-nav").css({"font-weight": "600", "color":"white"});
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
    navigationTooltips: ['Home', 'UI/UX Design','Experimental', 'About'],
    anchors: ['home', 'ui-ux-projects','experimental-projects', 'about'],
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

        //unblur background
        $("nav").css({
            "filter": "blur(0px)",
            "transition": "0.2s"
        });

        $(".carousel-container").css({
            "filter": "blur(0px)",
            "transition": "0.2s"
        });
      

    });

    $(".modal").on("show.bs.modal", function (event) {


        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);

      
        $("body").addClass("modal-open");
        $('input').focus();

        //blur background
        $("nav").css({
            "filter": "blur(2px)",
            "transition": "0.2s"
        });

        $(".carousel-container").css({
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
    if(!isMobileDevice()){
            //setup Flickity Carousel
        $('#ui-ux .carousel-container').flickity({
      // options
            cellSelector: '.gallery-cell',
            imagesLoaded: true,
            wrapAround: false
        });
        $('#experimental .carousel-container').flickity({
      // options
            cellSelector: '.gallery-cell',
            imagesLoaded: true,
            wrapAround: false
        });
    }
    else{
        $('#ui-ux .carousel-container').flickity({
            // options
            cellSelector: '.gallery-cell',
            imagesLoaded: true,
            prevNextButtons: false,
            wrapAround: true
        });
        $('#experimental .carousel-container').flickity({
        // options
            cellSelector: '.gallery-cell',
            imagesLoaded: true,
            prevNextButtons: false,
            wrapAround: true
        });
    }

    $('.carousel-container .flickity-prev-next-button.next').html(
        '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696699C10.4645 0.403806 9.98959 0.403806 9.6967 0.696699C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM0 6.75H15V5.25H0V6.75Z" fill="white"/></svg>');
    $('.carousel-container .flickity-prev-next-button.previous').html(
        '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 5.46967C0.176776 5.76256 0.176776 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989592 6.3033 0.696698C6.01041 0.403805 5.53553 0.403805 5.24264 0.696698L0.469669 5.46967ZM16 5.25L0.999999 5.25L0.999999 6.75L16 6.75L16 5.25Z" fill="white"/></svg>')
            // $('.is-selected.gallery-cell').css('height','60vh');
    //  $('.carousel-experimental .flickity-prev-next-button.next').html(
    //     '<svg xmlns="http://www.w3.org/2000/svg" width="12.99" height="22.988"'
    //         + 'viewBox="0 0 12.99 22.988"><path id="Path_65" data-name="Path 65"' 
    //         + 'd="M-24182.766,17957.246l-9.371,9.373,9.371,9.373"' 
    //         + 'transform="translate(-24180.645 17978.113) rotate(180)"'
    //         + 'fill="none" stroke="#fff" stroke-linecap="round"'
    //         + 'stroke-linejoin="round" stroke-width="3"/></svg>');
    // $('.carousel-container .flickity-prev-next-button.previous').html(
    //     '<svg xmlns="http://www.w3.org/2000/svg" width="12.99" height="22.988" viewBox="0 0 12.99 22.988"><path id="Path_65" data-name="Path 65" d="M-24182.766,17957.246l-9.371,9.373,9.371,9.373" transform="translate(24193.635 -17955.125)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></svg>')
    




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
                        $('#ui-ux .carousel-container').flickity('select', index );
                        
                    }
                    else{
                        $('#experimental .carousel-container').flickity('select', index );

                    }
                    //keep center image same height on mobile devices
                    // if(isMobileDevice()){$('#ui-ux .is-selected.gallery-cell img').css('height','60vh !important');}

                    //change opacity of left right buttons
                    if(myHTML.hasClass('design-project')){
                        var selectedIndex = $('#ui-ux .carousel-container .is-selected').index();
                        if(selectedIndex == 0){
                            $('#ui-ux .carousel-container .flickity-prev-next-button.previous').css('opacity', '0.1');
                        }
                        else{
                            $('#ui-ux .carousel-container .flickity-prev-next-button.previous').css('opacity', '0.7');
                        }
                        var selectedIndex = $('#ui-ux .carousel-container .is-selected').index();
                        if(selectedIndex == 3){
                            $('#ui-ux .carousel-container .flickity-prev-next-button.next').css('opacity', '0.1');
                        }
                        else{
                            $('#ui-ux .carousel-container .flickity-prev-next-button.next').css('opacity', '0.7');
                        }
                    }
                    else{
                        var selectedIndex = $('#experimental .carousel-container .is-selected').index();
                        if(selectedIndex == 0){
                            $('#experimental .carousel-container .flickity-prev-next-button.previous').css('opacity', '0.1');
                        }
                        else{
                            $('#experimental .carousel-container .flickity-prev-next-button.previous').css('opacity', '0.7');
                        }
                        if(selectedIndex == 2){
                            $('#experimental .carousel-container .flickity-prev-next-button.next').css('opacity', '0.1');
                        }
                        else{
                            $('#experimental .carousel-container .flickity-prev-next-button.next').css('opacity', '0.7');
                        }

                    }



                }, 1);

                                 
            }
        });

            
            


//         // Flickity instance
        $('#ui-ux .carousel-container').on( 'select.flickity', function(event, index) {
//data-target=#theModal
            //add modal click options
    

          // set image caption using img's alt
          var flkty =     $('#ui-ux .carousel-container').data('flickity');
          var caption =     $('#ui-ux').find('.caption');
          var elem = flkty.selectedElement;
          caption.text(elem.getAttribute("alt"));

          var description =     $('#ui-ux').find('.description');
            description.text(elem.getAttribute("desc"));
        });

        //no vertical scroll on carousel swipe

        $('#ui-ux .carousel-container').on( 'dragStart.flickity', function( event, pointer ) {
            document.ontouchmove = function (e) {
            e.preventDefault();
        }
        });
            $('#ui-ux .carousel-container').on( 'dragEnd.flickity', function( event, pointer ) {
            document.ontouchmove = function (e) {
                return true;
            }
        });

        $('#experimental .carousel-container').on( 'select.flickity', function(event, index) {
            //add modal click options
          // set image caption using img's alt
          var flkty =    $('#experimental .carousel-container').data('flickity');
          var caption =  $('#experimental').find('.caption');
          var elem = flkty.selectedElement;
          caption.text(elem.getAttribute("alt"));

          var description =     $('#experimental').find('.description');
            description.text(elem.getAttribute("desc"));
        });

        //no vertical scroll on carousel swipe

        $('#experimental .carousel-container').on( 'dragStart.flickity', function( event, pointer ) {
            document.ontouchmove = function (e) {
            e.preventDefault();
        }
        });
            $('#experimental .carousel-container').on( 'dragEnd.flickity', function( event, pointer ) {
            document.ontouchmove = function (e) {
                return true;
            }
        });

}


$( document ).ready(function() {



    carouselOptions();


    if (isMobileDevice()){
        $('.caption').css('display', 'block');
        $('.description').css('display', 'block');
        $('#ui-ux .gallery-cell img, #experimental .gallery-cell img').css('max-width','none');
        $('#ui-ux .gallery-cell img, #experimental .gallery-cell img').css('max-height','100%');
        $('.flickity-page-dots').css('bottom','-100px'); 
        
        // $('.flickity-page-dots').css('bottom', '-120px')
        // $('#ui-ux .is-selected.gallery-cell').css('height', '60vh !important');
        $('#saanka-img').attr('src','assets/images/design/saanka-mobile.jpg');
        $('#adulting-img').attr('src','assets/images/design/adulting-mobile.jpg');
        $('#pl2-img').attr('src','assets/images/design/pl2-mobile.jpg');
        $('#tigris-img').attr('src','assets/images/design/tigris-mobile.jpg');

        $('#river-img').attr('src','assets/images/featured/river-mobile.jpg');
        $('#light-img').attr('src','assets/images/featured/light-mobile.jpg');
        $('#searching-img').attr('src','assets/images/featured/searching-mobile.jpg');


    }
    else{
        $('#ui-ux').addClass('desktop')
        $('#experimental').addClass('desktop')
    }
    windowSizeOptions();
    onResize();
    $('.carousel-container .flickity-prev-next-button.previous').css('opacity', '0.1');
    $(window).on('resize', function(){
        onResize();
    });

    //if load on home, give home icon glow
    if ($("#section0").hasClass("active")){
        $("#home-logo img").css(
                    {'box-shadow': "0px 0px 8px rgba(255, 255, 255, 0.9)",
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
    $('#ui-ux .carousel-container .modal-link').hover(function() {
        var hoverIndex = $(this).index();
        var selectedIndex = $('.is-selected').index();

        if (hoverIndex > selectedIndex){
            $('#ui-ux .carousel-container .flickity-prev-next-button.next').css('opacity', '1');
            $('#ui-ux .carousel-container .flickity-prev-next-button.next').css('box-shadow', '2px 2px 5px 5px rgba(0,0,0,0.1');
        }
        else if (hoverIndex != selectedIndex){
            $('#ui-ux .carousel-container .flickity-prev-next-button.previous').css('opacity', '1');
        }
        }, function() {
        // on mouseout, reset the background colour
        $('#ui-ux .carousel-container .flickity-prev-next-button').css('opacity', '0.7');
        $('#ui-ux .carousel-container .flickity-prev-next-button').css('box-shadow', 'none');
        var selectedIndex = $('#ui-ux .carousel-container .is-selected').index();
        if(selectedIndex == 0){
            $('#ui-ux .carousel-container .flickity-prev-next-button.previous').css('opacity', '0.1');
        }
        else if(selectedIndex == 3){
            $('#ui-ux .carousel-container .flickity-prev-next-button.next').css('opacity', '0.1');
        }
    });

    $('#experimental .carousel-container .modal-link').hover(function() {
        var hoverIndex = $(this).index();
        var selectedIndex = $('#experimental .is-selected').index();
        if (hoverIndex > selectedIndex){
            $('#experimental .carousel-container .flickity-prev-next-button.next').css('opacity', '1');
            $('#experimental .carousel-container .flickity-prev-next-button.next').css('box-shadow', '2px 2px 5px 5px rgba(0,0,0,0.1');
        }
        else if (hoverIndex != selectedIndex){
            $('#experimental .carousel-container .flickity-prev-next-button.previous').css('opacity', '1');
            
        }
        }, function() {
        // on mouseout, reset the background colour
        $('#experimental .carousel-container .flickity-prev-next-button').css('opacity', '0.7');
        $('#experimental .carousel-container .flickity-prev-next-button').css('box-shadow', 'none');
        var selectedIndex = $('#experimental .carousel-container .is-selected').index();
        if(selectedIndex == 0){
            $('#experimental .carousel-container .flickity-prev-next-button.previous').css('opacity', '0.1');
        }
        else if(selectedIndex == 2){
            $('#experimental .carousel-container .flickity-prev-next-button.next').css('opacity', '0.1');
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



