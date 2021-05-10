/*
TITLE: Triggered
AUTHOR: Riya Shrestha
PURPOSE: Program to demonstrate the use of jQuery event trigger
ORIGINALLY CREATED ON: 11/15/2019
LAST MODIFIED ON: 11/15/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification" (RS)
*/

$(window).resize(changeColor);
$(document).dblclick(buttonDblclicked);
$(document).keypress(keyPressed);
$("#p3").mouseenter(changeText);

/*
NAME: changeColor
PURPOSE: to change the color of a text
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function changeColor()
{
	$("#p1").html("Arghhh! 10 cannons loaded.").css("color", "MediumSeaGreen");
}

/*
NAME: buttonDblclicked
PURPOSE: to hide an image when button is double clicked
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function buttonDblclicked()
{
	$("img").hide();
}

/*
NAME: keyPressed
PURPOSE: to append a text when a key is pressed
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function keyPressed()
{
	$("#p2").append("<br>Cannon Firing!").css("font-weight", "bold");
}

/*
NAME: changeText
PURPOSE: to change a text
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function changeText()
{
	$("#p3").html("Ye Scurvy dog, focus on the war or you'll walk the plank!");
}	