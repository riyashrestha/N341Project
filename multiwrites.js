/*
TITLE: Multi Writes
AUTHOR: Riya Shrestha
PURPOSE: Javascript page to demonstrate different types to write message
ORIGINALLY CREATED ON: 09/11/2019
LAST MODIFIED ON: 09/11/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification"(RS)
*/

var str = "I come from the sea with lot of treasures, Computer Science";
var elText = document.getElementById("tc");
elText.textContent = str;

var str2 = "<strong>Ahoy!</strong> I like to sketch";
var elInner = document.getElementById("inner");
elInner.innerHTML = str2;

document.write('Me name is Riya Shrestha. Sail ho!');