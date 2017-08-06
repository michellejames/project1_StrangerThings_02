
// var createParticle = function() {

// 	var particle = document.createElement("div");
// 	document.body.appendChild(particle);

// 	particle.style.position = "absolute";
// 	particle.style.top = "-10px";
// 	particle.style.left = Math.random () * window.innerWidth +"px";
// 	particle.style.width = "1px";
// 	particle.style.height = "4px";
// 	particle.style.transform = "rotate(-30deg)";
// 	particle.style.overflow = "hidden";

// 	var speed = Math.random () * 50 + 1;

// 	var moveParticle = function() {

// 		var styleLeft = parseFloat ( particle.style.left );
// 		var styleTop = parseFloat ( particle.style.top );

// 		styleLeft = styleLeft - ( speed * -0.1 );
// 		styleTop = styleTop + speed;
// 	    particle.style.backgroundColor = "white";


// 		if ( styleTop > window.innerHeight) {
// 			styleTop = -10;
// 			styleLeft = Math.random () * window.innerWidth * 1.3;
// 		}
		
// 		particle.style.top = styleTop + "px";
// 		particle.style.left = styleLeft + "px";

// 	};
// 	setInterval ( moveParticle, 50 );
// };

// createParticle();

// var particleCount = 100;

// 	for (var i = 0; i < particleCount; i++) {
// 		createParticle();


// 	}


TweenMax.fromTo(".lights", 2, {opacity: 0, left: -50, top: -100, delay:4}, {opacity: 1, left: 0, top: 0, delay: 2});
TweenMax.fromTo(".hand", 2, {opacity: 0, left: -50, bottom: -100, delay: 5}, {opacity: 1, left: 0, bottom: 50, delay: 2});

TweenMax.fromTo(".netflix-red, .season", 2.5, {opacity: 0, delay: 3.5}, {opacity: 1, delay: 3.5});

TweenMax.fromTo(".release", 2.5, {opacity: 0, delay: 4.5}, {opacity: 1, delay: 4.5});

if (window.innerWidth < 960) { 
	TweenMax.fromTo(".tree", 2, {opacity: 0, right: -150, delay: 6}, {opacity: 1, right: -40, delay: 2});
	TweenMax.fromTo(".title", 4, {opacity: 0, scale: 0.7}, {opacity: 1, scale: 1.5});
} else  {
	TweenMax.fromTo(".title", 4, {opacity: 0, scale: 1}, {opacity: 1, scale: 1.5});
	TweenMax.fromTo(".tree", 2, {opacity: 0, right: -50, delay: 6}, {opacity: 1, right: 0, delay: 2});
}


/// LIGHTS PAGE ///


TweenMax.staggerTo(".backgroundTest", 4, {delay: 2, opacity: 0, yoyo: true, repeat: -1}, 1.5);

$(function () {

$( ".next" ).click(function(e) {
  $(".circle2").toggleClass("active");
});

});


// Character Page //

// if(window.innerWidth <= 500) {
// 	flashLight('.flashlight', {
// 		height:100,
// 		width:100,
// 	});
// }else{
// 	flashLight('.flashlight', {
// 		height:250,
// 		width:250,
// 	});
// }
























