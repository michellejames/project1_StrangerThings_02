console.log("Stranger Things happen...");

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
});

// Character Page //

$(function() {
	$('.arrowImg').on('click', function() {
		$('.drawer').hide();
	});
});


/////// Tree Page ////////

TweenMax.to(".portal", 1, {scale: 1.1, yoyo: true, repeat: -1});

$(function () {
	$(".treeTrailer").hide();
	$(".portal-link").click(function(e) {
		TweenMax.killTweensOf($(".portal"));
		$(".background-tree").fadeIn("show", 1).css("background-image", "url(../../assets/img/tree/img/upside-down.png)")
		$(".treeTrailer").fadeIn(1500);
		TweenMax.fromTo(".treeTrailer", 1.2, {scale: 0}, {scale: 1});
		$(".treeText").fadeOut();
	});
});
























