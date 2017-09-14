function flashLight (light, {height, width, backgroundColor}) {
	
	this.light = light;
	!height ? this.height = 200 : this.height = height;
	!width ? this.width = 200 : this.width = width;
	!backgroundColor ? this.color = "black": this.color = backgroundColor;
	
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
		"margin-left":-window.innerWidth*2-(this.width/2), 
		"margin-top": -window.innerWidth*2-(this.width/2), 
		"position": "absolute"});

	document.onmousemove = function(e) {
		cursorX = e.pageX;
		cursorY = e.pageY;
		$(flash).css('top', cursorY + 'px');
    	$(flash).css('left', cursorX + 'px');
	}

	$(document).on("swipe", function(e){ 
		cursorX = e.pageX;
		cursorY = e.pageY;
		$(flash).css("top", cursorY + "px");
    	$(flash).css("left", cursorX + "px");
   	})
}


if(window.innerWidth <= 500) {
	flashLight('.flashlight', {
		height:100,
		width:100,
	});

}else{
	flashLight('.flashlight', {
		height:250,
		width:250,
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
	//"assets/img/tree/img/upside-down.png",
	"assets/img/tree/img/portal-02.png",

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
	    setInterval(function(){ 
	    	$(".backgroundLights").fadeIn(500).css( "z-index", "800" ).fadeOut(500);
	    }, 4500);
	}
	lightsFlickering();
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

























(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Parallax = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Parallax.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @description Creates a parallax effect between an array of layers,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *              driving the motion from the gyroscope output of a smartdevice.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *              If no gyroscope is available, the cursor position is used.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var helpers = {
  propertyCache: {},
  vendors: [null, ['-webkit-', 'webkit'], ['-moz-', 'Moz'], ['-o-', 'O'], ['-ms-', 'ms']],

  clamp: function clamp(value, min, max) {
    return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
  },
  data: function data(element, name) {
    return helpers.deserialize(element.getAttribute('data-' + name));
  },
  deserialize: function deserialize(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (value === 'null') {
      return null;
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value);
    } else {
      return value;
    }
  },
  camelCase: function camelCase(value) {
    return value.replace(/-+(.)?/g, function (match, character) {
      return character ? character.toUpperCase() : '';
    });
  },
  accelerate: function accelerate(element) {
    helpers.css(element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)');
    helpers.css(element, 'transform-style', 'preserve-3d');
    helpers.css(element, 'backface-visibility', 'hidden');
  },
  transformSupport: function transformSupport(value) {
    var element = document.createElement('div'),
        propertySupport = false,
        propertyValue = null,
        featureSupport = false,
        cssProperty = null,
        jsProperty = null;
    for (var i = 0, l = helpers.vendors.length; i < l; i++) {
      if (helpers.vendors[i] !== null) {
        cssProperty = helpers.vendors[i][0] + 'transform';
        jsProperty = helpers.vendors[i][1] + 'Transform';
      } else {
        cssProperty = 'transform';
        jsProperty = 'transform';
      }
      if (element.style[jsProperty] !== undefined) {
        propertySupport = true;
        break;
      }
    }
    switch (value) {
      case '2D':
        featureSupport = propertySupport;
        break;
      case '3D':
        if (propertySupport) {
          var body = document.body || document.createElement('body'),
              documentElement = document.documentElement,
              documentOverflow = documentElement.style.overflow,
              isCreatedBody = false;

          if (!document.body) {
            isCreatedBody = true;
            documentElement.style.overflow = 'hidden';
            documentElement.appendChild(body);
            body.style.overflow = 'hidden';
            body.style.background = '';
          }

          body.appendChild(element);
          element.style[jsProperty] = 'translate3d(1px,1px,1px)';
          propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
          featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';
          documentElement.style.overflow = documentOverflow;
          body.removeChild(element);

          if (isCreatedBody) {
            body.removeAttribute('style');
            body.parentNode.removeChild(body);
          }
        }
        break;
    }
    return featureSupport;
  },
  css: function css(element, property, value) {
    var jsProperty = helpers.propertyCache[property];
    if (!jsProperty) {
      for (var i = 0, l = helpers.vendors.length; i < l; i++) {
        if (helpers.vendors[i] !== null) {
          jsProperty = helpers.camelCase(helpers.vendors[i][1] + '-' + property);
        } else {
          jsProperty = property;
        }
        if (element.style[jsProperty] !== undefined) {
          helpers.propertyCache[property] = jsProperty;
          break;
        }
      }
    }
    element.style[jsProperty] = value;
  }
};

var MAGIC_NUMBER = 30,
    DEFAULTS = {
  relativeInput: false,
  clipRelativeInput: false,
  calibrationThreshold: 100,
  calibrationDelay: 500,
  supportDelay: 500,
  calibrateX: false,
  calibrateY: true,
  invertX: true,
  invertY: true,
  limitX: false,
  limitY: false,
  scalarX: 10.0,
  scalarY: 10.0,
  frictionX: 0.1,
  frictionY: 0.1,
  originX: 0.5,
  originY: 0.5,
  pointerEvents: false,
  precision: 1
};

var Parallax = function () {
  function Parallax(element, options) {
    _classCallCheck(this, Parallax);

    this.element = element;
    this.layers = element.getElementsByClassName('layer');

    var data = {
      calibrateX: helpers.data(this.element, 'calibrate-x'),
      calibrateY: helpers.data(this.element, 'calibrate-y'),
      invertX: helpers.data(this.element, 'invert-x'),
      invertY: helpers.data(this.element, 'invert-y'),
      limitX: helpers.data(this.element, 'limit-x'),
      limitY: helpers.data(this.element, 'limit-y'),
      scalarX: helpers.data(this.element, 'scalar-x'),
      scalarY: helpers.data(this.element, 'scalar-y'),
      frictionX: helpers.data(this.element, 'friction-x'),
      frictionY: helpers.data(this.element, 'friction-y'),
      originX: helpers.data(this.element, 'origin-x'),
      originY: helpers.data(this.element, 'origin-y'),
      pointerEvents: helpers.data(this.element, 'pointer-events'),
      precision: helpers.data(this.element, 'precision'),
      relativeInput: helpers.data(this.element, 'relative-input'),
      clipRelativeInput: helpers.data(this.element, 'clip-relative-input')
    };

    for (var key in data) {
      if (data[key] === null) {
        delete data[key];
      }
    }

    Object.assign(this, DEFAULTS, data, options);

    this.calibrationTimer = null;
    this.calibrationFlag = true;
    this.enabled = false;
    this.depthsX = [];
    this.depthsY = [];
    this.raf = null;

    this.bounds = null;
    this.elementPositionX = 0;
    this.elementPositionY = 0;
    this.elementWidth = 0;
    this.elementHeight = 0;

    this.elementCenterX = 0;
    this.elementCenterY = 0;

    this.elementRangeX = 0;
    this.elementRangeY = 0;

    this.calibrationX = 0;
    this.calibrationY = 0;

    this.inputX = 0;
    this.inputY = 0;

    this.motionX = 0;
    this.motionY = 0;

    this.velocityX = 0;
    this.velocityY = 0;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
    this.onOrientationTimer = this.onOrientationTimer.bind(this);
    this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
    this.onAnimationFrame = this.onAnimationFrame.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);

    this.windowWidth = null;
    this.windowHeight = null;
    this.windowCenterX = null;
    this.windowCenterY = null;
    this.windowRadiusX = null;
    this.windowRadiusY = null;
    this.portrait = null;
    this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    this.motionSupport = !!window.DeviceMotionEvent && !this.desktop;
    this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop;
    this.orientationStatus = 0;
    this.motionStatus = 0;

    this.initialise();
  }

  _createClass(Parallax, [{
    key: 'initialise',
    value: function initialise() {
      if (this.transform2DSupport === undefined) {
        this.transform2DSupport = helpers.transformSupport('2D');
        this.transform3DSupport = helpers.transformSupport('3D');
      }

      // Configure Context Styles
      if (this.transform3DSupport) {
        helpers.accelerate(this.element);
      }

      var style = window.getComputedStyle(this.element);
      if (style.getPropertyValue('position') === 'static') {
        this.element.style.position = 'relative';
      }

      // Pointer events
      if (!this.pointerEvents) {
        this.element.style.pointerEvents = 'none';
      }

      // Setup
      this.updateLayers();
      this.updateDimensions();
      this.enable();
      this.queueCalibration(this.calibrationDelay);
    }
  }, {
    key: 'updateLayers',
    value: function updateLayers() {
      this.layers = this.element.getElementsByClassName('layer');
      this.depthsX = [];
      this.depthsY = [];

      for (var index = 0; index < this.layers.length; index++) {
        var layer = this.layers[index];

        if (this.transform3DSupport) {
          helpers.accelerate(layer);
        }

        layer.style.position = index ? 'absolute' : 'relative';
        layer.style.display = 'block';
        layer.style.left = 0;
        layer.style.top = 0;

        var depth = helpers.data(layer, 'depth') || 0;
        this.depthsX.push(helpers.data(layer, 'depth-x') || depth);
        this.depthsY.push(helpers.data(layer, 'depth-y') || depth);
      }
    }
  }, {
    key: 'updateDimensions',
    value: function updateDimensions() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.windowCenterX = this.windowWidth * this.originX;
      this.windowCenterY = this.windowHeight * this.originY;
      this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX);
      this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
    }
  }, {
    key: 'updateBounds',
    value: function updateBounds() {
      this.bounds = this.element.getBoundingClientRect();
      this.elementPositionX = this.bounds.left;
      this.elementPositionY = this.bounds.top;
      this.elementWidth = this.bounds.width;
      this.elementHeight = this.bounds.height;
      this.elementCenterX = this.elementWidth * this.originX;
      this.elementCenterY = this.elementHeight * this.originY;
      this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX);
      this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
    }
  }, {
    key: 'queueCalibration',
    value: function queueCalibration(delay) {
      clearTimeout(this.calibrationTimer);
      this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
    }
  }, {
    key: 'enable',
    value: function enable() {
      if (this.enabled) {
        return;
      }
      this.enabled = true;

      if (this.orientationSupport) {
        this.portrait = null;
        window.addEventListener('deviceorientation', this.onDeviceOrientation);
        setTimeout(this.onOrientationTimer, this.supportDelay);
      } else if (this.motionSupport) {
        this.portrait = null;
        window.addEventListener('devicemotion', this.onDeviceMotion);
        setTimeout(this.onMotionTimer, this.supportDelay);
      } else {
        this.calibrationX = 0;
        this.calibrationY = 0;
        this.portrait = false;
        window.addEventListener('mousemove', this.onMouseMove);
      }

      window.addEventListener('resize', this.onWindowResize);
      this.raf = (0, _raf2.default)(this.onAnimationFrame);
    }
  }, {
    key: 'disable',
    value: function disable() {
      if (!this.enabled) {
        return;
      }
      this.enabled = false;

      if (this.orientationSupport) {
        window.removeEventListener('deviceorientation', this.onDeviceOrientation);
      } else if (this.motionSupport) {
        window.removeEventListener('devicemotion', this.onDeviceMotion);
      } else {
        window.removeEventListener('mousemove', this.onMouseMove);
      }

      window.removeEventListener('resize', this.onWindowResize);
      _raf2.default.cancel(this.raf);
    }
  }, {
    key: 'calibrate',
    value: function calibrate(x, y) {
      this.calibrateX = x === undefined ? this.calibrateX : x;
      this.calibrateY = y === undefined ? this.calibrateY : y;
    }
  }, {
    key: 'invert',
    value: function invert(x, y) {
      this.invertX = x === undefined ? this.invertX : x;
      this.invertY = y === undefined ? this.invertY : y;
    }
  }, {
    key: 'friction',
    value: function friction(x, y) {
      this.frictionX = x === undefined ? this.frictionX : x;
      this.frictionY = y === undefined ? this.frictionY : y;
    }
  }, {
    key: 'scalar',
    value: function scalar(x, y) {
      this.scalarX = x === undefined ? this.scalarX : x;
      this.scalarY = y === undefined ? this.scalarY : y;
    }
  }, {
    key: 'limit',
    value: function limit(x, y) {
      this.limitX = x === undefined ? this.limitX : x;
      this.limitY = y === undefined ? this.limitY : y;
    }
  }, {
    key: 'origin',
    value: function origin(x, y) {
      this.originX = x === undefined ? this.originX : x;
      this.originY = y === undefined ? this.originY : y;
    }
  }, {
    key: 'setPosition',
    value: function setPosition(element, x, y) {
      x = x.toFixed(this.precision) + 'px';
      y = y.toFixed(this.precision) + 'px';
      if (this.transform3DSupport) {
        helpers.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)');
      } else if (this.transform2DSupport) {
        helpers.css(element, 'transform', 'translate(' + x + ',' + y + ')');
      } else {
        element.style.left = x;
        element.style.top = y;
      }
    }
  }, {
    key: 'onOrientationTimer',
    value: function onOrientationTimer() {
      if (this.orientationSupport && this.orientationStatus === 0) {
        this.disable();
        this.orientationSupport = false;
        this.enable();
      }
    }
  }, {
    key: 'onMotionTimer',
    value: function onMotionTimer() {
      if (this.motionSupport && this.motionStatus === 0) {
        this.disable();
        this.motionSupport = false;
        this.enable();
      }
    }
  }, {
    key: 'onCalibrationTimer',
    value: function onCalibrationTimer() {
      this.calibrationFlag = true;
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      this.updateDimensions();
    }
  }, {
    key: 'onAnimationFrame',
    value: function onAnimationFrame() {
      this.updateBounds();
      var calibratedInputX = this.inputX - this.calibrationX,
          calibratedInputY = this.inputY - this.calibrationY;
      if (Math.abs(calibratedInputX) > this.calibrationThreshold || Math.abs(calibratedInputY) > this.calibrationThreshold) {
        this.queueCalibration(0);
      }
      if (this.portrait) {
        this.motionX = this.calibrateX ? calibratedInputY : this.inputY;
        this.motionY = this.calibrateY ? calibratedInputX : this.inputX;
      } else {
        this.motionX = this.calibrateX ? calibratedInputX : this.inputX;
        this.motionY = this.calibrateY ? calibratedInputY : this.inputY;
      }
      this.motionX *= this.elementWidth * (this.scalarX / 100);
      this.motionY *= this.elementHeight * (this.scalarY / 100);
      if (!isNaN(parseFloat(this.limitX))) {
        this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX);
      }
      if (!isNaN(parseFloat(this.limitY))) {
        this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY);
      }
      this.velocityX += (this.motionX - this.velocityX) * this.frictionX;
      this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
      for (var index = 0; index < this.layers.length; index++) {
        var layer = this.layers[index],
            depthX = this.depthsX[index],
            depthY = this.depthsY[index],
            xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)),
            yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1));
        this.setPosition(layer, xOffset, yOffset);
      }
      this.raf = (0, _raf2.default)(this.onAnimationFrame);
    }
  }, {
    key: 'rotate',
    value: function rotate(beta, gamma) {
      // Extract Rotation
      var x = (beta || event.beta || 0) / MAGIC_NUMBER,
          //  -90 :: 90
      y = (gamma || event.gamma || 0) / MAGIC_NUMBER; // -180 :: 180

      // Detect Orientation Change
      var portrait = this.windowHeight > this.windowWidth;
      if (this.portrait !== portrait) {
        this.portrait = portrait;
        this.calibrationFlag = true;
      }

      if (this.calibrationFlag) {
        this.calibrationFlag = false;
        this.calibrationX = x;
        this.calibrationY = y;
      }

      this.inputX = x;
      this.inputY = y;
    }
  }, {
    key: 'onDeviceOrientation',
    value: function onDeviceOrientation(event) {
      var beta = event.beta;
      var gamma = event.gamma;
      if (!this.desktop && beta !== null && gamma !== null) {
        this.orientationStatus = 1;
        this.rotate(beta, gamma);
      }
    }
  }, {
    key: 'onDeviceMotion',
    value: function onDeviceMotion(event) {
      var beta = event.rotationRate.beta;
      var gamma = event.rotationRate.gamma;
      if (!this.desktop && beta !== null && gamma !== null) {
        this.motionStatus = 1;
        this.rotate(beta, gamma);
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var clientX = event.clientX,
          clientY = event.clientY;

      if (!this.orientationSupport && this.relativeInput) {
        // Clip mouse coordinates inside element bounds.
        if (this.clipRelativeInput) {
          clientX = Math.max(clientX, this.elementPositionX);
          clientX = Math.min(clientX, this.elementPositionX + this.elementWidth);
          clientY = Math.max(clientY, this.elementPositionY);
          clientY = Math.min(clientY, this.elementPositionY + this.elementHeight);
        }
        // Calculate input relative to the element.
        if (this.elementRangeX && this.elementRangeY) {
          this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX;
          this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY;
        }
      } else {
        // Calculate input relative to the window.
        if (this.windowRadiusX && this.windowRadiusY) {
          this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX;
          this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY;
        }
      }
    }
  }]);

  return Parallax;
}();

module.exports = Parallax;

},{"raf":4}],2:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function () {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(this);



}).call(this,require('_process'));
},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ());
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return []; };

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return; '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
(function (global){
var now = require('performance-now'),
    root = typeof window === 'undefined' ? global : window,
    vendors = ['moz', 'webkit'],
    suffix = 'AnimationFrame',
    raf = root['request' + suffix],
    caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
      id = 0,
      queue = [],
      frameDuration = 1000 / 60;

  raf = function (callback) {
    if (queue.length === 0) {
      var _now = now(),
          next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };

  caf = function (handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
module.exports.cancel = function () {
  caf.apply(root, arguments);
};
module.exports.polyfill = function () {
  root.requestAnimationFrame = raf;
  root.cancelAnimationFrame = caf;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"performance-now":2}]},{},[1])(1);
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
}

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
}

Snow.prototype.update = function() {
  this.y -= this.speed;
  this.x += this.wind;

  if (this.y < 0) {
    this.y = ctx.canvas.height;
    this.x = random(0, width);
  }
}

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYXNoTGlnaHQuanMiLCJtYWluLmpzIiwicGFyYWxsYXguanMiLCJwYXJ0aWNsZXMuanMiLCJzbm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZsYXNoTGlnaHQgKGxpZ2h0LCB7aGVpZ2h0LCB3aWR0aCwgYmFja2dyb3VuZENvbG9yfSkge1xuXHRcblx0dGhpcy5saWdodCA9IGxpZ2h0O1xuXHQhaGVpZ2h0ID8gdGhpcy5oZWlnaHQgPSAyMDAgOiB0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0IXdpZHRoID8gdGhpcy53aWR0aCA9IDIwMCA6IHRoaXMud2lkdGggPSB3aWR0aDtcblx0IWJhY2tncm91bmRDb2xvciA/IHRoaXMuY29sb3IgPSBcImJsYWNrXCI6IHRoaXMuY29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XG5cdFxuXHR2YXIgZmxhc2ggPSB0aGlzLmxpZ2h0O1xuXHRjb25zb2xlLmxvZyhmbGFzaCk7XG5cblx0JChmbGFzaCkucGFyZW50KCkuY3NzKFwib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIik7XG5cblx0JChmbGFzaCkuY3NzKHtcblx0XHRcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiLFxuXHRcdFwiYm94LXNpemluZ1wiOiBcImNvbnRlbnQtYm94XCIsXG5cdFx0XCJoZWlnaHRcIjogdGhpcy5oZWlnaHQgKyBcInB4XCIsIFxuXHRcdFwid2lkdGhcIjogdGhpcy53aWR0aCArIFwicHhcIiwgXG5cdFx0XCJib3JkZXItY29sb3JcIjogdGhpcy5jb2xvciwgXG5cdFx0XCJib3JkZXItd2lkdGhcIjogd2luZG93LmlubmVyV2lkdGggKiAyICsgXCJweFwiLCBcblx0XHRcImJvcmRlci1zdHlsZVwiOiBcInNvbGlkXCIsXG5cdFx0XCJib3JkZXItcmFkaXVzXCI6IFwiNTAlXCIsXG5cdFx0XCJtYXJnaW4tbGVmdFwiOi13aW5kb3cuaW5uZXJXaWR0aCoyLSh0aGlzLndpZHRoLzIpLCBcblx0XHRcIm1hcmdpbi10b3BcIjogLXdpbmRvdy5pbm5lcldpZHRoKjItKHRoaXMud2lkdGgvMiksIFxuXHRcdFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwifSk7XG5cblx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKSB7XG5cdFx0Y3Vyc29yWCA9IGUucGFnZVg7XG5cdFx0Y3Vyc29yWSA9IGUucGFnZVk7XG5cdFx0JChmbGFzaCkuY3NzKCd0b3AnLCBjdXJzb3JZICsgJ3B4Jyk7XG4gICAgXHQkKGZsYXNoKS5jc3MoJ2xlZnQnLCBjdXJzb3JYICsgJ3B4Jyk7XG5cdH1cblxuXHQkKGRvY3VtZW50KS5vbihcInN3aXBlXCIsIGZ1bmN0aW9uKGUpeyBcblx0XHRjdXJzb3JYID0gZS5wYWdlWDtcblx0XHRjdXJzb3JZID0gZS5wYWdlWTtcblx0XHQkKGZsYXNoKS5jc3MoXCJ0b3BcIiwgY3Vyc29yWSArIFwicHhcIik7XG4gICAgXHQkKGZsYXNoKS5jc3MoXCJsZWZ0XCIsIGN1cnNvclggKyBcInB4XCIpO1xuICAgXHR9KVxufVxuXG5cbmlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDUwMCkge1xuXHRmbGFzaExpZ2h0KCcuZmxhc2hsaWdodCcsIHtcblx0XHRoZWlnaHQ6MTAwLFxuXHRcdHdpZHRoOjEwMCxcblx0fSk7XG5cbn1lbHNle1xuXHRmbGFzaExpZ2h0KCcuZmxhc2hsaWdodCcsIHtcblx0XHRoZWlnaHQ6MjUwLFxuXHRcdHdpZHRoOjI1MCxcblx0fSk7XG59IiwiY29uc29sZS5sb2coXCJTdHJhbmdlciBUaGluZ3MgaGFwcGVuLi4uXCIpO1xuXG4vLy8vLyBQcmVsb2FkYWJsZXMgLy8vLy9cblxuXG52YXIgcHJlbG9hZGFibGVzID0gW1xuXHRcImFzc2V0cy9pbWcvTGlnaHRzL01vYmlsZS9pbWcvbm8tbGlnaHRzLTAzLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL1RhYmxldC9pbWcvTm8tbGlnaHQucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9MaWdodHMvRGVza3RvcC9pbWcvTm8tbGlnaHRzLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL01vYmlsZS9pbWcvSC1saWdodC0wMy5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9UYWJsZXQvaW1nL0gtbGlnaHQucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9MaWdodHMvRGVza3RvcC9pbWcvSC1saWdodC5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9Nb2JpbGUvaW1nL0UtbGlnaHQtMDMucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9MaWdodHMvVGFibGV0L2ltZy9FLWxpZ2h0LnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL0Rlc2t0b3AvaW1nL0UtbGlnaHQucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9MaWdodHMvTW9iaWxlL2ltZy9MLWxpZ2h0LTAzLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL1RhYmxldC9pbWcvTC1saWdodC5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9EZXNrdG9wL2ltZy9MLWxpZ2h0LnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL01vYmlsZS9pbWcvUC1saWdodC0wMy5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9UYWJsZXQvaW1nL1AtbGlnaHQucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9MaWdodHMvRGVza3RvcC9pbWcvUC1saWdodC5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9Nb2JpbGUvaW1nL25vLWxpZ2h0cy0wMy5wbmdcIixcblx0XCJhc3NldHMvaW1nL0xpZ2h0cy9UYWJsZXQvaW1nL05vLWxpZ2h0LnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvTGlnaHRzL0Rlc2t0b3AvaW1nL2FsbC1saWdodHMucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvTmFuY3kucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvTHVjYXMucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvU3RldmUucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvSm9uYXRoYW4ucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvRHVzdGluLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvY2hhcmFjdGVyX3BhZ2UvaW1nL0pveWNlLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvY2hhcmFjdGVyX3BhZ2UvaW1nL01pa2UucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvV2lsbC5wbmdcIixcblx0XCJhc3NldHMvaW1nL2NoYXJhY3Rlcl9wYWdlL2ltZy9Ib3BwZXIucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy9jaGFyYWN0ZXJfcGFnZS9pbWcvRWxldmVuLnBuZ1wiLFxuXHRcImFzc2V0cy9pbWcvdHJlZS9pbWcvbm9ybWFsdHJlZS0wMi5wbmdcIixcblx0Ly9cImFzc2V0cy9pbWcvdHJlZS9pbWcvdXBzaWRlLWRvd24ucG5nXCIsXG5cdFwiYXNzZXRzL2ltZy90cmVlL2ltZy9wb3J0YWwtMDIucG5nXCIsXG5cbl1cbnZhciBwcmVsb2FkaW5nSW1hZ2U7XG5cbnZhciBwcmVsb2FkSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByZWxvYWRIb2xkZXIuY2xhc3NOYW1lID0gXCJwcmVsb2FkLWhvbGRlclwiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcmVsb2FkSG9sZGVyKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVsb2FkYWJsZXMubGVuZ3RoOyBpKyspIHtcblx0cHJlbG9hZGluZ0ltYWdlID0gbmV3IEltYWdlKCk7XG5cdHByZWxvYWRpbmdJbWFnZS5zcmMgPSBwcmVsb2FkYWJsZXNbaV07XG5cdHByZWxvYWRIb2xkZXIuYXBwZW5kQ2hpbGQocHJlbG9hZGluZ0ltYWdlKTtcbn07XG5cbi8vLy8vLyBJbmRleCAvLy8vLy9cblxuVHdlZW5NYXguZnJvbVRvKFwiLmxpZ2h0c1wiLCAyLCB7b3BhY2l0eTogMCwgbGVmdDogLTUwLCB0b3A6IC0xMDAsIGRlbGF5OjR9LCB7b3BhY2l0eTogMSwgbGVmdDogMCwgdG9wOiAwLCBkZWxheTogMn0pO1xuVHdlZW5NYXguZnJvbVRvKFwiLmhhbmRcIiwgMiwge29wYWNpdHk6IDAsIGxlZnQ6IC01MCwgYm90dG9tOiAtMTAwLCBkZWxheTogNX0sIHtvcGFjaXR5OiAxLCBsZWZ0OiAwLCBib3R0b206IDAsIGRlbGF5OiAyfSk7XG5Ud2Vlbk1heC5mcm9tVG8oXCIubmV0ZmxpeC1yZWRcIiwgMi41LCB7b3BhY2l0eTogMCwgZGVsYXk6IDMuNX0sIHtvcGFjaXR5OiAxLCBkZWxheTogMy41fSk7XG5Ud2Vlbk1heC5mcm9tVG8oXCIucmVsZWFzZVwiLCAyLjUsIHtvcGFjaXR5OiAwLCBkZWxheTogNC41fSwge29wYWNpdHk6IDEsIGRlbGF5OiA0LjV9KTtcblxuaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTYwKSB7IFxuXHRUd2Vlbk1heC5mcm9tVG8oXCIudHJlZVwiLCAyLCB7b3BhY2l0eTogMCwgcmlnaHQ6IC0xNTAsIGRlbGF5OiA2fSwge29wYWNpdHk6IDEsIHJpZ2h0OiAtNDAsIGRlbGF5OiAyfSk7XG5cdFR3ZWVuTWF4LmZyb21UbyhcIi50aXRsZVwiLCA0LCB7b3BhY2l0eTogMCwgc2NhbGU6IDAuN30sIHtvcGFjaXR5OiAxLCBzY2FsZTogMS41fSk7XG5cdFR3ZWVuTWF4LmZyb21UbyhcIi5zZWFzb25cIiwgMi41LCB7b3BhY2l0eTogMCwgc2NhbGU6IDEsIGRlbGF5OiAzLjV9LCB7b3BhY2l0eTogMSwgc2NhbGU6IDEuMywgZGVsYXk6IDMuNX0pO1xuXG59IGVsc2UgIHtcblx0VHdlZW5NYXguZnJvbVRvKFwiLnRpdGxlXCIsIDQsIHtvcGFjaXR5OiAwLCBzY2FsZTogMX0sIHtvcGFjaXR5OiAxLCBzY2FsZTogMS41fSk7XG5cdFR3ZWVuTWF4LmZyb21UbyhcIi50cmVlXCIsIDIsIHtvcGFjaXR5OiAwLCByaWdodDogLTUwLCBkZWxheTogNn0sIHtvcGFjaXR5OiAxLCByaWdodDogMCwgZGVsYXk6IDJ9KTtcblx0VHdlZW5NYXguZnJvbVRvKFwiLmxpZ2h0c1wiLCAwLjUsIHtzY2FsZTogMX0sIHtzY2FsZTogMS4xLCB5b3lvOiB0cnVlLCByZXBlYXQ6IDR9KTtcblx0VHdlZW5NYXguZnJvbVRvKFwiLmhhbmRcIiwgMSwge3JvdGF0aW9uOiAwfSwge3JvdGF0aW9uOiA1LCB5b3lvOiB0cnVlLCByZXBlYXQ6IDQsIGRlbGF5OiA0fSk7XG5cdFR3ZWVuTWF4LmZyb21UbyhcIi50cmVlXCIsIDIsIHtzY2FsZTogMX0sIHtzY2FsZTogMS4xLCB5b3lvOiB0cnVlLCByZXBlYXQ6IDR9KTtcblx0VHdlZW5NYXguZnJvbVRvKFwiLnNlYXNvblwiLCAyLjUsIHtvcGFjaXR5OiAwLCBzY2FsZTogMSwgZGVsYXk6IDMuNX0sIHtvcGFjaXR5OiAxLCBzY2FsZTogMSwgZGVsYXk6IDMuNX0pO1xuXG59XG5cbi8vLy8vLy8vLy8vIExJR0hUUyBQQUdFIC8vLy8vLy8vLy8vLy9cblxuVHdlZW5NYXguc3RhZ2dlclRvKFwiLmJhY2tncm91bmRBbmltYXRpb25cIiwgMywge2RlbGF5OiAxLCBvcGFjaXR5OiAwLCB5b3lvOiB0cnVlLCByZXBlYXQ6IDF9LCAwLjc1KTtcblxuJChmdW5jdGlvbiAoKSB7XG5cblx0JChcIi5saWdodHNUcmFpbGVyXCIpLmhpZGUoKTtcblx0VHdlZW5NYXguZnJvbVRvKFwiLmxpZ2h0QnV0dG9uXCIsIDIsIHtvcGFjaXR5OiAwLCBkZWxheTogNn0sIHtvcGFjaXR5OiAxLCBkZWxheTogNn0pO1xuXG5cdCQoXCIuSGxpZ2h0XCIgKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0JChcIi5iYWNrZ3JvdW5kSFwiKS5mYWRlSW4oXCJzbG93XCIsIDIpLmNzcyggXCJ6LWluZGV4XCIsIFwiODBcIiApLmZhZGVPdXQoMTAwMCkuYWRkQ2xhc3MoXCJhY3RpdmVIXCIpO1xuXHR9KTtcblxuXHQkKFwiLkVsaWdodFwiICkuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdCQoXCIuYmFja2dyb3VuZEVcIikuZmFkZUluKFwic2xvd1wiLCAyKS5jc3MoIFwiei1pbmRleFwiLCBcIjgxXCIgKS5mYWRlT3V0KDEwMDApLmFkZENsYXNzKFwiYWN0aXZlRVwiKTtcblx0fSk7XG5cblx0JChcIi5MbGlnaHRcIiApLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHQkKFwiLmJhY2tncm91bmRMXCIpLmZhZGVJbihcInNsb3dcIiwgMikuY3NzKCBcInotaW5kZXhcIiwgXCI4MlwiICkuZmFkZU91dCgxMDAwKS5hZGRDbGFzcyhcImFjdGl2ZUxcIik7XG5cdH0pO1xuXG5cdCQoXCIuUGxpZ2h0XCIgKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0JChcIi5iYWNrZ3JvdW5kUFwiKS5mYWRlSW4oXCJzbG93XCIsIDIpLmNzcyggXCJ6LWluZGV4XCIsIFwiODNcIiApLmZhZGVPdXQoMTAwMCkuYWRkQ2xhc3MoXCJhY3RpdmVQXCIpO1xuXHR9KTtcblxuXHQkKCBcIi5saWdodEJ1dHRvblwiICkuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVCdXR0b25cIik7XG5cdFx0XG5cdFx0aWYgKCQoXCIuSGxpZ2h0XCIpLmhhc0NsYXNzKFwiYWN0aXZlQnV0dG9uXCIpICYmICQoXCIuRWxpZ2h0XCIpLmhhc0NsYXNzKFwiYWN0aXZlQnV0dG9uXCIpICYmICQoXCIuTGxpZ2h0XCIpLmhhc0NsYXNzKFwiYWN0aXZlQnV0dG9uXCIpICYmICQoXCIuUGxpZ2h0XCIpLmhhc0NsYXNzKFwiYWN0aXZlQnV0dG9uXCIpKSB7XG5cdFx0XHQkKCBcIi5saWdodEJ1dHRvblwiICkuaGlkZSgpO1xuXHRcdFx0JChcIi5saWdodHNUcmFpbGVyXCIpLmZhZGVUbyggXCJzbG93XCIsIDEgKTsgLy9zaG91bGRuJ3QgdGhpcyBvdmVyd3JpdGUgbGluZSAxMDM/IHdoeSBub3Q/XHQgIFx0XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiBsaWdodHNGbGlja2VyaW5nKCkge1xuXHQgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsgXG5cdCAgICBcdCQoXCIuYmFja2dyb3VuZExpZ2h0c1wiKS5mYWRlSW4oNTAwKS5jc3MoIFwiei1pbmRleFwiLCBcIjgwMFwiICkuZmFkZU91dCg1MDApO1xuXHQgICAgfSwgNDUwMCk7XG5cdH1cblx0bGlnaHRzRmxpY2tlcmluZygpO1xufSk7XG5cbi8vIENoYXJhY3RlciBQYWdlIC8vXG5cbiQoZnVuY3Rpb24oKSB7XG5cdCQoJy5hcnJvd0ltZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJy5kcmF3ZXInKS5oaWRlKCk7XG5cdH0pO1xufSk7XG5cblxuLy8vLy8vLyBUcmVlIFBhZ2UgLy8vLy8vLy9cblxuVHdlZW5NYXgudG8oXCIucG9ydGFsXCIsIDEsIHtzY2FsZTogMS4xLCB5b3lvOiB0cnVlLCByZXBlYXQ6IC0xfSk7XG5cbiQoZnVuY3Rpb24gKCkge1xuXHQkKFwiLnRyZWVUcmFpbGVyXCIpLmhpZGUoKTtcblx0JChcIi5wb3J0YWwtbGlua1wiKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0VHdlZW5NYXgua2lsbFR3ZWVuc09mKCQoXCIucG9ydGFsXCIpKTtcblx0XHQkKFwiLmJhY2tncm91bmQtdHJlZVwiKS5mYWRlSW4oXCJzaG93XCIsIDEpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoLi4vLi4vYXNzZXRzL2ltZy90cmVlL2ltZy91cHNpZGUtZG93bi5wbmcpXCIpXG5cdFx0JChcIi50cmVlVHJhaWxlclwiKS5mYWRlSW4oMTUwMCk7XG5cdFx0VHdlZW5NYXguZnJvbVRvKFwiLnRyZWVUcmFpbGVyXCIsIDEuMiwge3NjYWxlOiAwfSwge3NjYWxlOiAxfSk7XG5cdFx0JChcIi50cmVlVGV4dFwiKS5mYWRlT3V0KCk7XG5cdH0pO1xufSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCIoZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5QYXJhbGxheCA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBQYXJhbGxheC5qc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGF1dGhvciBNYXR0aGV3IFdhZ2VyZmllbGQgLSBAd2FnZXJmaWVsZCwgUmVuw6kgUm90aCAtIG1haWxAcmVuZXJvdGgub3JnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIHBhcmFsbGF4IGVmZmVjdCBiZXR3ZWVuIGFuIGFycmF5IG9mIGxheWVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqICAgICAgICAgICAgICBkcml2aW5nIHRoZSBtb3Rpb24gZnJvbSB0aGUgZ3lyb3Njb3BlIG91dHB1dCBvZiBhIHNtYXJ0ZGV2aWNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgIElmIG5vIGd5cm9zY29wZSBpcyBhdmFpbGFibGUsIHRoZSBjdXJzb3IgcG9zaXRpb24gaXMgdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG52YXIgX3JhZiA9IHJlcXVpcmUoJ3JhZicpO1xuXG52YXIgX3JhZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYWYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgaGVscGVycyA9IHtcbiAgcHJvcGVydHlDYWNoZToge30sXG4gIHZlbmRvcnM6IFtudWxsLCBbJy13ZWJraXQtJywgJ3dlYmtpdCddLCBbJy1tb3otJywgJ01veiddLCBbJy1vLScsICdPJ10sIFsnLW1zLScsICdtcyddXSxcblxuICBjbGFtcDogZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG1pbiA8IG1heCA/IHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSA6IHZhbHVlIDwgbWF4ID8gbWF4IDogdmFsdWUgPiBtaW4gPyBtaW4gOiB2YWx1ZTtcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YShlbGVtZW50LCBuYW1lKSB7XG4gICAgcmV0dXJuIGhlbHBlcnMuZGVzZXJpYWxpemUoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIG5hbWUpKTtcbiAgfSxcbiAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uIGRlc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSxcbiAgY2FtZWxDYXNlOiBmdW5jdGlvbiBjYW1lbENhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLSsoLik/L2csIGZ1bmN0aW9uIChtYXRjaCwgY2hhcmFjdGVyKSB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyID8gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgICB9KTtcbiAgfSxcbiAgYWNjZWxlcmF0ZTogZnVuY3Rpb24gYWNjZWxlcmF0ZShlbGVtZW50KSB7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlKDAuMDAwMWRlZyknKTtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtLXN0eWxlJywgJ3ByZXNlcnZlLTNkJyk7XG4gICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ2JhY2tmYWNlLXZpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gIH0sXG4gIHRyYW5zZm9ybVN1cHBvcnQ6IGZ1bmN0aW9uIHRyYW5zZm9ybVN1cHBvcnQodmFsdWUpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBwcm9wZXJ0eVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgcHJvcGVydHlWYWx1ZSA9IG51bGwsXG4gICAgICAgIGZlYXR1cmVTdXBwb3J0ID0gZmFsc2UsXG4gICAgICAgIGNzc1Byb3BlcnR5ID0gbnVsbCxcbiAgICAgICAganNQcm9wZXJ0eSA9IG51bGw7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBoZWxwZXJzLnZlbmRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoaGVscGVycy52ZW5kb3JzW2ldICE9PSBudWxsKSB7XG4gICAgICAgIGNzc1Byb3BlcnR5ID0gaGVscGVycy52ZW5kb3JzW2ldWzBdICsgJ3RyYW5zZm9ybSc7XG4gICAgICAgIGpzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMV0gKyAnVHJhbnNmb3JtJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzc1Byb3BlcnR5ID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgIGpzUHJvcGVydHkgPSAndHJhbnNmb3JtJztcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LnN0eWxlW2pzUHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcGVydHlTdXBwb3J0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgJzJEJzpcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVN1cHBvcnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnM0QnOlxuICAgICAgICBpZiAocHJvcGVydHlTdXBwb3J0KSB7XG4gICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvZHknKSxcbiAgICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgICAgICBkb2N1bWVudE92ZXJmbG93ID0gZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93LFxuICAgICAgICAgICAgICBpc0NyZWF0ZWRCb2R5ID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJztcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NQcm9wZXJ0eSk7XG4gICAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBwcm9wZXJ0eVZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcGVydHlWYWx1ZS5sZW5ndGggPiAwICYmIHByb3BlcnR5VmFsdWUgIT09ICdub25lJztcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2N1bWVudE92ZXJmbG93O1xuICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAoaXNDcmVhdGVkQm9keSkge1xuICAgICAgICAgICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZVN1cHBvcnQ7XG4gIH0sXG4gIGNzczogZnVuY3Rpb24gY3NzKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHZhciBqc1Byb3BlcnR5ID0gaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XTtcbiAgICBpZiAoIWpzUHJvcGVydHkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaGVscGVycy52ZW5kb3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoaGVscGVycy52ZW5kb3JzW2ldICE9PSBudWxsKSB7XG4gICAgICAgICAganNQcm9wZXJ0eSA9IGhlbHBlcnMuY2FtZWxDYXNlKGhlbHBlcnMudmVuZG9yc1tpXVsxXSArICctJyArIHByb3BlcnR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGhlbHBlcnMucHJvcGVydHlDYWNoZVtwcm9wZXJ0eV0gPSBqc1Byb3BlcnR5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfVxufTtcblxudmFyIE1BR0lDX05VTUJFUiA9IDMwLFxuICAgIERFRkFVTFRTID0ge1xuICByZWxhdGl2ZUlucHV0OiBmYWxzZSxcbiAgY2xpcFJlbGF0aXZlSW5wdXQ6IGZhbHNlLFxuICBjYWxpYnJhdGlvblRocmVzaG9sZDogMTAwLFxuICBjYWxpYnJhdGlvbkRlbGF5OiA1MDAsXG4gIHN1cHBvcnREZWxheTogNTAwLFxuICBjYWxpYnJhdGVYOiBmYWxzZSxcbiAgY2FsaWJyYXRlWTogdHJ1ZSxcbiAgaW52ZXJ0WDogdHJ1ZSxcbiAgaW52ZXJ0WTogdHJ1ZSxcbiAgbGltaXRYOiBmYWxzZSxcbiAgbGltaXRZOiBmYWxzZSxcbiAgc2NhbGFyWDogMTAuMCxcbiAgc2NhbGFyWTogMTAuMCxcbiAgZnJpY3Rpb25YOiAwLjEsXG4gIGZyaWN0aW9uWTogMC4xLFxuICBvcmlnaW5YOiAwLjUsXG4gIG9yaWdpblk6IDAuNSxcbiAgcG9pbnRlckV2ZW50czogZmFsc2UsXG4gIHByZWNpc2lvbjogMVxufTtcblxudmFyIFBhcmFsbGF4ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQYXJhbGxheChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGF4KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5sYXllcnMgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xheWVyJyk7XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNhbGlicmF0ZVg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdjYWxpYnJhdGUteCcpLFxuICAgICAgY2FsaWJyYXRlWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS15JyksXG4gICAgICBpbnZlcnRYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnaW52ZXJ0LXgnKSxcbiAgICAgIGludmVydFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteScpLFxuICAgICAgbGltaXRYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnbGltaXQteCcpLFxuICAgICAgbGltaXRZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnbGltaXQteScpLFxuICAgICAgc2NhbGFyWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3NjYWxhci14JyksXG4gICAgICBzY2FsYXJZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXknKSxcbiAgICAgIGZyaWN0aW9uWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ZyaWN0aW9uLXgnKSxcbiAgICAgIGZyaWN0aW9uWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ZyaWN0aW9uLXknKSxcbiAgICAgIG9yaWdpblg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdvcmlnaW4teCcpLFxuICAgICAgb3JpZ2luWTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi15JyksXG4gICAgICBwb2ludGVyRXZlbnRzOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncG9pbnRlci1ldmVudHMnKSxcbiAgICAgIHByZWNpc2lvbjogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3ByZWNpc2lvbicpLFxuICAgICAgcmVsYXRpdmVJbnB1dDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ3JlbGF0aXZlLWlucHV0JyksXG4gICAgICBjbGlwUmVsYXRpdmVJbnB1dDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NsaXAtcmVsYXRpdmUtaW5wdXQnKVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGFba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgREVGQVVMVFMsIGRhdGEsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5jYWxpYnJhdGlvblRpbWVyID0gbnVsbDtcbiAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWU7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kZXB0aHNYID0gW107XG4gICAgdGhpcy5kZXB0aHNZID0gW107XG4gICAgdGhpcy5yYWYgPSBudWxsO1xuXG4gICAgdGhpcy5ib3VuZHMgPSBudWxsO1xuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWCA9IDA7XG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25ZID0gMDtcbiAgICB0aGlzLmVsZW1lbnRXaWR0aCA9IDA7XG4gICAgdGhpcy5lbGVtZW50SGVpZ2h0ID0gMDtcblxuICAgIHRoaXMuZWxlbWVudENlbnRlclggPSAwO1xuICAgIHRoaXMuZWxlbWVudENlbnRlclkgPSAwO1xuXG4gICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gMDtcbiAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSAwO1xuXG4gICAgdGhpcy5jYWxpYnJhdGlvblggPSAwO1xuICAgIHRoaXMuY2FsaWJyYXRpb25ZID0gMDtcblxuICAgIHRoaXMuaW5wdXRYID0gMDtcbiAgICB0aGlzLmlucHV0WSA9IDA7XG5cbiAgICB0aGlzLm1vdGlvblggPSAwO1xuICAgIHRoaXMubW90aW9uWSA9IDA7XG5cbiAgICB0aGlzLnZlbG9jaXR5WCA9IDA7XG4gICAgdGhpcy52ZWxvY2l0eVkgPSAwO1xuXG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24gPSB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uT3JpZW50YXRpb25UaW1lciA9IHRoaXMub25PcmllbnRhdGlvblRpbWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNhbGlicmF0aW9uVGltZXIgPSB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25BbmltYXRpb25GcmFtZSA9IHRoaXMub25BbmltYXRpb25GcmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLndpbmRvd1dpZHRoID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0hlaWdodCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dDZW50ZXJYID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0NlbnRlclkgPSBudWxsO1xuICAgIHRoaXMud2luZG93UmFkaXVzWCA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dSYWRpdXNZID0gbnVsbDtcbiAgICB0aGlzLnBvcnRyYWl0ID0gbnVsbDtcbiAgICB0aGlzLmRlc2t0b3AgPSAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fEJCMTB8bW9iaXx0YWJsZXR8b3BlcmEgbWluaXxuZXh1cyA3KS9pKTtcbiAgICB0aGlzLm1vdGlvblN1cHBvcnQgPSAhIXdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCAmJiAhdGhpcy5kZXNrdG9wO1xuICAgIHRoaXMub3JpZW50YXRpb25TdXBwb3J0ID0gISF3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCAmJiAhdGhpcy5kZXNrdG9wO1xuICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAwO1xuICAgIHRoaXMubW90aW9uU3RhdHVzID0gMDtcblxuICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhcmFsbGF4LCBbe1xuICAgIGtleTogJ2luaXRpYWxpc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsaXNlKCkge1xuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtMkRTdXBwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzJEJyk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0ID0gaGVscGVycy50cmFuc2Zvcm1TdXBwb3J0KCczRCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb25maWd1cmUgQ29udGV4dCBTdHlsZXNcbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmFjY2VsZXJhdGUodGhpcy5lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtcbiAgICAgIGlmIChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgfVxuXG4gICAgICAvLyBQb2ludGVyIGV2ZW50c1xuICAgICAgaWYgKCF0aGlzLnBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwXG4gICAgICB0aGlzLnVwZGF0ZUxheWVycygpO1xuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKHRoaXMuY2FsaWJyYXRpb25EZWxheSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlTGF5ZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlTGF5ZXJzKCkge1xuICAgICAgdGhpcy5sYXllcnMgPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGF5ZXInKTtcbiAgICAgIHRoaXMuZGVwdGhzWCA9IFtdO1xuICAgICAgdGhpcy5kZXB0aHNZID0gW107XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxheWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNbaW5kZXhdO1xuXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICAgIGhlbHBlcnMuYWNjZWxlcmF0ZShsYXllcik7XG4gICAgICAgIH1cblxuICAgICAgICBsYXllci5zdHlsZS5wb3NpdGlvbiA9IGluZGV4ID8gJ2Fic29sdXRlJyA6ICdyZWxhdGl2ZSc7XG4gICAgICAgIGxheWVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBsYXllci5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgbGF5ZXIuc3R5bGUudG9wID0gMDtcblxuICAgICAgICB2YXIgZGVwdGggPSBoZWxwZXJzLmRhdGEobGF5ZXIsICdkZXB0aCcpIHx8IDA7XG4gICAgICAgIHRoaXMuZGVwdGhzWC5wdXNoKGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoLXgnKSB8fCBkZXB0aCk7XG4gICAgICAgIHRoaXMuZGVwdGhzWS5wdXNoKGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoLXknKSB8fCBkZXB0aCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRGltZW5zaW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIHRoaXMud2luZG93Q2VudGVyWCA9IHRoaXMud2luZG93V2lkdGggKiB0aGlzLm9yaWdpblg7XG4gICAgICB0aGlzLndpbmRvd0NlbnRlclkgPSB0aGlzLndpbmRvd0hlaWdodCAqIHRoaXMub3JpZ2luWTtcbiAgICAgIHRoaXMud2luZG93UmFkaXVzWCA9IE1hdGgubWF4KHRoaXMud2luZG93Q2VudGVyWCwgdGhpcy53aW5kb3dXaWR0aCAtIHRoaXMud2luZG93Q2VudGVyWCk7XG4gICAgICB0aGlzLndpbmRvd1JhZGl1c1kgPSBNYXRoLm1heCh0aGlzLndpbmRvd0NlbnRlclksIHRoaXMud2luZG93SGVpZ2h0IC0gdGhpcy53aW5kb3dDZW50ZXJZKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVCb3VuZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVCb3VuZHMoKSB7XG4gICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWCA9IHRoaXMuYm91bmRzLmxlZnQ7XG4gICAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblkgPSB0aGlzLmJvdW5kcy50b3A7XG4gICAgICB0aGlzLmVsZW1lbnRXaWR0aCA9IHRoaXMuYm91bmRzLndpZHRoO1xuICAgICAgdGhpcy5lbGVtZW50SGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgdGhpcy5lbGVtZW50Q2VudGVyWCA9IHRoaXMuZWxlbWVudFdpZHRoICogdGhpcy5vcmlnaW5YO1xuICAgICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IHRoaXMuZWxlbWVudEhlaWdodCAqIHRoaXMub3JpZ2luWTtcbiAgICAgIHRoaXMuZWxlbWVudFJhbmdlWCA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclgsIHRoaXMuZWxlbWVudFdpZHRoIC0gdGhpcy5lbGVtZW50Q2VudGVyWCk7XG4gICAgICB0aGlzLmVsZW1lbnRSYW5nZVkgPSBNYXRoLm1heCh0aGlzLmVsZW1lbnRDZW50ZXJZLCB0aGlzLmVsZW1lbnRIZWlnaHQgLSB0aGlzLmVsZW1lbnRDZW50ZXJZKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdxdWV1ZUNhbGlicmF0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVldWVDYWxpYnJhdGlvbihkZWxheSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2FsaWJyYXRpb25UaW1lcik7XG4gICAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMub25DYWxpYnJhdGlvblRpbWVyLCBkZWxheSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IG51bGw7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbik7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5vbk9yaWVudGF0aW9uVGltZXIsIHRoaXMuc3VwcG9ydERlbGF5KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3Rpb25TdXBwb3J0KSB7XG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBudWxsO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbik7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5vbk1vdGlvblRpbWVyLCB0aGlzLnN1cHBvcnREZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDA7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0gMDtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICAgIHRoaXMucmFmID0gKDAsIF9yYWYyLmRlZmF1bHQpKHRoaXMub25BbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb25TdXBwb3J0KSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW90aW9uU3VwcG9ydCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGV2aWNlbW90aW9uJywgdGhpcy5vbkRldmljZU1vdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICAgIF9yYWYyLmRlZmF1bHQuY2FuY2VsKHRoaXMucmFmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWxpYnJhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxpYnJhdGUoeCwgeSkge1xuICAgICAgdGhpcy5jYWxpYnJhdGVYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVYIDogeDtcbiAgICAgIHRoaXMuY2FsaWJyYXRlWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuY2FsaWJyYXRlWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW52ZXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW52ZXJ0KHgsIHkpIHtcbiAgICAgIHRoaXMuaW52ZXJ0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuaW52ZXJ0WCA6IHg7XG4gICAgICB0aGlzLmludmVydFkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmludmVydFkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZyaWN0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZnJpY3Rpb24oeCwgeSkge1xuICAgICAgdGhpcy5mcmljdGlvblggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmZyaWN0aW9uWCA6IHg7XG4gICAgICB0aGlzLmZyaWN0aW9uWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuZnJpY3Rpb25ZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzY2FsYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY2FsYXIoeCwgeSkge1xuICAgICAgdGhpcy5zY2FsYXJYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJYIDogeDtcbiAgICAgIHRoaXMuc2NhbGFyWSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NhbGFyWSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGltaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaW1pdCh4LCB5KSB7XG4gICAgICB0aGlzLmxpbWl0WCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMubGltaXRYIDogeDtcbiAgICAgIHRoaXMubGltaXRZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29yaWdpbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9yaWdpbih4LCB5KSB7XG4gICAgICB0aGlzLm9yaWdpblggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblggOiB4O1xuICAgICAgdGhpcy5vcmlnaW5ZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5vcmlnaW5ZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvc2l0aW9uKGVsZW1lbnQsIHgsIHkpIHtcbiAgICAgIHggPSB4LnRvRml4ZWQodGhpcy5wcmVjaXNpb24pICsgJ3B4JztcbiAgICAgIHkgPSB5LnRvRml4ZWQodGhpcy5wcmVjaXNpb24pICsgJ3B4JztcbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybTNEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywnICsgeSArICcsMCknKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQpIHtcbiAgICAgICAgaGVscGVycy5jc3MoZWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHggKyAnLCcgKyB5ICsgJyknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHg7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0geTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk9yaWVudGF0aW9uVGltZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk9yaWVudGF0aW9uVGltZXIoKSB7XG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQgJiYgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9PT0gMCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1vdGlvblRpbWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3Rpb25UaW1lcigpIHtcbiAgICAgIGlmICh0aGlzLm1vdGlvblN1cHBvcnQgJiYgdGhpcy5tb3Rpb25TdGF0dXMgPT09IDApIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMubW90aW9uU3VwcG9ydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2FsaWJyYXRpb25UaW1lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2FsaWJyYXRpb25UaW1lcigpIHtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbldpbmRvd1Jlc2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25BbmltYXRpb25GcmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgdmFyIGNhbGlicmF0ZWRJbnB1dFggPSB0aGlzLmlucHV0WCAtIHRoaXMuY2FsaWJyYXRpb25YLFxuICAgICAgICAgIGNhbGlicmF0ZWRJbnB1dFkgPSB0aGlzLmlucHV0WSAtIHRoaXMuY2FsaWJyYXRpb25ZO1xuICAgICAgaWYgKE1hdGguYWJzKGNhbGlicmF0ZWRJbnB1dFgpID4gdGhpcy5jYWxpYnJhdGlvblRocmVzaG9sZCB8fCBNYXRoLmFicyhjYWxpYnJhdGVkSW5wdXRZKSA+IHRoaXMuY2FsaWJyYXRpb25UaHJlc2hvbGQpIHtcbiAgICAgICAgdGhpcy5xdWV1ZUNhbGlicmF0aW9uKDApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucG9ydHJhaXQpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25YID0gdGhpcy5jYWxpYnJhdGVYID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZO1xuICAgICAgICB0aGlzLm1vdGlvblkgPSB0aGlzLmNhbGlicmF0ZVkgPyBjYWxpYnJhdGVkSW5wdXRYIDogdGhpcy5pbnB1dFg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdGlvblggPSB0aGlzLmNhbGlicmF0ZVggPyBjYWxpYnJhdGVkSW5wdXRYIDogdGhpcy5pbnB1dFg7XG4gICAgICAgIHRoaXMubW90aW9uWSA9IHRoaXMuY2FsaWJyYXRlWSA/IGNhbGlicmF0ZWRJbnB1dFkgOiB0aGlzLmlucHV0WTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW90aW9uWCAqPSB0aGlzLmVsZW1lbnRXaWR0aCAqICh0aGlzLnNjYWxhclggLyAxMDApO1xuICAgICAgdGhpcy5tb3Rpb25ZICo9IHRoaXMuZWxlbWVudEhlaWdodCAqICh0aGlzLnNjYWxhclkgLyAxMDApO1xuICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRYKSkpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25YID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblgsIC10aGlzLmxpbWl0WCwgdGhpcy5saW1pdFgpO1xuICAgICAgfVxuICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMubGltaXRZKSkpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25ZID0gaGVscGVycy5jbGFtcCh0aGlzLm1vdGlvblksIC10aGlzLmxpbWl0WSwgdGhpcy5saW1pdFkpO1xuICAgICAgfVxuICAgICAgdGhpcy52ZWxvY2l0eVggKz0gKHRoaXMubW90aW9uWCAtIHRoaXMudmVsb2NpdHlYKSAqIHRoaXMuZnJpY3Rpb25YO1xuICAgICAgdGhpcy52ZWxvY2l0eVkgKz0gKHRoaXMubW90aW9uWSAtIHRoaXMudmVsb2NpdHlZKSAqIHRoaXMuZnJpY3Rpb25ZO1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1tpbmRleF0sXG4gICAgICAgICAgICBkZXB0aFggPSB0aGlzLmRlcHRoc1hbaW5kZXhdLFxuICAgICAgICAgICAgZGVwdGhZID0gdGhpcy5kZXB0aHNZW2luZGV4XSxcbiAgICAgICAgICAgIHhPZmZzZXQgPSB0aGlzLnZlbG9jaXR5WCAqIChkZXB0aFggKiAodGhpcy5pbnZlcnRYID8gLTEgOiAxKSksXG4gICAgICAgICAgICB5T2Zmc2V0ID0gdGhpcy52ZWxvY2l0eVkgKiAoZGVwdGhZICogKHRoaXMuaW52ZXJ0WSA/IC0xIDogMSkpO1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGxheWVyLCB4T2Zmc2V0LCB5T2Zmc2V0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmFmID0gKDAsIF9yYWYyLmRlZmF1bHQpKHRoaXMub25BbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncm90YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm90YXRlKGJldGEsIGdhbW1hKSB7XG4gICAgICAvLyBFeHRyYWN0IFJvdGF0aW9uXG4gICAgICB2YXIgeCA9IChiZXRhIHx8IGV2ZW50LmJldGEgfHwgMCkgLyBNQUdJQ19OVU1CRVIsXG4gICAgICAgICAgLy8gIC05MCA6OiA5MFxuICAgICAgeSA9IChnYW1tYSB8fCBldmVudC5nYW1tYSB8fCAwKSAvIE1BR0lDX05VTUJFUjsgLy8gLTE4MCA6OiAxODBcblxuICAgICAgLy8gRGV0ZWN0IE9yaWVudGF0aW9uIENoYW5nZVxuICAgICAgdmFyIHBvcnRyYWl0ID0gdGhpcy53aW5kb3dIZWlnaHQgPiB0aGlzLndpbmRvd1dpZHRoO1xuICAgICAgaWYgKHRoaXMucG9ydHJhaXQgIT09IHBvcnRyYWl0KSB7XG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBwb3J0cmFpdDtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jYWxpYnJhdGlvbkZsYWcpIHtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblggPSB4O1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uWSA9IHk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5wdXRYID0geDtcbiAgICAgIHRoaXMuaW5wdXRZID0geTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRldmljZU9yaWVudGF0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25EZXZpY2VPcmllbnRhdGlvbihldmVudCkge1xuICAgICAgdmFyIGJldGEgPSBldmVudC5iZXRhO1xuICAgICAgdmFyIGdhbW1hID0gZXZlbnQuZ2FtbWE7XG4gICAgICBpZiAoIXRoaXMuZGVza3RvcCAmJiBiZXRhICE9PSBudWxsICYmIGdhbW1hICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25TdGF0dXMgPSAxO1xuICAgICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25EZXZpY2VNb3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRldmljZU1vdGlvbihldmVudCkge1xuICAgICAgdmFyIGJldGEgPSBldmVudC5yb3RhdGlvblJhdGUuYmV0YTtcbiAgICAgIHZhciBnYW1tYSA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5nYW1tYTtcbiAgICAgIGlmICghdGhpcy5kZXNrdG9wICYmIGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAxO1xuICAgICAgICB0aGlzLnJvdGF0ZShiZXRhLCBnYW1tYSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZU1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgdmFyIGNsaWVudFggPSBldmVudC5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFkgPSBldmVudC5jbGllbnRZO1xuXG4gICAgICBpZiAoIXRoaXMub3JpZW50YXRpb25TdXBwb3J0ICYmIHRoaXMucmVsYXRpdmVJbnB1dCkge1xuICAgICAgICAvLyBDbGlwIG1vdXNlIGNvb3JkaW5hdGVzIGluc2lkZSBlbGVtZW50IGJvdW5kcy5cbiAgICAgICAgaWYgKHRoaXMuY2xpcFJlbGF0aXZlSW5wdXQpIHtcbiAgICAgICAgICBjbGllbnRYID0gTWF0aC5tYXgoY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YKTtcbiAgICAgICAgICBjbGllbnRYID0gTWF0aC5taW4oY2xpZW50WCwgdGhpcy5lbGVtZW50UG9zaXRpb25YICsgdGhpcy5lbGVtZW50V2lkdGgpO1xuICAgICAgICAgIGNsaWVudFkgPSBNYXRoLm1heChjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkpO1xuICAgICAgICAgIGNsaWVudFkgPSBNYXRoLm1pbihjbGllbnRZLCB0aGlzLmVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLmVsZW1lbnRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGN1bGF0ZSBpbnB1dCByZWxhdGl2ZSB0byB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudFJhbmdlWCAmJiB0aGlzLmVsZW1lbnRSYW5nZVkpIHtcbiAgICAgICAgICB0aGlzLmlucHV0WCA9IChjbGllbnRYIC0gdGhpcy5lbGVtZW50UG9zaXRpb25YIC0gdGhpcy5lbGVtZW50Q2VudGVyWCkgLyB0aGlzLmVsZW1lbnRSYW5nZVg7XG4gICAgICAgICAgdGhpcy5pbnB1dFkgPSAoY2xpZW50WSAtIHRoaXMuZWxlbWVudFBvc2l0aW9uWSAtIHRoaXMuZWxlbWVudENlbnRlclkpIC8gdGhpcy5lbGVtZW50UmFuZ2VZO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDYWxjdWxhdGUgaW5wdXQgcmVsYXRpdmUgdG8gdGhlIHdpbmRvdy5cbiAgICAgICAgaWYgKHRoaXMud2luZG93UmFkaXVzWCAmJiB0aGlzLndpbmRvd1JhZGl1c1kpIHtcbiAgICAgICAgICB0aGlzLmlucHV0WCA9IChjbGllbnRYIC0gdGhpcy53aW5kb3dDZW50ZXJYKSAvIHRoaXMud2luZG93UmFkaXVzWDtcbiAgICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy53aW5kb3dDZW50ZXJZKSAvIHRoaXMud2luZG93UmFkaXVzWTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQYXJhbGxheDtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbGxheDtcblxufSx7XCJyYWZcIjo0fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjJcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZSwgbW9kdWxlTG9hZFRpbWUsIG5vZGVMb2FkVGltZSwgdXBUaW1lO1xuXG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBub2RlTG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBtb2R1bGVMb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gICAgdXBUaW1lID0gcHJvY2Vzcy51cHRpbWUoKSAqIDFlOTtcbiAgICBub2RlTG9hZFRpbWUgPSBtb2R1bGVMb2FkVGltZSAtIHVwVGltZTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxufSkuY2FsbCh0aGlzKTtcblxuXG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKTtcbn0se1wiX3Byb2Nlc3NcIjozfV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpO1xuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW107IH07XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybjsgJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxufSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgbm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93JyksXG4gICAgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXSxcbiAgICBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnLFxuICAgIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XSxcbiAgICBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF07XG5cbmZvciAodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF07XG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XSB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdO1xufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZiAoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMCxcbiAgICAgIGlkID0gMCxcbiAgICAgIHF1ZXVlID0gW10sXG4gICAgICBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwO1xuXG4gIHJhZiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KCksXG4gICAgICAgICAgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKTtcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vdztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKTtcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpO1xuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgY2FmID0gZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbik7XG59O1xubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKTtcbn07XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uICgpIHtcbiAgcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWY7XG4gIHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYWY7XG59O1xuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se1wicGVyZm9ybWFuY2Utbm93XCI6Mn1dfSx7fSxbMV0pKDEpO1xufSk7IiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qIEF1dGhvciA6IFZpbmNlbnQgR2FycmVhdSAgLSB2aW5jZW50Z2FycmVhdS5jb21cbi8qIE1JVCBsaWNlbnNlOiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vKiBEZW1vIC8gR2VuZXJhdG9yIDogdmluY2VudGdhcnJlYXUuY29tL3BhcnRpY2xlcy5qc1xuLyogR2l0SHViIDogZ2l0aHViLmNvbS9WaW5jZW50R2FycmVhdS9wYXJ0aWNsZXMuanNcbi8qIEhvdyB0byB1c2U/IDogQ2hlY2sgdGhlIEdpdEh1YiBSRUFETUVcbi8qIHYyLjAuMFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxudmFyIHBKUyA9IGZ1bmN0aW9uKHRhZ19pZCwgcGFyYW1zKXtcblxuICB2YXIgY2FudmFzX2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrdGFnX2lkKycgPiAucGFydGljbGVzLWpzLWNhbnZhcy1lbCcpO1xuXG4gIC8qIHBhcnRpY2xlcy5qcyB2YXJpYWJsZXMgd2l0aCBkZWZhdWx0IHZhbHVlcyAqL1xuICB0aGlzLnBKUyA9IHtcbiAgICBjYW52YXM6IHtcbiAgICAgIGVsOiBjYW52YXNfZWwsXG4gICAgICB3OiBjYW52YXNfZWwub2Zmc2V0V2lkdGgsXG4gICAgICBoOiBjYW52YXNfZWwub2Zmc2V0SGVpZ2h0XG4gICAgfSxcbiAgICBwYXJ0aWNsZXM6IHtcbiAgICAgIG51bWJlcjoge1xuICAgICAgICB2YWx1ZTogNDAwLFxuICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgdmFsdWU6ICcjZmZmJ1xuICAgICAgfSxcbiAgICAgIHNoYXBlOiB7XG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBjb2xvcjogJyNmZjAwMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICBuYl9zaWRlczogNVxuICAgICAgICB9LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3BhY2l0eToge1xuICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDIsXG4gICAgICAgICAgb3BhY2l0eV9taW46IDAsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgdmFsdWU6IDIwLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogMjAsXG4gICAgICAgICAgc2l6ZV9taW46IDAsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgd2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICBtb3ZlOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDIsXG4gICAgICAgIGRpcmVjdGlvbjogJ25vbmUnLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgIG91dF9tb2RlOiAnb3V0JyxcbiAgICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgICAgYXR0cmFjdDoge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgcm90YXRlWDogMzAwMCxcbiAgICAgICAgICByb3RhdGVZOiAzMDAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhcnJheTogW11cbiAgICB9LFxuICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgIGRldGVjdF9vbjogJ2NhbnZhcycsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgb25ob3Zlcjoge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICBtb2RlOiAnZ3JhYidcbiAgICAgICAgfSxcbiAgICAgICAgb25jbGljazoge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICBtb2RlOiAncHVzaCdcbiAgICAgICAgfSxcbiAgICAgICAgcmVzaXplOiB0cnVlXG4gICAgICB9LFxuICAgICAgbW9kZXM6IHtcbiAgICAgICAgZ3JhYjp7XG4gICAgICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgICBsaW5lX2xpbmtlZDp7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBidWJibGU6e1xuICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgZHVyYXRpb246IDAuNFxuICAgICAgICB9LFxuICAgICAgICByZXB1bHNlOntcbiAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjRcbiAgICAgICAgfSxcbiAgICAgICAgcHVzaDp7XG4gICAgICAgICAgcGFydGljbGVzX25iOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTp7XG4gICAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtb3VzZTp7fVxuICAgIH0sXG4gICAgcmV0aW5hX2RldGVjdDogZmFsc2UsXG4gICAgZm46IHtcbiAgICAgIGludGVyYWN0OiB7fSxcbiAgICAgIG1vZGVzOiB7fSxcbiAgICAgIHZlbmRvcnM6e31cbiAgICB9LFxuICAgIHRtcDoge31cbiAgfTtcblxuICB2YXIgcEpTID0gdGhpcy5wSlM7XG5cbiAgLyogcGFyYW1zIHNldHRpbmdzICovXG4gIGlmKHBhcmFtcyl7XG4gICAgT2JqZWN0LmRlZXBFeHRlbmQocEpTLCBwYXJhbXMpO1xuICB9XG5cbiAgcEpTLnRtcC5vYmogPSB7XG4gICAgc2l6ZV92YWx1ZTogcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlLFxuICAgIHNpemVfYW5pbV9zcGVlZDogcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQsXG4gICAgbW92ZV9zcGVlZDogcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLFxuICAgIGxpbmVfbGlua2VkX2Rpc3RhbmNlOiBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlLFxuICAgIGxpbmVfbGlua2VkX3dpZHRoOiBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLFxuICAgIG1vZGVfZ3JhYl9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSxcbiAgICBtb2RlX2J1YmJsZV9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlLFxuICAgIG1vZGVfYnViYmxlX3NpemU6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxuICAgIG1vZGVfcmVwdWxzZV9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZVxuICB9O1xuXG5cbiAgcEpTLmZuLnJldGluYUluaXQgPSBmdW5jdGlvbigpe1xuXG4gICAgaWYocEpTLnJldGluYV9kZXRlY3QgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKXtcbiAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOyBcbiAgICAgIHBKUy50bXAucmV0aW5hID0gdHJ1ZTtcbiAgICB9IFxuICAgIGVsc2V7XG4gICAgICBwSlMuY2FudmFzLnB4cmF0aW8gPSAxO1xuICAgICAgcEpTLnRtcC5yZXRpbmEgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLncgPSBwSlMuY2FudmFzLmVsLm9mZnNldFdpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5jYW52YXMuaCA9IHBKUy5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0ICogcEpTLmNhbnZhcy5weHJhdGlvO1xuXG4gICAgcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlID0gcEpTLnRtcC5vYmouc2l6ZV92YWx1ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCA9IHBKUy50bXAub2JqLnNpemVfYW5pbV9zcGVlZCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQgPSBwSlMudG1wLm9iai5tb3ZlX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5saW5lX2xpbmtlZF9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9ncmFiX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfYnViYmxlX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGggPSBwSlMudG1wLm9iai5saW5lX2xpbmtlZF93aWR0aCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSA9IHBKUy50bXAub2JqLm1vZGVfYnViYmxlX3NpemUgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfcmVwdWxzZV9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcblxuICB9O1xuXG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBjYW52YXMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLmNhbnZhc0luaXQgPSBmdW5jdGlvbigpe1xuICAgIHBKUy5jYW52YXMuY3R4ID0gcEpTLmNhbnZhcy5lbC5nZXRDb250ZXh0KCcyZCcpO1xuICB9O1xuXG4gIHBKUy5mbi5jYW52YXNTaXplID0gZnVuY3Rpb24oKXtcblxuICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XG4gICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XG5cbiAgICBpZihwSlMgJiYgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLnJlc2l6ZSl7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgcEpTLmNhbnZhcy53ID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgIC8qIHJlc2l6ZSBjYW52YXMgKi9cbiAgICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XG4gICAgICAgICAgICBwSlMuY2FudmFzLncgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICAgICAgcEpTLmNhbnZhcy5oICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwSlMuY2FudmFzLmVsLndpZHRoID0gcEpTLmNhbnZhcy53O1xuICAgICAgICAgIHBKUy5jYW52YXMuZWwuaGVpZ2h0ID0gcEpTLmNhbnZhcy5oO1xuXG4gICAgICAgICAgLyogcmVwYWludCBjYW52YXMgb24gYW5pbSBkaXNhYmxlZCAqL1xuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSgpO1xuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIC8qIGRlbnNpdHkgcGFydGljbGVzIGVuYWJsZWQgKi9cbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5jYW52YXNQYWludCA9IGZ1bmN0aW9uKCl7XG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbFJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xuICB9O1xuXG4gIHBKUy5mbi5jYW52YXNDbGVhciA9IGZ1bmN0aW9uKCl7XG4gICAgcEpTLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcbiAgfTtcblxuXG4gIC8qIC0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gcGFydGljbGVzIC0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLnBhcnRpY2xlID0gZnVuY3Rpb24oY29sb3IsIG9wYWNpdHksIHBvc2l0aW9uKXtcblxuICAgIC8qIHNpemUgKi9cbiAgICB0aGlzLnJhZGl1cyA9IChwSlMucGFydGljbGVzLnNpemUucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlO1xuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSl7XG4gICAgICB0aGlzLnNpemVfc3RhdHVzID0gZmFsc2U7XG4gICAgICB0aGlzLnZzID0gcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgLyAxMDA7XG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3luYyl7XG4gICAgICAgIHRoaXMudnMgPSB0aGlzLnZzICogTWF0aC5yYW5kb20oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBwb3NpdGlvbiAqL1xuICAgIHRoaXMueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgdGhpcy55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcblxuICAgIC8qIGNoZWNrIHBvc2l0aW9uICAtIGludG8gdGhlIGNhbnZhcyAqL1xuICAgIGlmKHRoaXMueCA+IHBKUy5jYW52YXMudyAtIHRoaXMucmFkaXVzKjIpIHRoaXMueCA9IHRoaXMueCAtIHRoaXMucmFkaXVzO1xuICAgIGVsc2UgaWYodGhpcy54IDwgdGhpcy5yYWRpdXMqMikgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5yYWRpdXM7XG4gICAgaWYodGhpcy55ID4gcEpTLmNhbnZhcy5oIC0gdGhpcy5yYWRpdXMqMikgdGhpcy55ID0gdGhpcy55IC0gdGhpcy5yYWRpdXM7XG4gICAgZWxzZSBpZih0aGlzLnkgPCB0aGlzLnJhZGl1cyoyKSB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnJhZGl1cztcblxuICAgIC8qIGNoZWNrIHBvc2l0aW9uIC0gYXZvaWQgb3ZlcmxhcCAqL1xuICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5ib3VuY2Upe1xuICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHRoaXMsIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvKiBjb2xvciAqL1xuICAgIHRoaXMuY29sb3IgPSB7fTtcbiAgICBpZih0eXBlb2YoY29sb3IudmFsdWUpID09ICdvYmplY3QnKXtcblxuICAgICAgaWYoY29sb3IudmFsdWUgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgIHZhciBjb2xvcl9zZWxlY3RlZCA9IGNvbG9yLnZhbHVlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBKUy5wYXJ0aWNsZXMuY29sb3IudmFsdWUubGVuZ3RoKV07XG4gICAgICAgIHRoaXMuY29sb3IucmdiID0gaGV4VG9SZ2IoY29sb3Jfc2VsZWN0ZWQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGNvbG9yLnZhbHVlLnIgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmcgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmIgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IHtcbiAgICAgICAgICAgIHI6IGNvbG9yLnZhbHVlLnIsXG4gICAgICAgICAgICBnOiBjb2xvci52YWx1ZS5nLFxuICAgICAgICAgICAgYjogY29sb3IudmFsdWUuYlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihjb2xvci52YWx1ZS5oICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5zICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5sICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgdGhpcy5jb2xvci5oc2wgPSB7XG4gICAgICAgICAgICBoOiBjb2xvci52YWx1ZS5oLFxuICAgICAgICAgICAgczogY29sb3IudmFsdWUucyxcbiAgICAgICAgICAgIGw6IGNvbG9yLnZhbHVlLmxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIGlmKGNvbG9yLnZhbHVlID09ICdyYW5kb20nKXtcbiAgICAgIHRoaXMuY29sb3IucmdiID0ge1xuICAgICAgICByOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKSxcbiAgICAgICAgZzogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMCksXG4gICAgICAgIGI6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYodHlwZW9mKGNvbG9yLnZhbHVlKSA9PSAnc3RyaW5nJyl7XG4gICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLmNvbG9yLnJnYiA9IGhleFRvUmdiKHRoaXMuY29sb3IudmFsdWUpO1xuICAgIH1cblxuICAgIC8qIG9wYWNpdHkgKi9cbiAgICB0aGlzLm9wYWNpdHkgPSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZTtcbiAgICBpZihwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpe1xuICAgICAgdGhpcy5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xuICAgICAgdGhpcy52byA9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnNwZWVkIC8gMTAwO1xuICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnN5bmMpe1xuICAgICAgICB0aGlzLnZvID0gdGhpcy52byAqIE1hdGgucmFuZG9tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogYW5pbWF0aW9uIC0gdmVsb2NpdHkgZm9yIHNwZWVkICovXG4gICAgdmFyIHZlbGJhc2UgPSB7fVxuICAgIHN3aXRjaChwSlMucGFydGljbGVzLm1vdmUuZGlyZWN0aW9uKXtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeTotMSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AtcmlnaHQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAuNSwgeTotMC41IH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDoxLCB5Oi0wIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MC41LCB5OjAuNSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6MSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6LTAuNSwgeToxIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4Oi0xLCB5OjAgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wLWxlZnQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4Oi0wLjUsIHk6LTAuNSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6MCB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLnN0cmFpZ2h0KXtcbiAgICAgIHRoaXMudnggPSB2ZWxiYXNlLng7XG4gICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55O1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLnJhbmRvbSl7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnZ4ICogKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSAqIChNYXRoLnJhbmRvbSgpKTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMudnggPSB2ZWxiYXNlLnggKyBNYXRoLnJhbmRvbSgpLTAuNTtcbiAgICAgIHRoaXMudnkgPSB2ZWxiYXNlLnkgKyBNYXRoLnJhbmRvbSgpLTAuNTtcbiAgICB9XG5cbiAgICAvLyB2YXIgdGhldGEgPSAyLjAgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICAvLyB0aGlzLnZ4ID0gTWF0aC5jb3ModGhldGEpO1xuICAgIC8vIHRoaXMudnkgPSBNYXRoLnNpbih0aGV0YSk7XG5cbiAgICB0aGlzLnZ4X2kgPSB0aGlzLnZ4O1xuICAgIHRoaXMudnlfaSA9IHRoaXMudnk7XG5cbiAgICBcblxuICAgIC8qIGlmIHNoYXBlIGlzIGltYWdlICovXG5cbiAgICB2YXIgc2hhcGVfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZTtcbiAgICBpZih0eXBlb2Yoc2hhcGVfdHlwZSkgPT0gJ29iamVjdCcpe1xuICAgICAgaWYoc2hhcGVfdHlwZSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgdmFyIHNoYXBlX3NlbGVjdGVkID0gc2hhcGVfdHlwZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGFwZV90eXBlLmxlbmd0aCldO1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGVfc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNoYXBlID0gc2hhcGVfdHlwZTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnNoYXBlID09ICdpbWFnZScpe1xuICAgICAgdmFyIHNoID0gcEpTLnBhcnRpY2xlcy5zaGFwZTtcbiAgICAgIHRoaXMuaW1nID0ge1xuICAgICAgICBzcmM6IHNoLmltYWdlLnNyYyxcbiAgICAgICAgcmF0aW86IHNoLmltYWdlLndpZHRoIC8gc2guaW1hZ2UuaGVpZ2h0XG4gICAgICB9XG4gICAgICBpZighdGhpcy5pbWcucmF0aW8pIHRoaXMuaW1nLnJhdGlvID0gMTtcbiAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyh0aGlzKTtcbiAgICAgICAgaWYocEpTLnRtcC5wdXNoaW5nKXtcbiAgICAgICAgICB0aGlzLmltZy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gIH07XG5cblxuICBwSlMuZm4ucGFydGljbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBwID0gdGhpcztcblxuICAgIGlmKHAucmFkaXVzX2J1YmJsZSAhPSB1bmRlZmluZWQpe1xuICAgICAgdmFyIHJhZGl1cyA9IHAucmFkaXVzX2J1YmJsZTsgXG4gICAgfWVsc2V7XG4gICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXM7XG4gICAgfVxuXG4gICAgaWYocC5vcGFjaXR5X2J1YmJsZSAhPSB1bmRlZmluZWQpe1xuICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHlfYnViYmxlO1xuICAgIH1lbHNle1xuICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHk7XG4gICAgfVxuXG4gICAgaWYocC5jb2xvci5yZ2Ipe1xuICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ3JnYmEoJytwLmNvbG9yLnJnYi5yKycsJytwLmNvbG9yLnJnYi5nKycsJytwLmNvbG9yLnJnYi5iKycsJytvcGFjaXR5KycpJztcbiAgICB9ZWxzZXtcbiAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcrcC5jb2xvci5oc2wuaCsnLCcrcC5jb2xvci5oc2wucysnJSwnK3AuY29sb3IuaHNsLmwrJyUsJytvcGFjaXR5KycpJztcbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLmN0eC5maWxsU3R5bGUgPSBjb2xvcl92YWx1ZTtcbiAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcblxuICAgIHN3aXRjaChwLnNoYXBlKXtcblxuICAgICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguYXJjKHAueCwgcC55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZWRnZSc6XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnJlY3QocC54LXJhZGl1cywgcC55LXJhZGl1cywgcmFkaXVzKjIsIHJhZGl1cyoyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0cmlhbmdsZSc6XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShwSlMuY2FudmFzLmN0eCwgcC54LXJhZGl1cywgcC55K3JhZGl1cyAvIDEuNjYsIHJhZGl1cyoyLCAzLCAyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxuICAgICAgICAgIHAueCAtIHJhZGl1cyAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMy41KSwgLy8gc3RhcnRYXG4gICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIuNjYvMy41KSwgLy8gc3RhcnRZXG4gICAgICAgICAgcmFkaXVzKjIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLCAvLyBzaWRlTGVuZ3RoXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAvLyBzaWRlQ291bnROdW1lcmF0b3JcbiAgICAgICAgICAxIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXG4gICAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3Rhcic6XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eCxcbiAgICAgICAgICBwLnggLSByYWRpdXMqMiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvNCksIC8vIHN0YXJ0WFxuICAgICAgICAgIHAueSAtIHJhZGl1cyAvICgyKjIuNjYvMy41KSwgLy8gc3RhcnRZXG4gICAgICAgICAgcmFkaXVzKjIqMi42NiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksIC8vIHNpZGVMZW5ndGhcbiAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxuICAgICAgICAgIDIgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcbiAgICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbWFnZSc6XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhdygpe1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGltZ19vYmosXG4gICAgICAgICAgICBwLngtcmFkaXVzLFxuICAgICAgICAgICAgcC55LXJhZGl1cyxcbiAgICAgICAgICAgIHJhZGl1cyoyLFxuICAgICAgICAgICAgcmFkaXVzKjIgLyBwLmltZy5yYXRpb1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnKXtcbiAgICAgICAgICB2YXIgaW1nX29iaiA9IHAuaW1nLm9iajtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdmFyIGltZ19vYmogPSBwSlMudG1wLmltZ19vYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpbWdfb2JqKXtcbiAgICAgICAgICBkcmF3KCk7XG4gICAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoID4gMCl7XG4gICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLmNvbG9yO1xuICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGg7XG4gICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgXG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbCgpO1xuICAgIFxuICB9O1xuXG5cbiAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlOyBpKyspIHtcbiAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkucHVzaChuZXcgcEpTLmZuLnBhcnRpY2xlKHBKUy5wYXJ0aWNsZXMuY29sb3IsIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkpO1xuICAgIH1cbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzVXBkYXRlID0gZnVuY3Rpb24oKXtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcblxuICAgICAgLyogdGhlIHBhcnRpY2xlICovXG4gICAgICB2YXIgcCA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XG5cbiAgICAgIC8vIHZhciBkID0gKCBkeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54ICkgKiBkeCArICggZHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSApICogZHk7XG4gICAgICAvLyB2YXIgZiA9IC1CQU5HX1NJWkUgLyBkO1xuICAgICAgLy8gaWYgKCBkIDwgQkFOR19TSVpFICkge1xuICAgICAgLy8gICAgIHZhciB0ID0gTWF0aC5hdGFuMiggZHksIGR4ICk7XG4gICAgICAvLyAgICAgcC52eCA9IGYgKiBNYXRoLmNvcyh0KTtcbiAgICAgIC8vICAgICBwLnZ5ID0gZiAqIE1hdGguc2luKHQpO1xuICAgICAgLy8gfVxuXG4gICAgICAvKiBtb3ZlIHRoZSBwYXJ0aWNsZSAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICAgIHZhciBtcyA9IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZC8yO1xuICAgICAgICBwLnggKz0gcC52eCAqIG1zO1xuICAgICAgICBwLnkgKz0gcC52eSAqIG1zO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2Ugb3BhY2l0eSBzdGF0dXMgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSkge1xuICAgICAgICBpZihwLm9wYWNpdHlfc3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICBpZihwLm9wYWNpdHkgPj0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSBwLm9wYWNpdHlfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgcC5vcGFjaXR5ICs9IHAudm87XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBpZihwLm9wYWNpdHkgPD0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0ub3BhY2l0eV9taW4pIHAub3BhY2l0eV9zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIHAub3BhY2l0eSAtPSBwLnZvO1xuICAgICAgICB9XG4gICAgICAgIGlmKHAub3BhY2l0eSA8IDApIHAub3BhY2l0eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIGNoYW5nZSBzaXplICovXG4gICAgICBpZihwSlMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUpe1xuICAgICAgICBpZihwLnNpemVfc3RhdHVzID09IHRydWUpe1xuICAgICAgICAgIGlmKHAucmFkaXVzID49IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSkgcC5zaXplX3N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHAucmFkaXVzICs9IHAudnM7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGlmKHAucmFkaXVzIDw9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluKSBwLnNpemVfc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICBwLnJhZGl1cyAtPSBwLnZzO1xuICAgICAgICB9XG4gICAgICAgIGlmKHAucmFkaXVzIDwgMCkgcC5yYWRpdXMgPSAwO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2UgcGFydGljbGUgcG9zaXRpb24gaWYgaXQgaXMgb3V0IG9mIGNhbnZhcyAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcbiAgICAgICAgdmFyIG5ld19wb3MgPSB7XG4gICAgICAgICAgeF9sZWZ0OiBwLnJhZGl1cyxcbiAgICAgICAgICB4X3JpZ2h0OiAgcEpTLmNhbnZhcy53LFxuICAgICAgICAgIHlfdG9wOiBwLnJhZGl1cyxcbiAgICAgICAgICB5X2JvdHRvbTogcEpTLmNhbnZhcy5oXG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICB2YXIgbmV3X3BvcyA9IHtcbiAgICAgICAgICB4X2xlZnQ6IC1wLnJhZGl1cyxcbiAgICAgICAgICB4X3JpZ2h0OiBwSlMuY2FudmFzLncgKyBwLnJhZGl1cyxcbiAgICAgICAgICB5X3RvcDogLXAucmFkaXVzLFxuICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmggKyBwLnJhZGl1c1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHAueCAtIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KXtcbiAgICAgICAgcC54ID0gbmV3X3Bvcy54X2xlZnQ7XG4gICAgICAgIHAueSA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHAueCArIHAucmFkaXVzIDwgMCl7XG4gICAgICAgIHAueCA9IG5ld19wb3MueF9yaWdodDtcbiAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgIH1cbiAgICAgIGlmKHAueSAtIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKXtcbiAgICAgICAgcC55ID0gbmV3X3Bvcy55X3RvcDtcbiAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocC55ICsgcC5yYWRpdXMgPCAwKXtcbiAgICAgICAgcC55ID0gbmV3X3Bvcy55X2JvdHRvbTtcbiAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICAgIH1cblxuICAgICAgLyogb3V0IG9mIGNhbnZhcyBtb2RlcyAqL1xuICAgICAgc3dpdGNoKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSl7XG4gICAgICAgIGNhc2UgJ2JvdW5jZSc6XG4gICAgICAgICAgaWYgKHAueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgZWxzZSBpZiAocC54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgaWYgKHAueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgZWxzZSBpZiAocC55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvKiBldmVudHMgKi9cbiAgICAgIGlmKGlzSW5BcnJheSgnZ3JhYicsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKXtcbiAgICAgICAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZShwKTtcbiAgICAgIH1cblxuICAgICAgaWYoaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcbiAgICAgICAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlKHApO1xuICAgICAgfVxuXG4gICAgICBpZihpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XG4gICAgICAgIHBKUy5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUocCk7XG4gICAgICB9XG5cbiAgICAgIC8qIGludGVyYWN0aW9uIGF1dG8gYmV0d2VlbiBwYXJ0aWNsZXMgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlIHx8IHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSl7XG4gICAgICAgIGZvcih2YXIgaiA9IGkgKyAxOyBqIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtqXTtcblxuICAgICAgICAgIC8qIGxpbmsgcGFydGljbGVzICovXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUpe1xuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXMocCxwMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogYXR0cmFjdCBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpe1xuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMocCxwMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogYm91bmNlIHBhcnRpY2xlcyAqL1xuICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5ib3VuY2Upe1xuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyhwLHAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICB9XG5cbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzRHJhdyA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvKiBjbGVhciBjYW52YXMgKi9cbiAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xuXG4gICAgLyogdXBkYXRlIGVhY2ggcGFydGljbGVzIHBhcmFtICovXG4gICAgcEpTLmZuLnBhcnRpY2xlc1VwZGF0ZSgpO1xuXG4gICAgLyogZHJhdyBlYWNoIHBhcnRpY2xlICovXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xuICAgICAgcC5kcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5ID0gZnVuY3Rpb24oKXtcbiAgICBwSlMucGFydGljbGVzLmFycmF5ID0gW107XG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc1JlZnJlc2ggPSBmdW5jdGlvbigpe1xuXG4gICAgLyogaW5pdCBhbGwgKi9cbiAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5jaGVja0FuaW1GcmFtZSk7XG4gICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgcEpTLnRtcC5zb3VyY2Vfc3ZnID0gdW5kZWZpbmVkO1xuICAgIHBKUy50bXAuaW1nX29iaiA9IHVuZGVmaW5lZDtcbiAgICBwSlMudG1wLmNvdW50X3N2ZyA9IDA7XG4gICAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5KCk7XG4gICAgcEpTLmZuLmNhbnZhc0NsZWFyKCk7XG4gICAgXG4gICAgLyogcmVzdGFydCAqL1xuICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XG5cbiAgfTtcblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyBpbnRlcmFjdGlvbiAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyA9IGZ1bmN0aW9uKHAxLCBwMil7XG5cbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcblxuICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gcDEgYW5kIHAyIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xuICAgIGlmKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7XG5cbiAgICAgIHZhciBvcGFjaXR5X2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkgLSAoZGlzdCAvICgxL3BKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSkpIC8gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZTtcblxuICAgICAgaWYob3BhY2l0eV9saW5lID4gMCl7ICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8qIHN0eWxlICovXG4gICAgICAgIHZhciBjb2xvcl9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnK2NvbG9yX2xpbmUucisnLCcrY29sb3JfbGluZS5nKycsJytjb2xvcl9saW5lLmIrJywnK29wYWNpdHlfbGluZSsnKSc7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XG4gICAgICAgIC8vcEpTLmNhbnZhcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXG4gICAgICAgIFxuICAgICAgICAvKiBwYXRoICovXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5pbnRlcmFjdC5hdHRyYWN0UGFydGljbGVzICA9IGZ1bmN0aW9uKHAxLCBwMil7XG5cbiAgICAvKiBjb25kZW5zZWQgcGFydGljbGVzICovXG4gICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XG5cbiAgICBpZihkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2Upe1xuXG4gICAgICB2YXIgYXggPSBkeC8ocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWCoxMDAwKSxcbiAgICAgICAgICBheSA9IGR5LyhwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVZKjEwMDApO1xuXG4gICAgICBwMS52eCAtPSBheDtcbiAgICAgIHAxLnZ5IC09IGF5O1xuXG4gICAgICBwMi52eCArPSBheDtcbiAgICAgIHAyLnZ5ICs9IGF5O1xuXG4gICAgfVxuICAgIFxuXG4gIH1cblxuXG4gIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMgPSBmdW5jdGlvbihwMSwgcDIpe1xuXG4gICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSksXG4gICAgICAgIGRpc3RfcCA9IHAxLnJhZGl1cytwMi5yYWRpdXM7XG5cbiAgICBpZihkaXN0IDw9IGRpc3RfcCl7XG4gICAgICBwMS52eCA9IC1wMS52eDtcbiAgICAgIHAxLnZ5ID0gLXAxLnZ5O1xuXG4gICAgICBwMi52eCA9IC1wMi52eDtcbiAgICAgIHAyLnZ5ID0gLXAyLnZ5O1xuICAgIH1cblxuICB9XG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBtb2RlcyBldmVudHMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMgPSBmdW5jdGlvbihuYiwgcG9zKXtcblxuICAgIHBKUy50bXAucHVzaGluZyA9IHRydWU7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbmI7IGkrKyl7XG4gICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2goXG4gICAgICAgIG5ldyBwSlMuZm4ucGFydGljbGUoXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5jb2xvcixcbiAgICAgICAgICBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3gnOiBwb3MgPyBwb3MucG9zX3ggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53LFxuICAgICAgICAgICAgJ3knOiBwb3MgPyBwb3MucG9zX3kgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApXG4gICAgICBpZihpID09IG5iLTEpe1xuICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBwSlMudG1wLnB1c2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMgPSBmdW5jdGlvbihuYil7XG5cbiAgICBwSlMucGFydGljbGVzLmFycmF5LnNwbGljZSgwLCBuYik7XG4gICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xuXG4gICAgLyogb24gaG92ZXIgZXZlbnQgKi9cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7XG5cbiAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxuICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXG4gICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKSxcbiAgICAgICAgICByYXRpbyA9IDEgLSBkaXN0X21vdXNlIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlO1xuXG4gICAgICBmdW5jdGlvbiBpbml0KCl7XG4gICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBwLm9wYWNpdHk7XG4gICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHAucmFkaXVzO1xuICAgICAgfVxuXG4gICAgICAvKiBtb3VzZW1vdmUgLSBjaGVjayByYXRpbyAqL1xuICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe1xuXG4gICAgICAgIGlmKHJhdGlvID49IDAgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcbiAgICAgICAgICBcbiAgICAgICAgICAvKiBzaXplICovXG4gICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgIT0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKXtcblxuICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPiBwSlMucGFydGljbGVzLnNpemUudmFsdWUpe1xuICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHAucmFkaXVzICsgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplKnJhdGlvKTtcbiAgICAgICAgICAgICAgaWYoc2l6ZSA+PSAwKXtcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdmFyIGRpZiA9IHAucmFkaXVzIC0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsXG4gICAgICAgICAgICAgICAgICBzaXplID0gcC5yYWRpdXMgLSAoZGlmKnJhdGlvKTtcbiAgICAgICAgICAgICAgaWYoc2l6ZSA+IDApe1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHNpemU7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIG9wYWNpdHkgKi9cbiAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAhPSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xuXG4gICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSA+IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSl7XG4gICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkqcmF0aW87XG4gICAgICAgICAgICAgIGlmKG9wYWNpdHkgPiBwLm9wYWNpdHkgJiYgb3BhY2l0eSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSl7XG4gICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IG9wYWNpdHk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eSAtIChwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUtcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpKnJhdGlvO1xuICAgICAgICAgICAgICBpZihvcGFjaXR5IDwgcC5vcGFjaXR5ICYmIG9wYWNpdHkgPj0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpe1xuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBvcGFjaXR5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgfVxuXG5cbiAgICAgIC8qIG1vdXNlbGVhdmUgKi9cbiAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2VsZWF2ZScpe1xuICAgICAgICBpbml0KCk7XG4gICAgICB9XG4gICAgXG4gICAgfVxuXG4gICAgLyogb24gY2xpY2sgZXZlbnQgKi9cbiAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcblxuXG4gICAgICBpZihwSlMudG1wLmJ1YmJsZV9jbGlja2luZyl7XG4gICAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194LFxuICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSxcbiAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSksXG4gICAgICAgICAgICB0aW1lX3NwZW50ID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSkvMTAwMDtcblxuICAgICAgICBpZih0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKXtcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGltZV9zcGVudCA+IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbioyKXtcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IGZhbHNlO1xuICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgZnVuY3Rpb24gcHJvY2VzcyhidWJibGVfcGFyYW0sIHBhcnRpY2xlc19wYXJhbSwgcF9vYmpfYnViYmxlLCBwX29iaiwgaWQpe1xuXG4gICAgICAgIGlmKGJ1YmJsZV9wYXJhbSAhPSBwYXJ0aWNsZXNfcGFyYW0pe1xuXG4gICAgICAgICAgaWYoIXBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCl7XG4gICAgICAgICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7XG4gICAgICAgICAgICAgIGlmKHBfb2JqX2J1YmJsZSAhPSB1bmRlZmluZWQpIHZhciBvYmogPSBwX29ial9idWJibGU7XG4gICAgICAgICAgICAgIGVsc2UgdmFyIG9iaiA9IHBfb2JqO1xuICAgICAgICAgICAgICBpZihvYmogIT0gYnViYmxlX3BhcmFtKXtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlmKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZihwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlX3RtcCA9IHBfb2JqIC0gKHRpbWVfc3BlbnQgKiAocF9vYmogLSBidWJibGVfcGFyYW0pIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICAgIGRpZiA9IGJ1YmJsZV9wYXJhbSAtIHZhbHVlX3RtcDtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gYnViYmxlX3BhcmFtICsgZGlmO1xuICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmKHBKUy50bXAuYnViYmxlX2NsaWNraW5nKXtcbiAgICAgICAgLyogc2l6ZSAqL1xuICAgICAgICBwcm9jZXNzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLCBwSlMucGFydGljbGVzLnNpemUudmFsdWUsIHAucmFkaXVzX2J1YmJsZSwgcC5yYWRpdXMsICdzaXplJyk7XG4gICAgICAgIC8qIG9wYWNpdHkgKi9cbiAgICAgICAgcHJvY2VzcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSwgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLCBwLm9wYWNpdHlfYnViYmxlLCBwLm9wYWNpdHksICdvcGFjaXR5Jyk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUgPSBmdW5jdGlvbihwKXtcblxuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpIHtcblxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpO1xuXG4gICAgICB2YXIgbm9ybVZlYyA9IHt4OiBkeF9tb3VzZS9kaXN0X21vdXNlLCB5OiBkeV9tb3VzZS9kaXN0X21vdXNlfSxcbiAgICAgICAgICByZXB1bHNlUmFkaXVzID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSxcbiAgICAgICAgICB2ZWxvY2l0eSA9IDEwMCxcbiAgICAgICAgICByZXB1bHNlRmFjdG9yID0gY2xhbXAoKDEvcmVwdWxzZVJhZGl1cykqKC0xKk1hdGgucG93KGRpc3RfbW91c2UvcmVwdWxzZVJhZGl1cywyKSsxKSpyZXB1bHNlUmFkaXVzKnZlbG9jaXR5LCAwLCA1MCk7XG4gICAgICBcbiAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgIHg6IHAueCArIG5vcm1WZWMueCAqIHJlcHVsc2VGYWN0b3IsXG4gICAgICAgIHk6IHAueSArIG5vcm1WZWMueSAqIHJlcHVsc2VGYWN0b3JcbiAgICAgIH1cblxuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcbiAgICAgICAgaWYocG9zLnggLSBwLnJhZGl1cyA+IDAgJiYgcG9zLnggKyBwLnJhZGl1cyA8IHBKUy5jYW52YXMudykgcC54ID0gcG9zLng7XG4gICAgICAgIGlmKHBvcy55IC0gcC5yYWRpdXMgPiAwICYmIHBvcy55ICsgcC5yYWRpdXMgPCBwSlMuY2FudmFzLmgpIHAueSA9IHBvcy55O1xuICAgICAgfWVsc2V7XG4gICAgICAgIHAueCA9IHBvcy54O1xuICAgICAgICBwLnkgPSBwb3MueTtcbiAgICAgIH1cbiAgICBcbiAgICB9XG5cblxuICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSB7XG5cbiAgICAgIGlmKCFwSlMudG1wLnJlcHVsc2VfZmluaXNoKXtcbiAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NvdW50Kys7XG4gICAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jb3VudCA9PSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCl7XG4gICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nKXtcblxuICAgICAgICB2YXIgcmVwdWxzZVJhZGl1cyA9IE1hdGgucG93KHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UvNiwgMyk7XG5cbiAgICAgICAgdmFyIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLngsXG4gICAgICAgICAgICBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55LFxuICAgICAgICAgICAgZCA9IGR4KmR4ICsgZHkqZHk7XG5cbiAgICAgICAgdmFyIGZvcmNlID0gLXJlcHVsc2VSYWRpdXMgLyBkICogMTtcblxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzKCl7XG5cbiAgICAgICAgICB2YXIgZiA9IE1hdGguYXRhbjIoZHksZHgpO1xuICAgICAgICAgIHAudnggPSBmb3JjZSAqIE1hdGguY29zKGYpO1xuICAgICAgICAgIHAudnkgPSBmb3JjZSAqIE1hdGguc2luKGYpO1xuXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcbiAgICAgICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICAgIHg6IHAueCArIHAudngsXG4gICAgICAgICAgICAgIHk6IHAueSArIHAudnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3MueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgICBlbHNlIGlmIChwb3MueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xuICAgICAgICAgICAgaWYgKHBvcy55ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHAudnkgPSAtcC52eTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBvcy55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIGlmKGQgPD0gcmVwdWxzZVJhZGl1cyl7XG4gICAgICAgICAgcHJvY2VzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmFuZyAtIHNsb3cgbW90aW9uIG1vZGVcbiAgICAgICAgLy8gaWYoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpe1xuICAgICAgICAvLyAgIGlmKGQgPD0gcmVwdWxzZVJhZGl1cyl7XG4gICAgICAgIC8vICAgICBwcm9jZXNzKCk7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgLy8gICBwcm9jZXNzKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9PSBmYWxzZSl7XG5cbiAgICAgICAgICBwLnZ4ID0gcC52eF9pO1xuICAgICAgICAgIHAudnkgPSBwLnZ5X2k7XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cblxuICBwSlMuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XG5cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcblxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpO1xuXG4gICAgICAvKiBkcmF3IGEgbGluZSBiZXR3ZWVuIHRoZSBjdXJzb3IgYW5kIHRoZSBwYXJ0aWNsZSBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGlzIHVuZGVyIHRoZSBjb25maWcgZGlzdGFuY2UgKi9cbiAgICAgIGlmKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSl7XG5cbiAgICAgICAgdmFyIG9wYWNpdHlfbGluZSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eSAtIChkaXN0X21vdXNlIC8gKDEvcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5KSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlO1xuXG4gICAgICAgIGlmKG9wYWNpdHlfbGluZSA+IDApe1xuXG4gICAgICAgICAgLyogc3R5bGUgKi9cbiAgICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnK2NvbG9yX2xpbmUucisnLCcrY29sb3JfbGluZS5nKycsJytjb2xvcl9saW5lLmIrJywnK29wYWNpdHlfbGluZSsnKSc7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aDtcbiAgICAgICAgICAvL3BKUy5jYW52YXMuY3R4LmxpbmVDYXAgPSAncm91bmQnOyAvKiBwZXJmb3JtYW5jZSBpc3N1ZSAqL1xuICAgICAgICAgIFxuICAgICAgICAgIC8qIHBhdGggKi9cbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCwgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcblxuICAgIC8qIGV2ZW50cyB0YXJnZXQgZWxlbWVudCAqL1xuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmRldGVjdF9vbiA9PSAnd2luZG93Jyl7XG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbCA9IHdpbmRvdztcbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gcEpTLmNhbnZhcy5lbDtcbiAgICB9XG5cblxuICAgIC8qIGRldGVjdCBtb3VzZSBwb3MgLSBvbiBob3ZlciAvIGNsaWNrIGV2ZW50ICovXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlIHx8IHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XG5cbiAgICAgIC8qIGVsIG9uIG1vdXNlbW92ZSAqL1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZWwgPT0gd2luZG93KXtcbiAgICAgICAgICB2YXIgcG9zX3ggPSBlLmNsaWVudFgsXG4gICAgICAgICAgICAgIHBvc195ID0gZS5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdmFyIHBvc194ID0gZS5vZmZzZXRYIHx8IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgcG9zX3kgPSBlLm9mZnNldFkgfHwgZS5jbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBwb3NfeDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBwb3NfeTtcblxuICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XG4gICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZW1vdmUnO1xuXG4gICAgICB9KTtcblxuICAgICAgLyogZWwgb24gb25tb3VzZWxlYXZlICovXG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBudWxsO1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSA9IG51bGw7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZWxlYXZlJztcblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKiBvbiBjbGljayBldmVudCAqL1xuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XG5cbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194O1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195O1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcblxuICAgICAgICAgIHN3aXRjaChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKXtcblxuICAgICAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZSk7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iID09IDEpe1xuICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA+IDEpe1xuICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVtb3ZlLnBhcnRpY2xlc19uYik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYnViYmxlJzpcbiAgICAgICAgICAgICAgcEpTLnRtcC5idWJibGVfY2xpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JlcHVsc2UnOlxuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY291bnQgPSAwO1xuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfZmluaXNoID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSwgcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kdXJhdGlvbioxMDAwKVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgfTtcblxuICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcyA9IGZ1bmN0aW9uKCl7XG5cbiAgICBpZihwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSl7XG5cbiAgICAgIC8qIGNhbGMgYXJlYSAqL1xuICAgICAgdmFyIGFyZWEgPSBwSlMuY2FudmFzLmVsLndpZHRoICogcEpTLmNhbnZhcy5lbC5oZWlnaHQgLyAxMDAwO1xuICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xuICAgICAgICBhcmVhID0gYXJlYS8ocEpTLmNhbnZhcy5weHJhdGlvKjIpO1xuICAgICAgfVxuXG4gICAgICAvKiBjYWxjIG51bWJlciBvZiBwYXJ0aWNsZXMgYmFzZWQgb24gZGVuc2l0eSBhcmVhICovXG4gICAgICB2YXIgbmJfcGFydGljbGVzID0gYXJlYSAqIHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlIC8gcEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS52YWx1ZV9hcmVhO1xuXG4gICAgICAvKiBhZGQgb3IgcmVtb3ZlIFggcGFydGljbGVzICovXG4gICAgICB2YXIgbWlzc2luZ19wYXJ0aWNsZXMgPSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCAtIG5iX3BhcnRpY2xlcztcbiAgICAgIGlmKG1pc3NpbmdfcGFydGljbGVzIDwgMCkgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoTWF0aC5hYnMobWlzc2luZ19wYXJ0aWNsZXMpKTtcbiAgICAgIGVsc2UgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhtaXNzaW5nX3BhcnRpY2xlcyk7XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uKHAxLCBwb3NpdGlvbil7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcblxuICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xuXG4gICAgICBpZihkaXN0IDw9IHAxLnJhZGl1cyArIHAyLnJhZGl1cyl7XG4gICAgICAgIHAxLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgICAgICBwMS55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcgPSBmdW5jdGlvbihwKXtcblxuICAgIC8qIHNldCBjb2xvciB0byBzdmcgZWxlbWVudCAqL1xuICAgIHZhciBzdmdYbWwgPSBwSlMudG1wLnNvdXJjZV9zdmcsXG4gICAgICAgIHJnYkhleCA9IC8jKFswLTlBLUZdezMsNn0pL2dpLFxuICAgICAgICBjb2xvcmVkU3ZnWG1sID0gc3ZnWG1sLnJlcGxhY2UocmdiSGV4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xuICAgICAgICAgIGlmKHAuY29sb3IucmdiKXtcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdyZ2JhKCcrcC5jb2xvci5yZ2IucisnLCcrcC5jb2xvci5yZ2IuZysnLCcrcC5jb2xvci5yZ2IuYisnLCcrcC5vcGFjaXR5KycpJztcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcrcC5jb2xvci5oc2wuaCsnLCcrcC5jb2xvci5oc2wucysnJSwnK3AuY29sb3IuaHNsLmwrJyUsJytwLm9wYWNpdHkrJyknO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29sb3JfdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgLyogcHJlcGFyZSB0byBjcmVhdGUgaW1nIHdpdGggY29sb3JlZCBzdmcgKi9cbiAgICB2YXIgc3ZnID0gbmV3IEJsb2IoW2NvbG9yZWRTdmdYbWxdLCB7dHlwZTogJ2ltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCd9KSxcbiAgICAgICAgRE9NVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdyxcbiAgICAgICAgdXJsID0gRE9NVVJMLmNyZWF0ZU9iamVjdFVSTChzdmcpO1xuXG4gICAgLyogY3JlYXRlIHBhcnRpY2xlIGltZyBvYmogKi9cbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgcC5pbWcub2JqID0gaW1nO1xuICAgICAgcC5pbWcubG9hZGVkID0gdHJ1ZTtcbiAgICAgIERPTVVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHBKUy50bXAuY291bnRfc3ZnKys7XG4gICAgfSk7XG4gICAgaW1nLnNyYyA9IHVybDtcblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZGVzdHJveXBKUyA9IGZ1bmN0aW9uKCl7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgIGNhbnZhc19lbC5yZW1vdmUoKTtcbiAgICBwSlNEb20gPSBudWxsO1xuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlID0gZnVuY3Rpb24oYywgc3RhcnRYLCBzdGFydFksIHNpZGVMZW5ndGgsIHNpZGVDb3VudE51bWVyYXRvciwgc2lkZUNvdW50RGVub21pbmF0b3Ipe1xuXG4gICAgLy8gQnkgUHJvZ3JhbW1pbmcgVGhvbWFzIC0gaHR0cHM6Ly9wcm9ncmFtbWluZ3Rob21hcy53b3JkcHJlc3MuY29tLzIwMTMvMDQvMDMvbi1zaWRlZC1zaGFwZXMvXG4gICAgdmFyIHNpZGVDb3VudCA9IHNpZGVDb3VudE51bWVyYXRvciAqIHNpZGVDb3VudERlbm9taW5hdG9yO1xuICAgIHZhciBkZWNpbWFsU2lkZXMgPSBzaWRlQ291bnROdW1lcmF0b3IgLyBzaWRlQ291bnREZW5vbWluYXRvcjtcbiAgICB2YXIgaW50ZXJpb3JBbmdsZURlZ3JlZXMgPSAoMTgwICogKGRlY2ltYWxTaWRlcyAtIDIpKSAvIGRlY2ltYWxTaWRlcztcbiAgICB2YXIgaW50ZXJpb3JBbmdsZSA9IE1hdGguUEkgLSBNYXRoLlBJICogaW50ZXJpb3JBbmdsZURlZ3JlZXMgLyAxODA7IC8vIGNvbnZlcnQgdG8gcmFkaWFuc1xuICAgIGMuc2F2ZSgpO1xuICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgYy50cmFuc2xhdGUoc3RhcnRYLCBzdGFydFkpO1xuICAgIGMubW92ZVRvKDAsMCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWRlQ291bnQ7IGkrKykge1xuICAgICAgYy5saW5lVG8oc2lkZUxlbmd0aCwwKTtcbiAgICAgIGMudHJhbnNsYXRlKHNpZGVMZW5ndGgsMCk7XG4gICAgICBjLnJvdGF0ZShpbnRlcmlvckFuZ2xlKTtcbiAgICB9XG4gICAgLy9jLnN0cm9rZSgpO1xuICAgIGMuZmlsbCgpO1xuICAgIGMucmVzdG9yZSgpO1xuXG4gIH07XG5cbiAgcEpTLmZuLnZlbmRvcnMuZXhwb3J0SW1nID0gZnVuY3Rpb24oKXtcbiAgICB3aW5kb3cub3BlbihwSlMuY2FudmFzLmVsLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyksICdfYmxhbmsnKTtcbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcgPSBmdW5jdGlvbih0eXBlKXtcblxuICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMgIT0gJycpe1xuXG4gICAgICBpZih0eXBlID09ICdzdmcnKXtcblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xuICAgICAgICAgICAgaWYoeGhyLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICAgICAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSBkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2U7XG4gICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBJbWFnZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICBwSlMudG1wLmltZ19vYmogPSBpbWc7XG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuc3JjID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmM7XG5cbiAgICAgIH1cblxuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIE5vIGltYWdlLnNyYycpO1xuICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZHJhdyA9IGZ1bmN0aW9uKCl7XG5cbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJyl7XG5cbiAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2Zycpe1xuXG4gICAgICAgIGlmKHBKUy50bXAuY291bnRfc3ZnID49IHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlKXtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnc3RpbGwgbG9hZGluZy4uLicpO1xuICAgICAgICAgIGlmKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9XG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgIGlmKHBKUy50bXAuaW1nX29iaiAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3IpIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdyA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvLyBpZiBzaGFwZSBpcyBpbWFnZVxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PSAnaW1hZ2UnKXtcblxuICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyAmJiBwSlMudG1wLnNvdXJjZV9zdmcgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcEpTLnRtcC5jaGVja0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUoY2hlY2spO1xuICAgICAgfWVsc2V7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2ltYWdlcyBsb2FkZWQhIGNhbmNlbCBjaGVjaycpO1xuICAgICAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy50bXAuY2hlY2tBbmltRnJhbWUpO1xuICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3Ipe1xuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcbiAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG5cbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmluaXQgPSBmdW5jdGlvbigpe1xuXG4gICAgLyogaW5pdCBjYW52YXMgKyBwYXJ0aWNsZXMgKi9cbiAgICBwSlMuZm4ucmV0aW5hSW5pdCgpO1xuICAgIHBKUy5mbi5jYW52YXNJbml0KCk7XG4gICAgcEpTLmZuLmNhbnZhc1NpemUoKTtcbiAgICBwSlMuZm4uY2FudmFzUGFpbnQoKTtcbiAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlKCk7XG4gICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcblxuICAgIC8qIHBhcnRpY2xlcy5saW5lX2xpbmtlZCAtIGNvbnZlcnQgaGV4IGNvbG9ycyB0byByZ2IgKi9cbiAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lID0gaGV4VG9SZ2IocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcik7XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLnN0YXJ0ID0gZnVuY3Rpb24oKXtcblxuICAgIGlmKGlzSW5BcnJheSgnaW1hZ2UnLCBwSlMucGFydGljbGVzLnNoYXBlLnR5cGUpKXtcbiAgICAgIHBKUy50bXAuaW1nX3R5cGUgPSBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5zdWJzdHIocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMubGVuZ3RoIC0gMyk7XG4gICAgICBwSlMuZm4udmVuZG9ycy5sb2FkSW1nKHBKUy50bXAuaW1nX3R5cGUpO1xuICAgIH1lbHNle1xuICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cblxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cblxuXG4gIHBKUy5mbi52ZW5kb3JzLmV2ZW50c0xpc3RlbmVycygpO1xuXG4gIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XG4gIFxuXG5cbn07XG5cbi8qIC0tLS0tLS0tLS0gZ2xvYmFsIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbk9iamVjdC5kZWVwRXh0ZW5kID0gZnVuY3Rpb24oZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmXG4gICAgIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xuICAgICAgYXJndW1lbnRzLmNhbGxlZShkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxuICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XG4gICAgZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgfTtcbn0pKCk7XG5cbndpbmRvdy5jYW5jZWxSZXF1ZXN0QW5pbUZyYW1lID0gKCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSAgICAgICAgIHx8XG4gICAgd2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XG4gICAgd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgIGNsZWFyVGltZW91dFxufSApKCk7XG5cbmZ1bmN0aW9uIGhleFRvUmdiKGhleCl7XG4gIC8vIEJ5IFRpbSBEb3duIC0gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTYyNDEzOS8zNDkzNjUwXG4gIC8vIEV4cGFuZCBzaG9ydGhhbmQgZm9ybSAoZS5nLiBcIjAzRlwiKSB0byBmdWxsIGZvcm0gKGUuZy4gXCIwMDMzRkZcIilcbiAgdmFyIHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgaGV4ID0gaGV4LnJlcGxhY2Uoc2hvcnRoYW5kUmVnZXgsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcbiAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgfSk7XG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICB9IDogbnVsbDtcbn07XG5cbmZ1bmN0aW9uIGNsYW1wKG51bWJlciwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bWJlciwgbWluKSwgbWF4KTtcbn07XG5cbmZ1bmN0aW9uIGlzSW5BcnJheSh2YWx1ZSwgYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID4gLTE7XG59XG5cblxuLyogLS0tLS0tLS0tLSBwYXJ0aWNsZXMuanMgZnVuY3Rpb25zIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXG5cbndpbmRvdy5wSlNEb20gPSBbXTtcblxud2luZG93LnBhcnRpY2xlc0pTID0gZnVuY3Rpb24odGFnX2lkLCBwYXJhbXMpe1xuXG4gIC8vY29uc29sZS5sb2cocGFyYW1zKTtcblxuICAvKiBubyBzdHJpbmcgaWQ/IHNvIGl0J3Mgb2JqZWN0IHBhcmFtcywgYW5kIHNldCB0aGUgaWQgd2l0aCBkZWZhdWx0IGlkICovXG4gIGlmKHR5cGVvZih0YWdfaWQpICE9ICdzdHJpbmcnKXtcbiAgICBwYXJhbXMgPSB0YWdfaWQ7XG4gICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XG4gIH1cblxuICAvKiBubyBpZD8gc2V0IHRoZSBpZCB0byBkZWZhdWx0IGlkICovXG4gIGlmKCF0YWdfaWQpe1xuICAgIHRhZ19pZCA9ICdwYXJ0aWNsZXMtanMnO1xuICB9XG5cbiAgLyogcEpTIGVsZW1lbnRzICovXG4gIHZhciBwSlNfdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKSxcbiAgICAgIHBKU19jYW52YXNfY2xhc3MgPSAncGFydGljbGVzLWpzLWNhbnZhcy1lbCcsXG4gICAgICBleGlzdF9jYW52YXMgPSBwSlNfdGFnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUocEpTX2NhbnZhc19jbGFzcyk7XG5cbiAgLyogcmVtb3ZlIGNhbnZhcyBpZiBleGlzdHMgaW50byB0aGUgcEpTIHRhcmdldCB0YWcgKi9cbiAgaWYoZXhpc3RfY2FudmFzLmxlbmd0aCl7XG4gICAgd2hpbGUoZXhpc3RfY2FudmFzLmxlbmd0aCA+IDApe1xuICAgICAgcEpTX3RhZy5yZW1vdmVDaGlsZChleGlzdF9jYW52YXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIGNyZWF0ZSBjYW52YXMgZWxlbWVudCAqL1xuICB2YXIgY2FudmFzX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhc19lbC5jbGFzc05hbWUgPSBwSlNfY2FudmFzX2NsYXNzO1xuXG4gIC8qIHNldCBzaXplIGNhbnZhcyAqL1xuICBjYW52YXNfZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgY2FudmFzX2VsLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuXG4gIC8qIGFwcGVuZCBjYW52YXMgKi9cbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCkuYXBwZW5kQ2hpbGQoY2FudmFzX2VsKTtcblxuICAvKiBsYXVuY2ggcGFydGljbGUuanMgKi9cbiAgaWYoY2FudmFzICE9IG51bGwpe1xuICAgIHBKU0RvbS5wdXNoKG5ldyBwSlModGFnX2lkLCBwYXJhbXMpKTtcbiAgfVxuXG59O1xuXG53aW5kb3cucGFydGljbGVzSlMubG9hZCA9IGZ1bmN0aW9uKHRhZ19pZCwgcGF0aF9jb25maWdfanNvbiwgY2FsbGJhY2spe1xuXG4gIC8qIGxvYWQganNvbiBjb25maWcgKi9cbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbignR0VUJywgcGF0aF9jb25maWdfanNvbik7XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xuICAgICAgaWYoeGhyLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO1xuICAgICAgICB3aW5kb3cucGFydGljbGVzSlModGFnX2lkLCBwYXJhbXMpO1xuICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gWE1MSHR0cFJlcXVlc3Qgc3RhdHVzOiAnK3hoci5zdGF0dXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gRmlsZSBjb25maWcgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB4aHIuc2VuZCgpO1xuXG59OyIsInZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25vdycpLFxuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgIHdpZHRoID0gY3R4LmNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgsXG4gICAgaGVpZ2h0ID0gY3R4LmNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcbiAgICBhbmltRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gICAgc25vd2ZsYWtlcyA9IFtdO1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgd2lkdGggPSBjdHguY2FudmFzLndpZHRoID0gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCxcbiAgICBoZWlnaHQgPSBjdHguY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc25vd2ZsYWtlcy5sZW5ndGg7IGkrKykge1xuICAgIHNub3dmbGFrZXNbaV0udXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gU25vdygpIHtcbiAgdGhpcy54ID0gcmFuZG9tKDAsIHdpZHRoKTtcbiAgdGhpcy55ID0gcmFuZG9tKGhlaWdodCwgMCk7XG4gIHRoaXMucmFkaXVzID0gcmFuZG9tKDAuNSwgMy4wKTtcbiAgdGhpcy5zcGVlZCA9IHJhbmRvbSgxLCAzKTtcbiAgdGhpcy53aW5kID0gcmFuZG9tKC0wLjUsIDMuMCk7XG59XG5cblNub3cucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICBjdHguZmlsbCgpO1xuICBjdHguY2xvc2VQYXRoKCk7XG59XG5cblNub3cucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnkgLT0gdGhpcy5zcGVlZDtcbiAgdGhpcy54ICs9IHRoaXMud2luZDtcblxuICBpZiAodGhpcy55IDwgMCkge1xuICAgIHRoaXMueSA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMueCA9IHJhbmRvbSgwLCB3aWR0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU25vdyhjb3VudCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBzbm93Zmxha2VzW2ldID0gbmV3IFNub3coKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbm93Zmxha2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgc25vd2ZsYWtlc1tpXS5kcmF3KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9vcCgpIHtcbiAgZHJhdygpO1xuICB1cGRhdGUoKTtcbiAgYW5pbUZyYW1lKGxvb3ApO1xufVxuXG5mdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcbiAgdmFyIHJhbmQgPSAobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKS50b0ZpeGVkKDEpO1xuICByYW5kID0gTWF0aC5yb3VuZChyYW5kKTtcbiAgcmV0dXJuIHJhbmQ7XG59XG5cbmNyZWF0ZVNub3coMTUwKTtcbmxvb3AoKTtcbiJdfQ==
