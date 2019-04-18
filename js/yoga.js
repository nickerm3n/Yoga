(function () {
	document.getElementById('slider-left').onclick = sliderLeft;
	document.getElementById('slider-right').onclick = sliderRight;
	window.onscroll = showMenu;
	document.getElementById('circle').addEventListener('click', test)
}
)()


//global variables
var position = 0,
	circle = document.querySelector('.circle');
	navigation = document.querySelector('.ga-section__nav').children[0]

circle.classList.remove('circle');


function test() {
	circle.classList.remove('circle');
	rollList(38)
	navigation.style.visibility = 'visible';
}


function showMenu() {
	if (window.scrollY > 500) {
		circle.classList.add('circle');
		rollList(-20)
		navigation.style.visibility = 'hidden';
		
	}

	if (window.scrollY < 500) {
		circle.classList.remove('circle');
		rollList(38)
		navigation.style.visibility = 'visible';
	}
}


function rollList(x) {
	var list = document.querySelector('.ga-section__nav').firstElementChild.children;
	for (var i = 0; i < list.length; i++) {
		list[i].style.marginBottom = x + 'px';
	}
}

function sliderLeft() {
	var sliderBox = document.querySelector('.slider-box');
	if (position === -1065) {
		position = 0
		sliderBox.style.left = position + 'px';
	}
	if (position === -2130) {
		position = -1065;
		sliderBox.style.left = position + 'px';
	}

}

function sliderRight() {
	var sliderBox = document.querySelector('.slider-box');	
	(position > -2130 ? position += -1065 : position = 0)
	sliderBox.style.left = position + 'px';
}

