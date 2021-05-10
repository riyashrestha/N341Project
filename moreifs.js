/*
TITLE: More Ifs
AUTHOR: Riya Shrestha
PURPOSE: Program to demonstrate if and switch statements  
ORIGINALLY CREATED ON: 10/02/2019
LAST MODIFIED ON: 10/02/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification"(RS)
*/

$(document).ready(function main()
{
	var intCurrentLatitude = 0;
	var intCurrentLongitude = 0;
	var intDestinationLatitude = 0;
	var intDestinationLongitude = 0;

	strInput1 = prompt("What is yer current latitude?", "20");
	strInput2 = prompt("What is yer current longitude?", "30");
	strInput3 = prompt("What is yer destination latitude?", "50");
	strInput4 = prompt("What is yer destination longitude?", "60");

	//Converting string inputs to integer inputs
	intCurrentLatitude = parseInt(strInput1);
	intCurrentLongitude = parseInt(strInput2);
	intDestinationLatitude = parseInt(strInput3);
	intDestinationLongitude = parseInt(strInput4);

	//displaying user's input
	var elOutput1 = document.getElementById("echo");
	var elOutput2 = document.getElementById("echo");
	var elOutput3 = document.getElementById("echo");
	var elOutput4 = document.getElementById("echo");
	var elOutput5 = document.getElementById("echo");

	elOutput1.innerHTML += "User Input:";
	elOutput2.innerHTML += "<br>Current Latitude is " + intCurrentLatitude;
	elOutput3.innerHTML += "<br>Current Longitude is " + intCurrentLongitude;
	elOutput4.innerHTML += "<br>Destination Latitude is " + intDestinationLatitude;
	elOutput5.innerHTML += "<br>Destination Longitude is " + intDestinationLongitude;

	//calculating direction and displaying result through if else
	var elOutput6 = document.getElementById("ifElse");
	elOutput6.innerHTML+="<br>If/Else Costruct:";

	if(intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude)
	{
		elOutput6.innerHTML += "<br>Head North East";
	}
	else if(intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude)
	{
		elOutput6.innerHTML += "<br>Head North West";
	}
	else if(intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude)
	{
		elOutput6.innerHTML += "<br>Head South West";
	}
	else if(intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude)
	{
		elOutput6.innerHTML += "<br>Head South East";
	}
	else
	{
		elOutput6.innerHTML += "<br>Land Ho!"
	}

	//calculating direction and displaying result through switch cases
	var elOutput7 = document.getElementById("caseSwitch");
	elOutput7.innerHTML += "<br>Case/Switch Construct";

	switch(true)
	{
		case (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude):
			elOutput7.innerHTML += "<br>Head North East";
			break;

		case (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude):
			elOutput7.innerHTML += "<br>Head North West";
			break;

		case (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude):
			elOutput7.innerHTML += "<br>Head South West";
			break;

		case (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude):
			elOutput7.innerHTML += "<br>Head South East";
			break;

		default:
			elOutput7.innerHTML += "<br>Land Ho!";
			break;
	}
});