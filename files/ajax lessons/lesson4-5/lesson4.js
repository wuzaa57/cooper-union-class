function resetBoxes() {
	$("#boxes > div").removeClass("open closed hidden").addClass(function() { 
		return $(this).attr('data-defaultstate'); 
	});
}

$(document).ready(function() {
	$("#resetButton").click(resetBoxes);

	$("#boxes button").click(function(){ 
		var my = $(this);
		var thisAction = my.attr("name");
		my.closest("div.emptyBox").removeClass("open closed hidden").addClass(thisAction);
	});


});