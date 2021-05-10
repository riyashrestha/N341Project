/*
TITLE: Strings
AUTHOR: Riya Shrestha
PURPOSE: Program to demonstrate various strings operations 
ORIGINALLY CREATED ON: 10/11/2019
LAST MODIFIED ON: 10/11/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification"(RS)
*/

$(document).ready(function main()
{
	var strName = prompt("What is yer significant other's name?", "Back from the Dead Red! 		");

	var elOutput1 = document.getElementById("input");
	elOutput1.innerHTML = "<b>Significatn Other's name:</b> " + strName +"<br><br><br>";

	var strings = [];

	//12 ship names
	strings[0] = strName.charAt(3) + "'s Scurvylegs Ship";
	strings[1] = strName.indexOf("e") + " Bloody Sharkbait";
	strings[2] = "One-Eyed " + strName.substring(2);
	strings[3] = "Skullface " + strName.substring(3,9) + " Creeper";
	strings[4] = "Dead Man " + strName.trim();
	strings[5] = strName.replace(" ", " Cut-throat ");
	strings[6] = "Longbeard's " + strName.toUpperCase();
	strings[7] = "Ship from " + strName.toLowerCase();
	strings[8] = "Bloody fishface " + strName.charAt(0);
	strings[9] = strName.indexOf("a") + " Hook";
	strings[10] = strName.replace(" ", " Beast ");
	strings[11] = strName.length + " Haunted Ships";

	var elOutput2 = document.getElementById("output");
	elOutput2.innerHTML += "<b>Ships list:</b> <br>";

	//displaying 12 ship names
	for(var i=0; i<strings.length; i++)
	{
		elOutput2.innerHTML += "<li>" + strings[i] + "</li>";
	}
});