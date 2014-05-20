cssSlideJS = function ($div, aDelay) {
	var self = this;
	var delay = aDelay;
	var $slides;
	var currentSlide = 0;
	var n = 0;
	var timer = null;

	function _constructor() {
		$div.addClass("cssSlideJS");
		$slides = $div.children();
		$slides.addClass("slide");
		n = $slides.length;
		if (n < 2) return;
		$slides.eq(currentSlide).addClass("current");
		$slides.eq(currentSlide+1).addClass("next");

		play();
	}

	function play() {
		if (timer == null) timer = setInterval(next, delay);
	}

	function stop() {
		clearInterval(timer);
		timer = null;
	}

	function next() { // this is a callback, do not use this here, rather use self
		$slides.removeClass("prev");
		$slides.filter(".current").removeClass("current").addClass("prev");

		currentSlide = (currentSlide+1) % n;
		$slides.eq(currentSlide).removeClass("next").addClass("current");

		$slides.eq((currentSlide+1) % n).addClass("next");
	}


	// public methods
	this.play = play;
	this.stop = stop;
	this.next = next;

	_constructor();
}