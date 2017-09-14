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


if(window.innerWidth >= 768) {
	flashLight('.flashlight', {
		height:250,
		width:250,
	});
}






