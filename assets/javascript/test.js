$('#main-bar').animate({left:0,duration:'slow',complete:focusFunction});

function focusFunction(){$('#main-bar').focus();}

function modalFreezePageScrolling(){
    //disable main page scrolling when modal is open
  $(".modal").on("hidden.bs.modal", function () {
      // $.fn.fullpage.setAllowScrolling(true);
      // $.fn.fullpage.setKeyboardScrolling(true);
      
      $("body").removeClass("modal-open")

    });

    $(".modal").on("show.bs.modal", function () {
      //       console.log("pushed history1");
      // history.pushState({id:'homepage'}, 'Home Test', 'http://aridaly.com/test-index.html/?p=homepage' )
      // console.log("pushed history2");
      // $.fn.fullpage.setAllowScrolling(false);
      // $.fn.fullpage.setKeyboardScrolling(false);

      
      $("body").addClass("modal-open");
      $('input').focus();

    });
}



$( document ).ready(function() {
$(document).on("click", function () {
   var clickedBtnID = $(this); // or var clickedBtnID = this.id
   console.log('you clicked on button #' + clickedBtnID);
});
    //sticky detail page header
    $('.modal').scroll(function(){ 
        var pxToTop = $(this).scrollTop();                         
        if ($(this).scrollTop() > 50) {
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
    $('.x-hover').on('click', function(){
      console.log("x clicked")
      // modal('hide')
    } );
    $('.x-btn').on('click', function(){
      console.log("x clicked")
      // modal('hide')
    } );
    modalFreezePageScrolling();
    $(document).on('hidden.bs.modal', function (event) {
        if ($('.modal:visible').length) {
            $('body').addClass('modal-open');
        }
    });
    $('.modal-link').on('click', function(){
        console.log( "ready!" );
        focusFunction();
        //$("#main-bar").get(0).focus();
        // $('#myModalContent').load('HTML/' +this.id + '.html');
    })
    $('#searchingModal').on('shown.bs.modal', function () {
        $('input').focus();
    })
});