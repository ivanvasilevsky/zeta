function hoverOn00() {
	document.getElementById("f00").classList.add("active");
}

function hoverOff00() {
	document.getElementById("f00").classList.remove("active");
}


function hoverOn01() {
	document.getElementById("f01").classList.add("active");
}

function hoverOff01() {
	document.getElementById("f01").classList.remove("active");
}

function hoverOn02() {
	document.getElementById("f02").classList.add("active");
}

function hoverOff02() {
	document.getElementById("f02").classList.remove("active");
}

function hoverOn03() {
	document.getElementById("f03").classList.add("active");
}

function hoverOff03() {
	document.getElementById("f03").classList.remove("active");
}

function hoverOn04() {
	document.getElementById("f04").classList.add("active");
}

function hoverOff04() {
	document.getElementById("f04").classList.remove("active");
}

function hoverOn05() {
	document.getElementById("f05").classList.add("active");
}

function hoverOff05() {
	document.getElementById("f05").classList.remove("active");
}

function hoverOn06() {
	document.getElementById("f06").classList.add("active");
}

function hoverOff06() {
	document.getElementById("f06").classList.remove("active");
}

function hoverOn07() {
	document.getElementById("f07").classList.add("active");
}

function hoverOff07() {
	document.getElementById("f07").classList.remove("active");
}

function hoverOn08() {
	document.getElementById("f08").classList.add("active");
}

function hoverOff08() {
	document.getElementById("f08").classList.remove("active");
}

function hoverOn09() {
	document.getElementById("f09").classList.add("active");
}

function hoverOff09() {
	document.getElementById("f09").classList.remove("active");
}

function hoverOn10() {
	document.getElementById("f10").classList.add("active");
}

function hoverOff10() {
	document.getElementById("f10").classList.remove("active");
}

function hoverOn11() {
	document.getElementById("f11").classList.add("active");
}

function hoverOff11() {
	document.getElementById("f11").classList.remove("active");
}
const search = document.querySelector('.header__search');
const input = document.querySelector('.search__input');
const number = document.getElementById('number');
const top_btn = document.getElementById('top-btn');

search.onclick = function () {
	input.classList.toggle('active')
	number.classList.toggle('active')
	time.classList.toggle('active')
	top_btn.classList.toggle('active')
}
const basket = document.querySelector('.header__basket');
const modal = document.querySelector('.modal');
const exit = document.querySelector('.modal__cross');
const group = document.querySelector('.modal__group');
const body = document.querySelector('body');

basket.onclick = function () {
	modal.classList.toggle('show')
	group.classList.toggle('active')
	body.classList.toggle('no-scroll')
}
exit.onclick = function () {
	modal.classList.toggle('show')
	group.classList.toggle('active')
	body.classList.toggle('no-scroll')
}
var map;

DG.then(function () {
	map = DG.map('map', {
		center: [43.212157, 76.896236],
		zoom: 100
	});

	DG.marker([43.212157, 76.896236]).addTo(map).bindPopup('Магазин ZETA');
});
const nav_block = document.querySelector('.nav__block--mini');
const arrow_down = document.querySelector('.nav-mini__img');

var elm = document.getElementById("nav");
if (elm) elm.onclick = function () {
	nav_block.classList.toggle('active')
	arrow_down.classList.toggle('active')
};