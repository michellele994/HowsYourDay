$(document).ready(function(){

var gameStarted = false;


document.onkeyup = function(event)
{

	gameStarted = true;
	if (gameStarted === true)
	{
		$("#startbox").html("");
	}
}





});
