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
	"assets/img/tree/img/upside-down.png",
	"assets/img/tree/img/portal-02.png",
	"assets/img/Lights/Mobile/img/all-lights.png",
	"assets/img/Lights/Tablet/img/all-lights.png",
];

var preloadingImage;

var preloadHolder = document.createElement("div");
preloadHolder.className = "preload-holder";
document.body.appendChild(preloadHolder);

for (var i = 0; i < preloadables.length; i++) {
	preloadingImage = new Image();
	preloadingImage.src = preloadables[i];
	preloadHolder.appendChild(preloadingImage);
}


$(function() {
////// Index //////


TweenMax.fromTo(".lights", 2, {opacity: 0, left: -50, top: -100, delay:4}, {opacity: 1, left: 0, top: 0, delay: 2});
TweenMax.fromTo(".hand", 2, {opacity: 0, left: -50, bottom: -100, delay: 5}, {opacity: 1, left: 0, bottom: 0, delay: 2});
TweenMax.fromTo(".netflix-red", 2.5, {opacity: 0, delay: 3.5}, {opacity: 1, delay: 3.5});
TweenMax.fromTo(".release", 2.5, {opacity: 0, delay: 4.5}, {opacity: 1, delay: 4.5});
TweenMax.fromTo(".explore", 2.5, {opacity: 0, delay: 4.5}, {opacity: 1, delay: 4.5});
TweenMax.fromTo(".tree", 2, {opacity: 0, right: -150, delay: 6}, {opacity: 1, right: -40, delay: 2});

if (window.innerWidth < 960) { 
	TweenMax.fromTo(".title", 4, {opacity: 0, scale: 0.7}, {opacity: 1, scale: 1.5});
	TweenMax.fromTo(".season", 2.5, {opacity: 0, scale: 1, delay: 3.5}, {opacity: 1, scale: 1, delay: 3.5});

} else  {
	TweenMax.fromTo(".title", 4, {opacity: 0, scale: 1}, {opacity: 1, scale: 1.5});
	TweenMax.fromTo(".season", 2.5, {opacity: 0, scale: 1, delay: 3.5}, {opacity: 1, scale: 1, delay: 3.5});
}

//////// Individual Lights Animation /////////
TweenMax.fromTo(".lights-link", .05, {opacity: .5, yoyo: true, repeat: -1}, {opacity: 1, yoyo: true, repeat: -1});

//////// Individual Hand Animation /////////

var handTimeline = new TimelineMax();

var wiggleDuration = 0.1;
var wiggleAmount = 5;
var wiggleDistance = 20;
var pauseDuration = 3;

handTimeline
  .set(".hand-link", {
    x: 0
  })
  .to(".hand-link", (wiggleDuration), {
    x: (0 - wiggleDistance)
  })
  .fromTo(".hand-link", wiggleDuration, {
    x: (0 - wiggleDistance),
    immediateRender: false
  }, {
    x: wiggleDistance,
    yoyo: true,
    repeat: wiggleAmount
  })
  .to(".hand-link", (wiggleDuration), {
    x: 0
  })
  .repeatDelay(pauseDuration)
  .repeat(-1);

//////// Individual Tree Animation /////////

TweenMax.to(".tree", 1.5, {scale: 1.05, yoyo: true, repeat: -1});


/////////// LIGHTS PAGE /////////////

var lightsTimeline = new TimelineMax({repeat: -1});
lightsTimeline.staggerTo(".backgroundAnimation", 4, {opacity: 0}, 2);

$(function () {

	var audio = document.getElementById("backgroundMusicLightsPage"); 

	function playAudio() { 
		audio.play(); 
	} 

	function pauseAudio() { 
		audio.pause(); 
	}

    var flickering = setInterval(function(){ 
    	$(".backgroundLights").fadeIn(50).css( "z-index", "800" ).fadeOut(50);
    }, 8000);

	$(".lightsTrailer").hide();
	TweenMax.fromTo(".lightButton", 2, {opacity: 0, delay: 6}, {opacity: 1, delay: 6});

	$(".Hlight" ).click(function(e) {
		TweenMax.killTweensOf($(".backgroundAnimation"));
		TweenMax.to(".backgroundH", .5, {opacity: 1});

		$(".backgroundH").fadeIn("fast").css( "z-index", "80" ).addClass("activeH");
	});

	$(".Elight" ).click(function(e) {
		TweenMax.to(".backgroundE", .5, {opacity: 1});
		$(".backgroundE").fadeIn("fast").css( "z-index", "81" ).addClass("activeE");
	});

	$(".Llight" ).click(function(e) {
		TweenMax.to(".backgroundL", .5, {opacity: 1});
		$(".backgroundL").fadeIn("fast").css( "z-index", "82" ).addClass("activeL");
	});

	$(".Plight" ).click(function(e) {
		TweenMax.to(".backgroundP", .5, {opacity: 1});
		$(".backgroundP").fadeIn("fast").css( "z-index", "83" ).addClass("activeP");
	});

	$( ".lightButton" ).click(function(e) {
		$(this).toggleClass("activeButton");
		
		if ($(".Hlight").hasClass("activeButton") && $(".Elight").hasClass("activeButton") && $(".Llight").hasClass("activeButton") && $(".Plight").hasClass("activeButton")) {
			// clearInterval(flickering);
			$( ".lightButton" ).hide();
			$( ".hidden-message1" ).hide();
			$( ".hidden-message2" ).hide();
			$(".lightsTrailer").fadeTo( "slow", 1 );
			pauseAudio();
		}
	});

	$(".replay-lights-video").click(function(e) {
		e.preventDefault();
		$(".navigationHidden").fadeOut(50);
		$(".lightsTrailer").fadeIn(2000);
		pauseAudio();
		TweenMax.fromTo(".treeTrailer", 1.2, {scale: 0}, {scale: 1});
	});

	$("#lightsVideo").on("ended", function() {
		$(".lightsTrailer").fadeOut(2000);
		$(".navigationHidden").fadeIn(3000);
		playAudio();
	});
});

/////// Character Page //////////

$(function() {
    $('.grayscale').on('click', function(e) {
    	console.log(e.target)
    	var drawers = document.querySelectorAll('.drawer');
    	for (var i = 0; i < drawers.length; i++) {
    		drawers[i].classList.remove('slide-up');
    		drawers[i].classList.remove('slide-right');
    	}
    	;
        $('.'+e.target.classList[0] +'-drawer').addClass('slide-up');
        if (window.innerWidth > 960) { 
        	$('.'+e.target.classList[0] +'-drawer').addClass('slide-right');
        }
    });
    $('.swipeUp').on('click', function() {
    	var drawers = document.querySelectorAll('.drawer');
    	for (var i = 0; i < drawers.length; i++) {
    		drawers[i].classList.remove('slide-up');
    		drawers[i].classList.remove('slide-right');
    	}
    });
});


/////// Tree Page ////////

TweenMax.fromTo(".portal", 0.2, {sale: 1, opacity: .5, yoyo: true, repeat: -1}, {scale: 1.1, opacity: 1, yoyo: true, repeat: -1});

var audio = document.getElementById("backgroundMusicTreePage"); 

function playAudio() { 
	audio.play(); 
} 

function pauseAudio() { 
	audio.pause(); 
}

$(".treeTrailer, .navigationHidden").hide();

// $(".portal-link").click(function(e) {
// 	TweenMax.killTweensOf($(".portal"));
// 	$(".background-tree").fadeIn("show", 1).css("background-image", "url(../../assets/img/tree/img/upside-down.png)");
// 	pauseAudio();
// 	$(".treeTrailer").fadeIn(1500);
// 	$(".treeText").fadeOut();
// 	TweenMax.fromTo(".treeTrailer", 1.2, {scale: 0}, {scale: 1});
// });


$(".portal-link").click(function(e) {
	// TweenMax.to(".portal-link", 1, {scale: 15});
	$(".treeText").fadeOut();
	TweenMax.killTweensOf($(".portal"));
	$(".background-tree").fadeIn("show", 1).css("background-image", "url(../../assets/img/tree/img/upside-down.png)");
	$(".treeTrailer").fadeIn(2000);
	pauseAudio();
	TweenMax.fromTo(".treeTrailer", 1.2, {scale: 0}, {scale: 1});
});

$(".replay-tree-video").click(function(e) {
	e.preventDefault();
	$(".navigationHidden").fadeOut(50);
	$(".treeTrailer").fadeIn(2000);
	pauseAudio();
	TweenMax.fromTo(".treeTrailer", 1.2, {scale: 0}, {scale: 1});
});


$(".treeTrailer").on("ended", function() {
	TweenMax.to(".portal-link", .1, {scale: 1});
    $(".treeTrailer").fadeOut(2000);
	$(".navigationHidden").fadeIn(3000);
	playAudio();
});

});

















