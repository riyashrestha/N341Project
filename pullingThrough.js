/*
TITLE: Pulling through
AUTHOR: Riya Shrestha
PURPOSE: Program to scrape user's data
ORIGINALLY CREATED ON: 12/02/2019
LAST MODIFIED ON: 12/02/2019
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
      scrape();
    });
    
});

/*
NAME: scrape
PURPOSE: To extract values from the form and display it
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function scrape()
{
  var firstName = $('#fname').val();
  var text1 = new String("First Name: " + firstName);
  var lastName = $('#lname').val();
  var text2 = new String("Last Name: " + lastName);
  var instrument = [];
  $("input:checkbox[name=instr]:checked").each(function()
  {
    instrument.push($(this).val());
  });
  var text3 = new String("Interested Instruments: " + instrument);
  var date = $('#datepicker').datepicker("getDate");
  var text4 = new String("Birthday: " + date);
  var email = $('#email').val();
  var text5 = new String("Email: " + email);
  var password = $('#password').val();
  var text6 = new String("Password: " + password);
  var phone = $('#phone').val();
  var text7 = new String("Phone: " + phone);
  var musicalInstr = $('input:radio[name=radio-1]:checked').val();
  var text8 = new String("Play Musical Instrument?: " + musicalInstr);
  var experience = $('#spinner').val();
  var text9 = new String("Music Experience: " + experience + " years");
  var search = $('#tags').val();
  var text10 = new String("Searched instrument: " + search);
  var strEverything = "Output:<br>"+text1+"<br>"+text2+"<br>"+text3+"<br>"+text4+"<br>"+text5+"<br>"+text6+"<br>"+text7+"<br>"+text8+"<br>"+text9+"<br>"+text10+"<br>";

  var elOutput = document.getElementById("output");
  elOutput.innerHTML += strEverything;
}