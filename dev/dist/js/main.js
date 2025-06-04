$(document).ready(function(){
	//calls functions
});

var animationBull = bodymovin.loadAnimation({
	container: document.getElementById("bull-animation"),
	renderer: "svg",
	loop: true,
	autoplay: true,
	path: "../bull_animation.json"
});

var animationBgBull = bodymovin.loadAnimation({
	container: document.getElementById("bg-bull-animation"),
	renderer: "svg",
	autoplay: !0,
	path: "../bg_bull_animation.json"
});
animationBgBull.setSpeed(2);