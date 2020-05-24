//from https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
function isMobileDevice() {
    //console.log((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1))
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function getPageName(){
	var path = window.location.pathname;
	var page = path.split("/").pop();
	return page;
}


$( document ).ready(function() {
	//fade in home screen
    $('body').removeClass('fade-out');
    console.log(window.outerWidth);

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
			// $(".logo-white").css("opacity", "0");
			$(".detail-title").css("opacity", "0");
			$(".detail-back").css("opacity", "0");
		}
		
	});


    if (isMobileDevice()){
    	if (getPageName() == "adulting.html"){
    		console.log("changing banner!");
    		$('.banner-img img').attr('src','assets/images/1-featured/adulting-banner-mobile.png');
    	}
        // $('.banner-img').attr('src','assets/images/2d/adulting-mobile.png');
        // $('.banner-img').attr('src','assets/images/2d/pl2-mobile.png');
        // $('.banner-img').attr('src','assets/images/2d/oasis-mobile.png');

        // $('.banner-img').attr('src','assets/images/featured/river-mobile.jpg');
        // $('.banner-img').attr('src','assets/images/featured/light-mobile.jpg');
        // $('.banner-img').attr('src','assets/images/2d/twod-mobile.png');


    }
});