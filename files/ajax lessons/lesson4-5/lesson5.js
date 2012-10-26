$(document).ready(function() {

  var timer, theStart = $("#startButton"), theStop = $("#stopButton");

  function startCounting() {
    timer = setInterval(function() {
      var counterBox = $("#main .counterBox");
      var currentValue = parseInt(counterBox.text(), 10);
      currentValue = currentValue + 5;
      counterBox.text(currentValue.toString());
    }, 800);
    
    theStart.attr("disabled", "disabled");
	$(theStart).off("click", startCounting);
    theStop.removeAttr("disabled");
	$(theStop).on("click", stopCounting);
 }

  function stopCounting() {
    clearInterval(timer);
    theStop.attr("disabled", "disabled");
	$(theStop).off("click", stopCounting);
	$(theStart).on("click", startCounting);
   theStart.removeAttr("disabled");
  }

  $(theStart).on("click", startCounting);
 
});
