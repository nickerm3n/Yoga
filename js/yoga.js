(function () {
	document.getElementById('slider-left').onclick = sliderLeft;
	document.getElementById('slider-right').onclick = sliderRight;

}
)()

var position = 0  //-1065

function sliderLeft() {
	var sliderBox = document.querySelector('.slider-box');
	if (position === -1065) {
		position = 0
		sliderBox.style.left = position + 'px';
	}
	if (position === -2130) {
		position = 1065;
		sliderBox.style.left = position + 'px';
	}


	// sliderBox.style.left = position + 'px';
	// (position > -2130 ? position += -1065 : position = 0)
}

function sliderRight() {
	var sliderBox = document.querySelector('.slider-box');	
	(position > -2130 ? position += -1065 : position = 0)
	sliderBox.style.left = position + 'px';
}