setTimeout(function () {
	window.jQuery('#preload-content').fadeOut(400, function () {
		window.jQuery('#preload').fadeOut(800)
		setTimeout(function () {
			window.jQuery('.fade-in').each(function (index) {
				window
					.jQuery(this)
					.delay(400 * index)
					.animate({ top: 0, opacity: 1 }, 800)
			})
		}, 800)
	})

	window.jQuery.backstretch('img/bg1.jpg')
}, 400)
