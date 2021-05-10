/*
TITLE: Final Release
AUTHOR: Riya Shrestha
PURPOSE: To release the final form after corrections
ORIGINALLY CREATED ON: 12/12/2019
LAST MODIFIED ON: 12/12/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification" (RS)
*/

$(document).ready(function main()
{
  /* jQuery UI Library definitions */
  //jQuery UI library for accordion
  $( "#accordion" ).accordion({
      collapsible: true
    });
  $( "#tabs" ).tabs();          //jQuery UI library for using tabs
  $( "input[type='checkbox']" ).checkboxradio();      //jQuery UI library for checkbox
  $( "input[type='radio']" ).checkboxradio();       //jQuery UI library for radio buttons
    $( "#datepicker" ).datepicker({               //jQuery UI library for datepicker
      changeMonth: true,
      changeYear: true,
      yearRange: "1990:2019"
    });
   
    var spinner = $( "#spinner" ).spinner();        //jQuery UI library for spinner
    //values stored in array for autocomplete
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
    $("#tags").autocomplete({         //jQuery UI library for autocomplete
      source: availableTags
    });
    /*End jQuery UI library*/

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
      return this.optional(element) || /([1-9]+[0-9]{9})/.test(value)
    },"3171234567 format only");

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
          minlength: 10,
          maxlength: 10,
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
          maxlength: $.validator.format("No more than {0} characters allowed")
        },
        lname:
        {
          required: "Please enter your last name",
          maxlength: $.validator.format("No more than {0} characters allowed")
        },
        date:
        {
          required: "Please enter your date of birth",
          date: "Enter a valid date format"
        },
        email:
        {
          required: "Please enter your email",
          email: "Please enter a valid email of format name@yourdomain",
          maxlength: $.validator.format("No more than {0} characters allowed")
        },
        pwd:
        {
          required: "Please enter a password",
          maxlength: $.validator.format("No more than {0} characters allowed")
        },
        phone:
        {
          required: "Please enter your number",
          maxlength: $.validator.format("Please enter {0} characters"),
          maxlength: $.validator.format("No more than {0} characters allowed")
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
  //user inputs stored in a variable
  var firstName = $('#fname').val();          //variable to hold first name
  var text1 = new String("First Name: " + firstName);
  var lastName = $('#lname').val();          //variable to hold last name
  var text2 = new String("Last Name: " + lastName);
  var instrument = [];          //array to hold lists of checked instruments
  $("input:checkbox[name=instr]:checked").each(function()
  {
    instrument.push($(this).val());
  });
  var text3 = new String("Interested Instruments: " + instrument);
  var date = $('#datepicker').datepicker("getDate");          //variable to hold date
  var text4 = new String("Birthday: " + date);
  var email = $('#email').val();          //variable to hold email
  var text5 = new String("Email: " + email);
  var password = $('#password').val();          //variable to hold password
  var text6 = new String("Password: " + password);
  var phone = $('#phone').val();          //variable to hold phone number
  var text7 = new String("Phone: " + phone);
  var musicalInstr = $('input:radio[name=radio-1]:checked').val();          //variable to hold selected radio button
  var text8 = new String("Play Musical Instrument?: " + musicalInstr);
  var experience = $('#spinner').val();          //variable to hold spinner's value
  var text9 = new String("Music Experience: " + experience + " years");
  var search = $('#tags').val();          //variable to autocomplete's value
  var text10 = new String("Searched Instrument: " + search);
  //variable to store all the input scraped 
  var strEverything = "Output:<br>"+text1+"<br>"+text2+"<br>"+text3+"<br>"+text4+"<br>"+text5+"<br>"+text6+"<br>"+text7+"<br>"+text8+"<br>"+text9+"<br>"+text10+"<br>";

  //displaying the inputs in the output area
  $("#output").html(strEverything);
}