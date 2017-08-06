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
// 		"margin-left":-window.innerWidth*2-(this.width/2), 
// 		"margin-top": -window.innerWidth*2-(this.width/2), 
// 		"position": "absolute"});

// 	$(document).on("swipe", function(e){ 
// 		cursorX = e.pageX;
// 		cursorY = e.pageY;
// 		$(flash).css("top", cursorY + "px");
//     	$(flash).css("left", cursorX + "px");
//    	})
// }

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYXNoTGlnaHQuanMiLCJtYWluLmpzIiwicGFyYWxsYXguanMiLCJwYXJ0aWNsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiBmbGFzaExpZ2h0IChsaWdodCwge2hlaWdodCwgd2lkdGgsIGJhY2tncm91bmRDb2xvcn0pIHtcblxuLy8gXHR0aGlzLmxpZ2h0ID0gbGlnaHQ7XG4vLyBcdCFoZWlnaHQgPyB0aGlzLmhlaWdodCA9IDIwMCA6IHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuLy8gXHQhd2lkdGggPyB0aGlzLndpZHRoID0gMjAwIDogdGhpcy53aWR0aCA9IHdpZHRoO1xuLy8gXHQhYmFja2dyb3VuZENvbG9yID8gdGhpcy5jb2xvciA9IFwiYmxhY2tcIjogdGhpcy5jb2xvciA9IGJhY2tncm91bmRDb2xvcjtcblx0XG4vLyBcdHZhciBmbGFzaCA9IHRoaXMubGlnaHQ7XG4vLyBcdGNvbnNvbGUubG9nKGZsYXNoKTtcblxuLy8gXHQkKGZsYXNoKS5wYXJlbnQoKS5jc3MoXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiKTtcblxuLy8gXHQkKGZsYXNoKS5jc3Moe1xuLy8gXHRcdFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCIsXG4vLyBcdFx0XCJib3gtc2l6aW5nXCI6IFwiY29udGVudC1ib3hcIixcbi8vIFx0XHRcImhlaWdodFwiOiB0aGlzLmhlaWdodCArIFwicHhcIiwgXG4vLyBcdFx0XCJ3aWR0aFwiOiB0aGlzLndpZHRoICsgXCJweFwiLCBcbi8vIFx0XHRcImJvcmRlci1jb2xvclwiOiB0aGlzLmNvbG9yLCBcbi8vIFx0XHRcImJvcmRlci13aWR0aFwiOiB3aW5kb3cuaW5uZXJXaWR0aCAqIDIgKyBcInB4XCIsIFxuLy8gXHRcdFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcbi8vIFx0XHRcImJvcmRlci1yYWRpdXNcIjogXCI1MCVcIixcbi8vIFx0XHRcIm1hcmdpbi1sZWZ0XCI6LXdpbmRvdy5pbm5lcldpZHRoKjItKHRoaXMud2lkdGgvMiksIFxuLy8gXHRcdFwibWFyZ2luLXRvcFwiOiAtd2luZG93LmlubmVyV2lkdGgqMi0odGhpcy53aWR0aC8yKSwgXG4vLyBcdFx0XCJwb3NpdGlvblwiOiBcImFic29sdXRlXCJ9KTtcblxuLy8gXHQkKGRvY3VtZW50KS5vbihcInN3aXBlXCIsIGZ1bmN0aW9uKGUpeyBcbi8vIFx0XHRjdXJzb3JYID0gZS5wYWdlWDtcbi8vIFx0XHRjdXJzb3JZID0gZS5wYWdlWTtcbi8vIFx0XHQkKGZsYXNoKS5jc3MoXCJ0b3BcIiwgY3Vyc29yWSArIFwicHhcIik7XG4vLyAgICAgXHQkKGZsYXNoKS5jc3MoXCJsZWZ0XCIsIGN1cnNvclggKyBcInB4XCIpO1xuLy8gICAgXHR9KVxuLy8gfSIsIlxuLy8gdmFyIGNyZWF0ZVBhcnRpY2xlID0gZnVuY3Rpb24oKSB7XG5cbi8vIFx0dmFyIHBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vIFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYXJ0aWNsZSk7XG5cbi8vIFx0cGFydGljbGUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4vLyBcdHBhcnRpY2xlLnN0eWxlLnRvcCA9IFwiLTEwcHhcIjtcbi8vIFx0cGFydGljbGUuc3R5bGUubGVmdCA9IE1hdGgucmFuZG9tICgpICogd2luZG93LmlubmVyV2lkdGggK1wicHhcIjtcbi8vIFx0cGFydGljbGUuc3R5bGUud2lkdGggPSBcIjFweFwiO1xuLy8gXHRwYXJ0aWNsZS5zdHlsZS5oZWlnaHQgPSBcIjRweFwiO1xuLy8gXHRwYXJ0aWNsZS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgtMzBkZWcpXCI7XG4vLyBcdHBhcnRpY2xlLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuLy8gXHR2YXIgc3BlZWQgPSBNYXRoLnJhbmRvbSAoKSAqIDUwICsgMTtcblxuLy8gXHR2YXIgbW92ZVBhcnRpY2xlID0gZnVuY3Rpb24oKSB7XG5cbi8vIFx0XHR2YXIgc3R5bGVMZWZ0ID0gcGFyc2VGbG9hdCAoIHBhcnRpY2xlLnN0eWxlLmxlZnQgKTtcbi8vIFx0XHR2YXIgc3R5bGVUb3AgPSBwYXJzZUZsb2F0ICggcGFydGljbGUuc3R5bGUudG9wICk7XG5cbi8vIFx0XHRzdHlsZUxlZnQgPSBzdHlsZUxlZnQgLSAoIHNwZWVkICogLTAuMSApO1xuLy8gXHRcdHN0eWxlVG9wID0gc3R5bGVUb3AgKyBzcGVlZDtcbi8vIFx0ICAgIHBhcnRpY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcblxuXG4vLyBcdFx0aWYgKCBzdHlsZVRvcCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuLy8gXHRcdFx0c3R5bGVUb3AgPSAtMTA7XG4vLyBcdFx0XHRzdHlsZUxlZnQgPSBNYXRoLnJhbmRvbSAoKSAqIHdpbmRvdy5pbm5lcldpZHRoICogMS4zO1xuLy8gXHRcdH1cblx0XHRcbi8vIFx0XHRwYXJ0aWNsZS5zdHlsZS50b3AgPSBzdHlsZVRvcCArIFwicHhcIjtcbi8vIFx0XHRwYXJ0aWNsZS5zdHlsZS5sZWZ0ID0gc3R5bGVMZWZ0ICsgXCJweFwiO1xuXG4vLyBcdH07XG4vLyBcdHNldEludGVydmFsICggbW92ZVBhcnRpY2xlLCA1MCApO1xuLy8gfTtcblxuLy8gY3JlYXRlUGFydGljbGUoKTtcblxuLy8gdmFyIHBhcnRpY2xlQ291bnQgPSAxMDA7XG5cbi8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0aWNsZUNvdW50OyBpKyspIHtcbi8vIFx0XHRjcmVhdGVQYXJ0aWNsZSgpO1xuXG5cbi8vIFx0fVxuXG5cblR3ZWVuTWF4LmZyb21UbyhcIi5saWdodHNcIiwgMiwge29wYWNpdHk6IDAsIGxlZnQ6IC01MCwgdG9wOiAtMTAwLCBkZWxheTo0fSwge29wYWNpdHk6IDEsIGxlZnQ6IDAsIHRvcDogMCwgZGVsYXk6IDJ9KTtcblR3ZWVuTWF4LmZyb21UbyhcIi5oYW5kXCIsIDIsIHtvcGFjaXR5OiAwLCBsZWZ0OiAtNTAsIGJvdHRvbTogLTEwMCwgZGVsYXk6IDV9LCB7b3BhY2l0eTogMSwgbGVmdDogMCwgYm90dG9tOiA1MCwgZGVsYXk6IDJ9KTtcblxuVHdlZW5NYXguZnJvbVRvKFwiLm5ldGZsaXgtcmVkLCAuc2Vhc29uXCIsIDIuNSwge29wYWNpdHk6IDAsIGRlbGF5OiAzLjV9LCB7b3BhY2l0eTogMSwgZGVsYXk6IDMuNX0pO1xuXG5Ud2Vlbk1heC5mcm9tVG8oXCIucmVsZWFzZVwiLCAyLjUsIHtvcGFjaXR5OiAwLCBkZWxheTogNC41fSwge29wYWNpdHk6IDEsIGRlbGF5OiA0LjV9KTtcblxuaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTYwKSB7IFxuXHRUd2Vlbk1heC5mcm9tVG8oXCIudHJlZVwiLCAyLCB7b3BhY2l0eTogMCwgcmlnaHQ6IC0xNTAsIGRlbGF5OiA2fSwge29wYWNpdHk6IDEsIHJpZ2h0OiAtNDAsIGRlbGF5OiAyfSk7XG5cdFR3ZWVuTWF4LmZyb21UbyhcIi50aXRsZVwiLCA0LCB7b3BhY2l0eTogMCwgc2NhbGU6IDAuN30sIHtvcGFjaXR5OiAxLCBzY2FsZTogMS41fSk7XG59IGVsc2UgIHtcblx0VHdlZW5NYXguZnJvbVRvKFwiLnRpdGxlXCIsIDQsIHtvcGFjaXR5OiAwLCBzY2FsZTogMX0sIHtvcGFjaXR5OiAxLCBzY2FsZTogMS41fSk7XG5cdFR3ZWVuTWF4LmZyb21UbyhcIi50cmVlXCIsIDIsIHtvcGFjaXR5OiAwLCByaWdodDogLTUwLCBkZWxheTogNn0sIHtvcGFjaXR5OiAxLCByaWdodDogMCwgZGVsYXk6IDJ9KTtcbn1cblxuXG4vLy8gTElHSFRTIFBBR0UgLy8vXG5cblxuVHdlZW5NYXguc3RhZ2dlclRvKFwiLmJhY2tncm91bmRUZXN0XCIsIDQsIHtkZWxheTogMiwgb3BhY2l0eTogMCwgeW95bzogdHJ1ZSwgcmVwZWF0OiAtMX0sIDEuNSk7XG5cbiQoZnVuY3Rpb24gKCkge1xuXG4kKCBcIi5uZXh0XCIgKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICQoXCIuY2lyY2xlMlwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbn0pO1xuXG59KTtcblxuXG4vLyBDaGFyYWN0ZXIgUGFnZSAvL1xuXG4vLyBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcbi8vIFx0Zmxhc2hMaWdodCgnLmZsYXNobGlnaHQnLCB7XG4vLyBcdFx0aGVpZ2h0OjEwMCxcbi8vIFx0XHR3aWR0aDoxMDAsXG4vLyBcdH0pO1xuLy8gfWVsc2V7XG4vLyBcdGZsYXNoTGlnaHQoJy5mbGFzaGxpZ2h0Jywge1xuLy8gXHRcdGhlaWdodDoyNTAsXG4vLyBcdFx0d2lkdGg6MjUwLFxuLy8gXHR9KTtcbi8vIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLlBhcmFsbGF4ID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFBhcmFsbGF4LmpzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBAYXV0aG9yIE1hdHRoZXcgV2FnZXJmaWVsZCAtIEB3YWdlcmZpZWxkLCBSZW7DqSBSb3RoIC0gbWFpbEByZW5lcm90aC5vcmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgcGFyYWxsYXggZWZmZWN0IGJldHdlZW4gYW4gYXJyYXkgb2YgbGF5ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgIGRyaXZpbmcgdGhlIG1vdGlvbiBmcm9tIHRoZSBneXJvc2NvcGUgb3V0cHV0IG9mIGEgc21hcnRkZXZpY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiAgICAgICAgICAgICAgSWYgbm8gZ3lyb3Njb3BlIGlzIGF2YWlsYWJsZSwgdGhlIGN1cnNvciBwb3NpdGlvbiBpcyB1c2VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbnZhciBfcmFmID0gcmVxdWlyZSgncmFmJyk7XG5cbnZhciBfcmFmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhZik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBoZWxwZXJzID0ge1xuICBwcm9wZXJ0eUNhY2hlOiB7fSxcbiAgdmVuZG9yczogW251bGwsIFsnLXdlYmtpdC0nLCAnd2Via2l0J10sIFsnLW1vei0nLCAnTW96J10sIFsnLW8tJywgJ08nXSwgWyctbXMtJywgJ21zJ11dLFxuXG4gIGNsYW1wOiBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbWluIDwgbWF4ID8gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlIDogdmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlO1xuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICByZXR1cm4gaGVscGVycy5kZXNlcmlhbGl6ZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgbmFtZSkpO1xuICB9LFxuICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24gZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdudWxsJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9LFxuICBjYW1lbENhc2U6IGZ1bmN0aW9uIGNhbWVsQ2FzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8tKyguKT8vZywgZnVuY3Rpb24gKG1hdGNoLCBjaGFyYWN0ZXIpIHtcbiAgICAgIHJldHVybiBjaGFyYWN0ZXIgPyBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKSA6ICcnO1xuICAgIH0pO1xuICB9LFxuICBhY2NlbGVyYXRlOiBmdW5jdGlvbiBhY2NlbGVyYXRlKGVsZW1lbnQpIHtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGUoMC4wMDAxZGVnKScpO1xuICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0tc3R5bGUnLCAncHJlc2VydmUtM2QnKTtcbiAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAnYmFja2ZhY2UtdmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgfSxcbiAgdHJhbnNmb3JtU3VwcG9ydDogZnVuY3Rpb24gdHJhbnNmb3JtU3VwcG9ydCh2YWx1ZSkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIHByb3BlcnR5U3VwcG9ydCA9IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVZhbHVlID0gbnVsbCxcbiAgICAgICAgZmVhdHVyZVN1cHBvcnQgPSBmYWxzZSxcbiAgICAgICAgY3NzUHJvcGVydHkgPSBudWxsLFxuICAgICAgICBqc1Byb3BlcnR5ID0gbnVsbDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGhlbHBlcnMudmVuZG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChoZWxwZXJzLnZlbmRvcnNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSBoZWxwZXJzLnZlbmRvcnNbaV1bMF0gKyAndHJhbnNmb3JtJztcbiAgICAgICAganNQcm9wZXJ0eSA9IGhlbHBlcnMudmVuZG9yc1tpXVsxXSArICdUcmFuc2Zvcm0nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3NzUHJvcGVydHkgPSAndHJhbnNmb3JtJztcbiAgICAgICAganNQcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuc3R5bGVbanNQcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wZXJ0eVN1cHBvcnQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnMkQnOlxuICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IHByb3BlcnR5U3VwcG9ydDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICczRCc6XG4gICAgICAgIGlmIChwcm9wZXJ0eVN1cHBvcnQpIHtcbiAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9keScpLFxuICAgICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICAgIGRvY3VtZW50T3ZlcmZsb3cgPSBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3csXG4gICAgICAgICAgICAgIGlzQ3JlYXRlZEJvZHkgPSBmYWxzZTtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgaXNDcmVhdGVkQm9keSA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknO1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1Byb3BlcnR5KTtcbiAgICAgICAgICBmZWF0dXJlU3VwcG9ydCA9IHByb3BlcnR5VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wZXJ0eVZhbHVlLmxlbmd0aCA+IDAgJiYgcHJvcGVydHlWYWx1ZSAhPT0gJ25vbmUnO1xuICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY3VtZW50T3ZlcmZsb3c7XG4gICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgICAgICAgIGlmIChpc0NyZWF0ZWRCb2R5KSB7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBmZWF0dXJlU3VwcG9ydDtcbiAgfSxcbiAgY3NzOiBmdW5jdGlvbiBjc3MoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIGpzUHJvcGVydHkgPSBoZWxwZXJzLnByb3BlcnR5Q2FjaGVbcHJvcGVydHldO1xuICAgIGlmICghanNQcm9wZXJ0eSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBoZWxwZXJzLnZlbmRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChoZWxwZXJzLnZlbmRvcnNbaV0gIT09IG51bGwpIHtcbiAgICAgICAgICBqc1Byb3BlcnR5ID0gaGVscGVycy5jYW1lbENhc2UoaGVscGVycy52ZW5kb3JzW2ldWzFdICsgJy0nICsgcHJvcGVydHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGpzUHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaGVscGVycy5wcm9wZXJ0eUNhY2hlW3Byb3BlcnR5XSA9IGpzUHJvcGVydHk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtqc1Byb3BlcnR5XSA9IHZhbHVlO1xuICB9XG59O1xuXG52YXIgTUFHSUNfTlVNQkVSID0gMzAsXG4gICAgREVGQVVMVFMgPSB7XG4gIHJlbGF0aXZlSW5wdXQ6IGZhbHNlLFxuICBjbGlwUmVsYXRpdmVJbnB1dDogZmFsc2UsXG4gIGNhbGlicmF0aW9uVGhyZXNob2xkOiAxMDAsXG4gIGNhbGlicmF0aW9uRGVsYXk6IDUwMCxcbiAgc3VwcG9ydERlbGF5OiA1MDAsXG4gIGNhbGlicmF0ZVg6IGZhbHNlLFxuICBjYWxpYnJhdGVZOiB0cnVlLFxuICBpbnZlcnRYOiB0cnVlLFxuICBpbnZlcnRZOiB0cnVlLFxuICBsaW1pdFg6IGZhbHNlLFxuICBsaW1pdFk6IGZhbHNlLFxuICBzY2FsYXJYOiAxMC4wLFxuICBzY2FsYXJZOiAxMC4wLFxuICBmcmljdGlvblg6IDAuMSxcbiAgZnJpY3Rpb25ZOiAwLjEsXG4gIG9yaWdpblg6IDAuNSxcbiAgb3JpZ2luWTogMC41LFxuICBwb2ludGVyRXZlbnRzOiBmYWxzZSxcbiAgcHJlY2lzaW9uOiAxXG59O1xuXG52YXIgUGFyYWxsYXggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBhcmFsbGF4KGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsYXgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmxheWVycyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGF5ZXInKTtcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2FsaWJyYXRlWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2NhbGlicmF0ZS14JyksXG4gICAgICBjYWxpYnJhdGVZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2FsaWJyYXRlLXknKSxcbiAgICAgIGludmVydFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdpbnZlcnQteCcpLFxuICAgICAgaW52ZXJ0WTogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ2ludmVydC15JyksXG4gICAgICBsaW1pdFg6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC14JyksXG4gICAgICBsaW1pdFk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdsaW1pdC15JyksXG4gICAgICBzY2FsYXJYOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnc2NhbGFyLXgnKSxcbiAgICAgIHNjYWxhclk6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdzY2FsYXIteScpLFxuICAgICAgZnJpY3Rpb25YOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teCcpLFxuICAgICAgZnJpY3Rpb25ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnZnJpY3Rpb24teScpLFxuICAgICAgb3JpZ2luWDogaGVscGVycy5kYXRhKHRoaXMuZWxlbWVudCwgJ29yaWdpbi14JyksXG4gICAgICBvcmlnaW5ZOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnb3JpZ2luLXknKSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGhlbHBlcnMuZGF0YSh0aGlzLmVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycpLFxuICAgICAgcHJlY2lzaW9uOiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncHJlY2lzaW9uJyksXG4gICAgICByZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAncmVsYXRpdmUtaW5wdXQnKSxcbiAgICAgIGNsaXBSZWxhdGl2ZUlucHV0OiBoZWxwZXJzLmRhdGEodGhpcy5lbGVtZW50LCAnY2xpcC1yZWxhdGl2ZS1pbnB1dCcpXG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YVtrZXldID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBERUZBVUxUUywgZGF0YSwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uVGltZXIgPSBudWxsO1xuICAgIHRoaXMuY2FsaWJyYXRpb25GbGFnID0gdHJ1ZTtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlcHRoc1ggPSBbXTtcbiAgICB0aGlzLmRlcHRoc1kgPSBbXTtcbiAgICB0aGlzLnJhZiA9IG51bGw7XG5cbiAgICB0aGlzLmJvdW5kcyA9IG51bGw7XG4gICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gMDtcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvblkgPSAwO1xuICAgIHRoaXMuZWxlbWVudFdpZHRoID0gMDtcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSAwO1xuXG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWCA9IDA7XG4gICAgdGhpcy5lbGVtZW50Q2VudGVyWSA9IDA7XG5cbiAgICB0aGlzLmVsZW1lbnRSYW5nZVggPSAwO1xuICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IDA7XG5cbiAgICB0aGlzLmNhbGlicmF0aW9uWCA9IDA7XG4gICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwO1xuXG4gICAgdGhpcy5pbnB1dFggPSAwO1xuICAgIHRoaXMuaW5wdXRZID0gMDtcblxuICAgIHRoaXMubW90aW9uWCA9IDA7XG4gICAgdGhpcy5tb3Rpb25ZID0gMDtcblxuICAgIHRoaXMudmVsb2NpdHlYID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5WSA9IDA7XG5cbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25EZXZpY2VPcmllbnRhdGlvbiA9IHRoaXMub25EZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25PcmllbnRhdGlvblRpbWVyID0gdGhpcy5vbk9yaWVudGF0aW9uVGltZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2FsaWJyYXRpb25UaW1lciA9IHRoaXMub25DYWxpYnJhdGlvblRpbWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkFuaW1hdGlvbkZyYW1lID0gdGhpcy5vbkFuaW1hdGlvbkZyYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMud2luZG93V2lkdGggPSBudWxsO1xuICAgIHRoaXMud2luZG93SGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0NlbnRlclggPSBudWxsO1xuICAgIHRoaXMud2luZG93Q2VudGVyWSA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dSYWRpdXNYID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd1JhZGl1c1kgPSBudWxsO1xuICAgIHRoaXMucG9ydHJhaXQgPSBudWxsO1xuICAgIHRoaXMuZGVza3RvcCA9ICFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBob25lfGlQb2R8aVBhZHxBbmRyb2lkfEJsYWNrQmVycnl8QkIxMHxtb2JpfHRhYmxldHxvcGVyYSBtaW5pfG5leHVzIDcpL2kpO1xuICAgIHRoaXMubW90aW9uU3VwcG9ydCA9ICEhd2luZG93LkRldmljZU1vdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3A7XG4gICAgdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgPSAhIXdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50ICYmICF0aGlzLmRlc2t0b3A7XG4gICAgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9IDA7XG4gICAgdGhpcy5tb3Rpb25TdGF0dXMgPSAwO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGFyYWxsYXgsIFt7XG4gICAga2V5OiAnaW5pdGlhbGlzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRpYWxpc2UoKSB7XG4gICAgICBpZiAodGhpcy50cmFuc2Zvcm0yRFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCA9IGhlbHBlcnMudHJhbnNmb3JtU3VwcG9ydCgnMkQnKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0zRFN1cHBvcnQgPSBoZWxwZXJzLnRyYW5zZm9ybVN1cHBvcnQoJzNEJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbmZpZ3VyZSBDb250ZXh0IFN0eWxlc1xuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICAgIGhlbHBlcnMuYWNjZWxlcmF0ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgaWYgKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB9XG5cbiAgICAgIC8vIFBvaW50ZXIgZXZlbnRzXG4gICAgICBpZiAoIXRoaXMucG9pbnRlckV2ZW50cykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXBcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJzKCk7XG4gICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24odGhpcy5jYWxpYnJhdGlvbkRlbGF5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVMYXllcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVMYXllcnMoKSB7XG4gICAgICB0aGlzLmxheWVycyA9IHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXllcicpO1xuICAgICAgdGhpcy5kZXB0aHNYID0gW107XG4gICAgICB0aGlzLmRlcHRoc1kgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGF5ZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1tpbmRleF07XG5cbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICAgICAgaGVscGVycy5hY2NlbGVyYXRlKGxheWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxheWVyLnN0eWxlLnBvc2l0aW9uID0gaW5kZXggPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJztcbiAgICAgICAgbGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGxheWVyLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBsYXllci5zdHlsZS50b3AgPSAwO1xuXG4gICAgICAgIHZhciBkZXB0aCA9IGhlbHBlcnMuZGF0YShsYXllciwgJ2RlcHRoJykgfHwgMDtcbiAgICAgICAgdGhpcy5kZXB0aHNYLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteCcpIHx8IGRlcHRoKTtcbiAgICAgICAgdGhpcy5kZXB0aHNZLnB1c2goaGVscGVycy5kYXRhKGxheWVyLCAnZGVwdGgteScpIHx8IGRlcHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVEaW1lbnNpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGltZW5zaW9ucygpIHtcbiAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgdGhpcy53aW5kb3dDZW50ZXJYID0gdGhpcy53aW5kb3dXaWR0aCAqIHRoaXMub3JpZ2luWDtcbiAgICAgIHRoaXMud2luZG93Q2VudGVyWSA9IHRoaXMud2luZG93SGVpZ2h0ICogdGhpcy5vcmlnaW5ZO1xuICAgICAgdGhpcy53aW5kb3dSYWRpdXNYID0gTWF0aC5tYXgodGhpcy53aW5kb3dDZW50ZXJYLCB0aGlzLndpbmRvd1dpZHRoIC0gdGhpcy53aW5kb3dDZW50ZXJYKTtcbiAgICAgIHRoaXMud2luZG93UmFkaXVzWSA9IE1hdGgubWF4KHRoaXMud2luZG93Q2VudGVyWSwgdGhpcy53aW5kb3dIZWlnaHQgLSB0aGlzLndpbmRvd0NlbnRlclkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZUJvdW5kcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUJvdW5kcygpIHtcbiAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5lbGVtZW50UG9zaXRpb25YID0gdGhpcy5ib3VuZHMubGVmdDtcbiAgICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uWSA9IHRoaXMuYm91bmRzLnRvcDtcbiAgICAgIHRoaXMuZWxlbWVudFdpZHRoID0gdGhpcy5ib3VuZHMud2lkdGg7XG4gICAgICB0aGlzLmVsZW1lbnRIZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICB0aGlzLmVsZW1lbnRDZW50ZXJYID0gdGhpcy5lbGVtZW50V2lkdGggKiB0aGlzLm9yaWdpblg7XG4gICAgICB0aGlzLmVsZW1lbnRDZW50ZXJZID0gdGhpcy5lbGVtZW50SGVpZ2h0ICogdGhpcy5vcmlnaW5ZO1xuICAgICAgdGhpcy5lbGVtZW50UmFuZ2VYID0gTWF0aC5tYXgodGhpcy5lbGVtZW50Q2VudGVyWCwgdGhpcy5lbGVtZW50V2lkdGggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKTtcbiAgICAgIHRoaXMuZWxlbWVudFJhbmdlWSA9IE1hdGgubWF4KHRoaXMuZWxlbWVudENlbnRlclksIHRoaXMuZWxlbWVudEhlaWdodCAtIHRoaXMuZWxlbWVudENlbnRlclkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3F1ZXVlQ2FsaWJyYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWV1ZUNhbGlicmF0aW9uKGRlbGF5KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jYWxpYnJhdGlvblRpbWVyKTtcbiAgICAgIHRoaXMuY2FsaWJyYXRpb25UaW1lciA9IHNldFRpbWVvdXQodGhpcy5vbkNhbGlicmF0aW9uVGltZXIsIGRlbGF5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmFibGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCkge1xuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gbnVsbDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uKTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLm9uT3JpZW50YXRpb25UaW1lciwgdGhpcy5zdXBwb3J0RGVsYXkpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdGlvblN1cHBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IG51bGw7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLm9uTW90aW9uVGltZXIsIHRoaXMuc3VwcG9ydERlbGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25YID0gMDtcbiAgICAgICAgdGhpcy5jYWxpYnJhdGlvblkgPSAwO1xuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgdGhpcy5yYWYgPSAoMCwgX3JhZjIuZGVmYXVsdCkodGhpcy5vbkFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvblN1cHBvcnQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy5vbkRldmljZU9yaWVudGF0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3Rpb25TdXBwb3J0KSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgICAgX3JhZjIuZGVmYXVsdC5jYW5jZWwodGhpcy5yYWYpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbGlicmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGlicmF0ZSh4LCB5KSB7XG4gICAgICB0aGlzLmNhbGlicmF0ZVggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLmNhbGlicmF0ZVggOiB4O1xuICAgICAgdGhpcy5jYWxpYnJhdGVZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5jYWxpYnJhdGVZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbnZlcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnZlcnQoeCwgeSkge1xuICAgICAgdGhpcy5pbnZlcnRYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbnZlcnRYIDogeDtcbiAgICAgIHRoaXMuaW52ZXJ0WSA9IHkgPT09IHVuZGVmaW5lZCA/IHRoaXMuaW52ZXJ0WSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZnJpY3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcmljdGlvbih4LCB5KSB7XG4gICAgICB0aGlzLmZyaWN0aW9uWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMuZnJpY3Rpb25YIDogeDtcbiAgICAgIHRoaXMuZnJpY3Rpb25ZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5mcmljdGlvblkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NjYWxhcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjYWxhcih4LCB5KSB7XG4gICAgICB0aGlzLnNjYWxhclggPSB4ID09PSB1bmRlZmluZWQgPyB0aGlzLnNjYWxhclggOiB4O1xuICAgICAgdGhpcy5zY2FsYXJZID0geSA9PT0gdW5kZWZpbmVkID8gdGhpcy5zY2FsYXJZIDogeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsaW1pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpbWl0KHgsIHkpIHtcbiAgICAgIHRoaXMubGltaXRYID0geCA9PT0gdW5kZWZpbmVkID8gdGhpcy5saW1pdFggOiB4O1xuICAgICAgdGhpcy5saW1pdFkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLmxpbWl0WSA6IHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3JpZ2luJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3JpZ2luKHgsIHkpIHtcbiAgICAgIHRoaXMub3JpZ2luWCA9IHggPT09IHVuZGVmaW5lZCA/IHRoaXMub3JpZ2luWCA6IHg7XG4gICAgICB0aGlzLm9yaWdpblkgPSB5ID09PSB1bmRlZmluZWQgPyB0aGlzLm9yaWdpblkgOiB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9zaXRpb24oZWxlbWVudCwgeCwgeSkge1xuICAgICAgeCA9IHgudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnO1xuICAgICAgeSA9IHkudG9GaXhlZCh0aGlzLnByZWNpc2lvbikgKyAncHgnO1xuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtM0RTdXBwb3J0KSB7XG4gICAgICAgIGhlbHBlcnMuY3NzKGVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIHggKyAnLCcgKyB5ICsgJywwKScpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyYW5zZm9ybTJEU3VwcG9ydCkge1xuICAgICAgICBoZWxwZXJzLmNzcyhlbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgeCArICcsJyArIHkgKyAnKScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0geDtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB5O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uT3JpZW50YXRpb25UaW1lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uT3JpZW50YXRpb25UaW1lcigpIHtcbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCAmJiB0aGlzLm9yaWVudGF0aW9uU3RhdHVzID09PSAwKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uU3VwcG9ydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW90aW9uVGltZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdGlvblRpbWVyKCkge1xuICAgICAgaWYgKHRoaXMubW90aW9uU3VwcG9ydCAmJiB0aGlzLm1vdGlvblN0YXR1cyA9PT0gMCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5tb3Rpb25TdXBwb3J0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25DYWxpYnJhdGlvblRpbWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DYWxpYnJhdGlvblRpbWVyKCkge1xuICAgICAgdGhpcy5jYWxpYnJhdGlvbkZsYWcgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uV2luZG93UmVzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkFuaW1hdGlvbkZyYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25BbmltYXRpb25GcmFtZSgpIHtcbiAgICAgIHRoaXMudXBkYXRlQm91bmRzKCk7XG4gICAgICB2YXIgY2FsaWJyYXRlZElucHV0WCA9IHRoaXMuaW5wdXRYIC0gdGhpcy5jYWxpYnJhdGlvblgsXG4gICAgICAgICAgY2FsaWJyYXRlZElucHV0WSA9IHRoaXMuaW5wdXRZIC0gdGhpcy5jYWxpYnJhdGlvblk7XG4gICAgICBpZiAoTWF0aC5hYnMoY2FsaWJyYXRlZElucHV0WCkgPiB0aGlzLmNhbGlicmF0aW9uVGhyZXNob2xkIHx8IE1hdGguYWJzKGNhbGlicmF0ZWRJbnB1dFkpID4gdGhpcy5jYWxpYnJhdGlvblRocmVzaG9sZCkge1xuICAgICAgICB0aGlzLnF1ZXVlQ2FsaWJyYXRpb24oMCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wb3J0cmFpdCkge1xuICAgICAgICB0aGlzLm1vdGlvblggPSB0aGlzLmNhbGlicmF0ZVggPyBjYWxpYnJhdGVkSW5wdXRZIDogdGhpcy5pbnB1dFk7XG4gICAgICAgIHRoaXMubW90aW9uWSA9IHRoaXMuY2FsaWJyYXRlWSA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW90aW9uWCA9IHRoaXMuY2FsaWJyYXRlWCA/IGNhbGlicmF0ZWRJbnB1dFggOiB0aGlzLmlucHV0WDtcbiAgICAgICAgdGhpcy5tb3Rpb25ZID0gdGhpcy5jYWxpYnJhdGVZID8gY2FsaWJyYXRlZElucHV0WSA6IHRoaXMuaW5wdXRZO1xuICAgICAgfVxuICAgICAgdGhpcy5tb3Rpb25YICo9IHRoaXMuZWxlbWVudFdpZHRoICogKHRoaXMuc2NhbGFyWCAvIDEwMCk7XG4gICAgICB0aGlzLm1vdGlvblkgKj0gdGhpcy5lbGVtZW50SGVpZ2h0ICogKHRoaXMuc2NhbGFyWSAvIDEwMCk7XG4gICAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFgpKSkge1xuICAgICAgICB0aGlzLm1vdGlvblggPSBoZWxwZXJzLmNsYW1wKHRoaXMubW90aW9uWCwgLXRoaXMubGltaXRYLCB0aGlzLmxpbWl0WCk7XG4gICAgICB9XG4gICAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5saW1pdFkpKSkge1xuICAgICAgICB0aGlzLm1vdGlvblkgPSBoZWxwZXJzLmNsYW1wKHRoaXMubW90aW9uWSwgLXRoaXMubGltaXRZLCB0aGlzLmxpbWl0WSk7XG4gICAgICB9XG4gICAgICB0aGlzLnZlbG9jaXR5WCArPSAodGhpcy5tb3Rpb25YIC0gdGhpcy52ZWxvY2l0eVgpICogdGhpcy5mcmljdGlvblg7XG4gICAgICB0aGlzLnZlbG9jaXR5WSArPSAodGhpcy5tb3Rpb25ZIC0gdGhpcy52ZWxvY2l0eVkpICogdGhpcy5mcmljdGlvblk7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2luZGV4XSxcbiAgICAgICAgICAgIGRlcHRoWCA9IHRoaXMuZGVwdGhzWFtpbmRleF0sXG4gICAgICAgICAgICBkZXB0aFkgPSB0aGlzLmRlcHRoc1lbaW5kZXhdLFxuICAgICAgICAgICAgeE9mZnNldCA9IHRoaXMudmVsb2NpdHlYICogKGRlcHRoWCAqICh0aGlzLmludmVydFggPyAtMSA6IDEpKSxcbiAgICAgICAgICAgIHlPZmZzZXQgPSB0aGlzLnZlbG9jaXR5WSAqIChkZXB0aFkgKiAodGhpcy5pbnZlcnRZID8gLTEgOiAxKSk7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24obGF5ZXIsIHhPZmZzZXQsIHlPZmZzZXQpO1xuICAgICAgfVxuICAgICAgdGhpcy5yYWYgPSAoMCwgX3JhZjIuZGVmYXVsdCkodGhpcy5vbkFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyb3RhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3RhdGUoYmV0YSwgZ2FtbWEpIHtcbiAgICAgIC8vIEV4dHJhY3QgUm90YXRpb25cbiAgICAgIHZhciB4ID0gKGJldGEgfHwgZXZlbnQuYmV0YSB8fCAwKSAvIE1BR0lDX05VTUJFUixcbiAgICAgICAgICAvLyAgLTkwIDo6IDkwXG4gICAgICB5ID0gKGdhbW1hIHx8IGV2ZW50LmdhbW1hIHx8IDApIC8gTUFHSUNfTlVNQkVSOyAvLyAtMTgwIDo6IDE4MFxuXG4gICAgICAvLyBEZXRlY3QgT3JpZW50YXRpb24gQ2hhbmdlXG4gICAgICB2YXIgcG9ydHJhaXQgPSB0aGlzLndpbmRvd0hlaWdodCA+IHRoaXMud2luZG93V2lkdGg7XG4gICAgICBpZiAodGhpcy5wb3J0cmFpdCAhPT0gcG9ydHJhaXQpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdCA9IHBvcnRyYWl0O1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNhbGlicmF0aW9uRmxhZykge1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uRmxhZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhbGlicmF0aW9uWCA9IHg7XG4gICAgICAgIHRoaXMuY2FsaWJyYXRpb25ZID0geTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnB1dFggPSB4O1xuICAgICAgdGhpcy5pbnB1dFkgPSB5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRGV2aWNlT3JpZW50YXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRldmljZU9yaWVudGF0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgYmV0YSA9IGV2ZW50LmJldGE7XG4gICAgICB2YXIgZ2FtbWEgPSBldmVudC5nYW1tYTtcbiAgICAgIGlmICghdGhpcy5kZXNrdG9wICYmIGJldGEgIT09IG51bGwgJiYgZ2FtbWEgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblN0YXR1cyA9IDE7XG4gICAgICAgIHRoaXMucm90YXRlKGJldGEsIGdhbW1hKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkRldmljZU1vdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRGV2aWNlTW90aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgYmV0YSA9IGV2ZW50LnJvdGF0aW9uUmF0ZS5iZXRhO1xuICAgICAgdmFyIGdhbW1hID0gZXZlbnQucm90YXRpb25SYXRlLmdhbW1hO1xuICAgICAgaWYgKCF0aGlzLmRlc2t0b3AgJiYgYmV0YSAhPT0gbnVsbCAmJiBnYW1tYSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm1vdGlvblN0YXR1cyA9IDE7XG4gICAgICAgIHRoaXMucm90YXRlKGJldGEsIGdhbW1hKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1vdXNlTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICB2YXIgY2xpZW50WCA9IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgIGlmICghdGhpcy5vcmllbnRhdGlvblN1cHBvcnQgJiYgdGhpcy5yZWxhdGl2ZUlucHV0KSB7XG4gICAgICAgIC8vIENsaXAgbW91c2UgY29vcmRpbmF0ZXMgaW5zaWRlIGVsZW1lbnQgYm91bmRzLlxuICAgICAgICBpZiAodGhpcy5jbGlwUmVsYXRpdmVJbnB1dCkge1xuICAgICAgICAgIGNsaWVudFggPSBNYXRoLm1heChjbGllbnRYLCB0aGlzLmVsZW1lbnRQb3NpdGlvblgpO1xuICAgICAgICAgIGNsaWVudFggPSBNYXRoLm1pbihjbGllbnRYLCB0aGlzLmVsZW1lbnRQb3NpdGlvblggKyB0aGlzLmVsZW1lbnRXaWR0aCk7XG4gICAgICAgICAgY2xpZW50WSA9IE1hdGgubWF4KGNsaWVudFksIHRoaXMuZWxlbWVudFBvc2l0aW9uWSk7XG4gICAgICAgICAgY2xpZW50WSA9IE1hdGgubWluKGNsaWVudFksIHRoaXMuZWxlbWVudFBvc2l0aW9uWSArIHRoaXMuZWxlbWVudEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsY3VsYXRlIGlucHV0IHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50UmFuZ2VYICYmIHRoaXMuZWxlbWVudFJhbmdlWSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLmVsZW1lbnRQb3NpdGlvblggLSB0aGlzLmVsZW1lbnRDZW50ZXJYKSAvIHRoaXMuZWxlbWVudFJhbmdlWDtcbiAgICAgICAgICB0aGlzLmlucHV0WSA9IChjbGllbnRZIC0gdGhpcy5lbGVtZW50UG9zaXRpb25ZIC0gdGhpcy5lbGVtZW50Q2VudGVyWSkgLyB0aGlzLmVsZW1lbnRSYW5nZVk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBpbnB1dCByZWxhdGl2ZSB0byB0aGUgd2luZG93LlxuICAgICAgICBpZiAodGhpcy53aW5kb3dSYWRpdXNYICYmIHRoaXMud2luZG93UmFkaXVzWSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRYID0gKGNsaWVudFggLSB0aGlzLndpbmRvd0NlbnRlclgpIC8gdGhpcy53aW5kb3dSYWRpdXNYO1xuICAgICAgICAgIHRoaXMuaW5wdXRZID0gKGNsaWVudFkgLSB0aGlzLndpbmRvd0NlbnRlclkpIC8gdGhpcy53aW5kb3dSYWRpdXNZO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhcmFsbGF4O1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmFsbGF4O1xuXG59LHtcInJhZlwiOjR9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuMlxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lLCBtb2R1bGVMb2FkVGltZSwgbm9kZUxvYWRUaW1lLCB1cFRpbWU7XG5cbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIG5vZGVMb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIG1vZHVsZUxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgICB1cFRpbWUgPSBwcm9jZXNzLnVwdGltZSgpICogMWU5O1xuICAgIG5vZGVMb2FkVGltZSA9IG1vZHVsZUxvYWRUaW1lIC0gdXBUaW1lO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG59KS5jYWxsKHRoaXMpO1xuXG5cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJykpO1xufSx7XCJfcHJvY2Vzc1wiOjN9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSk7XG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXTsgfTtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuOyAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG59LHt9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKSxcbiAgICByb290ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG4gICAgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddLFxuICAgIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZScsXG4gICAgcmFmID0gcm9vdFsncmVxdWVzdCcgKyBzdWZmaXhdLFxuICAgIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XTtcblxuZm9yICh2YXIgaSA9IDA7ICFyYWYgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyBpKyspIHtcbiAgcmFmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ1JlcXVlc3QnICsgc3VmZml4XTtcbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF07XG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmICghcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwLFxuICAgICAgaWQgPSAwLFxuICAgICAgcXVldWUgPSBbXSxcbiAgICAgIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjA7XG5cbiAgcmFmID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKSxcbiAgICAgICAgICBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpO1xuICAgICAgbGFzdCA9IG5leHQgKyBfbm93O1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApO1xuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSk7XG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBjYWYgPSBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKTtcbn07XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpO1xufTtcbm1vZHVsZS5leHBvcnRzLnBvbHlmaWxsID0gZnVuY3Rpb24gKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZjtcbiAgcm9vdC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhZjtcbn07XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7XCJwZXJmb3JtYW5jZS1ub3dcIjoyfV19LHt9LFsxXSkoMSk7XG59KTsiLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyogQXV0aG9yIDogVmluY2VudCBHYXJyZWF1ICAtIHZpbmNlbnRnYXJyZWF1LmNvbVxuLyogTUlUIGxpY2Vuc2U6IGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8qIERlbW8gLyBHZW5lcmF0b3IgOiB2aW5jZW50Z2FycmVhdS5jb20vcGFydGljbGVzLmpzXG4vKiBHaXRIdWIgOiBnaXRodWIuY29tL1ZpbmNlbnRHYXJyZWF1L3BhcnRpY2xlcy5qc1xuLyogSG93IHRvIHVzZT8gOiBDaGVjayB0aGUgR2l0SHViIFJFQURNRVxuLyogdjIuMC4wXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG52YXIgcEpTID0gZnVuY3Rpb24odGFnX2lkLCBwYXJhbXMpe1xuXG4gIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyt0YWdfaWQrJyA+IC5wYXJ0aWNsZXMtanMtY2FudmFzLWVsJyk7XG5cbiAgLyogcGFydGljbGVzLmpzIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzICovXG4gIHRoaXMucEpTID0ge1xuICAgIGNhbnZhczoge1xuICAgICAgZWw6IGNhbnZhc19lbCxcbiAgICAgIHc6IGNhbnZhc19lbC5vZmZzZXRXaWR0aCxcbiAgICAgIGg6IGNhbnZhc19lbC5vZmZzZXRIZWlnaHRcbiAgICB9LFxuICAgIHBhcnRpY2xlczoge1xuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIHZhbHVlOiA0MDAsXG4gICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVfYXJlYTogODAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICB2YWx1ZTogJyNmZmYnXG4gICAgICB9LFxuICAgICAgc2hhcGU6IHtcbiAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgIHN0cm9rZToge1xuICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgIGNvbG9yOiAnI2ZmMDAwMCdcbiAgICAgICAgfSxcbiAgICAgICAgcG9seWdvbjoge1xuICAgICAgICAgIG5iX3NpZGVzOiA1XG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgc3JjOiAnJyxcbiAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogMixcbiAgICAgICAgICBvcGFjaXR5X21pbjogMCxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICB2YWx1ZTogMjAsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIGFuaW06IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHNwZWVkOiAyMCxcbiAgICAgICAgICBzaXplX21pbjogMCxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBkaXN0YW5jZTogMTAwLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB3aWR0aDogMVxuICAgICAgfSxcbiAgICAgIG1vdmU6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMixcbiAgICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgb3V0X21vZGU6ICdvdXQnLFxuICAgICAgICBib3VuY2U6IGZhbHNlLFxuICAgICAgICBhdHRyYWN0OiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICByb3RhdGVYOiAzMDAwLFxuICAgICAgICAgIHJvdGF0ZVk6IDMwMDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFycmF5OiBbXVxuICAgIH0sXG4gICAgaW50ZXJhY3Rpdml0eToge1xuICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBvbmhvdmVyOiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIG1vZGU6ICdncmFiJ1xuICAgICAgICB9LFxuICAgICAgICBvbmNsaWNrOiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIG1vZGU6ICdwdXNoJ1xuICAgICAgICB9LFxuICAgICAgICByZXNpemU6IHRydWVcbiAgICAgIH0sXG4gICAgICBtb2Rlczoge1xuICAgICAgICBncmFiOntcbiAgICAgICAgICBkaXN0YW5jZTogMTAwLFxuICAgICAgICAgIGxpbmVfbGlua2VkOntcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJ1YmJsZTp7XG4gICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICAgIH0sXG4gICAgICAgIHJlcHVsc2U6e1xuICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgICAgZHVyYXRpb246IDAuNFxuICAgICAgICB9LFxuICAgICAgICBwdXNoOntcbiAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOntcbiAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vdXNlOnt9XG4gICAgfSxcbiAgICByZXRpbmFfZGV0ZWN0OiBmYWxzZSxcbiAgICBmbjoge1xuICAgICAgaW50ZXJhY3Q6IHt9LFxuICAgICAgbW9kZXM6IHt9LFxuICAgICAgdmVuZG9yczp7fVxuICAgIH0sXG4gICAgdG1wOiB7fVxuICB9O1xuXG4gIHZhciBwSlMgPSB0aGlzLnBKUztcblxuICAvKiBwYXJhbXMgc2V0dGluZ3MgKi9cbiAgaWYocGFyYW1zKXtcbiAgICBPYmplY3QuZGVlcEV4dGVuZChwSlMsIHBhcmFtcyk7XG4gIH1cblxuICBwSlMudG1wLm9iaiA9IHtcbiAgICBzaXplX3ZhbHVlOiBwSlMucGFydGljbGVzLnNpemUudmFsdWUsXG4gICAgc2l6ZV9hbmltX3NwZWVkOiBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCxcbiAgICBtb3ZlX3NwZWVkOiBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQsXG4gICAgbGluZV9saW5rZWRfZGlzdGFuY2U6IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UsXG4gICAgbGluZV9saW5rZWRfd2lkdGg6IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGgsXG4gICAgbW9kZV9ncmFiX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlLFxuICAgIG1vZGVfYnViYmxlX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UsXG4gICAgbW9kZV9idWJibGVfc2l6ZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsXG4gICAgbW9kZV9yZXB1bHNlX2Rpc3RhbmNlOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlXG4gIH07XG5cblxuICBwSlMuZm4ucmV0aW5hSW5pdCA9IGZ1bmN0aW9uKCl7XG5cbiAgICBpZihwSlMucmV0aW5hX2RldGVjdCAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpe1xuICAgICAgcEpTLmNhbnZhcy5weHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87IFxuICAgICAgcEpTLnRtcC5yZXRpbmEgPSB0cnVlO1xuICAgIH0gXG4gICAgZWxzZXtcbiAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IDE7XG4gICAgICBwSlMudG1wLnJldGluYSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGggKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmNhbnZhcy5oID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRIZWlnaHQgKiBwSlMuY2FudmFzLnB4cmF0aW87XG5cbiAgICBwSlMucGFydGljbGVzLnNpemUudmFsdWUgPSBwSlMudG1wLm9iai5zaXplX3ZhbHVlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkID0gcEpTLnRtcC5vYmouc2l6ZV9hbmltX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCA9IHBKUy50bXAub2JqLm1vdmVfc3BlZWQgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2dyYWJfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX3dpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfc2l6ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9yZXB1bHNlX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuXG4gIH07XG5cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIGNhbnZhcyAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4uY2FudmFzSW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgcEpTLmNhbnZhcy5jdHggPSBwSlMuY2FudmFzLmVsLmdldENvbnRleHQoJzJkJyk7XG4gIH07XG5cbiAgcEpTLmZuLmNhbnZhc1NpemUgPSBmdW5jdGlvbigpe1xuXG4gICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcbiAgICBwSlMuY2FudmFzLmVsLmhlaWdodCA9IHBKUy5jYW52YXMuaDtcblxuICAgIGlmKHBKUyAmJiBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMucmVzaXplKXtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICBwSlMuY2FudmFzLncgPSBwSlMuY2FudmFzLmVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgIHBKUy5jYW52YXMuaCA9IHBKUy5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgLyogcmVzaXplIGNhbnZhcyAqL1xuICAgICAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcbiAgICAgICAgICAgIHBKUy5jYW52YXMudyAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgICAgICBwSlMuY2FudmFzLmggKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XG4gICAgICAgICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XG5cbiAgICAgICAgICAvKiByZXBhaW50IGNhbnZhcyBvbiBhbmltIGRpc2FibGVkICovXG4gICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5KCk7XG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlKCk7XG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgLyogZGVuc2l0eSBwYXJ0aWNsZXMgZW5hYmxlZCAqL1xuICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuXG4gICAgICB9KTtcblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLmNhbnZhc1BhaW50ID0gZnVuY3Rpb24oKXtcbiAgICBwSlMuY2FudmFzLmN0eC5maWxsUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XG4gIH07XG5cbiAgcEpTLmZuLmNhbnZhc0NsZWFyID0gZnVuY3Rpb24oKXtcbiAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xuICB9O1xuXG5cbiAgLyogLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4ucGFydGljbGUgPSBmdW5jdGlvbihjb2xvciwgb3BhY2l0eSwgcG9zaXRpb24pe1xuXG4gICAgLyogc2l6ZSAqL1xuICAgIHRoaXMucmFkaXVzID0gKHBKUy5wYXJ0aWNsZXMuc2l6ZS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBwSlMucGFydGljbGVzLnNpemUudmFsdWU7XG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlKXtcbiAgICAgIHRoaXMuc2l6ZV9zdGF0dXMgPSBmYWxzZTtcbiAgICAgIHRoaXMudnMgPSBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCAvIDEwMDtcbiAgICAgIGlmKCFwSlMucGFydGljbGVzLnNpemUuYW5pbS5zeW5jKXtcbiAgICAgICAgdGhpcy52cyA9IHRoaXMudnMgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIHBvc2l0aW9uICovXG4gICAgdGhpcy54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICB0aGlzLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xuXG4gICAgLyogY2hlY2sgcG9zaXRpb24gIC0gaW50byB0aGUgY2FudmFzICovXG4gICAgaWYodGhpcy54ID4gcEpTLmNhbnZhcy53IC0gdGhpcy5yYWRpdXMqMikgdGhpcy54ID0gdGhpcy54IC0gdGhpcy5yYWRpdXM7XG4gICAgZWxzZSBpZih0aGlzLnggPCB0aGlzLnJhZGl1cyoyKSB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnJhZGl1cztcbiAgICBpZih0aGlzLnkgPiBwSlMuY2FudmFzLmggLSB0aGlzLnJhZGl1cyoyKSB0aGlzLnkgPSB0aGlzLnkgLSB0aGlzLnJhZGl1cztcbiAgICBlbHNlIGlmKHRoaXMueSA8IHRoaXMucmFkaXVzKjIpIHRoaXMueSA9IHRoaXMueSArIHRoaXMucmFkaXVzO1xuXG4gICAgLyogY2hlY2sgcG9zaXRpb24gLSBhdm9pZCBvdmVybGFwICovXG4gICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSl7XG4gICAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAodGhpcywgcG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8qIGNvbG9yICovXG4gICAgdGhpcy5jb2xvciA9IHt9O1xuICAgIGlmKHR5cGVvZihjb2xvci52YWx1ZSkgPT0gJ29iamVjdCcpe1xuXG4gICAgICBpZihjb2xvci52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgdmFyIGNvbG9yX3NlbGVjdGVkID0gY29sb3IudmFsdWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcEpTLnBhcnRpY2xlcy5jb2xvci52YWx1ZS5sZW5ndGgpXTtcbiAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYihjb2xvcl9zZWxlY3RlZCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYoY29sb3IudmFsdWUuciAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuZyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuYiAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgIHRoaXMuY29sb3IucmdiID0ge1xuICAgICAgICAgICAgcjogY29sb3IudmFsdWUucixcbiAgICAgICAgICAgIGc6IGNvbG9yLnZhbHVlLmcsXG4gICAgICAgICAgICBiOiBjb2xvci52YWx1ZS5iXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGNvbG9yLnZhbHVlLmggIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLnMgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmwgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICB0aGlzLmNvbG9yLmhzbCA9IHtcbiAgICAgICAgICAgIGg6IGNvbG9yLnZhbHVlLmgsXG4gICAgICAgICAgICBzOiBjb2xvci52YWx1ZS5zLFxuICAgICAgICAgICAgbDogY29sb3IudmFsdWUubFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2UgaWYoY29sb3IudmFsdWUgPT0gJ3JhbmRvbScpe1xuICAgICAgdGhpcy5jb2xvci5yZ2IgPSB7XG4gICAgICAgIHI6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxuICAgICAgICBnOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKSxcbiAgICAgICAgYjogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZih0eXBlb2YoY29sb3IudmFsdWUpID09ICdzdHJpbmcnKXtcbiAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgIHRoaXMuY29sb3IucmdiID0gaGV4VG9SZ2IodGhpcy5jb2xvci52YWx1ZSk7XG4gICAgfVxuXG4gICAgLyogb3BhY2l0eSAqL1xuICAgIHRoaXMub3BhY2l0eSA9IChwSlMucGFydGljbGVzLm9wYWNpdHkucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlO1xuICAgIGlmKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSl7XG4gICAgICB0aGlzLm9wYWNpdHlfc3RhdHVzID0gZmFsc2U7XG4gICAgICB0aGlzLnZvID0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3BlZWQgLyAxMDA7XG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3luYyl7XG4gICAgICAgIHRoaXMudm8gPSB0aGlzLnZvICogTWF0aC5yYW5kb20oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBhbmltYXRpb24gLSB2ZWxvY2l0eSBmb3Igc3BlZWQgKi9cbiAgICB2YXIgdmVsYmFzZSA9IHt9XG4gICAgc3dpdGNoKHBKUy5wYXJ0aWNsZXMubW92ZS5kaXJlY3Rpb24pe1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLCB5Oi0xIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MC41LCB5Oi0wLjUgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjEsIHk6LTAgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLjUsIHk6MC41IH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeToxIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbS1sZWZ0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDotMC41LCB5OjEgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6LTEsIHk6MCB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AtbGVmdCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6LTAuNSwgeTotMC41IH07XG4gICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeTowIH07XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZihwSlMucGFydGljbGVzLm1vdmUuc3RyYWlnaHQpe1xuICAgICAgdGhpcy52eCA9IHZlbGJhc2UueDtcbiAgICAgIHRoaXMudnkgPSB2ZWxiYXNlLnk7XG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUucmFuZG9tKXtcbiAgICAgICAgdGhpcy52eCA9IHRoaXMudnggKiAoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMudnkgPSB0aGlzLnZ5ICogKE1hdGgucmFuZG9tKCkpO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgdGhpcy52eCA9IHZlbGJhc2UueCArIE1hdGgucmFuZG9tKCktMC41O1xuICAgICAgdGhpcy52eSA9IHZlbGJhc2UueSArIE1hdGgucmFuZG9tKCktMC41O1xuICAgIH1cblxuICAgIC8vIHZhciB0aGV0YSA9IDIuMCAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgIC8vIHRoaXMudnggPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgLy8gdGhpcy52eSA9IE1hdGguc2luKHRoZXRhKTtcblxuICAgIHRoaXMudnhfaSA9IHRoaXMudng7XG4gICAgdGhpcy52eV9pID0gdGhpcy52eTtcblxuICAgIFxuXG4gICAgLyogaWYgc2hhcGUgaXMgaW1hZ2UgKi9cblxuICAgIHZhciBzaGFwZV90eXBlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlO1xuICAgIGlmKHR5cGVvZihzaGFwZV90eXBlKSA9PSAnb2JqZWN0Jyl7XG4gICAgICBpZihzaGFwZV90eXBlIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICB2YXIgc2hhcGVfc2VsZWN0ZWQgPSBzaGFwZV90eXBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoYXBlX3R5cGUubGVuZ3RoKV07XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZV9zZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZV90eXBlO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc2hhcGUgPT0gJ2ltYWdlJyl7XG4gICAgICB2YXIgc2ggPSBwSlMucGFydGljbGVzLnNoYXBlO1xuICAgICAgdGhpcy5pbWcgPSB7XG4gICAgICAgIHNyYzogc2guaW1hZ2Uuc3JjLFxuICAgICAgICByYXRpbzogc2guaW1hZ2Uud2lkdGggLyBzaC5pbWFnZS5oZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmKCF0aGlzLmltZy5yYXRpbykgdGhpcy5pbWcucmF0aW8gPSAxO1xuICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyAmJiBwSlMudG1wLnNvdXJjZV9zdmcgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nKHRoaXMpO1xuICAgICAgICBpZihwSlMudG1wLnB1c2hpbmcpe1xuICAgICAgICAgIHRoaXMuaW1nLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgfTtcblxuXG4gIHBKUy5mbi5wYXJ0aWNsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHAgPSB0aGlzO1xuXG4gICAgaWYocC5yYWRpdXNfYnViYmxlICE9IHVuZGVmaW5lZCl7XG4gICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXNfYnViYmxlOyBcbiAgICB9ZWxzZXtcbiAgICAgIHZhciByYWRpdXMgPSBwLnJhZGl1cztcbiAgICB9XG5cbiAgICBpZihwLm9wYWNpdHlfYnViYmxlICE9IHVuZGVmaW5lZCl7XG4gICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eV9idWJibGU7XG4gICAgfWVsc2V7XG4gICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eTtcbiAgICB9XG5cbiAgICBpZihwLmNvbG9yLnJnYil7XG4gICAgICB2YXIgY29sb3JfdmFsdWUgPSAncmdiYSgnK3AuY29sb3IucmdiLnIrJywnK3AuY29sb3IucmdiLmcrJywnK3AuY29sb3IucmdiLmIrJywnK29wYWNpdHkrJyknO1xuICAgIH1lbHNle1xuICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ2hzbGEoJytwLmNvbG9yLmhzbC5oKycsJytwLmNvbG9yLmhzbC5zKyclLCcrcC5jb2xvci5oc2wubCsnJSwnK29wYWNpdHkrJyknO1xuICAgIH1cblxuICAgIHBKUy5jYW52YXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yX3ZhbHVlO1xuICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgc3dpdGNoKHAuc2hhcGUpe1xuXG4gICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICBwSlMuY2FudmFzLmN0eC5hcmMocC54LCBwLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdlZGdlJzpcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgucmVjdChwLngtcmFkaXVzLCBwLnktcmFkaXVzLCByYWRpdXMqMiwgcmFkaXVzKjIpO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKHBKUy5jYW52YXMuY3R4LCBwLngtcmFkaXVzLCBwLnkrcmFkaXVzIC8gMS42NiwgcmFkaXVzKjIsIDMsIDIpO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUoXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgsXG4gICAgICAgICAgcC54IC0gcmFkaXVzIC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zLjUpLCAvLyBzdGFydFhcbiAgICAgICAgICBwLnkgLSByYWRpdXMgLyAoMi42Ni8zLjUpLCAvLyBzdGFydFlcbiAgICAgICAgICByYWRpdXMqMi42NiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksIC8vIHNpZGVMZW5ndGhcbiAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxuICAgICAgICAgIDEgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcbiAgICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGFyJzpcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxuICAgICAgICAgIHAueCAtIHJhZGl1cyoyIC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy80KSwgLy8gc3RhcnRYXG4gICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIqMi42Ni8zLjUpLCAvLyBzdGFydFlcbiAgICAgICAgICByYWRpdXMqMioyLjY2IC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zKSwgLy8gc2lkZUxlbmd0aFxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywgLy8gc2lkZUNvdW50TnVtZXJhdG9yXG4gICAgICAgICAgMiAvLyBzaWRlQ291bnREZW5vbWluYXRvclxuICAgICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ltYWdlJzpcblxuICAgICAgICBmdW5jdGlvbiBkcmF3KCl7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgaW1nX29iaixcbiAgICAgICAgICAgIHAueC1yYWRpdXMsXG4gICAgICAgICAgICBwLnktcmFkaXVzLFxuICAgICAgICAgICAgcmFkaXVzKjIsXG4gICAgICAgICAgICByYWRpdXMqMiAvIHAuaW1nLnJhdGlvXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2Zycpe1xuICAgICAgICAgIHZhciBpbWdfb2JqID0gcC5pbWcub2JqO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB2YXIgaW1nX29iaiA9IHBKUy50bXAuaW1nX29iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGltZ19vYmope1xuICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIH1cblxuICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGggPiAwKXtcbiAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2UuY29sb3I7XG4gICAgICBwSlMuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwSlMucGFydGljbGVzLnNoYXBlLnN0cm9rZS53aWR0aDtcbiAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBcbiAgICBwSlMuY2FudmFzLmN0eC5maWxsKCk7XG4gICAgXG4gIH07XG5cblxuICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlID0gZnVuY3Rpb24oKXtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykge1xuICAgICAgcEpTLnBhcnRpY2xlcy5hcnJheS5wdXNoKG5ldyBwSlMuZm4ucGFydGljbGUocEpTLnBhcnRpY2xlcy5jb2xvciwgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSk7XG4gICAgfVxuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUgPSBmdW5jdGlvbigpe1xuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xuXG4gICAgICAvKiB0aGUgcGFydGljbGUgKi9cbiAgICAgIHZhciBwID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcblxuICAgICAgLy8gdmFyIGQgPSAoIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLnggKSAqIGR4ICsgKCBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55ICkgKiBkeTtcbiAgICAgIC8vIHZhciBmID0gLUJBTkdfU0laRSAvIGQ7XG4gICAgICAvLyBpZiAoIGQgPCBCQU5HX1NJWkUgKSB7XG4gICAgICAvLyAgICAgdmFyIHQgPSBNYXRoLmF0YW4yKCBkeSwgZHggKTtcbiAgICAgIC8vICAgICBwLnZ4ID0gZiAqIE1hdGguY29zKHQpO1xuICAgICAgLy8gICAgIHAudnkgPSBmICogTWF0aC5zaW4odCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8qIG1vdmUgdGhlIHBhcnRpY2xlICovXG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgICAgdmFyIG1zID0gcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLzI7XG4gICAgICAgIHAueCArPSBwLnZ4ICogbXM7XG4gICAgICAgIHAueSArPSBwLnZ5ICogbXM7XG4gICAgICB9XG5cbiAgICAgIC8qIGNoYW5nZSBvcGFjaXR5IHN0YXR1cyAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKSB7XG4gICAgICAgIGlmKHAub3BhY2l0eV9zdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICAgIGlmKHAub3BhY2l0eSA+PSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpIHAub3BhY2l0eV9zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICBwLm9wYWNpdHkgKz0gcC52bztcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIGlmKHAub3BhY2l0eSA8PSBwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5vcGFjaXR5X21pbikgcC5vcGFjaXR5X3N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgcC5vcGFjaXR5IC09IHAudm87XG4gICAgICAgIH1cbiAgICAgICAgaWYocC5vcGFjaXR5IDwgMCkgcC5vcGFjaXR5ID0gMDtcbiAgICAgIH1cblxuICAgICAgLyogY2hhbmdlIHNpemUgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSl7XG4gICAgICAgIGlmKHAuc2l6ZV9zdGF0dXMgPT0gdHJ1ZSl7XG4gICAgICAgICAgaWYocC5yYWRpdXMgPj0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKSBwLnNpemVfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgcC5yYWRpdXMgKz0gcC52cztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgaWYocC5yYWRpdXMgPD0gcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc2l6ZV9taW4pIHAuc2l6ZV9zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIHAucmFkaXVzIC09IHAudnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYocC5yYWRpdXMgPCAwKSBwLnJhZGl1cyA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIGNoYW5nZSBwYXJ0aWNsZSBwb3NpdGlvbiBpZiBpdCBpcyBvdXQgb2YgY2FudmFzICovXG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xuICAgICAgICB2YXIgbmV3X3BvcyA9IHtcbiAgICAgICAgICB4X2xlZnQ6IHAucmFkaXVzLFxuICAgICAgICAgIHhfcmlnaHQ6ICBwSlMuY2FudmFzLncsXG4gICAgICAgICAgeV90b3A6IHAucmFkaXVzLFxuICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmhcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIHZhciBuZXdfcG9zID0ge1xuICAgICAgICAgIHhfbGVmdDogLXAucmFkaXVzLFxuICAgICAgICAgIHhfcmlnaHQ6IHBKUy5jYW52YXMudyArIHAucmFkaXVzLFxuICAgICAgICAgIHlfdG9wOiAtcC5yYWRpdXMsXG4gICAgICAgICAgeV9ib3R0b206IHBKUy5jYW52YXMuaCArIHAucmFkaXVzXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYocC54IC0gcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpe1xuICAgICAgICBwLnggPSBuZXdfcG9zLnhfbGVmdDtcbiAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocC54ICsgcC5yYWRpdXMgPCAwKXtcbiAgICAgICAgcC54ID0gbmV3X3Bvcy54X3JpZ2h0O1xuICAgICAgICBwLnkgPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xuICAgICAgfVxuICAgICAgaWYocC55IC0gcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpe1xuICAgICAgICBwLnkgPSBuZXdfcG9zLnlfdG9wO1xuICAgICAgICBwLnggPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgICAgfVxuICAgICAgZWxzZSBpZihwLnkgKyBwLnJhZGl1cyA8IDApe1xuICAgICAgICBwLnkgPSBuZXdfcG9zLnlfYm90dG9tO1xuICAgICAgICBwLnggPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgICAgfVxuXG4gICAgICAvKiBvdXQgb2YgY2FudmFzIG1vZGVzICovXG4gICAgICBzd2l0Y2gocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKXtcbiAgICAgICAgY2FzZSAnYm91bmNlJzpcbiAgICAgICAgICBpZiAocC54ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpIHAudnggPSAtcC52eDtcbiAgICAgICAgICBlbHNlIGlmIChwLnggLSBwLnJhZGl1cyA8IDApIHAudnggPSAtcC52eDtcbiAgICAgICAgICBpZiAocC55ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHAudnkgPSAtcC52eTtcbiAgICAgICAgICBlbHNlIGlmIChwLnkgLSBwLnJhZGl1cyA8IDApIHAudnkgPSAtcC52eTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8qIGV2ZW50cyAqL1xuICAgICAgaWYoaXNJbkFycmF5KCdncmFiJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpe1xuICAgICAgICBwSlMuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlKHApO1xuICAgICAgfVxuXG4gICAgICBpZihpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xuICAgICAgICBwSlMuZm4ubW9kZXMuYnViYmxlUGFydGljbGUocCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcbiAgICAgICAgcEpTLmZuLm1vZGVzLnJlcHVsc2VQYXJ0aWNsZShwKTtcbiAgICAgIH1cblxuICAgICAgLyogaW50ZXJhY3Rpb24gYXV0byBiZXR3ZWVuIHBhcnRpY2xlcyAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUgfHwgcEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKXtcbiAgICAgICAgZm9yKHZhciBqID0gaSArIDE7IGogPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaisrKXtcbiAgICAgICAgICB2YXIgcDIgPSBwSlMucGFydGljbGVzLmFycmF5W2pdO1xuXG4gICAgICAgICAgLyogbGluayBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSl7XG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyhwLHAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBhdHRyYWN0IHBhcnRpY2xlcyAqL1xuICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSl7XG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyhwLHAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBib3VuY2UgcGFydGljbGVzICovXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSl7XG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzKHAscDIpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIH1cblxuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNEcmF3ID0gZnVuY3Rpb24oKXtcblxuICAgIC8qIGNsZWFyIGNhbnZhcyAqL1xuICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XG5cbiAgICAvKiB1cGRhdGUgZWFjaCBwYXJ0aWNsZXMgcGFyYW0gKi9cbiAgICBwSlMuZm4ucGFydGljbGVzVXBkYXRlKCk7XG5cbiAgICAvKiBkcmF3IGVhY2ggcGFydGljbGUgKi9cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgcCA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XG4gICAgICBwLmRyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzRW1wdHkgPSBmdW5jdGlvbigpe1xuICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkgPSBbXTtcbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzUmVmcmVzaCA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvKiBpbml0IGFsbCAqL1xuICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmNoZWNrQW5pbUZyYW1lKTtcbiAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSB1bmRlZmluZWQ7XG4gICAgcEpTLnRtcC5pbWdfb2JqID0gdW5kZWZpbmVkO1xuICAgIHBKUy50bXAuY291bnRfc3ZnID0gMDtcbiAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcbiAgICBwSlMuZm4uY2FudmFzQ2xlYXIoKTtcbiAgICBcbiAgICAvKiByZXN0YXJ0ICovXG4gICAgcEpTLmZuLnZlbmRvcnMuc3RhcnQoKTtcblxuICB9O1xuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gcGFydGljbGVzIGludGVyYWN0aW9uIC0tLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzID0gZnVuY3Rpb24ocDEsIHAyKXtcblxuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxuICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xuXG4gICAgLyogZHJhdyBhIGxpbmUgYmV0d2VlbiBwMSBhbmQgcDIgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBpcyB1bmRlciB0aGUgY29uZmlnIGRpc3RhbmNlICovXG4gICAgaWYoZGlzdCA8PSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKXtcblxuICAgICAgdmFyIG9wYWNpdHlfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSAtIChkaXN0IC8gKDEvcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5KSkgLyBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlO1xuXG4gICAgICBpZihvcGFjaXR5X2xpbmUgPiAwKXsgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLyogc3R5bGUgKi9cbiAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCcrY29sb3JfbGluZS5yKycsJytjb2xvcl9saW5lLmcrJywnK2NvbG9yX2xpbmUuYisnLCcrb3BhY2l0eV9saW5lKycpJztcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aDtcbiAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cbiAgICAgICAgXG4gICAgICAgIC8qIHBhdGggKi9cbiAgICAgICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwMS54LCBwMS55KTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVRvKHAyLngsIHAyLnkpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMgID0gZnVuY3Rpb24ocDEsIHAyKXtcblxuICAgIC8qIGNvbmRlbnNlZCBwYXJ0aWNsZXMgKi9cbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcblxuICAgIGlmKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7XG5cbiAgICAgIHZhciBheCA9IGR4LyhwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVYKjEwMDApLFxuICAgICAgICAgIGF5ID0gZHkvKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVkqMTAwMCk7XG5cbiAgICAgIHAxLnZ4IC09IGF4O1xuICAgICAgcDEudnkgLT0gYXk7XG5cbiAgICAgIHAyLnZ4ICs9IGF4O1xuICAgICAgcDIudnkgKz0gYXk7XG5cbiAgICB9XG4gICAgXG5cbiAgfVxuXG5cbiAgcEpTLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyA9IGZ1bmN0aW9uKHAxLCBwMil7XG5cbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KSxcbiAgICAgICAgZGlzdF9wID0gcDEucmFkaXVzK3AyLnJhZGl1cztcblxuICAgIGlmKGRpc3QgPD0gZGlzdF9wKXtcbiAgICAgIHAxLnZ4ID0gLXAxLnZ4O1xuICAgICAgcDEudnkgPSAtcDEudnk7XG5cbiAgICAgIHAyLnZ4ID0gLXAyLnZ4O1xuICAgICAgcDIudnkgPSAtcDIudnk7XG4gICAgfVxuXG4gIH1cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIG1vZGVzIGV2ZW50cyAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyA9IGZ1bmN0aW9uKG5iLCBwb3Mpe1xuXG4gICAgcEpTLnRtcC5wdXNoaW5nID0gdHJ1ZTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuYjsgaSsrKXtcbiAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkucHVzaChcbiAgICAgICAgbmV3IHBKUy5mbi5wYXJ0aWNsZShcbiAgICAgICAgICBwSlMucGFydGljbGVzLmNvbG9yLFxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAneCc6IHBvcyA/IHBvcy5wb3NfeCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLncsXG4gICAgICAgICAgICAneSc6IHBvcyA/IHBvcy5wb3NfeSA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmhcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGlmKGkgPT0gbmItMSl7XG4gICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIHBKUy50bXAucHVzaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyA9IGZ1bmN0aW9uKG5iKXtcblxuICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkuc3BsaWNlKDAsIG5iKTtcbiAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XG5cbiAgICAvKiBvbiBob3ZlciBldmVudCAqL1xuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKXtcblxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpLFxuICAgICAgICAgIHJhdGlvID0gMSAtIGRpc3RfbW91c2UgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2U7XG5cbiAgICAgIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IHAub3BhY2l0eTtcbiAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gcC5yYWRpdXM7XG4gICAgICB9XG5cbiAgICAgIC8qIG1vdXNlbW92ZSAtIGNoZWNrIHJhdGlvICovXG4gICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7XG5cbiAgICAgICAgaWYocmF0aW8gPj0gMCAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpe1xuICAgICAgICAgIFxuICAgICAgICAgIC8qIHNpemUgKi9cbiAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSAhPSBwSlMucGFydGljbGVzLnNpemUudmFsdWUpe1xuXG4gICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSA+IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSl7XG4gICAgICAgICAgICAgIHZhciBzaXplID0gcC5yYWRpdXMgKyAocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUqcmF0aW8pO1xuICAgICAgICAgICAgICBpZihzaXplID49IDApe1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHNpemU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB2YXIgZGlmID0gcC5yYWRpdXMgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcbiAgICAgICAgICAgICAgICAgIHNpemUgPSBwLnJhZGl1cyAtIChkaWYqcmF0aW8pO1xuICAgICAgICAgICAgICBpZihzaXplID4gMCl7XG4gICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gc2l6ZTtcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogb3BhY2l0eSAqL1xuICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ICE9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSl7XG5cbiAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ID4gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKXtcbiAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSpyYXRpbztcbiAgICAgICAgICAgICAgaWYob3BhY2l0eSA+IHAub3BhY2l0eSAmJiBvcGFjaXR5IDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KXtcbiAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gb3BhY2l0eTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5IC0gKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZS1wSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkqcmF0aW87XG4gICAgICAgICAgICAgIGlmKG9wYWNpdHkgPCBwLm9wYWNpdHkgJiYgb3BhY2l0eSA+PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSl7XG4gICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IG9wYWNpdHk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH1lbHNle1xuICAgICAgICBpbml0KCk7XG4gICAgICB9XG5cblxuICAgICAgLyogbW91c2VsZWF2ZSAqL1xuICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZWxlYXZlJyl7XG4gICAgICAgIGluaXQoKTtcbiAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICAvKiBvbiBjbGljayBldmVudCAqL1xuICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xuXG5cbiAgICAgIGlmKHBKUy50bXAuYnViYmxlX2NsaWNraW5nKXtcbiAgICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3gsXG4gICAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195LFxuICAgICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKSxcbiAgICAgICAgICAgIHRpbWVfc3BlbnQgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lKS8xMDAwO1xuXG4gICAgICAgIGlmKHRpbWVfc3BlbnQgPiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pe1xuICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKjIpe1xuICAgICAgICAgIHBKUy50bXAuYnViYmxlX2NsaWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBmdW5jdGlvbiBwcm9jZXNzKGJ1YmJsZV9wYXJhbSwgcGFydGljbGVzX3BhcmFtLCBwX29ial9idWJibGUsIHBfb2JqLCBpZCl7XG5cbiAgICAgICAgaWYoYnViYmxlX3BhcmFtICE9IHBhcnRpY2xlc19wYXJhbSl7XG5cbiAgICAgICAgICBpZighcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kKXtcbiAgICAgICAgICAgIGlmKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKXtcbiAgICAgICAgICAgICAgaWYocF9vYmpfYnViYmxlICE9IHVuZGVmaW5lZCkgdmFyIG9iaiA9IHBfb2JqX2J1YmJsZTtcbiAgICAgICAgICAgICAgZWxzZSB2YXIgb2JqID0gcF9vYmo7XG4gICAgICAgICAgICAgIGlmKG9iaiAhPSBidWJibGVfcGFyYW0pe1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBfb2JqIC0gKHRpbWVfc3BlbnQgKiAocF9vYmogLSBidWJibGVfcGFyYW0pIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHBfb2JqX2J1YmJsZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICB2YXIgdmFsdWVfdG1wID0gcF9vYmogLSAodGltZV9zcGVudCAqIChwX29iaiAtIGJ1YmJsZV9wYXJhbSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pLFxuICAgICAgICAgICAgICAgICAgZGlmID0gYnViYmxlX3BhcmFtIC0gdmFsdWVfdG1wO1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSBidWJibGVfcGFyYW0gKyBkaWY7XG4gICAgICAgICAgICAgIGlmKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICAgIGlmKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgaWYocEpTLnRtcC5idWJibGVfY2xpY2tpbmcpe1xuICAgICAgICAvKiBzaXplICovXG4gICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSwgcC5yYWRpdXNfYnViYmxlLCBwLnJhZGl1cywgJ3NpemUnKTtcbiAgICAgICAgLyogb3BhY2l0eSAqL1xuICAgICAgICBwcm9jZXNzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5LCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsIHAub3BhY2l0eV9idWJibGUsIHAub3BhY2l0eSwgJ29wYWNpdHknKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLm1vZGVzLnJlcHVsc2VQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xuXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJykge1xuXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcbiAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LFxuICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSk7XG5cbiAgICAgIHZhciBub3JtVmVjID0ge3g6IGR4X21vdXNlL2Rpc3RfbW91c2UsIHk6IGR5X21vdXNlL2Rpc3RfbW91c2V9LFxuICAgICAgICAgIHJlcHVsc2VSYWRpdXMgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLFxuICAgICAgICAgIHZlbG9jaXR5ID0gMTAwLFxuICAgICAgICAgIHJlcHVsc2VGYWN0b3IgPSBjbGFtcCgoMS9yZXB1bHNlUmFkaXVzKSooLTEqTWF0aC5wb3coZGlzdF9tb3VzZS9yZXB1bHNlUmFkaXVzLDIpKzEpKnJlcHVsc2VSYWRpdXMqdmVsb2NpdHksIDAsIDUwKTtcbiAgICAgIFxuICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgeDogcC54ICsgbm9ybVZlYy54ICogcmVwdWxzZUZhY3RvcixcbiAgICAgICAgeTogcC55ICsgbm9ybVZlYy55ICogcmVwdWxzZUZhY3RvclxuICAgICAgfVxuXG4gICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xuICAgICAgICBpZihwb3MueCAtIHAucmFkaXVzID4gMCAmJiBwb3MueCArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy53KSBwLnggPSBwb3MueDtcbiAgICAgICAgaWYocG9zLnkgLSBwLnJhZGl1cyA+IDAgJiYgcG9zLnkgKyBwLnJhZGl1cyA8IHBKUy5jYW52YXMuaCkgcC55ID0gcG9zLnk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcC54ID0gcG9zLng7XG4gICAgICAgIHAueSA9IHBvcy55O1xuICAgICAgfVxuICAgIFxuICAgIH1cblxuXG4gICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpIHtcblxuICAgICAgaWYoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpe1xuICAgICAgICBwSlMudG1wLnJlcHVsc2VfY291bnQrKztcbiAgICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NvdW50ID09IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoKXtcbiAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcpe1xuXG4gICAgICAgIHZhciByZXB1bHNlUmFkaXVzID0gTWF0aC5wb3cocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZS82LCAzKTtcblxuICAgICAgICB2YXIgZHggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIHAueCxcbiAgICAgICAgICAgIGR5ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgLSBwLnksXG4gICAgICAgICAgICBkID0gZHgqZHggKyBkeSpkeTtcblxuICAgICAgICB2YXIgZm9yY2UgPSAtcmVwdWxzZVJhZGl1cyAvIGQgKiAxO1xuXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3MoKXtcblxuICAgICAgICAgIHZhciBmID0gTWF0aC5hdGFuMihkeSxkeCk7XG4gICAgICAgICAgcC52eCA9IGZvcmNlICogTWF0aC5jb3MoZik7XG4gICAgICAgICAgcC52eSA9IGZvcmNlICogTWF0aC5zaW4oZik7XG5cbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpe1xuICAgICAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICAgICAgeDogcC54ICsgcC52eCxcbiAgICAgICAgICAgICAgeTogcC55ICsgcC52eVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvcy54ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpIHAudnggPSAtcC52eDtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBvcy54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgICBpZiAocG9zLnkgKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCkgcC52eSA9IC1wLnZ5O1xuICAgICAgICAgICAgZWxzZSBpZiAocG9zLnkgLSBwLnJhZGl1cyA8IDApIHAudnkgPSAtcC52eTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgaWYoZCA8PSByZXB1bHNlUmFkaXVzKXtcbiAgICAgICAgICBwcm9jZXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiYW5nIC0gc2xvdyBtb3Rpb24gbW9kZVxuICAgICAgICAvLyBpZighcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCl7XG4gICAgICAgIC8vICAgaWYoZCA8PSByZXB1bHNlUmFkaXVzKXtcbiAgICAgICAgLy8gICAgIHByb2Nlc3MoKTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgIHByb2Nlc3MoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBcblxuICAgICAgfWVsc2V7XG5cbiAgICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID09IGZhbHNlKXtcblxuICAgICAgICAgIHAudnggPSBwLnZ4X2k7XG4gICAgICAgICAgcC52eSA9IHAudnlfaTtcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuXG4gIHBKUy5mbi5tb2Rlcy5ncmFiUGFydGljbGUgPSBmdW5jdGlvbihwKXtcblxuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpe1xuXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcbiAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LFxuICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSk7XG5cbiAgICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gdGhlIGN1cnNvciBhbmQgdGhlIHBhcnRpY2xlIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xuICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlKXtcblxuICAgICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3RfbW91c2UgLyAoMS9wSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2U7XG5cbiAgICAgICAgaWYob3BhY2l0eV9saW5lID4gMCl7XG5cbiAgICAgICAgICAvKiBzdHlsZSAqL1xuICAgICAgICAgIHZhciBjb2xvcl9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCcrY29sb3JfbGluZS5yKycsJytjb2xvcl9saW5lLmcrJywnK2NvbG9yX2xpbmUuYisnLCcrb3BhY2l0eV9saW5lKycpJztcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoO1xuICAgICAgICAgIC8vcEpTLmNhbnZhcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXG4gICAgICAgICAgXG4gICAgICAgICAgLyogcGF0aCAqL1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVRvKHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xuXG4gICAgLyogZXZlbnRzIHRhcmdldCBlbGVtZW50ICovXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZGV0ZWN0X29uID09ICd3aW5kb3cnKXtcbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gd2luZG93O1xuICAgIH1lbHNle1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwgPSBwSlMuY2FudmFzLmVsO1xuICAgIH1cblxuXG4gICAgLyogZGV0ZWN0IG1vdXNlIHBvcyAtIG9uIGhvdmVyIC8gY2xpY2sgZXZlbnQgKi9cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgfHwgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcblxuICAgICAgLyogZWwgb24gbW91c2Vtb3ZlICovXG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKXtcblxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5lbCA9PSB3aW5kb3cpe1xuICAgICAgICAgIHZhciBwb3NfeCA9IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgcG9zX3kgPSBlLmNsaWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB2YXIgcG9zX3ggPSBlLm9mZnNldFggfHwgZS5jbGllbnRYLFxuICAgICAgICAgICAgICBwb3NfeSA9IGUub2Zmc2V0WSB8fCBlLmNsaWVudFk7XG4gICAgICAgIH1cblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCA9IHBvc194O1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSA9IHBvc195O1xuXG4gICAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcbiAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID0gJ21vdXNlbW92ZSc7XG5cbiAgICAgIH0pO1xuXG4gICAgICAvKiBlbCBvbiBvbm1vdXNlbGVhdmUgKi9cbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCA9IG51bGw7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ID0gbnVsbDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID0gJ21vdXNlbGVhdmUnO1xuXG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qIG9uIGNsaWNrIGV2ZW50ICovXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcblxuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3g7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3k7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xuXG4gICAgICAgICAgc3dpdGNoKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpe1xuXG4gICAgICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcbiAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPT0gMSl7XG4gICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgcEpTLmludGVyYWN0aXZpdHkubW91c2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iID4gMSl7XG4gICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucGFydGljbGVzX25iKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdidWJibGUnOlxuICAgICAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmVwdWxzZSc6XG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jb3VudCA9IDA7XG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9LCBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmR1cmF0aW9uKjEwMDApXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG5cblxuICB9O1xuXG4gIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzID0gZnVuY3Rpb24oKXtcblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkuZW5hYmxlKXtcblxuICAgICAgLyogY2FsYyBhcmVhICovXG4gICAgICB2YXIgYXJlYSA9IHBKUy5jYW52YXMuZWwud2lkdGggKiBwSlMuY2FudmFzLmVsLmhlaWdodCAvIDEwMDA7XG4gICAgICBpZihwSlMudG1wLnJldGluYSl7XG4gICAgICAgIGFyZWEgPSBhcmVhLyhwSlMuY2FudmFzLnB4cmF0aW8qMik7XG4gICAgICB9XG5cbiAgICAgIC8qIGNhbGMgbnVtYmVyIG9mIHBhcnRpY2xlcyBiYXNlZCBvbiBkZW5zaXR5IGFyZWEgKi9cbiAgICAgIHZhciBuYl9wYXJ0aWNsZXMgPSBhcmVhICogcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWUgLyBwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LnZhbHVlX2FyZWE7XG5cbiAgICAgIC8qIGFkZCBvciByZW1vdmUgWCBwYXJ0aWNsZXMgKi9cbiAgICAgIHZhciBtaXNzaW5nX3BhcnRpY2xlcyA9IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoIC0gbmJfcGFydGljbGVzO1xuICAgICAgaWYobWlzc2luZ19wYXJ0aWNsZXMgPCAwKSBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhNYXRoLmFicyhtaXNzaW5nX3BhcnRpY2xlcykpO1xuICAgICAgZWxzZSBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKG1pc3NpbmdfcGFydGljbGVzKTtcblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwID0gZnVuY3Rpb24ocDEsIHBvc2l0aW9uKXtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgcDIgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xuXG4gICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxuICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XG5cbiAgICAgIGlmKGRpc3QgPD0gcDEucmFkaXVzICsgcDIucmFkaXVzKXtcbiAgICAgICAgcDEueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgICAgIHAxLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xuICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAocDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyA9IGZ1bmN0aW9uKHApe1xuXG4gICAgLyogc2V0IGNvbG9yIHRvIHN2ZyBlbGVtZW50ICovXG4gICAgdmFyIHN2Z1htbCA9IHBKUy50bXAuc291cmNlX3N2ZyxcbiAgICAgICAgcmdiSGV4ID0gLyMoWzAtOUEtRl17Myw2fSkvZ2ksXG4gICAgICAgIGNvbG9yZWRTdmdYbWwgPSBzdmdYbWwucmVwbGFjZShyZ2JIZXgsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7XG4gICAgICAgICAgaWYocC5jb2xvci5yZ2Ipe1xuICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ3JnYmEoJytwLmNvbG9yLnJnYi5yKycsJytwLmNvbG9yLnJnYi5nKycsJytwLmNvbG9yLnJnYi5iKycsJytwLm9wYWNpdHkrJyknO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ2hzbGEoJytwLmNvbG9yLmhzbC5oKycsJytwLmNvbG9yLmhzbC5zKyclLCcrcC5jb2xvci5oc2wubCsnJSwnK3Aub3BhY2l0eSsnKSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb2xvcl92YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAvKiBwcmVwYXJlIHRvIGNyZWF0ZSBpbWcgd2l0aCBjb2xvcmVkIHN2ZyAqL1xuICAgIHZhciBzdmcgPSBuZXcgQmxvYihbY29sb3JlZFN2Z1htbF0sIHt0eXBlOiAnaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04J30pLFxuICAgICAgICBET01VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93LFxuICAgICAgICB1cmwgPSBET01VUkwuY3JlYXRlT2JqZWN0VVJMKHN2Zyk7XG5cbiAgICAvKiBjcmVhdGUgcGFydGljbGUgaW1nIG9iaiAqL1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBwLmltZy5vYmogPSBpbWc7XG4gICAgICBwLmltZy5sb2FkZWQgPSB0cnVlO1xuICAgICAgRE9NVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgcEpTLnRtcC5jb3VudF9zdmcrKztcbiAgICB9KTtcbiAgICBpbWcuc3JjID0gdXJsO1xuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5kZXN0cm95cEpTID0gZnVuY3Rpb24oKXtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgY2FudmFzX2VsLnJlbW92ZSgpO1xuICAgIHBKU0RvbSA9IG51bGw7XG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUgPSBmdW5jdGlvbihjLCBzdGFydFgsIHN0YXJ0WSwgc2lkZUxlbmd0aCwgc2lkZUNvdW50TnVtZXJhdG9yLCBzaWRlQ291bnREZW5vbWluYXRvcil7XG5cbiAgICAvLyBCeSBQcm9ncmFtbWluZyBUaG9tYXMgLSBodHRwczovL3Byb2dyYW1taW5ndGhvbWFzLndvcmRwcmVzcy5jb20vMjAxMy8wNC8wMy9uLXNpZGVkLXNoYXBlcy9cbiAgICB2YXIgc2lkZUNvdW50ID0gc2lkZUNvdW50TnVtZXJhdG9yICogc2lkZUNvdW50RGVub21pbmF0b3I7XG4gICAgdmFyIGRlY2ltYWxTaWRlcyA9IHNpZGVDb3VudE51bWVyYXRvciAvIHNpZGVDb3VudERlbm9taW5hdG9yO1xuICAgIHZhciBpbnRlcmlvckFuZ2xlRGVncmVlcyA9ICgxODAgKiAoZGVjaW1hbFNpZGVzIC0gMikpIC8gZGVjaW1hbFNpZGVzO1xuICAgIHZhciBpbnRlcmlvckFuZ2xlID0gTWF0aC5QSSAtIE1hdGguUEkgKiBpbnRlcmlvckFuZ2xlRGVncmVlcyAvIDE4MDsgLy8gY29udmVydCB0byByYWRpYW5zXG4gICAgYy5zYXZlKCk7XG4gICAgYy5iZWdpblBhdGgoKTtcbiAgICBjLnRyYW5zbGF0ZShzdGFydFgsIHN0YXJ0WSk7XG4gICAgYy5tb3ZlVG8oMCwwKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVDb3VudDsgaSsrKSB7XG4gICAgICBjLmxpbmVUbyhzaWRlTGVuZ3RoLDApO1xuICAgICAgYy50cmFuc2xhdGUoc2lkZUxlbmd0aCwwKTtcbiAgICAgIGMucm90YXRlKGludGVyaW9yQW5nbGUpO1xuICAgIH1cbiAgICAvL2Muc3Ryb2tlKCk7XG4gICAgYy5maWxsKCk7XG4gICAgYy5yZXN0b3JlKCk7XG5cbiAgfTtcblxuICBwSlMuZm4udmVuZG9ycy5leHBvcnRJbWcgPSBmdW5jdGlvbigpe1xuICAgIHdpbmRvdy5vcGVuKHBKUy5jYW52YXMuZWwudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSwgJ19ibGFuaycpO1xuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMubG9hZEltZyA9IGZ1bmN0aW9uKHR5cGUpe1xuXG4gICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyAhPSAnJyl7XG5cbiAgICAgIGlmKHR5cGUgPT0gJ3N2Zycpe1xuXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XG4gICAgICAgICAgICBpZih4aHIuc3RhdHVzID09IDIwMCl7XG4gICAgICAgICAgICAgIHBKUy50bXAuc291cmNlX3N2ZyA9IGRhdGEuY3VycmVudFRhcmdldC5yZXNwb25zZTtcbiAgICAgICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEltYWdlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICBwSlMudG1wLmltZ19lcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgIHBKUy50bXAuaW1nX29iaiA9IGltZztcbiAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltZy5zcmMgPSBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYztcblxuICAgICAgfVxuXG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gTm8gaW1hZ2Uuc3JjJyk7XG4gICAgICBwSlMudG1wLmltZ19lcnJvciA9IHRydWU7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5kcmF3ID0gZnVuY3Rpb24oKXtcblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PSAnaW1hZ2UnKXtcblxuICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyl7XG5cbiAgICAgICAgaWYocEpTLnRtcC5jb3VudF9zdmcgPj0gcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWUpe1xuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzdGlsbCBsb2FkaW5nLi4uJyk7XG4gICAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH1cblxuICAgICAgfWVsc2V7XG5cbiAgICAgICAgaWYocEpTLnRtcC5pbWdfb2JqICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGlmKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1lbHNle1xuICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3ID0gZnVuY3Rpb24oKXtcblxuICAgIC8vIGlmIHNoYXBlIGlzIGltYWdlXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlID09ICdpbWFnZScpe1xuXG4gICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnICYmIHBKUy50bXAuc291cmNlX3N2ZyA9PSB1bmRlZmluZWQpe1xuICAgICAgICBwSlMudG1wLmNoZWNrQW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShjaGVjayk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaW1hZ2VzIGxvYWRlZCEgY2FuY2VsIGNoZWNrJyk7XG4gICAgICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLnRtcC5jaGVja0FuaW1GcmFtZSk7XG4gICAgICAgIGlmKCFwSlMudG1wLmltZ19lcnJvcil7XG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuaW5pdCgpO1xuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cblxuICAgIH1lbHNle1xuICAgICAgcEpTLmZuLnZlbmRvcnMuaW5pdCgpO1xuICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhdygpO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuaW5pdCA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvKiBpbml0IGNhbnZhcyArIHBhcnRpY2xlcyAqL1xuICAgIHBKUy5mbi5yZXRpbmFJbml0KCk7XG4gICAgcEpTLmZuLmNhbnZhc0luaXQoKTtcbiAgICBwSlMuZm4uY2FudmFzU2l6ZSgpO1xuICAgIHBKUy5mbi5jYW52YXNQYWludCgpO1xuICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUoKTtcbiAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuXG4gICAgLyogcGFydGljbGVzLmxpbmVfbGlua2VkIC0gY29udmVydCBoZXggY29sb3JzIHRvIHJnYiAqL1xuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmUgPSBoZXhUb1JnYihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yKTtcblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuc3RhcnQgPSBmdW5jdGlvbigpe1xuXG4gICAgaWYoaXNJbkFycmF5KCdpbWFnZScsIHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSkpe1xuICAgICAgcEpTLnRtcC5pbWdfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLnN1YnN0cihwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5sZW5ndGggLSAzKTtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcocEpTLnRtcC5pbWdfdHlwZSk7XG4gICAgfWVsc2V7XG4gICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzKCk7XG5cbiAgcEpTLmZuLnZlbmRvcnMuc3RhcnQoKTtcbiAgXG5cblxufTtcblxuLyogLS0tLS0tLS0tLSBnbG9iYWwgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cblxuT2JqZWN0LmRlZXBFeHRlbmQgPSBmdW5jdGlvbihkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiZcbiAgICAgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICBhcmd1bWVudHMuY2FsbGVlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG5cbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XG4gICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcbiAgICBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICB9O1xufSkoKTtcblxud2luZG93LmNhbmNlbFJlcXVlc3RBbmltRnJhbWUgPSAoIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lICAgICAgICAgfHxcbiAgICB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxuICAgIHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgICB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XG4gICAgY2xlYXJUaW1lb3V0XG59ICkoKTtcblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KXtcbiAgLy8gQnkgVGltIERvd24gLSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NjI0MTM5LzM0OTM2NTBcbiAgLy8gRXhwYW5kIHNob3J0aGFuZCBmb3JtIChlLmcuIFwiMDNGXCIpIHRvIGZ1bGwgZm9ybSAoZS5nLiBcIjAwMzNGRlwiKVxuICB2YXIgc2hvcnRoYW5kUmVnZXggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICBoZXggPSBoZXgucmVwbGFjZShzaG9ydGhhbmRSZWdleCwgZnVuY3Rpb24obSwgciwgZywgYikge1xuICAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xuICB9KTtcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0ID8ge1xuICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gIH0gOiBudWxsO1xufTtcblxuZnVuY3Rpb24gY2xhbXAobnVtYmVyLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtYmVyLCBtaW4pLCBtYXgpO1xufTtcblxuZnVuY3Rpb24gaXNJbkFycmF5KHZhbHVlLCBhcnJheSkge1xuICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbn1cblxuXG4vKiAtLS0tLS0tLS0tIHBhcnRpY2xlcy5qcyBmdW5jdGlvbnMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cblxud2luZG93LnBKU0RvbSA9IFtdO1xuXG53aW5kb3cucGFydGljbGVzSlMgPSBmdW5jdGlvbih0YWdfaWQsIHBhcmFtcyl7XG5cbiAgLy9jb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gIC8qIG5vIHN0cmluZyBpZD8gc28gaXQncyBvYmplY3QgcGFyYW1zLCBhbmQgc2V0IHRoZSBpZCB3aXRoIGRlZmF1bHQgaWQgKi9cbiAgaWYodHlwZW9mKHRhZ19pZCkgIT0gJ3N0cmluZycpe1xuICAgIHBhcmFtcyA9IHRhZ19pZDtcbiAgICB0YWdfaWQgPSAncGFydGljbGVzLWpzJztcbiAgfVxuXG4gIC8qIG5vIGlkPyBzZXQgdGhlIGlkIHRvIGRlZmF1bHQgaWQgKi9cbiAgaWYoIXRhZ19pZCl7XG4gICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XG4gIH1cblxuICAvKiBwSlMgZWxlbWVudHMgKi9cbiAgdmFyIHBKU190YWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdfaWQpLFxuICAgICAgcEpTX2NhbnZhc19jbGFzcyA9ICdwYXJ0aWNsZXMtanMtY2FudmFzLWVsJyxcbiAgICAgIGV4aXN0X2NhbnZhcyA9IHBKU190YWcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShwSlNfY2FudmFzX2NsYXNzKTtcblxuICAvKiByZW1vdmUgY2FudmFzIGlmIGV4aXN0cyBpbnRvIHRoZSBwSlMgdGFyZ2V0IHRhZyAqL1xuICBpZihleGlzdF9jYW52YXMubGVuZ3RoKXtcbiAgICB3aGlsZShleGlzdF9jYW52YXMubGVuZ3RoID4gMCl7XG4gICAgICBwSlNfdGFnLnJlbW92ZUNoaWxkKGV4aXN0X2NhbnZhc1swXSk7XG4gICAgfVxuICB9XG5cbiAgLyogY3JlYXRlIGNhbnZhcyBlbGVtZW50ICovXG4gIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzX2VsLmNsYXNzTmFtZSA9IHBKU19jYW52YXNfY2xhc3M7XG5cbiAgLyogc2V0IHNpemUgY2FudmFzICovXG4gIGNhbnZhc19lbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICBjYW52YXNfZWwuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG5cbiAgLyogYXBwZW5kIGNhbnZhcyAqL1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKS5hcHBlbmRDaGlsZChjYW52YXNfZWwpO1xuXG4gIC8qIGxhdW5jaCBwYXJ0aWNsZS5qcyAqL1xuICBpZihjYW52YXMgIT0gbnVsbCl7XG4gICAgcEpTRG9tLnB1c2gobmV3IHBKUyh0YWdfaWQsIHBhcmFtcykpO1xuICB9XG5cbn07XG5cbndpbmRvdy5wYXJ0aWNsZXNKUy5sb2FkID0gZnVuY3Rpb24odGFnX2lkLCBwYXRoX2NvbmZpZ19qc29uLCBjYWxsYmFjayl7XG5cbiAgLyogbG9hZCBqc29uIGNvbmZpZyAqL1xuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci5vcGVuKCdHRVQnLCBwYXRoX2NvbmZpZ19qc29uKTtcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCl7XG4gICAgICBpZih4aHIuc3RhdHVzID09IDIwMCl7XG4gICAgICAgIHZhciBwYXJhbXMgPSBKU09OLnBhcnNlKGRhdGEuY3VycmVudFRhcmdldC5yZXNwb25zZSk7XG4gICAgICAgIHdpbmRvdy5wYXJ0aWNsZXNKUyh0YWdfaWQsIHBhcmFtcyk7XG4gICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBYTUxIdHRwUmVxdWVzdCBzdGF0dXM6ICcreGhyLnN0YXR1cyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBGaWxlIGNvbmZpZyBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHhoci5zZW5kKCk7XG5cbn07Il19
