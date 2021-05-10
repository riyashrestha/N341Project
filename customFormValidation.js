/*
TITLE: Custom Form Validation
AUTHOR: Riya Shrestha
PURPOSE: Program to custom validate a simple form
ORIGINALLY CREATED ON: 12/09/2019
LAST MODIFIED ON: 12/12/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
12/11/2019: Made autocomplete required and added custom validation (RS)
12/12/2019: Added the error placement (RS)
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

    /* Validation plugin - Define form functionality */
    $.validator.setDefaults({
      submitHandler: function()
      {
        scrape();
      }
    });

    /* Custom method
    NAME: alphabets
    PURPOSE: To verify inputs are alphabets
    PARAMETERS: 
          value- current value of the validated element
          element- element to be validated 
          message- for error case
    RETURN VALUE: returns the validated element
    */
    jQuery.validator.addMethod("alphabets", function(value, element) 
    {
      return this.optional(element) || /^[A-Za-z]+$/.test(value)  // just ascii letters
    },"Alphabets only");

    /* Custom method
    NAME: phoneFormat
    PURPOSE: To verify formats of the phone number
    PARAMETERS: 
          value- current value of the validated element
          element- element to be validated 
          message- for error case
    RETURN VALUE: returns the validated element
    */
    jQuery.validator.addMethod("phoneFormat", function(value, element) 
    {
      return this.optional(element) || /(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/.test(value)  // just ascii letters
    },"(123) 456-7890 format only");

    /*Use custom rules and error messages when validating*/
    $("#signUpForm").validate(
    {
      rules: 
      {
        fname:
        {
          required: true,
          maxlength: 12,
          alphabets: true
        },
        lname:
        {
          required: true,
          maxlength: 12,
          alphabets: true
        },
        date:
        {
          required: true,
          date: true
        },
        email:
        {
          required: true,
          email: true,
          maxlength: 30
        },
        pwd:
        {
          required: true,
          maxlength: 20
        },
        phone: 
        {
          required: true,
          maxlength: 14,
          phoneFormat: true
        },
        spinner:
        {
          required: true,
          digits: true,
          maxlength: 2
        },
        search:
        {
          required: true
        }
      },
      /*custom messages for the rules*/
      messages:
      {
        fname:
        {
          required: "Please enter your first name",
          maxlength: $.validator.format("First name should not have more than {0} characters")
        },
        lname:
        {
          required: "Please enter your last name",
          maxlength: $.validator.format("Last name should not have more than {0} characters")
        },
        date:
        {
          required: "Please enter your date of birth",
          date: "Enter a valid date format"
        },
        email:
        {
          required: "Please enter your email",
          email: "Please enter an email of form johndoe@gmail.com",
          maxlength: "No more than 30 characters allowed"
        },
        pwd:
        {
          required: "Please enter a password",
          maxlength: "No more than 20 characters"
        },
        phone:
        {
          required: "Please enter your number",
          maxlength: $.validator.format("Do not enter more than {0} characters")
        },
        spinner:
        {
          required: "Please enter your music experience",
          digits: "Digits only",
          maxlength: $.validator.format("No more than {0} characters allowed")
        },
        search:
        {
          required: "Please enter the instrument name you want to search"
        }
      },
      //error placement
      errorPlacement: function(error, element) 
      {
        if (element.attr("name") == "spinner" )
          error.insertAfter(".error");
        else 
          error.insertAfter(element);
      }
    });
    /* End Validation plugin */
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

  $("#output").html(strEverything);
}