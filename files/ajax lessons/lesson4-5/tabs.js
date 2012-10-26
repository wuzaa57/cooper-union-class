$(document).ready(function() {

$("#header > ul > li").on("click", function() { 
	$(this).addClass("current").siblings().removeClass("current");
});

$("#header > ul > li").off("click");

});