$('#main-bar').animate({left:0,duration:'slow',complete:focusFunction});

function focusFunction(){$('#main-bar').focus();}

$( document ).ready(function() {
    
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