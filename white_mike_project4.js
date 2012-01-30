// author Mike White
// Created on: January 23, 2012
// Assignment: Project 4

// alert("JavaScript works!");
////////////////////////////
// **** STRING SETS **** //
///////////////////////////

// phone number pattern - add hyphens
var getPhoneNum = function(str)
{
	str += '';
	x = str.split('-');
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
//END

// Title Case String - returns the first letter of each word to capital
var toTitleCase = function(toTransform) {
  return toTransform.replace(/\b([a-z])/g, function (_, initial) {
      return initial.toUpperCase();
  });
}
//console.log(toTitleCase("mike d. white"))
//END

// Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
//[ToDo] create this function
//END

////////////////////////////
// **** NUMBER SETS **** //
///////////////////////////
// formats a number to 2 decimal places and rounds if more than 2 places after the decimal point

var numRound = new Number(666);
document.write(numRound.toFixed(2));
//END

// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

//END

// Fuzzy-match a number: is the number above or below a number within a certain percent?
//END

// Find the number of hours or days difference between two dates.
//END

// Given a string version of a number such as "42", return the value as an actual Number, such as 42.
//END

///////////////////////////
// **** ARRAY SETS **** //
/////////////////////////

// Find the smallest value in an array that is greater than a given number
// this needs to be revised this function only give the smallest value of the array
var minValue = function (arr, num) {
	var min = arr[0];
	var num = num;
		for (i=0; i<arr.length; i++) {
	if (arr[i]<min) {
		min = arr[i];
		}
	}
    return min;
};
//console.log(minValue([2,3,4,5,6,7], 5))


//END

// Find the total value of just the numbers in an array, even if some of the items are not numbers.
var getNumSum = function(arr) {
	var arr = [0];
	var sum = 0;
	for (var i=0; i<arr.length; i++) {
		if (!isNaN(parseInt(arr[i]))) { sum += arr[i]; }
		}
		//return sum
};
//console.log(getNumSum("1,b,2,c,3,d"));
//END

// Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].

//END
