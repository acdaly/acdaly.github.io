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