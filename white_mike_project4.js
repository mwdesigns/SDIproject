// author Mike White
// Created on: January 23, 2012
// Assignment: Project 4

// alert("JavaScript works!");
// //// STRING SETS ////

// phone number pattern - add hyphens
/*var phoneNum = function(){}
var phoneNumAreaCode = 
var phoneNumPrefix = 
var phoneNumAreaCode = 
*/
// email validator - we use this one at work all the time
function validEmail (field, alertTxt) 
{
	with (field)
	{
		apos = value.indexOf("@");
		dotpos = value.lastIndexOf(".");
			if(apos<1 || dotpos-apos<2)
				{alert("Please enter a valid email"); return false;}
			else
				{ return true; }
	}
}

