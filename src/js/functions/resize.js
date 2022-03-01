__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeContent", function() { return resizeContent; });
var resizeContent = function resizeContent(selector) {
  var mobileWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 576;
  var isPlugin = arguments.length > 2 ? arguments[2] : undefined;
  var desktopAction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var mobileAction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  if (!isPlugin) {
    // actions with selector
    if (window.innerWidth > mobileWidth) {
      desktopAction();
    } else {
      mobileAction();
    }
  } else {
    if (window.innerWidth <= mobileWidth && selector.dataset.pluginActivated == 'false') {
      mobileAction();
      selector.dataset.pluginActivated = 'true';
    }

    if (window.innerWidth > mobileWidth) {
      desktopAction();
      selector.dataset.pluginActivated = 'false';
    }
  }
}; // plugin selector must have data-plugin-activated attribute

/*
const slider = document.querySelector('.swiper-container');

let mySwiper;

function sliderMobile() {
	mySwiper = new Swiper(slider, {
		speed: 400,
		spaceBetween: 100
	});
}

function disableSlider() {
	if (slider.classList.contains('swiper-container-initialized')) {
		mySwiper.destroy();
	}
}

resizeContent(slider, 768, true, disableSlider, sliderMobile);

window.addEventListener('resize', () => {
	resizeContent(slider, 768, true, disableSlider, sliderMobile);
});

*/
