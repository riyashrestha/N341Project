/*
TITLE: Ahoy jQuery
AUTHOR: Riya Shrestha
PURPOSE: Program to demonstrate the use of jQuery write methods
ORIGINALLY CREATED ON: 10/25/2019
LAST MODIFIED ON: 10/25/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification" (RS)
*/

/*
NAME: append
PURPOSE: Learning jQuery write with append
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function append()
{
	$("p").append("<br/> Matey ye need to get back to work!");
}

/*
NAME: html
PURPOSE: Learning jQuery write with html
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function html()
{
	$("p").html("Arrghh! Stop dorking aroung matey!");
}

/*
NAME: changeFont
PURPOSE: Learning jQuery write with css
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function changeFont()
{
	$("p").css("font-family", "Courier New");
	$("p").css("font-size", "30px");
	$("p").css("color", "MediumSeaGreen");
}

$(document).ready(function main()
{
	//button 1 for append method
	var btn1 = document.getElementById("append");
	btn1.addEventListener("click", append, false);

	//button 2 for html method
	var btn2 = document.getElementById("html");
	btn2.addEventListener("click", html, false);

	//button 3 for changing font
	var btn3 = document.getElementById("font");
	btn3.addEventListener("click", changeFont, false);
});