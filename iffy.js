/*
TITLE: Iffy Programming
AUTHOR: Riya Shrestha
PURPOSE: Program to demonstrate if statements  
ORIGINALLY CREATED ON: 10/02/2019
LAST MODIFIED ON: 10/02/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification"(RS)
*/

$(document).ready(function main()
{
	var input = "";
	var strQuestion = "Ahoy matey! Did ye arrive to port on time?";
	var strDefaultAnswer = "yes";

	input = prompt(strQuestion, strDefaultAnswer);
	var elOutput = document.getElementById("prompt");
	upperInput = input.toUpperCase();

	if(upperInput == "YES")
	{
		elOutput.textContent = "Ye get extra doubloons"
	}
	else if(upperInput == "NO")
	{
		elOutput.textContent = "Argh! Walk the plank Matey!"
	}
	else
	{
		elOutput.textContent = "Not a valid input";
	}
});