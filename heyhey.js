"use strict"

var z = 2

console.log (((z + 5)*2)%2)

if ((((z + 5)*2)%3) === 0) {console.log ("you da man");}
else {console.log ("ooooof");}





var i = 0

// for (i; i<50; ++i) {console.log (i);}

// while (i<50) {i++, console.log (i++ );}


// while (i <100 && i % 3 === 0) {i++; console.log ("fizz");}

// if ((i % 3) === 0) {console.log("fizz");}


// while(i<100) { i++; if (i % 3 === 0) {console.log("fizz")};}
// while(i<100) {i++; if (i % 5 === 0) {console.log("buzz")};}
// while(i<100) {i++; if (i % 5 === 0 && i % 3 ===0) {console.log("fizzbuzz")};}


while(i<100) {
  if (i % 3 === 0) {console.log(i, "fizz");}
  if (i % 5 === 0) {console.log(i, " buzz");}
  if (i % 5 === 0 && i % 3 ===0) {console.log(i, " fizzbuzz");}
  i++;
}


// Function Definition
// function wakeUp (time, alarm) {
    
//     if(time === 4) {
//         console.log("whisper: Im 'hitting the gym'");
        
//     } else {
//         console.log("Its too early going back to sleep");
//     }
    
//     if(alarm) {
//         turnOffAlarm();
//     }
// }

// // Function Expression
// var turnOffAlarm = function () {
//     console.log("that alarm is super annoying");
// }

// // Call Functions
// wakeUp(12, true);



// function castSpell () {
//     console.log("Shoot fireball");
// }
// function dragonFightBack () {
//     console.log("Bite at the wizard")
// }

// function setScene() {
//     console.log("A wizard is confronted by a big dragon.");
// }

// function gameOver() {
//     console.log("wizard wins!");
// }


// function fight(turn, turnNumber) {
//     if (turnNumber === 0) {
//         setScene();
//     }
//     console.log("It is the", turn + "'s turn")

//     if(turn === "wizard") {
//         castSpell();

//     } else if (turn === "dragon") {
//         dragonFightBack();
//     } else if(turnNumber === "end") {
//         gameOver();
//     }
// }


// for(var i = 0; i < 5; i ++) {
//     if(i === 4 ) {
//         fight("", "end");
//     } else if (i % 2 === 0) {
//         fight("wizard", i);
//     } else {
//         fight("dragon", i);
//     }

// }

// create a function that takes two arguments and adds them together
// create a function that takes two arguments and multiplies them together
// create a function that takes two arguments where the first argument is the start number and the second argument is the end number. The body of the function starts a loop and ends it at the second argument and logs every number between the start and end number.
// create a variable in the global scope
// create a function that takes an argument
// add the argument to the global variable
// log the return of that function
// create an IIFE that logs your success of creating an IIFE



function sipo (num1, num2) {

	var num3 = num1 + num2;

	console.log(num3);




}

sipo (10, 7);


function mult (yo, ye) {
	var times = yo * ye;
	console.log (times);
}

mult (5, 4);


function vroom (ze, bee) {
	// var go = ze++

	while (ze <= bee) {console.log (ze); ze++;}
	if (ze > bee) {console.log ("try again");}
	else {console.log ("You went tooooooo far!");}

}

vroom (100, 104)

if (i>0 && i<40 && )

