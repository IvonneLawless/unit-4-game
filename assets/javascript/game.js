$(document).ready(function() {


	// random computer variable array
	var rand = [];

	for (var i = 19; i < 121; i++) {
		rand.push(i);
	}

	// mushroom numbers array
	var mushroom = [];

	for (var j = 1; j < 13; j++) {

		mushroom.push(j);
	}


	// random variables selected by computer
	var randNumber; // number to match
	var mushroomNumbers = []; // for array of random mushroom values

	var c1;
	var c2;
	var c3;
	var c4;

  var totalScore = 0; // user's score

	var wins = 0;
	var losses = 0;


	// pick a random number
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

	} 

	// pick random numbers for mushroom

	function pickRandomMushroom(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			mushroomNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("mushroom numbers: " + mushroomNumbers);

	} 

	function mushroomValues(arr) {

		// change value of each mushroom button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} 

	function gameReset(x) {

		mushroomNumbers = []; // clears mushroom number values

		pickRandomNumber(rand);

		pickRandomMushroom(mushroom);

		mushroomValues(mushroomNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} 

	pickRandomNumber(rand); // random number to match
	pickRandomMushroom(mushroom); // array of random mushroom values
	mushroomValues(mushroomNumbers);

		// mushroom button functions

		$("#button-1").on("click", function() {

			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 10);
		}

		else if (totalScore > randNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU LOSE!")}, 10);
		}
	});

}); // end of script

