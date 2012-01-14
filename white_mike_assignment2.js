// author Mike White
// Created on: January 11, 2012
// Assignment: Project 2


alert("JavaScript works!");

var 
	zombieHunter = "Columbus",
	numZombies = 5,
	bodyParts = ["arm","leg","chest","head" ],
	bullets = 50
	bulletsPerZombie = [2, 4, 6, 8]
;
var zombieParts = function () {
	var bodyPart = bodyParts[partNumber];
		bulletsRemaining = bulletsPerZombie[partNumber]
		console.log("He pulled out his shot gun and shot for the " + bodyPart + ". " + "Remembering the double tap rule he thought, there goes " + bulletsRemaining + " bullets");
};
var zombieDown = 1,
	zombieToGo = numZombies - 1
;



// here's the story...
console.log(
zombieHunter + " walked out of the convenient store just in time to see " + numZombies +  " zombies coming toward him. But he could remember if he was supposed to aim for the " + bodyParts + "."
);

for (var partNumber = 0; partNumber < bodyParts.length; partNumber++) {
	zombieParts()
}

while (numZombies > 0) {
	console.log("There's " + zombieDown + " zombies down and " + zombieToGo + " zombies to go.");
	numZombies--;
	zombieDown++;
	zombieToGo--;
	
};
console.log("Take That! No more zombies.");


