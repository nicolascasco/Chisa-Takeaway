$( document ).ready(function() {
	$nav = $("#nav");
	$navContol = $nav.find(".nav_control");
	$navMenu   = $nav.find(".nav_menu");
	$navList   = $nav.find("ul");
	$menus  = $("#menus");
	let navTab  = document.querySelectorAll(".tab");

	$navContol.bind("click", function(){ $nav.hasClass("open")?navClose():navOpen()});
	
	for (var i = 0; i < navTab.length; i++) {
		$(navTab[i]).on("mouseenter", function(){tabOpen(this);})
		$(navTab[i]).on("mouseleave",  function(){tabClose(this);})
	}

});

navClose = function() {
	$navMenu.css("height", "0").removeAttr("style");
	$nav.removeClass("open");
}

navOpen = function() {
	$nav.addClass("open");
	$navMenu.css("height", $navList.outerHeight() + "px");
}

tabOpen = function(tab) {
	$(tab).addClass("open");
	let hgt =  300;
	$(tab).find(".menuHoverWrapper").css("height", hgt + "px");
	$menus.css("height", hgt + "px");
}

tabClose = function(tab) {
	$(tab).removeClass("open").removeAttr("style");
	$(tab).find(".menuHoverWrapper").css("height", "0px").removeAttr("style");
	$menus.css("height", "0px").removeAttr("style");
}
