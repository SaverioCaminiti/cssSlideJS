/*
 * cssSlideJS
 * Author: Saverio Caminiti
 * Copyright (c) 2014 Saverio Caminiti
 * MIT Licensed: http://www.opensource.org/licenses/mit-license.php
 *
 * Version 1.0
 * https://github.com/SaverioCaminiti/cssSlideJS
 */

'use strict';

cssSlideJS = function ($div, delay) {
	var self = this;
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
		if (timer == null) timer = setInterval(showNext, delay);
	}

	function stop() {
		clearInterval(timer);
		timer = null;
	}

	function showNext() {
		// this is a callback, do not use this here, rather use self if needed
		$slides.removeClass("prev");
		$slides.filter(".current").removeClass("current").addClass("prev");

		currentSlide = (currentSlide+1) % n;
		$slides.eq(currentSlide).removeClass("next").addClass("current");

		$slides.eq((currentSlide+1) % n).addClass("next");
	}

	function next() { // force next image to be show and reset the timer
		stop();
		showNext();
		start();
	}

	// public methods
	this.play = play;
	this.stop = stop;
	this.next = next;

	_constructor();
}