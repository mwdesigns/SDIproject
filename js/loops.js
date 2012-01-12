// while loop
/*
JavaScript has four loop syntaxes, each of which comes with certain perks:

while (condition) { }
    This is the simplest, no-frills loop. The condition is checked before the loop is executed. You, the coder, are responsible for setting up whatever variables need to be in place before that first condition check, as well as making sure you change whatever you need to change in the body to avoid a loop that never exits. You generally use while loops when you don't know how many times you will need to run through the loop.
for (initialization ; condition ; modification) { }
    This is a more verbose syntax than the while form. It follows the same steps, but does some of them explicitly instead of letting you do them yourself. The initialization runs first and only once. The condition is checked and if everything is okay then the body of the loop is run. The modification statement is run last, before the process goes back to the condition again. Generally, you use a for loop when you know exactly how many times you'll need to run through the loop.
for each (item in array) { }
    This one isn't shown in the video, but you'll learn more about it later when you get to Arrays. It's a variant of the other for loop that does the initialization and modification behind the scenes.
do { } while (condition);
    This one also isn't in the video, but is included here for comparison. In this variant of the while loop, the body is run before the condition is checked, which means that the body will always execute at least once. Other than that, it's the same: you are again responsible for any initialization and modification. 
*/

var bob = 99 // iteration /counter
while (bob > 0) {
	console.log(bob + " bottles of beer on the wall");
	bob--;
};

console.log("There are no more bottles of beer.")

// for loop

var bob = 99 // iteration /counter
for (var bob = 99; bob > 0; bob--) {
	console.log(bob + " bottles of beer on the wall");
};

console.log("There are no more bottles of beer.")


// loop within a loop
// be careful to avoid an infinate loop!

for (var i = 0; i < 5; i++) {
	for (var ii = 0; ii < 3; i++) {
		console.log("i:" + i + ", ii:" + ii)
	};
};