function flashLight (light,{height,width,color}) {
	this.light = light;
	!height ? this.height=200 : this.height=height;
	!width ? this.width = 200 : this.width=width;
	!color ? this.color = 'black': this.color=color;
	var flash = this.light;
	console.log(flash)
	$(flash).parent().css('overflow', 'hidden');
	$(flash).css({
		'height':this.height +'px', 
		'width':this.width + 'px', 
		"border-color": this.color, 
        "border-width":window.innerWidth*2 +'px', 
        "border-style":"solid",
		'border-radius':'50%',
		'margin-left':-window.innerWidth*2-this.width, 
		'margin-top': -window.innerWidth*2-this.width, 
		'position': 'absolute'});
	document.onmousemove = function(e) {
		cursorX = e.pageX;
		cursorY = e.pageY;
		$(flash).css('top', cursorY + 'px');
    	$(flash).css('left', cursorX + 'px');
	}
	setInterval(checkCursor, 30);
	function checkCursor(){
    	console.log(cursorY,cursorX);

    	
	}
}