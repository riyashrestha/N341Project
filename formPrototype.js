/*
TITLE: Form Prototype
AUTHOR: Riya Shrestha
PURPOSE: Program to demonstrate different jQuery widgets
ORIGINALLY CREATED ON: 11/22/2019
LAST MODIFIED ON: 11/22/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification" (RS)
*/

$(document).ready(function main()
{
	$( "#accordion" ).accordion({
      collapsible: true
    });
	$( "#tabs" ).tabs();
	$( "input[type='checkbox']" ).checkboxradio();
	$( "input[type='radio']" ).checkboxradio();
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "1990:2019"
    });
   
    var spinner = $( "#spinner" ).spinner();
    var availableTags = [
	"Guitar",
	"Ukulele",
	"Keyboard",
	"Piano",
	"Flute",
	"Drum",
	"Trumpet",
	"Bass Guitar",
	"Violin"
    ];
    $("#tags").autocomplete({
      source: availableTags
    });

    $("#submit").click(function()
    {
    	$('#output').html("Hello World");
      return false;
    });
});