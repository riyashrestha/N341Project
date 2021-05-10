/*
TITLE: Buttons
AUTHOR: Riya Shrestha
PURPOSE: Program to demonstrate the use of buttons
ORIGINALLY CREATED ON: 10/16/2019
LAST MODIFIED ON: 10/16/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification" (RS)
*/

$(document).ready(function main()
{
	//button 1
	var btnH1 = document.getElementById("btnHandler1");
	btnH1.onclick = function()
	{
		order("output1", "Matey! Weigh Anchor and Hoist the Mizzen in ", 10, " minutes.");
	}
	
	//button 2
	var btnH2 = document.getElementById("btnHandler2");
	btnH2.onclick = function()
	{
		order("output2", "Sail, Ho! In about ", 3, " miles.");
	}

	//button 3
	var btnL1 = document.getElementById("btnListener1");
	btnL1.addEventListener("click", function()
	{
		order("output3", "Cleave all those ", 10, " men to the Brisket.");
	},
	false);

	//button 4
	var btnL2 = document.getElementById("btnListener2");
	btnL2.addEventListener("click", function()
	{
		order("output4", "Make those ", 2, " prisoners walk the plank!");
	},
	false);

	//button 5
	var btnMultiL = document.getElementById("btnMultiListener");
	btnMultiL.addEventListener("click", function()
	{
		order("output5", "Ye scurvy dogs! Bring me ", 1, " clap of thunder!");
		notAnotherButtonClick();
	},
	false);
});

/*
NAME: order
PURPOSE: To display concatenated message including number and strings
PARAMETERS: 
	id- div id
	str1- first string message
	num- any number
	str2- second string
RETURN VALUE: n/a
*/
function order(id, str1, num, str2)
{
	var elOutput = document.getElementById(id);
	elOutput.innerHTML += str1 + num + str2 + "<br>";
}

/*
NAME: notAnotherButtonClick
PURPOSE: To display a message 
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function notAnotherButtonClick()
{
	var elOutput2 = document.getElementById("output6");
	elOutput2.innerHTML += "Ahoy Matey! Yer Multi-function event listener is working!<br>";
}