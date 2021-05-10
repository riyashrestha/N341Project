/*
TITLE: Pick Me
AUTHOR: Riya Shrestha
PURPOSE: Program to demonstrate the use of jQuery selection
ORIGINALLY CREATED ON: 11/01/2019
LAST MODIFIED ON: 11/01/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification" (RS)
*/

$(document).ready(function main()
{
	$("#sByTag").click(selectionByTag);
	$("#sByClass").click(selectionByClass);
	$("#sById").click(selectionById);
	$("#multipleInst").click(multipleInstructions);
	$("#fByTag").click(filteredByTag);
	$("#fByClass").click(filteredByClass);
	$("#fById").click(filteredById);
	$("#reset").click(reset);

});

/*
NAME: selectionByTag
PURPOSE: jQuery selection by tag
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function selectionByTag()
{
	$("img").animate({
		opacity:0.0,
		paddingLeft: '+800'
	}, 2000);
}

/*
NAME: selectionByClass
PURPOSE: jQuery selection by class
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function selectionByClass()
{
	$(".pegLeg").css("color", "Tomato");
	$(".hook").css("color", "#b30000");
	$(".beard").css("color", "Red");
	$(".pete").css("color", "Green");
}

/*
NAME: selectionById
PURPOSE: jQuery selection by id
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function selectionById()
{
	$("#madBango").append(" gets the rum!").css("color", "blue");
}

/*
NAME: multipleInstructions
PURPOSE: giving multiple instructions using jQuery
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function multipleInstructions()
{
	$("#oldScurvy").append(" have to walk the plank!").css("font-weight", "bold");
	$(".hook").css("color", "#990099")
	.append(" changes color")
	.fadeOut("slow")
	.css("border", "2px solid #1aff1a")
	.fadeIn("slow")
	.append(" , and fades.");
}

/*
NAME: filteredByTag
PURPOSE: jQuery filter by tag
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function filteredByTag()
{
	$("p:contains('the')").append(" are the TOUGHEST one!");
}

/*
NAME: filteredByClass
PURPOSE: jQuery filter by class
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function filteredByClass()
{
	$(".beard:last").css("border", "2px dotted orange");
}

/*
NAME: filteredById
PURPOSE: jQuery filter by id
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function filteredById()
{
	//$("#swashbuckling").html("I, Swashbuckling Bernie of the Caribbean, be pillaging the town")
	//.css("color", "#000066")
	//.css("font-weight", "bold");
	$("#swashbuckling:visible").append("Yabba");
}

/*
NAME: reset
PURPOSE: to reset the page
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function reset()
{
	var url = "https://cs.iupui.edu/~riyshres/n341/pickMe.html";
	$(location).attr('href', url);
}