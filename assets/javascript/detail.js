//from https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
function isMobileDevice() {
    //console.log((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1))
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function isPhone(){
	return (window.innerHeight < 1000 && window.innerWidth < 700);
}

function getPageName(){
	var path = window.location.pathname;
	var page = path.split("/").pop();
	return page;
}


$( document ).ready(function() {
	//fade in home screen
    $('body').removeClass('fade-out');
    // console.log(window.outerWidth);

	//hide black logo and show white logo on scroll
	$(document).scroll(function(){
		var currPos = $(document).scrollTop();
		if(currPos > 750){
			// console.log(currPos);
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

	//change detail page thumbnails on mobile
    if (isMobileDevice() && isPhone()){
    	if (getPageName() == "adulting.html"){
    		$('.banner-img img').attr('src','assets/images/1-featured/adulting-banner-mobile.png');
    	}
    	else if (getPageName() == "pl2.html"){
    		$('.banner-img img').attr('src','assets/images/1-featured/pl2-banner-mobile.png');
    	}
    	else if (getPageName() == "liveline.html"){
    		$('.banner-img img').attr('src','assets/images/1-featured/oasis-banner-mobile.png');
    	}


    	else if (getPageName() == "teamlab.html"){
    		$('.banner-img img').attr('src','assets/images/featured/river-mobile.jpg');
    	}
		else if (getPageName() == "2d.html"){
    		$('.banner-img img').attr('src','assets/images/2d/twod-mobile.png');
    	}
		else if (getPageName() == "iontank.html"){
    		$('.banner-img img').attr('src','assets/images/featured/light-mobile.jpg');
    	}



    }
});