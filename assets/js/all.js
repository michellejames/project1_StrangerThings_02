// console.log("Joint plugin with Kenneth J. Blanton");

// function flashLight (light, {height, width, backgroundColor}) {
	
// 	this.light = light;
// 	!height ? this.height = 200 : this.height = height;
// 	!width ? this.width = 200 : this.width = width;
// 	!backgroundColor ? this.color = "black": this.color = backgroundColor;
	
// 	var flash = this.light;
// 	console.log(flash);

// 	$(flash).parent().css("overflow", "hidden");

// 	$(flash).css({
// 		"pointer-events": "none",
// 		"box-sizing": "content-box",
// 		"height": this.height + "px", 
// 		"width": this.width + "px", 
// 		"border-color": this.color, 
// 		"border-width": window.innerWidth * 2 + "px", 
// 		"border-style": "solid",
// 		"border-radius": "50%",
// 		"filter": "blur(5px)",
// 		"margin-left":-window.innerWidth*2-(this.width/2), 
// 		"margin-top": -window.innerWidth*2-(this.width/2), 
// 		"position": "absolute"});

// 	document.onmousemove = function(e) {
// 		cursorX = e.pageX;
// 		cursorY = e.pageY;
// 		$(flash).css('top', cursorY + 'px');
//     	$(flash).css('left', cursorX + 'px');
// 	};

// 	$(document).on("swipe", function(e){ 
// 		cursorX = e.pageX;
// 		cursorY = e.pageY;
// 		$(flash).css("top", cursorY + "px");
//     	$(flash).css("left", cursorX + "px");
//    	});
// }


// if(window.innerWidth >= 768) {
// 	flashLight('.flashlight', {
// 		height:250,
// 		width:250,
// 	});
// }







console.log("Joint plugin with Kenneth J. Blanton");

function flashLight(light, _ref) {
	var height = _ref.height,
	    width = _ref.width,
	    backgroundColor = _ref.backgroundColor;

	this.light = light;
	!height ? this.height = 200 : this.height = height;
	!width ? this.width = 200 : this.width = width;
	!backgroundColor ? this.color = "black" : this.color = backgroundColor;

	var flash = this.light;
	console.log(flash);

	$(flash).parent().css("overflow", "hidden");

	$(flash).css({
		"pointer-events": "none",
		"box-sizing": "content-box",
		"height": this.height + "px",
		"width": this.width + "px",
		"border-color": this.color,
		"border-width": window.innerWidth * 2 + "px",
		"border-style": "solid",
		"border-radius": "50%",
		"filter": "blur(10px)",
		"margin-left": -window.innerWidth * 2 - this.width / 2,
		"margin-top": -window.innerWidth * 2 - this.width / 2,
		"position": "absolute",
		"zIndex": 200 });

	document.onmousemove = function (e) {
		cursorX = e.pageX;
		cursorY = e.pageY;
		$(flash).css('top', cursorY + 'px');
		$(flash).css('left', cursorX + 'px');
	};

	$(document).on("swipe", function (e) {
		cursorX = e.pageX;
		cursorY = e.pageY;
		$(flash).css("top", cursorY + "px");
		$(flash).css("left", cursorX + "px");
	});
}

if (window.innerWidth >= 768) {
	flashLight('.flashlight', {
		height: 250,
		width: 250
	});
}


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


















/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};
var canvas = document.getElementById('snow'),
    ctx = canvas.getContext('2d'),
    width = ctx.canvas.width = document.body.offsetWidth,
    height = ctx.canvas.height = document.body.offsetHeight,
    animFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame,
    snowflakes = [];

window.onresize = function() {
  width = ctx.canvas.width = document.body.offsetWidth,
    height = ctx.canvas.height = document.body.offsetHeight;
};

function update() {
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update();
  }
}

function Snow() {
  this.x = random(0, width);
  this.y = random(height, 0);
  this.radius = random(0.5, 3.0);
  this.speed = random(1, 3);
  this.wind = random(-0.5, 3.0);
}

Snow.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
};

Snow.prototype.update = function() {
  this.y -= this.speed;
  this.x += this.wind;

  if (this.y < 0) {
    this.y = ctx.canvas.height;
    this.x = random(0, width);
  }
};

function createSnow(count) {
  for (var i = 0; i < count; i++) {
    snowflakes[i] = new Snow();
  }
}

function draw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].draw();
  }
}

function loop() {
  draw();
  update();
  animFrame(loop);
}

function random(min, max) {
  var rand = (min + Math.random() * (max - min)).toFixed(1);
  rand = Math.round(rand);
  return rand;
}

createSnow(150);
loop();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYXNoTGlnaHQuanMiLCJtYWluLmpzIiwicGFydGljbGVzLmpzIiwic25vdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnNvbGUubG9nKFwiSm9pbnQgcGx1Z2luIHdpdGggS2VubmV0aCBKLiBCbGFudG9uXCIpO1xuXG4vLyBmdW5jdGlvbiBmbGFzaExpZ2h0IChsaWdodCwge2hlaWdodCwgd2lkdGgsIGJhY2tncm91bmRDb2xvcn0pIHtcblx0XG4vLyBcdHRoaXMubGlnaHQgPSBsaWdodDtcbi8vIFx0IWhlaWdodCA/IHRoaXMuaGVpZ2h0ID0gMjAwIDogdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4vLyBcdCF3aWR0aCA/IHRoaXMud2lkdGggPSAyMDAgOiB0aGlzLndpZHRoID0gd2lkdGg7XG4vLyBcdCFiYWNrZ3JvdW5kQ29sb3IgPyB0aGlzLmNvbG9yID0gXCJibGFja1wiOiB0aGlzLmNvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuXHRcbi8vIFx0dmFyIGZsYXNoID0gdGhpcy5saWdodDtcbi8vIFx0Y29uc29sZS5sb2coZmxhc2gpO1xuXG4vLyBcdCQoZmxhc2gpLnBhcmVudCgpLmNzcyhcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIpO1xuXG4vLyBcdCQoZmxhc2gpLmNzcyh7XG4vLyBcdFx0XCJwb2ludGVyLWV2ZW50c1wiOiBcIm5vbmVcIixcbi8vIFx0XHRcImJveC1zaXppbmdcIjogXCJjb250ZW50LWJveFwiLFxuLy8gXHRcdFwiaGVpZ2h0XCI6IHRoaXMuaGVpZ2h0ICsgXCJweFwiLCBcbi8vIFx0XHRcIndpZHRoXCI6IHRoaXMud2lkdGggKyBcInB4XCIsIFxuLy8gXHRcdFwiYm9yZGVyLWNvbG9yXCI6IHRoaXMuY29sb3IsIFxuLy8gXHRcdFwiYm9yZGVyLXdpZHRoXCI6IHdpbmRvdy5pbm5lcldpZHRoICogMiArIFwicHhcIiwgXG4vLyBcdFx0XCJib3JkZXItc3R5bGVcIjogXCJzb2xpZFwiLFxuLy8gXHRcdFwiYm9yZGVyLXJhZGl1c1wiOiBcIjUwJVwiLFxuLy8gXHRcdFwiZmlsdGVyXCI6IFwiYmx1cig1cHgpXCIsXG4vLyBcdFx0XCJtYXJnaW4tbGVmdFwiOi13aW5kb3cuaW5uZXJXaWR0aCoyLSh0aGlzLndpZHRoLzIpLCBcbi8vIFx0XHRcIm1hcmdpbi10b3BcIjogLXdpbmRvdy5pbm5lcldpZHRoKjItKHRoaXMud2lkdGgvMiksIFxuLy8gXHRcdFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwifSk7XG5cbi8vIFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKSB7XG4vLyBcdFx0Y3Vyc29yWCA9IGUucGFnZVg7XG4vLyBcdFx0Y3Vyc29yWSA9IGUucGFnZVk7XG4vLyBcdFx0JChmbGFzaCkuY3NzKCd0b3AnLCBjdXJzb3JZICsgJ3B4Jyk7XG4vLyAgICAgXHQkKGZsYXNoKS5jc3MoJ2xlZnQnLCBjdXJzb3JYICsgJ3B4Jyk7XG4vLyBcdH07XG5cbi8vIFx0JChkb2N1bWVudCkub24oXCJzd2lwZVwiLCBmdW5jdGlvbihlKXsgXG4vLyBcdFx0Y3Vyc29yWCA9IGUucGFnZVg7XG4vLyBcdFx0Y3Vyc29yWSA9IGUucGFnZVk7XG4vLyBcdFx0JChmbGFzaCkuY3NzKFwidG9wXCIsIGN1cnNvclkgKyBcInB4XCIpO1xuLy8gICAgIFx0JChmbGFzaCkuY3NzKFwibGVmdFwiLCBjdXJzb3JYICsgXCJweFwiKTtcbi8vICAgIFx0fSk7XG4vLyB9XG5cblxuLy8gaWYod2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XG4vLyBcdGZsYXNoTGlnaHQoJy5mbGFzaGxpZ2h0Jywge1xuLy8gXHRcdGhlaWdodDoyNTAsXG4vLyBcdFx0d2lkdGg6MjUwLFxuLy8gXHR9KTtcbi8vIH1cblxuXG5cblxuXG5cblxuY29uc29sZS5sb2coXCJKb2ludCBwbHVnaW4gd2l0aCBLZW5uZXRoIEouIEJsYW50b25cIik7XG5cbmZ1bmN0aW9uIGZsYXNoTGlnaHQobGlnaHQsIF9yZWYpIHtcblx0dmFyIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuXHQgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuXHQgICAgYmFja2dyb3VuZENvbG9yID0gX3JlZi5iYWNrZ3JvdW5kQ29sb3I7XG5cblx0dGhpcy5saWdodCA9IGxpZ2h0O1xuXHQhaGVpZ2h0ID8gdGhpcy5oZWlnaHQgPSAyMDAgOiB0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0IXdpZHRoID8gdGhpcy53aWR0aCA9IDIwMCA6IHRoaXMud2lkdGggPSB3aWR0aDtcblx0IWJhY2tncm91bmRDb2xvciA/IHRoaXMuY29sb3IgPSBcImJsYWNrXCIgOiB0aGlzLmNvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuXG5cdHZhciBmbGFzaCA9IHRoaXMubGlnaHQ7XG5cdGNvbnNvbGUubG9nKGZsYXNoKTtcblxuXHQkKGZsYXNoKS5wYXJlbnQoKS5jc3MoXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiKTtcblxuXHQkKGZsYXNoKS5jc3Moe1xuXHRcdFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCIsXG5cdFx0XCJib3gtc2l6aW5nXCI6IFwiY29udGVudC1ib3hcIixcblx0XHRcImhlaWdodFwiOiB0aGlzLmhlaWdodCArIFwicHhcIixcblx0XHRcIndpZHRoXCI6IHRoaXMud2lkdGggKyBcInB4XCIsXG5cdFx0XCJib3JkZXItY29sb3JcIjogdGhpcy5jb2xvcixcblx0XHRcImJvcmRlci13aWR0aFwiOiB3aW5kb3cuaW5uZXJXaWR0aCAqIDIgKyBcInB4XCIsXG5cdFx0XCJib3JkZXItc3R5bGVcIjogXCJzb2xpZFwiLFxuXHRcdFwiYm9yZGVyLXJhZGl1c1wiOiBcIjUwJVwiLFxuXHRcdFwiZmlsdGVyXCI6IFwiYmx1cigxMHB4KVwiLFxuXHRcdFwibWFyZ2luLWxlZnRcIjogLXdpbmRvdy5pbm5lcldpZHRoICogMiAtIHRoaXMud2lkdGggLyAyLFxuXHRcdFwibWFyZ2luLXRvcFwiOiAtd2luZG93LmlubmVyV2lkdGggKiAyIC0gdGhpcy53aWR0aCAvIDIsXG5cdFx0XCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG5cdFx0XCJ6SW5kZXhcIjogMjAwIH0pO1xuXG5cdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcblx0XHRjdXJzb3JYID0gZS5wYWdlWDtcblx0XHRjdXJzb3JZID0gZS5wYWdlWTtcblx0XHQkKGZsYXNoKS5jc3MoJ3RvcCcsIGN1cnNvclkgKyAncHgnKTtcblx0XHQkKGZsYXNoKS5jc3MoJ2xlZnQnLCBjdXJzb3JYICsgJ3B4Jyk7XG5cdH07XG5cblx0JChkb2N1bWVudCkub24oXCJzd2lwZVwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdGN1cnNvclggPSBlLnBhZ2VYO1xuXHRcdGN1cnNvclkgPSBlLnBhZ2VZO1xuXHRcdCQoZmxhc2gpLmNzcyhcInRvcFwiLCBjdXJzb3JZICsgXCJweFwiKTtcblx0XHQkKGZsYXNoKS5jc3MoXCJsZWZ0XCIsIGN1cnNvclggKyBcInB4XCIpO1xuXHR9KTtcbn1cblxuaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCkge1xuXHRmbGFzaExpZ2h0KCcuZmxhc2hsaWdodCcsIHtcblx0XHRoZWlnaHQ6IDI1MCxcblx0XHR3aWR0aDogMjUwXG5cdH0pO1xufVxuXG4iLCJjb25zb2xlLmxvZyhcIlN0cmFuZ2VyIFRoaW5ncyBoYXBwZW4uLi5cIik7XG5cbi8vLy8vIFByZWxvYWRhYmxlcyAvLy8vL1xuXG52YXIgcHJlbG9hZGFibGVzID0gW1xuXHRcImFzc2V0cy9pbWcvTGlnaHRzL01vYmlsZS9pbWcvbm8tbGlnaHRzLTAzLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL1RhYmxldC9pbWcvTm8tbGlnaHQucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9MaWdodHMvRGVza3RvcC9pbWcvTm8tbGlnaHRzLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL01vYmlsZS9pbWcvSC1saWdodC0wMy5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9UYWJsZXQvaW1nL0gtbGlnaHQucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9MaWdodHMvRGVza3RvcC9pbWcvSC1saWdodC5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9Nb2JpbGUvaW1nL0UtbGlnaHQtMDMucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9MaWdodHMvVGFibGV0L2ltZy9FLWxpZ2h0LnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL0Rlc2t0b3AvaW1nL0UtbGlnaHQucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9MaWdodHMvTW9iaWxlL2ltZy9MLWxpZ2h0LTAzLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL1RhYmxldC9pbWcvTC1saWdodC5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9EZXNrdG9wL2ltZy9MLWxpZ2h0LnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL01vYmlsZS9pbWcvUC1saWdodC0wMy5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9UYWJsZXQvaW1nL1AtbGlnaHQucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9MaWdodHMvRGVza3RvcC9pbWcvUC1saWdodC5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9Nb2JpbGUvaW1nL25vLWxpZ2h0cy0wMy5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9UYWJsZXQvaW1nL05vLWxpZ2h0LnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL0Rlc2t0b3AvaW1nL2FsbC1saWdodHMucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvTmFuY3kucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvTHVjYXMucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvU3RldmUucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvSm9uYXRoYW4ucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvRHVzdGluLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvY2hhcmFjdGVyX3BhZ2UvaW1nL0pveWNlLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvY2hhcmFjdGVyX3BhZ2UvaW1nL01pa2UucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvV2lsbC5wbmdcIixcblx0XCJhc3NldHMvaW1nL2NoYXJhY3Rlcl9wYWdlL2ltZy9Ib3BwZXIucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvRWxldmVuLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvdHJlZS9pbWcvbm9ybWFsdHJlZS0wMi5wbmdcIixcblx0XCJhc3NldHMvaW1nL3RyZWUvaW1nL3Vwc2lkZS1kb3duLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvdHJlZS9pbWcvcG9ydGFsLTAyLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL01vYmlsZS9pbWcvYWxsLWxpZ2h0cy5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9UYWJsZXQvaW1nL2FsbC1saWdodHMucG5nXCIsXG5dO1xuXG52YXIgcHJlbG9hZGluZ0ltYWdlO1xuXG52YXIgcHJlbG9hZEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wcmVsb2FkSG9sZGVyLmNsYXNzTmFtZSA9IFwicHJlbG9hZC1ob2xkZXJcIjtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJlbG9hZEhvbGRlcik7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgcHJlbG9hZGFibGVzLmxlbmd0aDsgaSsrKSB7XG5cdHByZWxvYWRpbmdJbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRwcmVsb2FkaW5nSW1hZ2Uuc3JjID0gcHJlbG9hZGFibGVzW2ldO1xuXHRwcmVsb2FkSG9sZGVyLmFwcGVuZENoaWxkKHByZWxvYWRpbmdJbWFnZSk7XG59XG5cblxuJChmdW5jdGlvbigpIHtcbi8vLy8vLyBJbmRleCAvLy8vLy9cblxuXG5Ud2Vlbk1heC5mcm9tVG8oXCIubGlnaHRzXCIsIDIsIHtvcGFjaXR5OiAwLCBsZWZ0OiAtNTAsIHRvcDogLTEwMCwgZGVsYXk6NH0sIHtvcGFjaXR5OiAxLCBsZWZ0OiAwLCB0b3A6IDAsIGRlbGF5OiAyfSk7XG5Ud2Vlbk1heC5mcm9tVG8oXCIuaGFuZFwiLCAyLCB7b3BhY2l0eTogMCwgbGVmdDogLTUwLCBib3R0b206IC0xMDAsIGRlbGF5OiA1fSwge29wYWNpdHk6IDEsIGxlZnQ6IDAsIGJvdHRvbTogMCwgZGVsYXk6IDJ9KTtcblR3ZWVuTWF4LmZyb21UbyhcIi5uZXRmbGl4LXJlZFwiLCAyLjUsIHtvcGFjaXR5OiAwLCBkZWxheTogMy41fSwge29wYWNpdHk6IDEsIGRlbGF5OiAzLjV9KTtcblR3ZWVuTWF4LmZyb21UbyhcIi5yZWxlYXNlXCIsIDIuNSwge29wYWNpdHk6IDAsIGRlbGF5OiA0LjV9LCB7b3BhY2l0eTogMSwgZGVsYXk6IDQuNX0pO1xuVHdlZW5NYXguZnJvbVRvKFwiLmV4cGxvcmVcIiwgMi41LCB7b3BhY2l0eTogMCwgZGVsYXk6IDQuNX0sIHtvcGFjaXR5OiAxLCBkZWxheTogNC41fSk7XG5Ud2Vlbk1heC5mcm9tVG8oXCIudHJlZVwiLCAyLCB7b3BhY2l0eTogMCwgcmlnaHQ6IC0xNTAsIGRlbGF5OiA2fSwge29wYWNpdHk6IDEsIHJpZ2h0OiAtNDAsIGRlbGF5OiAyfSk7XG5cbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk2MCkgeyBcblx0VHdlZW5NYXguZnJvbVRvKFwiLnRpdGxlXCIsIDQsIHtvcGFjaXR5OiAwLCBzY2FsZTogMC43fSwge29wYWNpdHk6IDEsIHNjYWxlOiAxLjV9KTtcblx0VHdlZW5NYXguZnJvbVRvKFwiLnNlYXNvblwiLCAyLjUsIHtvcGFjaXR5OiAwLCBzY2FsZTogMSwgZGVsYXk6IDMuNX0sIHtvcGFjaXR5OiAxLCBzY2FsZTogMSwgZGVsYXk6IDMuNX0pO1xuXG59IGVsc2UgIHtcblx0VHdlZW5NYXguZnJvbVRvKFwiLnRpdGxlXCIsIDQsIHtvcGFjaXR5OiAwLCBzY2FsZTogMX0sIHtvcGFjaXR5OiAxLCBzY2FsZTogMS41fSk7XG5cdFR3ZWVuTWF4LmZyb21UbyhcIi5zZWFzb25cIiwgMi41LCB7b3BhY2l0eTogMCwgc2NhbGU6IDEsIGRlbGF5OiAzLjV9LCB7b3BhY2l0eTogMSwgc2NhbGU6IDEsIGRlbGF5OiAzLjV9KTtcbn1cblxuLy8vLy8vLy8gSW5kaXZpZHVhbCBMaWdodHMgQW5pbWF0aW9uIC8vLy8vLy8vL1xuVHdlZW5NYXguZnJvbVRvKFwiLmxpZ2h0cy1saW5rXCIsIC4wNSwge29wYWNpdHk6IC41LCB5b3lvOiB0cnVlLCByZXBlYXQ6IC0xfSwge29wYWNpdHk6IDEsIHlveW86IHRydWUsIHJlcGVhdDogLTF9KTtcblxuLy8vLy8vLy8gSW5kaXZpZHVhbCBIYW5kIEFuaW1hdGlvbiAvLy8vLy8vLy9cblxudmFyIGhhbmRUaW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG52YXIgd2lnZ2xlRHVyYXRpb24gPSAwLjE7XG52YXIgd2lnZ2xlQW1vdW50ID0gNTtcbnZhciB3aWdnbGVEaXN0YW5jZSA9IDIwO1xudmFyIHBhdXNlRHVyYXRpb24gPSAzO1xuXG5oYW5kVGltZWxpbmVcbiAgLnNldChcIi5oYW5kLWxpbmtcIiwge1xuICAgIHg6IDBcbiAgfSlcbiAgLnRvKFwiLmhhbmQtbGlua1wiLCAod2lnZ2xlRHVyYXRpb24pLCB7XG4gICAgeDogKDAgLSB3aWdnbGVEaXN0YW5jZSlcbiAgfSlcbiAgLmZyb21UbyhcIi5oYW5kLWxpbmtcIiwgd2lnZ2xlRHVyYXRpb24sIHtcbiAgICB4OiAoMCAtIHdpZ2dsZURpc3RhbmNlKSxcbiAgICBpbW1lZGlhdGVSZW5kZXI6IGZhbHNlXG4gIH0sIHtcbiAgICB4OiB3aWdnbGVEaXN0YW5jZSxcbiAgICB5b3lvOiB0cnVlLFxuICAgIHJlcGVhdDogd2lnZ2xlQW1vdW50XG4gIH0pXG4gIC50byhcIi5oYW5kLWxpbmtcIiwgKHdpZ2dsZUR1cmF0aW9uKSwge1xuICAgIHg6IDBcbiAgfSlcbiAgLnJlcGVhdERlbGF5KHBhdXNlRHVyYXRpb24pXG4gIC5yZXBlYXQoLTEpO1xuXG4vLy8vLy8vLyBJbmRpdmlkdWFsIFRyZWUgQW5pbWF0aW9uIC8vLy8vLy8vL1xuXG5Ud2Vlbk1heC50byhcIi50cmVlXCIsIDEuNSwge3NjYWxlOiAxLjA1LCB5b3lvOiB0cnVlLCByZXBlYXQ6IC0xfSk7XG5cblxuLy8vLy8vLy8vLy8gTElHSFRTIFBBR0UgLy8vLy8vLy8vLy8vL1xuXG52YXIgbGlnaHRzVGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoe3JlcGVhdDogLTF9KTtcbmxpZ2h0c1RpbWVsaW5lLnN0YWdnZXJUbyhcIi5iYWNrZ3JvdW5kQW5pbWF0aW9uXCIsIDQsIHtvcGFjaXR5OiAwfSwgMik7XG5cbiQoZnVuY3Rpb24gKCkge1xuXG5cdHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZE11c2ljTGlnaHRzUGFnZVwiKTsgXG5cblx0ZnVuY3Rpb24gcGxheUF1ZGlvKCkgeyBcblx0XHRhdWRpby5wbGF5KCk7IFxuXHR9IFxuXG5cdGZ1bmN0aW9uIHBhdXNlQXVkaW8oKSB7IFxuXHRcdGF1ZGlvLnBhdXNlKCk7IFxuXHR9XG5cbiAgICB2YXIgZmxpY2tlcmluZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7IFxuICAgIFx0JChcIi5iYWNrZ3JvdW5kTGlnaHRzXCIpLmZhZGVJbig1MCkuY3NzKCBcInotaW5kZXhcIiwgXCI4MDBcIiApLmZhZGVPdXQoNTApO1xuICAgIH0sIDgwMDApO1xuXG5cdCQoXCIubGlnaHRzVHJhaWxlclwiKS5oaWRlKCk7XG5cdFR3ZWVuTWF4LmZyb21UbyhcIi5saWdodEJ1dHRvblwiLCAyLCB7b3BhY2l0eTogMCwgZGVsYXk6IDZ9LCB7b3BhY2l0eTogMSwgZGVsYXk6IDZ9KTtcblxuXHQkKFwiLkhsaWdodFwiICkuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdFR3ZWVuTWF4LmtpbGxUd2VlbnNPZigkKFwiLmJhY2tncm91bmRBbmltYXRpb25cIikpO1xuXHRcdFR3ZWVuTWF4LnRvKFwiLmJhY2tncm91bmRIXCIsIC41LCB7b3BhY2l0eTogMX0pO1xuXG5cdFx0JChcIi5iYWNrZ3JvdW5kSFwiKS5mYWRlSW4oXCJmYXN0XCIpLmNzcyggXCJ6LWluZGV4XCIsIFwiODBcIiApLmFkZENsYXNzKFwiYWN0aXZlSFwiKTtcblx0fSk7XG5cblx0JChcIi5FbGlnaHRcIiApLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRUd2Vlbk1heC50byhcIi5iYWNrZ3JvdW5kRVwiLCAuNSwge29wYWNpdHk6IDF9KTtcblx0XHQkKFwiLmJhY2tncm91bmRFXCIpLmZhZGVJbihcImZhc3RcIikuY3NzKCBcInotaW5kZXhcIiwgXCI4MVwiICkuYWRkQ2xhc3MoXCJhY3RpdmVFXCIpO1xuXHR9KTtcblxuXHQkKFwiLkxsaWdodFwiICkuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdFR3ZWVuTWF4LnRvKFwiLmJhY2tncm91bmRMXCIsIC41LCB7b3BhY2l0eTogMX0pO1xuXHRcdCQoXCIuYmFja2dyb3VuZExcIikuZmFkZUluKFwiZmFzdFwiKS5jc3MoIFwiei1pbmRleFwiLCBcIjgyXCIgKS5hZGRDbGFzcyhcImFjdGl2ZUxcIik7XG5cdH0pO1xuXG5cdCQoXCIuUGxpZ2h0XCIgKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0VHdlZW5NYXgudG8oXCIuYmFja2dyb3VuZFBcIiwgLjUsIHtvcGFjaXR5OiAxfSk7XG5cdFx0JChcIi5iYWNrZ3JvdW5kUFwiKS5mYWRlSW4oXCJmYXN0XCIpLmNzcyggXCJ6LWluZGV4XCIsIFwiODNcIiApLmFkZENsYXNzKFwiYWN0aXZlUFwiKTtcblx0fSk7XG5cblx0JCggXCIubGlnaHRCdXR0b25cIiApLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlQnV0dG9uXCIpO1xuXHRcdFxuXHRcdGlmICgkKFwiLkhsaWdodFwiKS5oYXNDbGFzcyhcImFjdGl2ZUJ1dHRvblwiKSAmJiAkKFwiLkVsaWdodFwiKS5oYXNDbGFzcyhcImFjdGl2ZUJ1dHRvblwiKSAmJiAkKFwiLkxsaWdodFwiKS5oYXNDbGFzcyhcImFjdGl2ZUJ1dHRvblwiKSAmJiAkKFwiLlBsaWdodFwiKS5oYXNDbGFzcyhcImFjdGl2ZUJ1dHRvblwiKSkge1xuXHRcdFx0Ly8gY2xlYXJJbnRlcnZhbChmbGlja2VyaW5nKTtcblx0XHRcdCQoIFwiLmxpZ2h0QnV0dG9uXCIgKS5oaWRlKCk7XG5cdFx0XHQkKCBcIi5oaWRkZW4tbWVzc2FnZTFcIiApLmhpZGUoKTtcblx0XHRcdCQoIFwiLmhpZGRlbi1tZXNzYWdlMlwiICkuaGlkZSgpO1xuXHRcdFx0JChcIi5saWdodHNUcmFpbGVyXCIpLmZhZGVUbyggXCJzbG93XCIsIDEgKTtcblx0XHRcdHBhdXNlQXVkaW8oKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoXCIucmVwbGF5LWxpZ2h0cy12aWRlb1wiKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoXCIubmF2aWdhdGlvbkhpZGRlblwiKS5mYWRlT3V0KDUwKTtcblx0XHQkKFwiLmxpZ2h0c1RyYWlsZXJcIikuZmFkZUluKDIwMDApO1xuXHRcdHBhdXNlQXVkaW8oKTtcblx0XHRUd2Vlbk1heC5mcm9tVG8oXCIudHJlZVRyYWlsZXJcIiwgMS4yLCB7c2NhbGU6IDB9LCB7c2NhbGU6IDF9KTtcblx0fSk7XG5cblx0JChcIiNsaWdodHNWaWRlb1wiKS5vbihcImVuZGVkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdCQoXCIubGlnaHRzVHJhaWxlclwiKS5mYWRlT3V0KDIwMDApO1xuXHRcdCQoXCIubmF2aWdhdGlvbkhpZGRlblwiKS5mYWRlSW4oMzAwMCk7XG5cdFx0cGxheUF1ZGlvKCk7XG5cdH0pO1xufSk7XG5cbi8vLy8vLy8gQ2hhcmFjdGVyIFBhZ2UgLy8vLy8vLy8vL1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgICQoJy5ncmF5c2NhbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgXHRjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICBcdHZhciBkcmF3ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYXdlcicpO1xuICAgIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkcmF3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgXHRcdGRyYXdlcnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtdXAnKTtcbiAgICBcdFx0ZHJhd2Vyc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1yaWdodCcpO1xuICAgIFx0fVxuICAgIFx0O1xuICAgICAgICAkKCcuJytlLnRhcmdldC5jbGFzc0xpc3RbMF0gKyctZHJhd2VyJykuYWRkQ2xhc3MoJ3NsaWRlLXVwJyk7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk2MCkgeyBcbiAgICAgICAgXHQkKCcuJytlLnRhcmdldC5jbGFzc0xpc3RbMF0gKyctZHJhd2VyJykuYWRkQ2xhc3MoJ3NsaWRlLXJpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuc3dpcGVVcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIFx0dmFyIGRyYXdlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhd2VyJyk7XG4gICAgXHRmb3IgKHZhciBpID0gMDsgaSA8IGRyYXdlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBcdFx0ZHJhd2Vyc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS11cCcpO1xuICAgIFx0XHRkcmF3ZXJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLXJpZ2h0Jyk7XG4gICAgXHR9XG4gICAgfSk7XG59KTtcblxuXG4vLy8vLy8vIFRyZWUgUGFnZSAvLy8vLy8vL1xuXG5Ud2Vlbk1heC5mcm9tVG8oXCIucG9ydGFsXCIsIDAuMiwge3NhbGU6IDEsIG9wYWNpdHk6IC41LCB5b3lvOiB0cnVlLCByZXBlYXQ6IC0xfSwge3NjYWxlOiAxLjEsIG9wYWNpdHk6IDEsIHlveW86IHRydWUsIHJlcGVhdDogLTF9KTtcblxudmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kTXVzaWNUcmVlUGFnZVwiKTsgXG5cbmZ1bmN0aW9uIHBsYXlBdWRpbygpIHsgXG5cdGF1ZGlvLnBsYXkoKTsgXG59IFxuXG5mdW5jdGlvbiBwYXVzZUF1ZGlvKCkgeyBcblx0YXVkaW8ucGF1c2UoKTsgXG59XG5cbiQoXCIudHJlZVRyYWlsZXIsIC5uYXZpZ2F0aW9uSGlkZGVuXCIpLmhpZGUoKTtcblxuLy8gJChcIi5wb3J0YWwtbGlua1wiKS5jbGljayhmdW5jdGlvbihlKSB7XG4vLyBcdFR3ZWVuTWF4LmtpbGxUd2VlbnNPZigkKFwiLnBvcnRhbFwiKSk7XG4vLyBcdCQoXCIuYmFja2dyb3VuZC10cmVlXCIpLmZhZGVJbihcInNob3dcIiwgMSkuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCguLi8uLi9hc3NldHMvaW1nL3RyZWUvaW1nL3Vwc2lkZS1kb3duLnBuZylcIik7XG4vLyBcdHBhdXNlQXVkaW8oKTtcbi8vIFx0JChcIi50cmVlVHJhaWxlclwiKS5mYWRlSW4oMTUwMCk7XG4vLyBcdCQoXCIudHJlZVRleHRcIikuZmFkZU91dCgpO1xuLy8gXHRUd2Vlbk1heC5mcm9tVG8oXCIudHJlZVRyYWlsZXJcIiwgMS4yLCB7c2NhbGU6IDB9LCB7c2NhbGU6IDF9KTtcbi8vIH0pO1xuXG5cbiQoXCIucG9ydGFsLWxpbmtcIikuY2xpY2soZnVuY3Rpb24oZSkge1xuXHQvLyBUd2Vlbk1heC50byhcIi5wb3J0YWwtbGlua1wiLCAxLCB7c2NhbGU6IDE1fSk7XG5cdCQoXCIudHJlZVRleHRcIikuZmFkZU91dCgpO1xuXHRUd2Vlbk1heC5raWxsVHdlZW5zT2YoJChcIi5wb3J0YWxcIikpO1xuXHQkKFwiLmJhY2tncm91bmQtdHJlZVwiKS5mYWRlSW4oXCJzaG93XCIsIDEpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoLi4vLi4vYXNzZXRzL2ltZy90cmVlL2ltZy91cHNpZGUtZG93bi5wbmcpXCIpO1xuXHQkKFwiLnRyZWVUcmFpbGVyXCIpLmZhZGVJbigyMDAwKTtcblx0cGF1c2VBdWRpbygpO1xuXHRUd2Vlbk1heC5mcm9tVG8oXCIudHJlZVRyYWlsZXJcIiwgMS4yLCB7c2NhbGU6IDB9LCB7c2NhbGU6IDF9KTtcbn0pO1xuXG4kKFwiLnJlcGxheS10cmVlLXZpZGVvXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHQkKFwiLm5hdmlnYXRpb25IaWRkZW5cIikuZmFkZU91dCg1MCk7XG5cdCQoXCIudHJlZVRyYWlsZXJcIikuZmFkZUluKDIwMDApO1xuXHRwYXVzZUF1ZGlvKCk7XG5cdFR3ZWVuTWF4LmZyb21UbyhcIi50cmVlVHJhaWxlclwiLCAxLjIsIHtzY2FsZTogMH0sIHtzY2FsZTogMX0pO1xufSk7XG5cblxuJChcIi50cmVlVHJhaWxlclwiKS5vbihcImVuZGVkXCIsIGZ1bmN0aW9uKCkge1xuXHRUd2Vlbk1heC50byhcIi5wb3J0YWwtbGlua1wiLCAuMSwge3NjYWxlOiAxfSk7XG4gICAgJChcIi50cmVlVHJhaWxlclwiKS5mYWRlT3V0KDIwMDApO1xuXHQkKFwiLm5hdmlnYXRpb25IaWRkZW5cIikuZmFkZUluKDMwMDApO1xuXHRwbGF5QXVkaW8oKTtcbn0pO1xuXG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyogQXV0aG9yIDogVmluY2VudCBHYXJyZWF1ICAtIHZpbmNlbnRnYXJyZWF1LmNvbVxuLyogTUlUIGxpY2Vuc2U6IGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8qIERlbW8gLyBHZW5lcmF0b3IgOiB2aW5jZW50Z2FycmVhdS5jb20vcGFydGljbGVzLmpzXG4vKiBHaXRIdWIgOiBnaXRodWIuY29tL1ZpbmNlbnRHYXJyZWF1L3BhcnRpY2xlcy5qc1xuLyogSG93IHRvIHVzZT8gOiBDaGVjayB0aGUgR2l0SHViIFJFQURNRVxuLyogdjIuMC4wXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG52YXIgcEpTID0gZnVuY3Rpb24odGFnX2lkLCBwYXJhbXMpe1xuXG4gIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyt0YWdfaWQrJyA+IC5wYXJ0aWNsZXMtanMtY2FudmFzLWVsJyk7XG5cbiAgLyogcGFydGljbGVzLmpzIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzICovXG4gIHRoaXMucEpTID0ge1xuICAgIGNhbnZhczoge1xuICAgICAgZWw6IGNhbnZhc19lbCxcbiAgICAgIHc6IGNhbnZhc19lbC5vZmZzZXRXaWR0aCxcbiAgICAgIGg6IGNhbnZhc19lbC5vZmZzZXRIZWlnaHRcbiAgICB9LFxuICAgIHBhcnRpY2xlczoge1xuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIHZhbHVlOiA0MDAsXG4gICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVfYXJlYTogODAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICB2YWx1ZTogJyNmZmYnXG4gICAgICB9LFxuICAgICAgc2hhcGU6IHtcbiAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgIHN0cm9rZToge1xuICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgIGNvbG9yOiAnI2ZmMDAwMCdcbiAgICAgICAgfSxcbiAgICAgICAgcG9seWdvbjoge1xuICAgICAgICAgIG5iX3NpZGVzOiA1XG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgc3JjOiAnJyxcbiAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogMixcbiAgICAgICAgICBvcGFjaXR5X21pbjogMCxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICB2YWx1ZTogMjAsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIGFuaW06IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHNwZWVkOiAyMCxcbiAgICAgICAgICBzaXplX21pbjogMCxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBkaXN0YW5jZTogMTAwLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB3aWR0aDogMVxuICAgICAgfSxcbiAgICAgIG1vdmU6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMixcbiAgICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgb3V0X21vZGU6ICdvdXQnLFxuICAgICAgICBib3VuY2U6IGZhbHNlLFxuICAgICAgICBhdHRyYWN0OiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICByb3RhdGVYOiAzMDAwLFxuICAgICAgICAgIHJvdGF0ZVk6IDMwMDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFycmF5OiBbXVxuICAgIH0sXG4gICAgaW50ZXJhY3Rpdml0eToge1xuICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBvbmhvdmVyOiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIG1vZGU6ICdncmFiJ1xuICAgICAgICB9LFxuICAgICAgICBvbmNsaWNrOiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIG1vZGU6ICdwdXNoJ1xuICAgICAgICB9LFxuICAgICAgICByZXNpemU6IHRydWVcbiAgICAgIH0sXG4gICAgICBtb2Rlczoge1xuICAgICAgICBncmFiOntcbiAgICAgICAgICBkaXN0YW5jZTogMTAwLFxuICAgICAgICAgIGxpbmVfbGlua2VkOntcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJ1YmJsZTp7XG4gICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICAgIH0sXG4gICAgICAgIHJlcHVsc2U6e1xuICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgICAgZHVyYXRpb246IDAuNFxuICAgICAgICB9LFxuICAgICAgICBwdXNoOntcbiAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOntcbiAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vdXNlOnt9XG4gICAgfSxcbiAgICByZXRpbmFfZGV0ZWN0OiBmYWxzZSxcbiAgICBmbjoge1xuICAgICAgaW50ZXJhY3Q6IHt9LFxuICAgICAgbW9kZXM6IHt9LFxuICAgICAgdmVuZG9yczp7fVxuICAgIH0sXG4gICAgdG1wOiB7fVxuICB9O1xuXG4gIHZhciBwSlMgPSB0aGlzLnBKUztcblxuICAvKiBwYXJhbXMgc2V0dGluZ3MgKi9cbiAgaWYocGFyYW1zKXtcbiAgICBPYmplY3QuZGVlcEV4dGVuZChwSlMsIHBhcmFtcyk7XG4gIH1cblxuICBwSlMudG1wLm9iaiA9IHtcbiAgICBzaXplX3ZhbHVlOiBwSlMucGFydGljbGVzLnNpemUudmFsdWUsXG4gICAgc2l6ZV9hbmltX3NwZWVkOiBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCxcbiAgICBtb3ZlX3NwZWVkOiBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQsXG4gICAgbGluZV9saW5rZWRfZGlzdGFuY2U6IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UsXG4gICAgbGluZV9saW5rZWRfd2lkdGg6IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsXG4gICAgbW9kZV9ncmFiX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlLFxuICAgIG1vZGVfYnViYmxlX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UsXG4gICAgbW9kZV9idWJibGVfc2l6ZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsXG4gICAgbW9kZV9yZXB1bHNlX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlXG4gIH07XG5cblxuICBwSlMuZm4ucmV0aW5hSW5pdCA9IGZ1bmN0aW9uKCl7XG5cbiAgICBpZihwSlMucmV0aW5hX2RldGVjdCAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpe1xuICAgICAgcEpTLmNhbnZhcy5weHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87IFxuICAgICAgcEpTLnRtcC5yZXRpbmEgPSB0cnVlO1xuICAgIH0gXG4gICAgZWxzZXtcbiAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IDE7XG4gICAgICBwSlMudG1wLnJldGluYSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGggKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmNhbnZhcy5oID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRIZWlnaHQgKiBwSlMuY2FudmFzLnB4cmF0aW87XG5cbiAgICBwSlMucGFydGljbGVzLnNpemUudmFsdWUgPSBwSlMudG1wLm9iai5zaXplX3ZhbHVlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkID0gcEpTLnRtcC5vYmouc2l6ZV9hbmltX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCA9IHBKUy50bXAub2JqLm1vdmVfc3BlZWQgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2dyYWJfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX3dpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfc2l6ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9yZXB1bHNlX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuXG4gIH07XG5cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIGNhbnZhcyAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4uY2FudmFzSW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgcEpTLmNhbnZhcy5jdHggPSBwSlMuY2FudmFzLmVsLmdldENvbnRleHQoJzJkJyk7XG4gIH07XG5cbiAgcEpTLmZuLmNhbnZhc1NpemUgPSBmdW5jdGlvbigpe1xuXG4gICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcbiAgICBwSlMuY2FudmFzLmVsLmhlaWdodCA9IHBKUy5jYW52YXMuaDtcblxuICAgIGlmKHBKUyAmJiBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMucmVzaXplKXtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBwSlMuY2FudmFzLncgPSBwSlMuY2FudmFzLmVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgIHBKUy5jYW52YXMuaCA9IHBKUy5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgLyogcmVzaXplIGNhbnZhcyAqL1xuICAgICAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcbiAgICAgICAgICAgIHBKUy5jYW52YXMudyAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgICAgICBwSlMuY2FudmFzLmggKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XG4gICAgICAgICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XG5cbiAgICAgICAgICAvKiByZXBhaW50IGNhbnZhcyBvbiBhbmltIGRpc2FibGVkICovXG4gICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5KCk7XG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlKCk7XG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgLyogZGVuc2l0eSBwYXJ0aWNsZXMgZW5hYmxlZCAqL1xuICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuXG4gICAgICB9KTtcblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLmNhbnZhc1BhaW50ID0gZnVuY3Rpb24oKXtcbiAgICBwSlMuY2FudmFzLmN0eC5maWxsUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XG4gIH07XG5cbiAgcEpTLmZuLmNhbnZhc0NsZWFyID0gZnVuY3Rpb24oKXtcbiAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xuICB9O1xuXG5cbiAgLyogLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4ucGFydGljbGUgPSBmdW5jdGlvbihjb2xvciwgb3BhY2l0eSwgcG9zaXRpb24pe1xuXG4gICAgLyogc2l6ZSAqL1xuICAgIHRoaXMucmFkaXVzID0gKHBKUy5wYXJ0aWNsZXMuc2l6ZS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBwSlMucGFydGljbGVzLnNpemUudmFsdWU7XG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlKXtcbiAgICAgIHRoaXMuc2l6ZV9zdGF0dXMgPSBmYWxzZTtcbiAgICAgIHRoaXMudnMgPSBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCAvIDEwMDtcbiAgICAgIGlmKCFwSlMucGFydGljbGVzLnNpemUuYW5pbS5zeW5jKXtcbiAgICAgICAgdGhpcy52cyA9IHRoaXMudnMgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIHBvc2l0aW9uICovXG4gICAgdGhpcy54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICB0aGlzLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xuXG4gICAgLyogY2hlY2sgcG9zaXRpb24gIC0gaW50byB0aGUgY2FudmFzICovXG4gICAgaWYodGhpcy54ID4gcEpTLmNhbnZhcy53IC0gdGhpcy5yYWRpdXMqMikgdGhpcy54ID0gdGhpcy54IC0gdGhpcy5yYWRpdXM7XG4gICAgZWxzZSBpZih0aGlzLnggPCB0aGlzLnJhZGl1cyoyKSB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnJhZGl1cztcbiAgICBpZih0aGlzLnkgPiBwSlMuY2FudmFzLmggLSB0aGlzLnJhZGl1cyoyKSB0aGlzLnkgPSB0aGlzLnkgLSB0aGlzLnJhZGl1cztcbiAgICBlbHNlIGlmKHRoaXMueSA8IHRoaXMucmFkaXVzKjIpIHRoaXMueSA9IHRoaXMueSArIHRoaXMucmFkaXVzO1xuXG4gICAgLyogY2hlY2sgcG9zaXRpb24gLSBhdm9pZCBvdmVybGFwICovXG4gICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSl7XG4gICAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAodGhpcywgcG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8qIGNvbG9yICovXG4gICAgdGhpcy5jb2xvciA9IHt9O1xuICAgIGlmKHR5cGVvZihjb2xvci52YWx1ZSkgPT0gJ29iamVjdCcpe1xuXG4gICAgICBpZihjb2xvci52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgdmFyIGNvbG9yX3NlbGVjdGVkID0gY29sb3IudmFsdWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcEpTLnBhcnRpY2xlcy5jb2xvci52YWx1ZS5sZW5ndGgpXTtcbiAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYihjb2xvcl9zZWxlY3RlZCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYoY29sb3IudmFsdWUuciAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuZyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuYiAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgIHRoaXMuY29sb3IucmdiID0ge1xuICAgICAgICAgICAgcjogY29sb3IudmFsdWUucixcbiAgICAgICAgICAgIGc6IGNvbG9yLnZhbHVlLmcsXG4gICAgICAgICAgICBiOiBjb2xvci52YWx1ZS5iXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGNvbG9yLnZhbHVlLmggIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLnMgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmwgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICB0aGlzLmNvbG9yLmhzbCA9IHtcbiAgICAgICAgICAgIGg6IGNvbG9yLnZhbHVlLmgsXG4gICAgICAgICAgICBzOiBjb2xvci52YWx1ZS5zLFxuICAgICAgICAgICAgbDogY29sb3IudmFsdWUubFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2UgaWYoY29sb3IudmFsdWUgPT0gJ3JhbmRvbScpe1xuICAgICAgdGhpcy5jb2xvci5yZ2IgPSB7XG4gICAgICAgIHI6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxuICAgICAgICBnOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKSxcbiAgICAgICAgYjogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZih0eXBlb2YoY29sb3IudmFsdWUpID09ICdzdHJpbmcnKXtcbiAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgIHRoaXMuY29sb3IucmdiID0gaGV4VG9SZ2IodGhpcy5jb2xvci52YWx1ZSk7XG4gICAgfVxuXG4gICAgLyogb3BhY2l0eSAqL1xuICAgIHRoaXMub3BhY2l0eSA9IChwSlMucGFydGljbGVzLm9wYWNpdHkucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlO1xuICAgIGlmKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSl7XG4gICAgICB0aGlzLm9wYWNpdHlfc3RhdHVzID0gZmFsc2U7XG4gICAgICB0aGlzLnZvID0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3BlZWQgLyAxMDA7XG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3luYyl7XG4gICAgICAgIHRoaXMudm8gPSB0aGlzLnZvICogTWF0aC5yYW5kb20oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBhbmltYXRpb24gLSB2ZWxvY2l0eSBmb3Igc3BlZWQgKi9cbiAgICB2YXIgdmVsYmFzZSA9IHt9XG4gICAgc3dpdGNoKHBKUy5wYXJ0aWNsZXMubW92ZS5kaXJlY3Rpb24pe1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLCB5Oi0xIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MC41LCB5Oi0wLjUgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjEsIHk6LTAgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLjUsIHk6MC41IH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeToxIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbS1sZWZ0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDotMC41LCB5OjEgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6LTEsIHk6MCB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AtbGVmdCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6LTAuNSwgeTotMC41IH07XG4gICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeTowIH07XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZihwSlMucGFydGljbGVzLm1vdmUuc3RyYWlnaHQpe1xuICAgICAgdGhpcy52eCA9IHZlbGJhc2UueDtcbiAgICAgIHRoaXMudnkgPSB2ZWxiYXNlLnk7XG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUucmFuZG9tKXtcbiAgICAgICAgdGhpcy52eCA9IHRoaXMudnggKiAoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMudnkgPSB0aGlzLnZ5ICogKE1hdGgucmFuZG9tKCkpO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgdGhpcy52eCA9IHZlbGJhc2UueCArIE1hdGgucmFuZG9tKCktMC41O1xuICAgICAgdGhpcy52eSA9IHZlbGJhc2UueSArIE1hdGgucmFuZG9tKCktMC41O1xuICAgIH1cblxuICAgIC8vIHZhciB0aGV0YSA9IDIuMCAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgIC8vIHRoaXMudnggPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgLy8gdGhpcy52eSA9IE1hdGguc2luKHRoZXRhKTtcblxuICAgIHRoaXMudnhfaSA9IHRoaXMudng7XG4gICAgdGhpcy52eV9pID0gdGhpcy52eTtcblxuICAgIFxuXG4gICAgLyogaWYgc2hhcGUgaXMgaW1hZ2UgKi9cblxuICAgIHZhciBzaGFwZV90eXBlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlO1xuICAgIGlmKHR5cGVvZihzaGFwZV90eXBlKSA9PSAnb2JqZWN0Jyl7XG4gICAgICBpZihzaGFwZV90eXBlIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICB2YXIgc2hhcGVfc2VsZWN0ZWQgPSBzaGFwZV90eXBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoYXBlX3R5cGUubGVuZ3RoKV07XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZV9zZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZV90eXBlO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc2hhcGUgPT0gJ2ltYWdlJyl7XG4gICAgICB2YXIgc2ggPSBwSlMucGFydGljbGVzLnNoYXBlO1xuICAgICAgdGhpcy5pbWcgPSB7XG4gICAgICAgIHNyYzogc2guaW1hZ2Uuc3JjLFxuICAgICAgICByYXRpbzogc2guaW1hZ2Uud2lkdGggLyBzaC5pbWFnZS5oZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmKCF0aGlzLmltZy5yYXRpbykgdGhpcy5pbWcucmF0aW8gPSAxO1xuICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyAmJiBwSlMudG1wLnNvdXJjZV9zdmcgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nKHRoaXMpO1xuICAgICAgICBpZihwSlMudG1wLnB1c2hpbmcpe1xuICAgICAgICAgIHRoaXMuaW1nLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgfTtcblxuXG4gIHBKUy5mbi5wYXJ0aWNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHAgPSB0aGlzO1xuXG4gICAgaWYocC5yYWRpdXNfYnViYmxlICE9IHVuZGVmaW5lZCl7XG4gICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXNfYnViYmxlOyBcbiAgICB9ZWxzZXtcbiAgICAgIHZhciByYWRpdXMgPSBwLnJhZGl1cztcbiAgICB9XG5cbiAgICBpZihwLm9wYWNpdHlfYnViYmxlICE9IHVuZGVmaW5lZCl7XG4gICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eV9idWJibGU7XG4gICAgfWVsc2V7XG4gICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eTtcbiAgICB9XG5cbiAgICBpZihwLmNvbG9yLnJnYil7XG4gICAgICB2YXIgY29sb3JfdmFsdWUgPSAncmdiYSgnK3AuY29sb3IucmdiLnIrJywnK3AuY29sb3IucmdiLmcrJywnK3AuY29sb3IucmdiLmIrJywnK29wYWNpdHkrJyknO1xuICAgIH1lbHNle1xuICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ2hzbGEoJytwLmNvbG9yLmhzbC5oKycsJytwLmNvbG9yLmhzbC5zKyclLCcrcC5jb2xvci5oc2wubCsnJSwnK29wYWNpdHkrJyknO1xuICAgIH1cblxuICAgIHBKUy5jYW52YXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yX3ZhbHVlO1xuICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgc3dpdGNoKHAuc2hhcGUpe1xuXG4gICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICBwSlMuY2FudmFzLmN0eC5hcmMocC54LCBwLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdlZGdlJzpcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgucmVjdChwLngtcmFkaXVzLCBwLnktcmFkaXVzLCByYWRpdXMqMiwgcmFkaXVzKjIpO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKHBKUy5jYW52YXMuY3R4LCBwLngtcmFkaXVzLCBwLnkrcmFkaXVzIC8gMS42NiwgcmFkaXVzKjIsIDMsIDIpO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUoXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgsXG4gICAgICAgICAgcC54IC0gcmFkaXVzIC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zLjUpLCAvLyBzdGFydFhcbiAgICAgICAgICBwLnkgLSByYWRpdXMgLyAoMi42Ni8zLjUpLCAvLyBzdGFydFlcbiAgICAgICAgICByYWRpdXMqMi42NiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksIC8vIHNpZGVMZW5ndGhcbiAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxuICAgICAgICAgIDEgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcbiAgICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGFyJzpcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxuICAgICAgICAgIHAueCAtIHJhZGl1cyoyIC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy80KSwgLy8gc3RhcnRYXG4gICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIqMi42Ni8zLjUpLCAvLyBzdGFydFlcbiAgICAgICAgICByYWRpdXMqMioyLjY2IC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zKSwgLy8gc2lkZUxlbmd0aFxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywgLy8gc2lkZUNvdW50TnVtZXJhdG9yXG4gICAgICAgICAgMiAvLyBzaWRlQ291bnREZW5vbWluYXRvclxuICAgICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ltYWdlJzpcblxuICAgICAgICBmdW5jdGlvbiBkcmF3KCl7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgaW1nX29iaixcbiAgICAgICAgICAgIHAueC1yYWRpdXMsXG4gICAgICAgICAgICBwLnktcmFkaXVzLFxuICAgICAgICAgICAgcmFkaXVzKjIsXG4gICAgICAgICAgICByYWRpdXMqMiAvIHAuaW1nLnJhdGlvXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2Zycpe1xuICAgICAgICAgIHZhciBpbWdfb2JqID0gcC5pbWcub2JqO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB2YXIgaW1nX29iaiA9IHBKUy50bXAuaW1nX29iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGltZ19vYmope1xuICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIH1cblxuICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGggPiAwKXtcbiAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2UuY29sb3I7XG4gICAgICBwSlMuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwSlMucGFydGljbGVzLnNoYXBlLnN0cm9rZS53aWR0aDtcbiAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBcbiAgICBwSlMuY2FudmFzLmN0eC5maWxsKCk7XG4gICAgXG4gIH07XG5cblxuICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlID0gZnVuY3Rpb24oKXtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykge1xuICAgICAgcEpTLnBhcnRpY2xlcy5hcnJheS5wdXNoKG5ldyBwSlMuZm4ucGFydGljbGUocEpTLnBhcnRpY2xlcy5jb2xvciwgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSk7XG4gICAgfVxuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUgPSBmdW5jdGlvbigpe1xuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xuXG4gICAgICAvKiB0aGUgcGFydGljbGUgKi9cbiAgICAgIHZhciBwID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcblxuICAgICAgLy8gdmFyIGQgPSAoIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLnggKSAqIGR4ICsgKCBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55ICkgKiBkeTtcbiAgICAgIC8vIHZhciBmID0gLUJBTkdfU0laRSAvIGQ7XG4gICAgICAvLyBpZiAoIGQgPCBCQU5HX1NJWkUgKSB7XG4gICAgICAvLyAgICAgdmFyIHQgPSBNYXRoLmF0YW4yKCBkeSwgZHggKTtcbiAgICAgIC8vICAgICBwLnZ4ID0gZiAqIE1hdGguY29zKHQpO1xuICAgICAgLy8gICAgIHAudnkgPSBmICogTWF0aC5zaW4odCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8qIG1vdmUgdGhlIHBhcnRpY2xlICovXG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgICAgdmFyIG1zID0gcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLzI7XG4gICAgICAgIHAueCArPSBwLnZ4ICogbXM7XG4gICAgICAgIHAueSArPSBwLnZ5ICogbXM7XG4gICAgICB9XG5cbiAgICAgIC8qIGNoYW5nZSBvcGFjaXR5IHN0YXR1cyAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKSB7XG4gICAgICAgIGlmKHAub3BhY2l0eV9zdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICAgIGlmKHAub3BhY2l0eSA+PSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpIHAub3BhY2l0eV9zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICBwLm9wYWNpdHkgKz0gcC52bztcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIGlmKHAub3BhY2l0eSA8PSBwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5vcGFjaXR5X21pbikgcC5vcGFjaXR5X3N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgcC5vcGFjaXR5IC09IHAudm87XG4gICAgICAgIH1cbiAgICAgICAgaWYocC5vcGFjaXR5IDwgMCkgcC5vcGFjaXR5ID0gMDtcbiAgICAgIH1cblxuICAgICAgLyogY2hhbmdlIHNpemUgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSl7XG4gICAgICAgIGlmKHAuc2l6ZV9zdGF0dXMgPT0gdHJ1ZSl7XG4gICAgICAgICAgaWYocC5yYWRpdXMgPj0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKSBwLnNpemVfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgcC5yYWRpdXMgKz0gcC52cztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgaWYocC5yYWRpdXMgPD0gcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc2l6ZV9taW4pIHAuc2l6ZV9zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIHAucmFkaXVzIC09IHAudnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYocC5yYWRpdXMgPCAwKSBwLnJhZGl1cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIGNoYW5nZSBwYXJ0aWNsZSBwb3NpdGlvbiBpZiBpdCBpcyBvdXQgb2YgY2FudmFzICovXG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xuICAgICAgICB2YXIgbmV3X3BvcyA9IHtcbiAgICAgICAgICB4X2xlZnQ6IHAucmFkaXVzLFxuICAgICAgICAgIHhfcmlnaHQ6ICBwSlMuY2FudmFzLncsXG4gICAgICAgICAgeV90b3A6IHAucmFkaXVzLFxuICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmhcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIHZhciBuZXdfcG9zID0ge1xuICAgICAgICAgIHhfbGVmdDogLXAucmFkaXVzLFxuICAgICAgICAgIHhfcmlnaHQ6IHBKUy5jYW52YXMudyArIHAucmFkaXVzLFxuICAgICAgICAgIHlfdG9wOiAtcC5yYWRpdXMsXG4gICAgICAgICAgeV9ib3R0b206IHBKUy5jYW52YXMuaCArIHAucmFkaXVzXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYocC54IC0gcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpe1xuICAgICAgICBwLnggPSBuZXdfcG9zLnhfbGVmdDtcbiAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocC54ICsgcC5yYWRpdXMgPCAwKXtcbiAgICAgICAgcC54ID0gbmV3X3Bvcy54X3JpZ2h0O1xuICAgICAgICBwLnkgPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xuICAgICAgfVxuICAgICAgaWYocC55IC0gcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpe1xuICAgICAgICBwLnkgPSBuZXdfcG9zLnlfdG9wO1xuICAgICAgICBwLnggPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgICAgfVxuICAgICAgZWxzZSBpZihwLnkgKyBwLnJhZGl1cyA8IDApe1xuICAgICAgICBwLnkgPSBuZXdfcG9zLnlfYm90dG9tO1xuICAgICAgICBwLnggPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgICAgfVxuXG4gICAgICAvKiBvdXQgb2YgY2FudmFzIG1vZGVzICovXG4gICAgICBzd2l0Y2gocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKXtcbiAgICAgICAgY2FzZSAnYm91bmNlJzpcbiAgICAgICAgICBpZiAocC54ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpIHAudnggPSAtcC52eDtcbiAgICAgICAgICBlbHNlIGlmIChwLnggLSBwLnJhZGl1cyA8IDApIHAudnggPSAtcC52eDtcbiAgICAgICAgICBpZiAocC55ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHAudnkgPSAtcC52eTtcbiAgICAgICAgICBlbHNlIGlmIChwLnkgLSBwLnJhZGl1cyA8IDApIHAudnkgPSAtcC52eTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8qIGV2ZW50cyAqL1xuICAgICAgaWYoaXNJbkFycmF5KCdncmFiJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpe1xuICAgICAgICBwSlMuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlKHApO1xuICAgICAgfVxuXG4gICAgICBpZihpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xuICAgICAgICBwSlMuZm4ubW9kZXMuYnViYmxlUGFydGljbGUocCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcbiAgICAgICAgcEpTLmZuLm1vZGVzLnJlcHVsc2VQYXJ0aWNsZShwKTtcbiAgICAgIH1cblxuICAgICAgLyogaW50ZXJhY3Rpb24gYXV0byBiZXR3ZWVuIHBhcnRpY2xlcyAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUgfHwgcEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKXtcbiAgICAgICAgZm9yKHZhciBqID0gaSArIDE7IGogPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaisrKXtcbiAgICAgICAgICB2YXIgcDIgPSBwSlMucGFydGljbGVzLmFycmF5W2pdO1xuXG4gICAgICAgICAgLyogbGluayBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSl7XG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyhwLHAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBhdHRyYWN0IHBhcnRpY2xlcyAqL1xuICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSl7XG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyhwLHAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBib3VuY2UgcGFydGljbGVzICovXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSl7XG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzKHAscDIpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIH1cblxuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNEcmF3ID0gZnVuY3Rpb24oKXtcblxuICAgIC8qIGNsZWFyIGNhbnZhcyAqL1xuICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XG5cbiAgICAvKiB1cGRhdGUgZWFjaCBwYXJ0aWNsZXMgcGFyYW0gKi9cbiAgICBwSlMuZm4ucGFydGljbGVzVXBkYXRlKCk7XG5cbiAgICAvKiBkcmF3IGVhY2ggcGFydGljbGUgKi9cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgcCA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XG4gICAgICBwLmRyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzRW1wdHkgPSBmdW5jdGlvbigpe1xuICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkgPSBbXTtcbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzUmVmcmVzaCA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvKiBpbml0IGFsbCAqL1xuICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmNoZWNrQW5pbUZyYW1lKTtcbiAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSB1bmRlZmluZWQ7XG4gICAgcEpTLnRtcC5pbWdfb2JqID0gdW5kZWZpbmVkO1xuICAgIHBKUy50bXAuY291bnRfc3ZnID0gMDtcbiAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcbiAgICBwSlMuZm4uY2FudmFzQ2xlYXIoKTtcbiAgICBcbiAgICAvKiByZXN0YXJ0ICovXG4gICAgcEpTLmZuLnZlbmRvcnMuc3RhcnQoKTtcblxuICB9O1xuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gcGFydGljbGVzIGludGVyYWN0aW9uIC0tLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzID0gZnVuY3Rpb24ocDEsIHAyKXtcblxuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxuICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xuXG4gICAgLyogZHJhdyBhIGxpbmUgYmV0d2VlbiBwMSBhbmQgcDIgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBpcyB1bmRlciB0aGUgY29uZmlnIGRpc3RhbmNlICovXG4gICAgaWYoZGlzdCA8PSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKXtcblxuICAgICAgdmFyIG9wYWNpdHlfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSAtIChkaXN0IC8gKDEvcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5KSkgLyBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlO1xuXG4gICAgICBpZihvcGFjaXR5X2xpbmUgPiAwKXsgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLyogc3R5bGUgKi9cbiAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCcrY29sb3JfbGluZS5yKycsJytjb2xvcl9saW5lLmcrJywnK2NvbG9yX2xpbmUuYisnLCcrb3BhY2l0eV9saW5lKycpJztcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aDtcbiAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cbiAgICAgICAgXG4gICAgICAgIC8qIHBhdGggKi9cbiAgICAgICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVRvKHAyLngsIHAyLnkpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMgID0gZnVuY3Rpb24ocDEsIHAyKXtcblxuICAgIC8qIGNvbmRlbnNlZCBwYXJ0aWNsZXMgKi9cbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcblxuICAgIGlmKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7XG5cbiAgICAgIHZhciBheCA9IGR4LyhwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVYKjEwMDApLFxuICAgICAgICAgIGF5ID0gZHkvKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVkqMTAwMCk7XG5cbiAgICAgIHAxLnZ4IC09IGF4O1xuICAgICAgcDEudnkgLT0gYXk7XG5cbiAgICAgIHAyLnZ4ICs9IGF4O1xuICAgICAgcDIudnkgKz0gYXk7XG5cbiAgICB9XG4gICAgXG5cbiAgfVxuXG5cbiAgcEpTLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyA9IGZ1bmN0aW9uKHAxLCBwMil7XG5cbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KSxcbiAgICAgICAgZGlzdF9wID0gcDEucmFkaXVzK3AyLnJhZGl1cztcblxuICAgIGlmKGRpc3QgPD0gZGlzdF9wKXtcbiAgICAgIHAxLnZ4ID0gLXAxLnZ4O1xuICAgICAgcDEudnkgPSAtcDEudnk7XG5cbiAgICAgIHAyLnZ4ID0gLXAyLnZ4O1xuICAgICAgcDIudnkgPSAtcDIudnk7XG4gICAgfVxuXG4gIH1cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIG1vZGVzIGV2ZW50cyAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyA9IGZ1bmN0aW9uKG5iLCBwb3Mpe1xuXG4gICAgcEpTLnRtcC5wdXNoaW5nID0gdHJ1ZTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuYjsgaSsrKXtcbiAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkucHVzaChcbiAgICAgICAgbmV3IHBKUy5mbi5wYXJ0aWNsZShcbiAgICAgICAgICBwSlMucGFydGljbGVzLmNvbG9yLFxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAneCc6IHBvcyA/IHBvcy5wb3NfeCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLncsXG4gICAgICAgICAgICAneSc6IHBvcyA/IHBvcy5wb3NfeSA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmhcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGlmKGkgPT0gbmItMSl7XG4gICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIHBKUy50bXAucHVzaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyA9IGZ1bmN0aW9uKG5iKXtcblxuICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkuc3BsaWNlKDAsIG5iKTtcbiAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XG5cbiAgICAvKiBvbiBob3ZlciBldmVudCAqL1xuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKXtcblxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpLFxuICAgICAgICAgIHJhdGlvID0gMSAtIGRpc3RfbW91c2UgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2U7XG5cbiAgICAgIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IHAub3BhY2l0eTtcbiAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gcC5yYWRpdXM7XG4gICAgICB9XG5cbiAgICAgIC8qIG1vdXNlbW92ZSAtIGNoZWNrIHJhdGlvICovXG4gICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7XG5cbiAgICAgICAgaWYocmF0aW8gPj0gMCAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpe1xuICAgICAgICAgIFxuICAgICAgICAgIC8qIHNpemUgKi9cbiAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSAhPSBwSlMucGFydGljbGVzLnNpemUudmFsdWUpe1xuXG4gICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSA+IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSl7XG4gICAgICAgICAgICAgIHZhciBzaXplID0gcC5yYWRpdXMgKyAocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUqcmF0aW8pO1xuICAgICAgICAgICAgICBpZihzaXplID49IDApe1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHNpemU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB2YXIgZGlmID0gcC5yYWRpdXMgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcbiAgICAgICAgICAgICAgICAgIHNpemUgPSBwLnJhZGl1cyAtIChkaWYqcmF0aW8pO1xuICAgICAgICAgICAgICBpZihzaXplID4gMCl7XG4gICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gc2l6ZTtcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogb3BhY2l0eSAqL1xuICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ICE9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSl7XG5cbiAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ID4gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKXtcbiAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSpyYXRpbztcbiAgICAgICAgICAgICAgaWYob3BhY2l0eSA+IHAub3BhY2l0eSAmJiBvcGFjaXR5IDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KXtcbiAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gb3BhY2l0eTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5IC0gKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZS1wSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkqcmF0aW87XG4gICAgICAgICAgICAgIGlmKG9wYWNpdHkgPCBwLm9wYWNpdHkgJiYgb3BhY2l0eSA+PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSl7XG4gICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IG9wYWNpdHk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH1lbHNle1xuICAgICAgICBpbml0KCk7XG4gICAgICB9XG5cblxuICAgICAgLyogbW91c2VsZWF2ZSAqL1xuICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZWxlYXZlJyl7XG4gICAgICAgIGluaXQoKTtcbiAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICAvKiBvbiBjbGljayBldmVudCAqL1xuICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xuXG5cbiAgICAgIGlmKHBKUy50bXAuYnViYmxlX2NsaWNraW5nKXtcbiAgICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3gsXG4gICAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195LFxuICAgICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKSxcbiAgICAgICAgICAgIHRpbWVfc3BlbnQgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lKS8xMDAwO1xuXG4gICAgICAgIGlmKHRpbWVfc3BlbnQgPiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pe1xuICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKjIpe1xuICAgICAgICAgIHBKUy50bXAuYnViYmxlX2NsaWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBmdW5jdGlvbiBwcm9jZXNzKGJ1YmJsZV9wYXJhbSwgcGFydGljbGVzX3BhcmFtLCBwX29ial9idWJibGUsIHBfb2JqLCBpZCl7XG5cbiAgICAgICAgaWYoYnViYmxlX3BhcmFtICE9IHBhcnRpY2xlc19wYXJhbSl7XG5cbiAgICAgICAgICBpZighcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kKXtcbiAgICAgICAgICAgIGlmKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKXtcbiAgICAgICAgICAgICAgaWYocF9vYmpfYnViYmxlICE9IHVuZGVmaW5lZCkgdmFyIG9iaiA9IHBfb2JqX2J1YmJsZTtcbiAgICAgICAgICAgICAgZWxzZSB2YXIgb2JqID0gcF9vYmo7XG4gICAgICAgICAgICAgIGlmKG9iaiAhPSBidWJibGVfcGFyYW0pe1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBfb2JqIC0gKHRpbWVfc3BlbnQgKiAocF9vYmogLSBidWJibGVfcGFyYW0pIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHBfb2JqX2J1YmJsZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICB2YXIgdmFsdWVfdG1wID0gcF9vYmogLSAodGltZV9zcGVudCAqIChwX29iaiAtIGJ1YmJsZV9wYXJhbSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pLFxuICAgICAgICAgICAgICAgICAgZGlmID0gYnViYmxlX3BhcmFtIC0gdmFsdWVfdG1wO1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSBidWJibGVfcGFyYW0gKyBkaWY7XG4gICAgICAgICAgICAgIGlmKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgaWYocEpTLnRtcC5idWJibGVfY2xpY2tpbmcpe1xuICAgICAgICAvKiBzaXplICovXG4gICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSwgcC5yYWRpdXNfYnViYmxlLCBwLnJhZGl1cywgJ3NpemUnKTtcbiAgICAgICAgLyogb3BhY2l0eSAqL1xuICAgICAgICBwcm9jZXNzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5LCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsIHAub3BhY2l0eV9idWJibGUsIHAub3BhY2l0eSwgJ29wYWNpdHknKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLm1vZGVzLnJlcHVsc2VQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xuXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJykge1xuXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcbiAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LFxuICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSk7XG5cbiAgICAgIHZhciBub3JtVmVjID0ge3g6IGR4X21vdXNlL2Rpc3RfbW91c2UsIHk6IGR5X21vdXNlL2Rpc3RfbW91c2V9LFxuICAgICAgICAgIHJlcHVsc2VSYWRpdXMgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLFxuICAgICAgICAgIHZlbG9jaXR5ID0gMTAwLFxuICAgICAgICAgIHJlcHVsc2VGYWN0b3IgPSBjbGFtcCgoMS9yZXB1bHNlUmFkaXVzKSooLTEqTWF0aC5wb3coZGlzdF9tb3VzZS9yZXB1bHNlUmFkaXVzLDIpKzEpKnJlcHVsc2VSYWRpdXMqdmVsb2NpdHksIDAsIDUwKTtcbiAgICAgIFxuICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgeDogcC54ICsgbm9ybVZlYy54ICogcmVwdWxzZUZhY3RvcixcbiAgICAgICAgeTogcC55ICsgbm9ybVZlYy55ICogcmVwdWxzZUZhY3RvclxuICAgICAgfVxuXG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xuICAgICAgICBpZihwb3MueCAtIHAucmFkaXVzID4gMCAmJiBwb3MueCArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy53KSBwLnggPSBwb3MueDtcbiAgICAgICAgaWYocG9zLnkgLSBwLnJhZGl1cyA+IDAgJiYgcG9zLnkgKyBwLnJhZGl1cyA8IHBKUy5jYW52YXMuaCkgcC55ID0gcG9zLnk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcC54ID0gcG9zLng7XG4gICAgICAgIHAueSA9IHBvcy55O1xuICAgICAgfVxuICAgIFxuICAgIH1cblxuXG4gICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpIHtcblxuICAgICAgaWYoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpe1xuICAgICAgICBwSlMudG1wLnJlcHVsc2VfY291bnQrKztcbiAgICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NvdW50ID09IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoKXtcbiAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcpe1xuXG4gICAgICAgIHZhciByZXB1bHNlUmFkaXVzID0gTWF0aC5wb3cocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZS82LCAzKTtcblxuICAgICAgICB2YXIgZHggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIHAueCxcbiAgICAgICAgICAgIGR5ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgLSBwLnksXG4gICAgICAgICAgICBkID0gZHgqZHggKyBkeSpkeTtcblxuICAgICAgICB2YXIgZm9yY2UgPSAtcmVwdWxzZVJhZGl1cyAvIGQgKiAxO1xuXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3MoKXtcblxuICAgICAgICAgIHZhciBmID0gTWF0aC5hdGFuMihkeSxkeCk7XG4gICAgICAgICAgcC52eCA9IGZvcmNlICogTWF0aC5jb3MoZik7XG4gICAgICAgICAgcC52eSA9IGZvcmNlICogTWF0aC5zaW4oZik7XG5cbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xuICAgICAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICAgICAgeDogcC54ICsgcC52eCxcbiAgICAgICAgICAgICAgeTogcC55ICsgcC52eVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvcy54ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpIHAudnggPSAtcC52eDtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBvcy54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgICBpZiAocG9zLnkgKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCkgcC52eSA9IC1wLnZ5O1xuICAgICAgICAgICAgZWxzZSBpZiAocG9zLnkgLSBwLnJhZGl1cyA8IDApIHAudnkgPSAtcC52eTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgaWYoZCA8PSByZXB1bHNlUmFkaXVzKXtcbiAgICAgICAgICBwcm9jZXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiYW5nIC0gc2xvdyBtb3Rpb24gbW9kZVxuICAgICAgICAvLyBpZighcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCl7XG4gICAgICAgIC8vICAgaWYoZCA8PSByZXB1bHNlUmFkaXVzKXtcbiAgICAgICAgLy8gICAgIHByb2Nlc3MoKTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgIHByb2Nlc3MoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBcblxuICAgICAgfWVsc2V7XG5cbiAgICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID09IGZhbHNlKXtcblxuICAgICAgICAgIHAudnggPSBwLnZ4X2k7XG4gICAgICAgICAgcC52eSA9IHAudnlfaTtcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuXG4gIHBKUy5mbi5tb2Rlcy5ncmFiUGFydGljbGUgPSBmdW5jdGlvbihwKXtcblxuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpe1xuXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcbiAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LFxuICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSk7XG5cbiAgICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gdGhlIGN1cnNvciBhbmQgdGhlIHBhcnRpY2xlIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xuICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlKXtcblxuICAgICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3RfbW91c2UgLyAoMS9wSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2U7XG5cbiAgICAgICAgaWYob3BhY2l0eV9saW5lID4gMCl7XG5cbiAgICAgICAgICAvKiBzdHlsZSAqL1xuICAgICAgICAgIHZhciBjb2xvcl9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCcrY29sb3JfbGluZS5yKycsJytjb2xvcl9saW5lLmcrJywnK2NvbG9yX2xpbmUuYisnLCcrb3BhY2l0eV9saW5lKycpJztcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoO1xuICAgICAgICAgIC8vcEpTLmNhbnZhcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXG4gICAgICAgICAgXG4gICAgICAgICAgLyogcGF0aCAqL1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVRvKHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xuXG4gICAgLyogZXZlbnRzIHRhcmdldCBlbGVtZW50ICovXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZGV0ZWN0X29uID09ICd3aW5kb3cnKXtcbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gd2luZG93O1xuICAgIH1lbHNle1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwgPSBwSlMuY2FudmFzLmVsO1xuICAgIH1cblxuXG4gICAgLyogZGV0ZWN0IG1vdXNlIHBvcyAtIG9uIGhvdmVyIC8gY2xpY2sgZXZlbnQgKi9cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgfHwgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcblxuICAgICAgLyogZWwgb24gbW91c2Vtb3ZlICovXG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKXtcblxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5lbCA9PSB3aW5kb3cpe1xuICAgICAgICAgIHZhciBwb3NfeCA9IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgcG9zX3kgPSBlLmNsaWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB2YXIgcG9zX3ggPSBlLm9mZnNldFggfHwgZS5jbGllbnRYLFxuICAgICAgICAgICAgICBwb3NfeSA9IGUub2Zmc2V0WSB8fCBlLmNsaWVudFk7XG4gICAgICAgIH1cblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCA9IHBvc194O1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSA9IHBvc195O1xuXG4gICAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcbiAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID0gJ21vdXNlbW92ZSc7XG5cbiAgICAgIH0pO1xuXG4gICAgICAvKiBlbCBvbiBvbm1vdXNlbGVhdmUgKi9cbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCA9IG51bGw7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ID0gbnVsbDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID0gJ21vdXNlbGVhdmUnO1xuXG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qIG9uIGNsaWNrIGV2ZW50ICovXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcblxuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3g7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3k7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xuXG4gICAgICAgICAgc3dpdGNoKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpe1xuXG4gICAgICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPT0gMSl7XG4gICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgcEpTLmludGVyYWN0aXZpdHkubW91c2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iID4gMSl7XG4gICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucGFydGljbGVzX25iKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdidWJibGUnOlxuICAgICAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmVwdWxzZSc6XG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jb3VudCA9IDA7XG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9LCBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmR1cmF0aW9uKjEwMDApXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG5cblxuICB9O1xuXG4gIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzID0gZnVuY3Rpb24oKXtcblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkuZW5hYmxlKXtcblxuICAgICAgLyogY2FsYyBhcmVhICovXG4gICAgICB2YXIgYXJlYSA9IHBKUy5jYW52YXMuZWwud2lkdGggKiBwSlMuY2FudmFzLmVsLmhlaWdodCAvIDEwMDA7XG4gICAgICBpZihwSlMudG1wLnJldGluYSl7XG4gICAgICAgIGFyZWEgPSBhcmVhLyhwSlMuY2FudmFzLnB4cmF0aW8qMik7XG4gICAgICB9XG5cbiAgICAgIC8qIGNhbGMgbnVtYmVyIG9mIHBhcnRpY2xlcyBiYXNlZCBvbiBkZW5zaXR5IGFyZWEgKi9cbiAgICAgIHZhciBuYl9wYXJ0aWNsZXMgPSBhcmVhICogcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWUgLyBwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LnZhbHVlX2FyZWE7XG5cbiAgICAgIC8qIGFkZCBvciByZW1vdmUgWCBwYXJ0aWNsZXMgKi9cbiAgICAgIHZhciBtaXNzaW5nX3BhcnRpY2xlcyA9IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoIC0gbmJfcGFydGljbGVzO1xuICAgICAgaWYobWlzc2luZ19wYXJ0aWNsZXMgPCAwKSBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhNYXRoLmFicyhtaXNzaW5nX3BhcnRpY2xlcykpO1xuICAgICAgZWxzZSBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKG1pc3NpbmdfcGFydGljbGVzKTtcblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwID0gZnVuY3Rpb24ocDEsIHBvc2l0aW9uKXtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgcDIgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xuXG4gICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxuICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XG5cbiAgICAgIGlmKGRpc3QgPD0gcDEucmFkaXVzICsgcDIucmFkaXVzKXtcbiAgICAgICAgcDEueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgICAgIHAxLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xuICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAocDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyA9IGZ1bmN0aW9uKHApe1xuXG4gICAgLyogc2V0IGNvbG9yIHRvIHN2ZyBlbGVtZW50ICovXG4gICAgdmFyIHN2Z1htbCA9IHBKUy50bXAuc291cmNlX3N2ZyxcbiAgICAgICAgcmdiSGV4ID0gLyMoWzAtOUEtRl17Myw2fSkvZ2ksXG4gICAgICAgIGNvbG9yZWRTdmdYbWwgPSBzdmdYbWwucmVwbGFjZShyZ2JIZXgsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7XG4gICAgICAgICAgaWYocC5jb2xvci5yZ2Ipe1xuICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ3JnYmEoJytwLmNvbG9yLnJnYi5yKycsJytwLmNvbG9yLnJnYi5nKycsJytwLmNvbG9yLnJnYi5iKycsJytwLm9wYWNpdHkrJyknO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ2hzbGEoJytwLmNvbG9yLmhzbC5oKycsJytwLmNvbG9yLmhzbC5zKyclLCcrcC5jb2xvci5oc2wubCsnJSwnK3Aub3BhY2l0eSsnKSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb2xvcl92YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAvKiBwcmVwYXJlIHRvIGNyZWF0ZSBpbWcgd2l0aCBjb2xvcmVkIHN2ZyAqL1xuICAgIHZhciBzdmcgPSBuZXcgQmxvYihbY29sb3JlZFN2Z1htbF0sIHt0eXBlOiAnaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04J30pLFxuICAgICAgICBET01VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93LFxuICAgICAgICB1cmwgPSBET01VUkwuY3JlYXRlT2JqZWN0VVJMKHN2Zyk7XG5cbiAgICAvKiBjcmVhdGUgcGFydGljbGUgaW1nIG9iaiAqL1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBwLmltZy5vYmogPSBpbWc7XG4gICAgICBwLmltZy5sb2FkZWQgPSB0cnVlO1xuICAgICAgRE9NVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgcEpTLnRtcC5jb3VudF9zdmcrKztcbiAgICB9KTtcbiAgICBpbWcuc3JjID0gdXJsO1xuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5kZXN0cm95cEpTID0gZnVuY3Rpb24oKXtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgY2FudmFzX2VsLnJlbW92ZSgpO1xuICAgIHBKU0RvbSA9IG51bGw7XG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUgPSBmdW5jdGlvbihjLCBzdGFydFgsIHN0YXJ0WSwgc2lkZUxlbmd0aCwgc2lkZUNvdW50TnVtZXJhdG9yLCBzaWRlQ291bnREZW5vbWluYXRvcil7XG5cbiAgICAvLyBCeSBQcm9ncmFtbWluZyBUaG9tYXMgLSBodHRwczovL3Byb2dyYW1taW5ndGhvbWFzLndvcmRwcmVzcy5jb20vMjAxMy8wNC8wMy9uLXNpZGVkLXNoYXBlcy9cbiAgICB2YXIgc2lkZUNvdW50ID0gc2lkZUNvdW50TnVtZXJhdG9yICogc2lkZUNvdW50RGVub21pbmF0b3I7XG4gICAgdmFyIGRlY2ltYWxTaWRlcyA9IHNpZGVDb3VudE51bWVyYXRvciAvIHNpZGVDb3VudERlbm9taW5hdG9yO1xuICAgIHZhciBpbnRlcmlvckFuZ2xlRGVncmVlcyA9ICgxODAgKiAoZGVjaW1hbFNpZGVzIC0gMikpIC8gZGVjaW1hbFNpZGVzO1xuICAgIHZhciBpbnRlcmlvckFuZ2xlID0gTWF0aC5QSSAtIE1hdGguUEkgKiBpbnRlcmlvckFuZ2xlRGVncmVlcyAvIDE4MDsgLy8gY29udmVydCB0byByYWRpYW5zXG4gICAgYy5zYXZlKCk7XG4gICAgYy5iZWdpblBhdGgoKTtcbiAgICBjLnRyYW5zbGF0ZShzdGFydFgsIHN0YXJ0WSk7XG4gICAgYy5tb3ZlVG8oMCwwKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVDb3VudDsgaSsrKSB7XG4gICAgICBjLmxpbmVUbyhzaWRlTGVuZ3RoLDApO1xuICAgICAgYy50cmFuc2xhdGUoc2lkZUxlbmd0aCwwKTtcbiAgICAgIGMucm90YXRlKGludGVyaW9yQW5nbGUpO1xuICAgIH1cbiAgICAvL2Muc3Ryb2tlKCk7XG4gICAgYy5maWxsKCk7XG4gICAgYy5yZXN0b3JlKCk7XG5cbiAgfTtcblxuICBwSlMuZm4udmVuZG9ycy5leHBvcnRJbWcgPSBmdW5jdGlvbigpe1xuICAgIHdpbmRvdy5vcGVuKHBKUy5jYW52YXMuZWwudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSwgJ19ibGFuaycpO1xuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMubG9hZEltZyA9IGZ1bmN0aW9uKHR5cGUpe1xuXG4gICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyAhPSAnJyl7XG5cbiAgICAgIGlmKHR5cGUgPT0gJ3N2Zycpe1xuXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XG4gICAgICAgICAgICBpZih4aHIuc3RhdHVzID09IDIwMCl7XG4gICAgICAgICAgICAgIHBKUy50bXAuc291cmNlX3N2ZyA9IGRhdGEuY3VycmVudFRhcmdldC5yZXNwb25zZTtcbiAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEltYWdlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICBwSlMudG1wLmltZ19lcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgIHBKUy50bXAuaW1nX29iaiA9IGltZztcbiAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltZy5zcmMgPSBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYztcblxuICAgICAgfVxuXG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gTm8gaW1hZ2Uuc3JjJyk7XG4gICAgICBwSlMudG1wLmltZ19lcnJvciA9IHRydWU7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5kcmF3ID0gZnVuY3Rpb24oKXtcblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PSAnaW1hZ2UnKXtcblxuICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyl7XG5cbiAgICAgICAgaWYocEpTLnRtcC5jb3VudF9zdmcgPj0gcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWUpe1xuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzdGlsbCBsb2FkaW5nLi4uJyk7XG4gICAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH1cblxuICAgICAgfWVsc2V7XG5cbiAgICAgICAgaWYocEpTLnRtcC5pbWdfb2JqICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGlmKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1lbHNle1xuICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3ID0gZnVuY3Rpb24oKXtcblxuICAgIC8vIGlmIHNoYXBlIGlzIGltYWdlXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlID09ICdpbWFnZScpe1xuXG4gICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnICYmIHBKUy50bXAuc291cmNlX3N2ZyA9PSB1bmRlZmluZWQpe1xuICAgICAgICBwSlMudG1wLmNoZWNrQW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShjaGVjayk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzIGxvYWRlZCEgY2FuY2VsIGNoZWNrJyk7XG4gICAgICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLnRtcC5jaGVja0FuaW1GcmFtZSk7XG4gICAgICAgIGlmKCFwSlMudG1wLmltZ19lcnJvcil7XG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuaW5pdCgpO1xuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cblxuICAgIH1lbHNle1xuICAgICAgcEpTLmZuLnZlbmRvcnMuaW5pdCgpO1xuICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhdygpO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuaW5pdCA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvKiBpbml0IGNhbnZhcyArIHBhcnRpY2xlcyAqL1xuICAgIHBKUy5mbi5yZXRpbmFJbml0KCk7XG4gICAgcEpTLmZuLmNhbnZhc0luaXQoKTtcbiAgICBwSlMuZm4uY2FudmFzU2l6ZSgpO1xuICAgIHBKUy5mbi5jYW52YXNQYWludCgpO1xuICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUoKTtcbiAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuXG4gICAgLyogcGFydGljbGVzLmxpbmVfbGlua2VkIC0gY29udmVydCBoZXggY29sb3JzIHRvIHJnYiAqL1xuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmUgPSBoZXhUb1JnYihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yKTtcblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuc3RhcnQgPSBmdW5jdGlvbigpe1xuXG4gICAgaWYoaXNJbkFycmF5KCdpbWFnZScsIHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSkpe1xuICAgICAgcEpTLnRtcC5pbWdfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLnN1YnN0cihwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5sZW5ndGggLSAzKTtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcocEpTLnRtcC5pbWdfdHlwZSk7XG4gICAgfWVsc2V7XG4gICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzKCk7XG5cbiAgcEpTLmZuLnZlbmRvcnMuc3RhcnQoKTtcbiAgXG5cblxufTtcblxuLyogLS0tLS0tLS0tLSBnbG9iYWwgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cblxuT2JqZWN0LmRlZXBFeHRlbmQgPSBmdW5jdGlvbihkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiZcbiAgICAgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICBhcmd1bWVudHMuY2FsbGVlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG5cbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XG4gICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcbiAgICBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICB9O1xufSkoKTtcblxud2luZG93LmNhbmNlbFJlcXVlc3RBbmltRnJhbWUgPSAoIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lICAgICAgICAgfHxcbiAgICB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxuICAgIHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgICB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XG4gICAgY2xlYXJUaW1lb3V0XG59ICkoKTtcblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KXtcbiAgLy8gQnkgVGltIERvd24gLSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NjI0MTM5LzM0OTM2NTBcbiAgLy8gRXhwYW5kIHNob3J0aGFuZCBmb3JtIChlLmcuIFwiMDNGXCIpIHRvIGZ1bGwgZm9ybSAoZS5nLiBcIjAwMzNGRlwiKVxuICB2YXIgc2hvcnRoYW5kUmVnZXggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICBoZXggPSBoZXgucmVwbGFjZShzaG9ydGhhbmRSZWdleCwgZnVuY3Rpb24obSwgciwgZywgYikge1xuICAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xuICB9KTtcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0ID8ge1xuICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gIH0gOiBudWxsO1xufTtcblxuZnVuY3Rpb24gY2xhbXAobnVtYmVyLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtYmVyLCBtaW4pLCBtYXgpO1xufTtcblxuZnVuY3Rpb24gaXNJbkFycmF5KHZhbHVlLCBhcnJheSkge1xuICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbn1cblxuXG4vKiAtLS0tLS0tLS0tIHBhcnRpY2xlcy5qcyBmdW5jdGlvbnMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cblxud2luZG93LnBKU0RvbSA9IFtdO1xuXG53aW5kb3cucGFydGljbGVzSlMgPSBmdW5jdGlvbih0YWdfaWQsIHBhcmFtcyl7XG5cbiAgLy9jb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gIC8qIG5vIHN0cmluZyBpZD8gc28gaXQncyBvYmplY3QgcGFyYW1zLCBhbmQgc2V0IHRoZSBpZCB3aXRoIGRlZmF1bHQgaWQgKi9cbiAgaWYodHlwZW9mKHRhZ19pZCkgIT0gJ3N0cmluZycpe1xuICAgIHBhcmFtcyA9IHRhZ19pZDtcbiAgICB0YWdfaWQgPSAncGFydGljbGVzLWpzJztcbiAgfVxuXG4gIC8qIG5vIGlkPyBzZXQgdGhlIGlkIHRvIGRlZmF1bHQgaWQgKi9cbiAgaWYoIXRhZ19pZCl7XG4gICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XG4gIH1cblxuICAvKiBwSlMgZWxlbWVudHMgKi9cbiAgdmFyIHBKU190YWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdfaWQpLFxuICAgICAgcEpTX2NhbnZhc19jbGFzcyA9ICdwYXJ0aWNsZXMtanMtY2FudmFzLWVsJyxcbiAgICAgIGV4aXN0X2NhbnZhcyA9IHBKU190YWcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShwSlNfY2FudmFzX2NsYXNzKTtcblxuICAvKiByZW1vdmUgY2FudmFzIGlmIGV4aXN0cyBpbnRvIHRoZSBwSlMgdGFyZ2V0IHRhZyAqL1xuICBpZihleGlzdF9jYW52YXMubGVuZ3RoKXtcbiAgICB3aGlsZShleGlzdF9jYW52YXMubGVuZ3RoID4gMCl7XG4gICAgICBwSlNfdGFnLnJlbW92ZUNoaWxkKGV4aXN0X2NhbnZhc1swXSk7XG4gICAgfVxuICB9XG5cbiAgLyogY3JlYXRlIGNhbnZhcyBlbGVtZW50ICovXG4gIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzX2VsLmNsYXNzTmFtZSA9IHBKU19jYW52YXNfY2xhc3M7XG5cbiAgLyogc2V0IHNpemUgY2FudmFzICovXG4gIGNhbnZhc19lbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICBjYW52YXNfZWwuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG5cbiAgLyogYXBwZW5kIGNhbnZhcyAqL1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKS5hcHBlbmRDaGlsZChjYW52YXNfZWwpO1xuXG4gIC8qIGxhdW5jaCBwYXJ0aWNsZS5qcyAqL1xuICBpZihjYW52YXMgIT0gbnVsbCl7XG4gICAgcEpTRG9tLnB1c2gobmV3IHBKUyh0YWdfaWQsIHBhcmFtcykpO1xuICB9XG5cbn07XG5cbndpbmRvdy5wYXJ0aWNsZXNKUy5sb2FkID0gZnVuY3Rpb24odGFnX2lkLCBwYXRoX2NvbmZpZ19qc29uLCBjYWxsYmFjayl7XG5cbiAgLyogbG9hZCBqc29uIGNvbmZpZyAqL1xuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci5vcGVuKCdHRVQnLCBwYXRoX2NvbmZpZ19qc29uKTtcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XG4gICAgICBpZih4aHIuc3RhdHVzID09IDIwMCl7XG4gICAgICAgIHZhciBwYXJhbXMgPSBKU09OLnBhcnNlKGRhdGEuY3VycmVudFRhcmdldC5yZXNwb25zZSk7XG4gICAgICAgIHdpbmRvdy5wYXJ0aWNsZXNKUyh0YWdfaWQsIHBhcmFtcyk7XG4gICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBYTUxIdHRwUmVxdWVzdCBzdGF0dXM6ICcreGhyLnN0YXR1cyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBGaWxlIGNvbmZpZyBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHhoci5zZW5kKCk7XG5cbn07IiwidmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbm93JyksXG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgd2lkdGggPSBjdHguY2FudmFzLndpZHRoID0gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCxcbiAgICBoZWlnaHQgPSBjdHguY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LFxuICAgIGFuaW1GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICBzbm93Zmxha2VzID0gW107XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB3aWR0aCA9IGN0eC5jYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLFxuICAgIGhlaWdodCA9IGN0eC5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc25vd2ZsYWtlcy5sZW5ndGg7IGkrKykge1xuICAgIHNub3dmbGFrZXNbaV0udXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gU25vdygpIHtcbiAgdGhpcy54ID0gcmFuZG9tKDAsIHdpZHRoKTtcbiAgdGhpcy55ID0gcmFuZG9tKGhlaWdodCwgMCk7XG4gIHRoaXMucmFkaXVzID0gcmFuZG9tKDAuNSwgMy4wKTtcbiAgdGhpcy5zcGVlZCA9IHJhbmRvbSgxLCAzKTtcbiAgdGhpcy53aW5kID0gcmFuZG9tKC0wLjUsIDMuMCk7XG59XG5cblNub3cucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICBjdHguZmlsbCgpO1xuICBjdHguY2xvc2VQYXRoKCk7XG59O1xuXG5Tbm93LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy55IC09IHRoaXMuc3BlZWQ7XG4gIHRoaXMueCArPSB0aGlzLndpbmQ7XG5cbiAgaWYgKHRoaXMueSA8IDApIHtcbiAgICB0aGlzLnkgPSBjdHguY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLnggPSByYW5kb20oMCwgd2lkdGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTbm93KGNvdW50KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIHNub3dmbGFrZXNbaV0gPSBuZXcgU25vdygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNub3dmbGFrZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzbm93Zmxha2VzW2ldLmRyYXcoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb29wKCkge1xuICBkcmF3KCk7XG4gIHVwZGF0ZSgpO1xuICBhbmltRnJhbWUobG9vcCk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuICB2YXIgcmFuZCA9IChtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpLnRvRml4ZWQoMSk7XG4gIHJhbmQgPSBNYXRoLnJvdW5kKHJhbmQpO1xuICByZXR1cm4gcmFuZDtcbn1cblxuY3JlYXRlU25vdygxNTApO1xubG9vcCgpO1xuIl19
