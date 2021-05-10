/*
TITLE: Movers and Shakers
AUTHOR: Riya Shrestha
PURPOSE: Program to demonstrate the use of jQuery effects
ORIGINALLY CREATED ON: 11/08/2019
LAST MODIFIED ON: 11/08/2019
LAST MODIFIED BY: Riya Shrestha (RS)
MODIFICATION HISTORY: 
"No modification" (RS)
*/
var $target;
$(document).ready(function main()
{
	$target = $('#target');
	$("#hide").click(hide);
	$("#show").click(show);
	$("#toggle").click(toggle);
	$("#slideUp").click(slideUp);
	$("#slideDown").click(slideDown);
	$("#fadeOut").click(fadeOut);
	$("#fadeIn").click(fadeIn);

	$("#topEdge").click(topEdge);
	$("#leftEdge").click(leftEdge);
	$("#rightEdge").click(rightEdge);
	$("#bottomEdge").click(bottomEdge);
	$("#nudgeRight").click(nudgeRight);
	$("#nudgeLeft").click(nudgeLeft);
	$("#glide").click(glide);
	$("#easing").click(easing);
	$("#reset").click(reset);
});

/*
NAME: hide
PURPOSE: jQuery effect for hide
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function hide()
{
	$target.hide();
}

/*
NAME: show
PURPOSE: jQuery effect for show
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function show()
{
	$target.show();
}

/*
NAME: toggle
PURPOSE: jQuery effect for toggle
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function toggle()
{
	$target.toggle().delay(500).fadeIn(1400);
}

/*
NAME: slideUp
PURPOSE: jQuery effect for slideUp
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function slideUp()
{
	$target.slideUp();
}

/*
NAME: slideDown
PURPOSE: jQuery effect for slideDown
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function slideDown()
{
	$target.slideDown();
}

/*
NAME: fadeOut
PURPOSE: jQuery effect for fadeOut
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function fadeOut()
{
	$target.fadeOut();
}

/*
NAME: fadeIn
PURPOSE: jQuery effect for fadeIn
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function fadeIn()
{
	$target.fadeIn().append("This is to show chaining.");

}

/*
NAME: topEdge
PURPOSE: jQuery effect for topEdge
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function topEdge()
{
	$target.animate({marginTop: '-=100'});
}

/*
NAME: leftEdge
PURPOSE: jQuery effect for leftEdge
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function leftEdge()
{
	$target.animate({marginLeft: '-=100'});
}

/*
NAME: rightEdge
PURPOSE: jQuery effect for rightEdge
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function rightEdge()
{
	$target.animate({marginLeft: '+=100'});
}

/*
NAME: bottomEdge
PURPOSE: jQuery effect for bottomEdge
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function bottomEdge()
{
	$target.animate({marginTop: '+=100'});
}

/*
NAME: nudgeRight
PURPOSE: jQuery effect for nudgeRight
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function nudgeRight()
{
	$target.animate({marginLeft: '+=50'});
}

/*
NAME: nudgeLeft
PURPOSE: jQuery effect for nudgeLeft
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function nudgeLeft()
{
	$target.animate({marginLeft: '-=50'});
}

/*
NAME: glide
PURPOSE: jQuery effect for glide
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function glide()
{
	$target.animate({marginLeft: '+=500',marginTop: '+=100'});
}

/*
NAME: easing
PURPOSE: jQuery effect for easing
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function easing()
{
	$target.animate({marginTop: '-=300'}, 500, "linear");
}

/*
NAME: reset
PURPOSE: to reset the page
PARAMETERS: n/a
RETURN VALUE: n/a
*/
function reset()
{
	var url = "https://cs.iupui.edu/~riyshres/n341/moversAndShakers.html";
	$(location).attr('href', url);
}