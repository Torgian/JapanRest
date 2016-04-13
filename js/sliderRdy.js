$(document).ready(function() {
	$("#lightSlider").lightSlider({
		item: 3,
		autoWidth:false,
		slideMove: 1,
		slideMargin:10,

		addClass: '',
		mode: "slide",
		useCSS: true,
		cssEasing: 'ease',
		easing: 'linear',

		speed: 600,
		auto: true,
		loop: true,
		slideEndAnimation: true,
		pause: 2000,

		keyPress: false,
		controls: true,
		prevHtml: '',
		nextHtml: '',

		rtl: false,
		adaptiveHeight: false,

		vertical: false,
		verticalHeight: 500,
		vThumbWidth: 100,

		thumbItem:10,
		pager: true,
		gallery: false,
		galleryMargin: 5,
		thumbMargin: 5,
		currentPagerPosition: 'middle',

		enableTouch: true,
		enableDrag: true,
		freeMove: true,
		swipeThreshold: 40,

		responsive: [],

		onBeforeStart: function (el) {},
		onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
	});
});