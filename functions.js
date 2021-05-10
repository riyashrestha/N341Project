/*
TITLE: Functions
AUTHOR: Riya Shrestha
PURPOSE: Javascript page to demonstrate functions and how to call them
ORIGINALLY CREATED ON: 09/18/2019
LAST MODIFIED ON: 09/18/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification" (RS)
*/

$(document).ready(function main()
{
	order("output1", "Matey! Weigh Anchor and Hoist the Mizzen in ", 10, " minutes.");
	order("output2", "Sail, Ho! In about ", 3, " miles.");
	order("output3", "Cleave all those ", 10, " men to the Brisket.");
	order("output4", "Make those ", 2, " prisoners walk the plank!");
	order("output5", "Ye scurvy dogs! Bring me ", 1, " clap of thunder!");

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
	elOutput.textContent = str1 + num + str2;
}