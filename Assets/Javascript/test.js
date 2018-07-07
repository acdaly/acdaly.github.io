$( document ).ready(function() {
    console.log( "ready!" );
    $('.modal-link').on('click', function(){
        $('#myModalContent').load('Assets/' +this.id + '.html');
    })
    
});