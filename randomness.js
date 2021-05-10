/*
TITLE: Randomness
AUTHOR: Riya Shrestha
PURPOSE: Program that guess a number that is generated using random generator  
ORIGINALLY CREATED ON: 09/25/2019
LAST MODIFIED ON: 09/25/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification" (RS)
*/

$(document).ready(function()
{
	/*
	NAME: pirate
	PURPOSE: To get the pirate's rank and id
	PARAMETERS: 
		id- div id
		rank- pirate's rank
	RETURN VALUE: n/a
	*/
	function pirate(rank, id)
	{
		this.favNumber = 0;
		this.strRank = rank;
		var elOutput = document.getElementById(id);

		/*
		NAME: chooseNumber
		PURPOSE: To choose a random number
		PARAMETERS: n/a
		RETURN VALUE: n/a
		*/
		this.chooseNumber = function()
		{
			this.favNumber= Math.floor(Math.random() * 10 + 1);
		};

		/*
		NAME: speak
		PURPOSE: To display the message pirate's want to speak
		PARAMETERS: 
			phrase- message to be displayed
		RETURN VALUE: n/a
		*/
		this.speak = function(phrase)
		{
			elOutput.textContent += " " + phrase;
		};

		/*
		NAME: compare
		PURPOSE: To compare the secret number and pirate's guessed number
		PARAMETERS: 
			number- item to be compared
		RETURN VALUE: true or false
		*/
		this.compare = function(number)
		{
			if(this.favNumber == number)
			{
				return true;
			}
			else
				return false;
		};
	};


	var captain = new pirate("Captain", "cap");
	var pirate1 = new pirate("Blackbeard", "pir1");
	var pirate2 = new pirate("Long Ben", "pir2");
	var pirate3 = new pirate("Jack", "pir3");

	//letting captain choose random number from 1 to 10
	captain.chooseNumber();
	captain.speak("Captain: Mateys! I am choosing a random number between 1 and 10, if ye guess it correctly you'll get a bottle o' grog.");

	pirate1.chooseNumber();
	pirate1.speak("My name is " + pirate1.strRank + " and I choose number " + pirate1.favNumber + " Argh!");
	pirate2.chooseNumber();
	pirate2.speak("My name is " + pirate2.strRank + " and I choose number " + pirate2.favNumber + " Argh!");
	pirate3.chooseNumber();
	pirate3.speak("My name is " + pirate3.strRank + " and I choose number " + pirate3.favNumber + " Argh!");

	var elOutput2 = document.getElementById("result");

	//comparing pirate's guessed number with captain's secret number
	var secretNumber = captain.favNumber;

	if(pirate1.compare(secretNumber))
	{
		elOutput2.textContent = "Captain: My number was " + captain.favNumber + " and " + pirate1.strRank + " gets the bottle o'grog.";
	}
	else if(pirate2.compare(secretNumber))
	{
		elOutput2.textContent = "Captain: My number was " + captain.favNumber + " and " + pirate2.strRank + " gets the bottle o'grog.";
	}
	else if(pirate3.compare(secretNumber))
	{
		elOutput2.textContent = "Captain: My number was " + captain.favNumber + " and " + pirate3.strRank + " gets the bottle o'grog.";
	}
	else
	{
		elOutput2.textContent = "Captain: My number was " + captain.favNumber + " and I keep the bottle o' grog.";
	}
});