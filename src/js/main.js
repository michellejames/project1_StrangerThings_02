console.log("Stranger Things happen...");

///// Preloadables /////


var preloadables = [
	"assets/img/Lights/Mobile/img/no-lights-03.png",
	"assets/img/Lights/Tablet/img/No-light.png",
	"assets/img/Lights/Desktop/img/No-lights.png",
	"assets/img/Lights/Mobile/img/H-light-03.png",
	"assets/img/Lights/Tablet/img/H-light.png",
	"assets/img/Lights/Desktop/img/H-light.png",
	"assets/img/Lights/Mobile/img/E-light-03.png",
	"assets/img/Lights/Tablet/img/E-light.png",
	"assets/img/Lights/Desktop/img/E-light.png",
	"assets/img/Lights/Mobile/img/L-light-03.png",
	"assets/img/Lights/Tablet/img/L-light.png",
	"assets/img/Lights/Desktop/img/L-light.png",
	"assets/img/Lights/Mobile/img/P-light-03.png",
	"assets/img/Lights/Tablet/img/P-light.png",
	"assets/img/Lights/Desktop/img/P-light.png",
	"assets/img/Lights/Mobile/img/no-lights-03.png",
	"assets/img/Lights/Tablet/img/No-light.png",
	"assets/img/Lights/Desktop/img/all-lights.png",
	"assets/img/character_page/img/Nancy.png",
	"assets/img/character_page/img/Lucas.png",
	"assets/img/character_page/img/Steve.png",
	"assets/img/character_page/img/Jonathan.png",
	"assets/img/character_page/img/Dustin.png",
	"assets/img/character_page/img/Joyce.png",
	"assets/img/character_page/img/Mike.png",
	"assets/img/character_page/img/Will.png",
	"assets/img/character_page/img/Hopper.png",
	"assets/img/character_page/img/Eleven.png",
	"assets/img/tree/img/normaltree-02.png",
	//"assets/img/tree/img/upside-down.png",
	"assets/img/tree/img/portal-02.png",
	"assets/img/Lights/Mobile/img/all-lights.png",
	"assets/img/Lights/Tablet/img/all-lights.png",

]
var preloadingImage;

var preloadHolder = document.createElement("div");
preloadHolder.className = "preload-holder";
document.body.appendChild(preloadHolder);

for (var i = 0; i < preloadables.length; i++) {
	preloadingImage = new Image();
	preloadingImage.src = preloadables[i];
	preloadHolder.appendChild(preloadingImage);
};

////// Index //////

TweenMax.fromTo(".lights", 2, {opacity: 0, left: -50, top: -100, delay:4}, {opacity: 1, left: 0, top: 0, delay: 2});
TweenMax.fromTo(".hand", 2, {opacity: 0, left: -50, bottom: -100, delay: 5}, {opacity: 1, left: 0, bottom: 0, delay: 2});
TweenMax.fromTo(".netflix-red", 2.5, {opacity: 0, delay: 3.5}, {opacity: 1, delay: 3.5});
TweenMax.fromTo(".release", 2.5, {opacity: 0, delay: 4.5}, {opacity: 1, delay: 4.5});

if (window.innerWidth < 960) { 
	TweenMax.fromTo(".tree", 2, {opacity: 0, right: -150, delay: 6}, {opacity: 1, right: -40, delay: 2});
	TweenMax.fromTo(".title", 4, {opacity: 0, scale: 0.7}, {opacity: 1, scale: 1.5});
	TweenMax.fromTo(".season", 2.5, {opacity: 0, scale: 1, delay: 3.5}, {opacity: 1, scale: 1.3, delay: 3.5});

} else  {
	TweenMax.fromTo(".title", 4, {opacity: 0, scale: 1}, {opacity: 1, scale: 1.5});
	TweenMax.fromTo(".tree", 2, {opacity: 0, right: -50, delay: 6}, {opacity: 1, right: 0, delay: 2});
	TweenMax.fromTo(".lights", 0.5, {scale: 1}, {scale: 1.1, yoyo: true, repeat: 4});
	TweenMax.fromTo(".hand", 1, {rotation: 0}, {rotation: 5, yoyo: true, repeat: 4, delay: 4});
	TweenMax.fromTo(".tree", 2, {scale: 1}, {scale: 1.1, yoyo: true, repeat: 4});
	TweenMax.fromTo(".season", 2.5, {opacity: 0, scale: 1, delay: 3.5}, {opacity: 1, scale: 1, delay: 3.5});

}

/////////// LIGHTS PAGE /////////////

TweenMax.staggerTo(".backgroundAnimation", 3, {delay: 1, opacity: 0, yoyo: true, repeat: 1}, 0.75);

$(function () {

	$(".lightsTrailer").hide();
	TweenMax.fromTo(".lightButton", 2, {opacity: 0, delay: 6}, {opacity: 1, delay: 6});

	$(".Hlight" ).click(function(e) {
		$(".backgroundH").fadeIn("slow", 2).css( "z-index", "80" ).fadeOut(1000).addClass("activeH");
	});

	$(".Elight" ).click(function(e) {
		$(".backgroundE").fadeIn("slow", 2).css( "z-index", "81" ).fadeOut(1000).addClass("activeE");
	});

	$(".Llight" ).click(function(e) {
		$(".backgroundL").fadeIn("slow", 2).css( "z-index", "82" ).fadeOut(1000).addClass("activeL");
	});

	$(".Plight" ).click(function(e) {
		$(".backgroundP").fadeIn("slow", 2).css( "z-index", "83" ).fadeOut(1000).addClass("activeP");
	});

	$( ".lightButton" ).click(function(e) {
		$(this).toggleClass("activeButton");
		
		if ($(".Hlight").hasClass("activeButton") && $(".Elight").hasClass("activeButton") && $(".Llight").hasClass("activeButton") && $(".Plight").hasClass("activeButton")) {
			$( ".lightButton" ).hide();
			$(".lightsTrailer").fadeTo( "slow", 1 ); //shouldn't this overwrite line 103? why not?	  	
		}
	});

	function lightsFlickering() {
	    var flickering = setInterval(function(){ 
	    	$(".backgroundLights").fadeIn(50).css( "z-index", "800" ).fadeOut(50);
	    }, 4500);

	    if ($(".lightsTrailer").fadeTo(50)) {
	    	clearInterval(flickering);
	    }
	}
	lightsFlickering();


});

// Character Page //

$(function() {
	$('.arrowImg').on('click', function() {
		$('.drawer').hide();
	});

	// function showSnow() {
	// 	if ($("body").hasClass("characterPage")) {
	// 	$(".snow").css( "z-index", "800" );	
	// 	}
	// };
	// showSnow();
});


/////// Tree Page ////////

TweenMax.to(".portal", 1, {scale: 1.1, yoyo: true, repeat: -1});

$(function () {
	$(".treeTrailer, .navigationHidden").hide();
	$(".portal-link").click(function(e) {
		TweenMax.killTweensOf($(".portal"));
		$(".background-tree").fadeIn("show", 1).css("background-image", "url(../../assets/img/tree/img/upside-down.png)")
		$(".treeTrailer").fadeIn(1500);
		TweenMax.fromTo(".treeTrailer", 1.2, {scale: 0}, {scale: 1});
		$(".treeText").fadeOut();
	});

	document.getElementById("treeVideo").addEventListener('ended',treeVideoHandler,false);
	document.getElementById("lightsVideo").addEventListener('ended',lightsVideoHandler,false);

	    function treeVideoHandler(e) {
	        e.preventDefault();
	        $(".treeTrailer").fadeOut(3000);
	        $(".navigationHidden").fadeIn(6000);
	    };

	    function lightsVideoHandler(e) {
	        e.preventDefault();
	        $(".lightsTrailer").fadeOut(3000);
	        $(".navigationHidden").fadeIn(6000);
	    };


	// var video = document.getElementsByTagName("video")[0];
	// var $window = $(window);

	// $(video).click("play", function() { 
	// 	$(window).resize(function(){
	// 	    var height = $window.height();
	// 	    $(video).css('height', height);

	// 	    var videoWidth = $(video).width(),
	// 	        windowWidth = $window.width();
	// 	    //marginLeftAdjust =   (windowWidth - videoWidth) / 2;

	// 	    // $(video).css('height', height);
	// 	}).resize();
	// }, true);

	
});
























