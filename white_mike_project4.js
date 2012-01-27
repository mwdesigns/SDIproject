// author Mike White
// Created on: January 23, 2012
// Assignment: Project 4

// alert("JavaScript works!");
// **** STRING SETS **** //

// phone number pattern - add hyphens
var getPhoneNum = function(nStr)
{
	nStr += '';
	x = nStr.split('-');
	x1 = x[0];
	var rgx = /(\d{3})(\d{3})(\d{4})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '-' + '$2' + '-' + '$3');
	}
	return x1;
};
//console.log(getPhoneNum("5555555555"));
// END phone number pattern

// email validator - we use something similar to this at work all the time
var validEmail = function(field, alertTxt) 
{
	var x = document.forms["emailForm"]["email"].value;
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
		alert("Please enter a valid e-mail address");
		return false;
	}
};
//END email validator

//Is the string a URL? (Does it start with http: or https:?)
//[ToDo] create this function

// Title Case String - returns the first letter of each word to capital
var toTitleCase = function(toTransform) {
  return toTransform.replace(/\b([a-z])/g, function (_, initial) {
      return initial.toUpperCase();
  });
}
//console.log(toTitleCase("mike d. white"))

// **** NUMBER SETS **** //
/* formats a number to 2 decimal places
* and rounds if more than 2 places after the decimal point
*/
var numRound = new Number(666);
document.write(numRound.toFixed(2));

//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

// **** ARRAY SETS **** //