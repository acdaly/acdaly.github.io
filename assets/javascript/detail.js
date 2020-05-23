

$( document ).ready(function() {
	//fade in home screen
    $('body').removeClass('fade-out');

	//hide black logo and show white logo on scroll
	$(document).scroll(function(){
		var currPos = $(document).scrollTop();
		if(currPos > 750){
			console.log(currPos);
			$(".logo-black").css("opacity", "0");
			$(".logo-white").css("opacity", "1");
			$(".detail-title").css("opacity", "1");
			$(".detail-back").css("opacity", "1");
		}
		else{
			$(".logo-black").css("opacity", "1");
			$(".logo-white").css("opacity", "0");
			$(".detail-title").css("opacity", "0");
			$(".detail-back").css("opacity", "0");
		}
		
	});
});