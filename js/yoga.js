(function () {
	document.getElementById('slider-left').onclick = sliderLeft;
	document.getElementById('slider-right').onclick = sliderRight;
	window.onscroll = test;
}
)()

var position = 0  

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

function test() {
	if (window.scrollY > 1000) {
		console.log('bigger than 1000')
	}

}