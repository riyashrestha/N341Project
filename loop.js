/*
TITLE: Looping through Arrays
AUTHOR: Riya Shrestha
PURPOSE: Program to demonstrate looping through arrays 
ORIGINALLY CREATED ON: 10/09/2019
LAST MODIFIED ON: 10/09/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification"(RS)
*/


$(document).ready(function main()
{	
	var counter = 1;
	while(counter == 1)
	{
		var strInput = prompt("Enter a single character matey!", "r");
		if(strInput.length == 1)
		{
			counter = 0;
			var elOutput1 = document.getElementById("input");
			elOutput1.innerHTML += "Input:<br>" + strInput;
			
			var intAsciiInput = parseAscii(strInput);
			var binary = parseBin(intAsciiInput);
			var res = [];
			res = binary.split("");

			var elOutput2 = document.getElementById("output1");
			elOutput2.textContent = "Output:"; 
			for(var i = 0; i < res.length; i++)
			{
				var elOutput3 = document.getElementById("output2");
				elOutput3.textContent += res[i] + " ";
				var elOutput4 = document.getElementById("output3");

				if(res[i] == '0')
				{
					elOutput4.textContent += "False ";
				}
				else if(res[i] == '1')
				{
					elOutput4.textContent += "True ";
				}
			}
		}
	}

	


	/*****			
	Purpose: To convert an ascii character to an integer
	Parameters: single character / letter		
	Return: integer representing an ascii value
	*****/
	function parseAscii(chrCharacter)
	{
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
	}
	
	/*****			
	Purpose: To convert an integer to binary number			
	Parameters: single integer representing an ascii value	
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii)
	{
		strBin = parseInt(intAscii, 10).toString(2);
		if(strBin.length < 8)
		{
			var intPlaceHolders = 8 - strBin.length;
			for(var i = 0; i < intPlaceHolders; i++)
			{
				strBin = "0" + strBin;
			}
			
		}
		
		return strBin;
	}
});