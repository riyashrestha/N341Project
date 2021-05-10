/*
TITLE: Conversions
AUTHOR: Riya Shrestha
PURPOSE: Javascript page to demonstrate data types and conversions of data type
ORIGINALLY CREATED ON: 09/13/2019
LAST MODIFIED ON: 09/13/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification"(RS)
*/

var elOutput = document.getElementById("output");
var strName = "";
var strQuestion = "Please enter your pirate name";
var strDefaultAns = "Long Ben";

var strDigit = "";
var numDigit = 0;
var strQuestion2 = "Please enter the number of gold doubloons you plundered";
var strDefaultAns2 = "25";
var intProfit;

strName = prompt(strQuestion, strDefaultAns);
strDigit = prompt(strQuestion2, strDefaultAns2);
numDigit = parseInt(strDigit);
intProfit = numDigit * 287;

elOutput.textContent = "Ahoy! matey " + strName + ", ye have plundered a loot of " + strDigit + " for a total profit of $" + intProfit + ". Argh!";