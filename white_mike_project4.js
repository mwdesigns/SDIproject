// author Mike White
// Created on: January 23, 2012
// Assignment: Project 4

// alert("JavaScript works!");
// //// STRING SETS ////

// phone number pattern - add hyphens
function phoneNum(nStr)
{
	nStr += '555555555';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '-' + '$2');
	}
	return x1 + x2;
}
function phoneNumCheck()
{
	var phoneNum = ("888888888");
	var areaCode = phoneNum.substring(0,2);
	var firstThree = phoneNum.substring(3,5);
	var lastFour = phoneNum.substring(6,9);
}
console.log(phoneNumCheck);


// email validator - we use something similar to this at work all the time
function validEmail(field, alertTxt) 
{
	with (field)
	{
		apos = value.indexOf("@");
		dotpos = value.lastIndexOf(".");
			if(apos<1 || dotpos-apos<2)
				{alert(alertTxt); return false;}
			else
				{ return true; }
	}
}
function validEmail(thisform) 
{
	with (thisform)
	{
		if(validEmail(email,"Please enter a valid email")==false)
			{email.focus();return false;}
	}
}

// //// NUMBER SETS ////
/* formats a number to 2 decimal places
* and rounds if more than 2 places after the decimal point
*/
var numRound = new Number();
document.write(numRound.toFixed(2));

//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

// //// ARRAY SETS ////