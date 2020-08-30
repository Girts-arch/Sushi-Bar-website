"use strict";

var openNav = document.querySelector('.nav-slider');
var closeNav = document.querySelector('.close-nav-slider');
var navSliderSection = document.querySelector('.nav-slider-section');
var navLinks = document.querySelectorAll('.nav-links');

openNav.onclick = function () {
  navSliderSection.classList.remove('closeNav');
  navSliderSection.classList.add('openNav');
};

closeNav.onclick = closeNavSlider;
navLinks.forEach(function (link) {
  link.onclick = closeNavSlider;
});

function closeNavSlider() {
  navSliderSection.classList.remove('openNav');
  navSliderSection.classList.add('closeNav');
}