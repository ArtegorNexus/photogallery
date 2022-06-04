"use strict"

let burger = document.querySelector('.burger');
let burgerBox = document.querySelector('.burger__box');
let menu = document.querySelector('.header__row');

burger.addEventListener('click', function(event) {
	burgerBox.classList.toggle('burger__box_active');
	if (burgerBox.classList.contains('burger__box_active')) {
		menu.style.top = '0';
	} else {
		menu.style.top = '-100%';
	}
	document.body.classList.toggle('ovhid');
});

//-----------------------------

let mainslides = document.querySelectorAll('.mainslider__image');
let length = mainslides.length;
let counter = 0;
let mainPrev = document.querySelector('.mainslider__prev');
let mainNext = document.querySelector('.mainslider__next');

function nextMainSlide() {
	counter++;
	if (counter == length) {
		counter = 0;
	};
	changeSlide();
}

function prevMainSlide() {
	if (counter == 0) {
		counter = length;
	};
	counter--;
	changeSlide();
}

function changeSlide() {
	for (let slide of mainslides) {
		slide.style.display = 'none';
	}
	mainslides[counter].style.display = 'block';
}
mainNext.addEventListener('click', nextMainSlide);
mainPrev.addEventListener('click', prevMainSlide);