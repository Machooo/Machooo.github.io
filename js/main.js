var d = document;

function init() {
	var anchor_link  = d.getElementById('anchor');
	var anchor_element      = d.getElementById('icons');
	
	anchor_link.addEventListener('click', (e) => { scrollTo(anchor_element, e) }, false);
}
var requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

function scrollTo(to, callback, duration = 1500) {
	
	if (isDomElement(to)) {
		to = to.offsetTop;
	}
	
	function move(amount) {
		document.documentElement.scrollTop = amount;
		document.body.parentNode.scrollTop = amount;
		document.body.scrollTop = amount;
	}

	function position() {
		return document.documentElement.offsetTop || document.body.parentNode.offsetTop || document.body.offsetTop;
	}
	
	var start = position(),
		change = to - start,
		currentTime = 0,
		increment = 20;
	
	var animateScroll = function() {
		currentTime += increment;
		var val = Math.easeInOutQuad(currentTime, start, change, duration);
		move(val);
		if (currentTime < duration) {
			requestAnimFrame(animateScroll);
		}
		else {
			if (callback && typeof(callback) === 'function') {
				callback();
			}
		}
	};
	
	animateScroll();
}

init();

Math.easeInOutQuad = function(t, b, c, d) {
	t /= d / 2;
	if (t < 1) {
		return c / 2 * t * t + b
	}
	t--;
	return -c / 2 * (t * (t - 2) - 1) + b;
};

function isDomElement(obj) {
    return obj instanceof Element;
}