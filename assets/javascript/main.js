// Variables for HandleBar Template: To load Portfolio project titles

var featured = {
    "projects": [
        {
            "name": "Light Prototype",
            "img": "assets/images/featured/1.jpg",
            "id": "google-prototype",
            "modalID": "google-modal"
        },
        {
            "name": "Sandblox",
            "img": "assets/images/featured/2.png",
            "id": "sandblox",
            "modalID": "sandblox-modal"
        },
        {
            "name": "LED Controller",
            "img": "assets/images/featured/3.jpg",
            "id": "led-controller",
            "modalID": "led-modal"
        },
        {
            "name": "Entanglement",
            "img": "assets/images/featured/4.jpg",
            "id": "google-prototype",
            "modalID": "entanglement-modal"
        },
        {
            "name": "Surround Sounds",
            "img": "assets/images/featured/5.jpg",
            "id": "surround-sounds",
            "modalID": "surround-modal"
        },
        {
            "name": "Dream",
            "img": "assets/images/featured/6.jpg",
            "id": "dream",
            "modalID": "dream-modal"
        }
    ]     
}

var creativeFrameworks = {
    "projects": [
        {
            "name": "Sandblox",
            "img": "assets/images/coding/sandblox.jpg",
            "id": "sandblox",
            "modalID": "#sandbloxModal"
        },
        {
            "name": "Plotter Drawing",
            "img": "assets/images/coding/plotter.jpg",
            "id": "plotter",
            "modalID": "#plotterModal"
        },
        {
            "name": "Fireflies",
            "img": "assets/images/coding/fireflies.jpg",
            "id": "fireflies",
            "modalID": "#firefliesModal"
        },
        {
            "name": "Surround Sounds",
            "img": "assets/images/coding/surround-sounds.jpg",
            "id": "surround-sounds",
            "modalID": "#surroundModal"
        },
        {
            "name": "P5 Experiments",
            "img": "assets/images/coding/p5-experiments.jpg",
            "id": "p5-experiments",
            "modalID": "#p5Modal"
        }
    ]     
}

var hardware = {
    "projects": [
        {
            "name": "Light Prototype",
            "img": "assets/images/coding/google-prototype.jpg",
            "id": "google-prototype",
            "modalID": "#googleModal"
        },
        {
            "name": "LED Controller",
            "img": "assets/images/coding/led-controller.jpg",
            "id": "led-controller",
            "modalID": "#ledModal"
        },
        {
            "name": "Entanglement",
            "img": "assets/images/coding/entanglement.jpg",
            "id": "google-prototype",
            "modalID": "#entanglementModal"
        },
        {
            "name": "Light Capsule",
            "img": "assets/images/coding/light-capsule.jpg",
            "id": "light-capsule",
            "modalID": "#capsuleModal"
        }
    ]     
}

var fabrication = {
    "projects": [
        {
            "name": "Light Prototype",
            "img": "assets/images/fabrication/google-prototype.jpg",
            "id": "google-prototype",
            "modalID": "#googleModal"
        },
        {
            "name": "Entanglement",
            "img": "assets/images/fabrication/entanglement.jpg",
            "id": "entanglement",
            "modalID": "#entanglementModal"
        },
        {
            "name": "Holder & Coaster",
            "img": "assets/images/fabrication/holder.jpg",
            "id": "holder-coaster",
            "modalID": "#holderModal"
        },
        {
            "name": "Within Our Reach",
            "img": "assets/images/fabrication/swing.jpg",
            "id": "swing",
            "modalID": "#swingModal"
        },
        {
            "name": "Enclosed",
            "img": "assets/images/fabrication/enclosed.jpg",
            "id": "enclosed",
            "modalID": "#enclosedModal"
        },
        {
            "name": "Memories",
            "img": "assets/images/fabrication/memories.jpg",
            "id": "memories",
            "modalID": "#memoriesModal"
        }
    ]     
}

var dFab = {
    "projects": [
        {
            "name": "Google Light Prototype",
            "img": "assets/images/fabrication/google-prototype.jpg",
            "id": "google-prototype",
            "modalID": "#googleModal"
        },
        {
            "name": "Entanglement",
            "img": "assets/images/fabrication/entanglement.jpg",
            "id": "entanglement",
            "modalID": "#entanglementModal"
        },
        {
            "name": "Holder & Coaster",
            "img": "assets/images/fabrication/holder.jpg",
            "id": "holder-coaster",
            "modalID": "#holderModal"
        },
        {
            "name": "Cast a Keychain",
            "img": "assets/images/fabrication/keychain.jpg",
            "id": "swing",
            "modalID": "#swingModal"
        },
        {
            "name": "Eclipse",
            "img": "assets/images/fabrication/eclipse.jpg",
            "id": "eclipse",
            "modalID": "#eclipseModal"
        }
    ]     
}

var woodMetal = {
    "projects": [
        {
            "name": "Within Our Reach",
            "img": "assets/images/fabrication/swing.jpg",
            "id": "swing",
            "modalID": "#swingModal"
        },
        {
            "name": "Enclosed",
            "img": "assets/images/fabrication/enclosed.jpg",
            "id": "enclosed",
            "modalID": "#enclosedModal"
        },
        {
            "name": "Memories",
            "img": "assets/images/fabrication/memories.jpg",
            "id": "memories",
            "modalID": "#memoriesModal"
        },
        {
            "name": "Valetines",
            "img": "assets/images/fabrication/flower.jpg",
            "id": "floweer",
            "modalID": "#flowerModal"
        },
        {
            "name": "Dead, Dying, Plant",
            "img": "assets/images/fabrication/plants.jpg",
            "id": "plant",
            "modalID": "#plantModal"
        }
    ]     
}

function fillPortfolioTemplate(category){
    //Code from Programmable User Interfaces Lab
    //get HTML template using jQuery
    var source = $("#portfolio-template").html();
    //compile the template into a function
    var template = Handlebars.compile(source);
    //create new HTML using our data
    var newHTML = template(category);
    //add the new HTML to the page
    $("#portfolio").append(newHTML);

}

function onPortfolioImgHover(){
    //Displays project title when hovering on project image in portfolio
    $(".portfolio-img").on('mouseenter', 'img', function(event){
        $(this).fadeTo(200, 0);
        $(this).parent().children('h2').fadeTo(200, 1);
    }).on('mouseleave', 'img', function(event){
            $(this).fadeTo(200, 1);
            $(this).parent().children('h2').fadeTo(200, 0);
        });
};



$(window).on('resize', function(){
      var win = $(this);
      if (win.width() <= 770) {$.fn.fullpage.setAutoScrolling(false);}
      else {$.fn.fullpage.setAutoScrolling(true);}
});



function windowSizeOptions(){
//when window with is narrow, disable autoscroll. Otherwise, enable autoscroll
  var win = $(this);
  if (win.width() <= 770) {
    $('#fullpage').fullpage({
      autoScrolling: false,
      touchSensitivity: 10,
      scrollingSpeed: 800,
      navigation: true,
      navigationPosition: 'left',
      navigationTooltips: ['Home', 'Portfolio', 'About', 'Connect'],
      anchors: ['Home-1', 'Portfolio-2', 'About-3', 'Connect-4'],
      scrollOverflow: true
    });
  }
  else {$('#fullpage').fullpage({
    autoScrolling: true,
    touchSensitivity: 10,
    scrollingSpeed: 800,
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Home', 'Portfolio', 'About', 'Connect'],
    anchors: ['Home-1', 'Portfolio-2', 'About-3', 'Connect-4'],
    scrollOverflow: true
    });
  }
}

function navBarLoad(clickID){
    //load the clicked category on the portfolio page
  $('#portfolio-content').stop(true).fadeTo(500, 0,
      function(){
          $('#portfolio').children('#portfolio-content').remove();
          console.log(clickID);
          if (clickID == 'fabrication'){
            fillPortfolioTemplate(fabrication);
            $('#portfolio-content').css('opacity', 0);
          }
          else if (clickID == 'd-fab'){
            fillPortfolioTemplate(dFab);
            $('#portfolio-content').css('opacity', 0);
          }
          else if (clickID == 'wood-metal'){
            fillPortfolioTemplate(woodMetal);
            $('#portfolio-content').css('opacity', 0);
          }
          else if (clickID == 'featured'){
            fillPortfolioTemplate(featured);
            $('#portfolio-content').css('opacity', 0);
          }
          else if (clickID == 'hardware'){
            fillPortfolioTemplate(hardware);
            $('#portfolio-content').css('opacity', 0);
          }
          else if (clickID == 'creative-frameworks'){
            fillPortfolioTemplate(creativeFrameworks);
            $('#portfolio-content').css('opacity', 0);
          }

          $('#portfolio-content').stop(true).fadeTo(300, 1.0);
          onPortfolioImgHover(); 

          
      });
}

function navBarConfiguration(){
    //add click events to navBar to change active category and load content
  $('#portfolio .nav-link' ).on( 'click', function () {
    //references https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
      $('#portfolio .navbar').find( '.active' ).removeClass( 'active' );
      $( this ).addClass( 'active' );
      if (this.id=="featured"){navBarLoad(this.id);}
    });
  $('#portfolio .dropdown-item' ).on( 'click', function () {
    //references https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
    navBarLoad(this.id);
  });
}

function modalFreezePageScrolling(){
    //disable main page scrolling when modal is open
  $(".modal").on("hidden.bs.modal", function () {
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
    });

    $(".modal").on("show.bs.modal", function () {
      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setKeyboardScrolling(false);
    });
}

$( document ).ready(function() {
    windowSizeOptions();
    $('.carousel').carousel({interval: 4000});
    navBarConfiguration();
    modalFreezePageScrolling();
    fillPortfolioTemplate(featured);
    onPortfolioImgHover();
    $("#connect-icons").on('mouseenter', '#email', function(event){
        $('#email p').fadeTo(500, 1.0);
    });
    $('.modal-link').on('click', function(){
        $('#myModalContent').load('html/' +this.id + '.html');
    })

       
 });




