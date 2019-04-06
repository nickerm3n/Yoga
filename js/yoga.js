(function () {
	document.getElementById('slider').onclick = sliderLeft;

}
)()

var position = -1065;

function sliderLeft() {
	var sliderBox = document.querySelector('.slider-box');	
	sliderBox.style.left = position + 'px';
	(position > -2130 ? position += -1065 : position = 0)

}
