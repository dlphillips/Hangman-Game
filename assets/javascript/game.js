// detect 'any' key stroke
// assign words, links to images, sounds to array
// select random word from array (how many words?)
// create blanks for letters needed
// wait for key strokes
// if letter (converted to uppercase) matches word, fill in blank
// else 
// 	check to see if letter has already been entered, no penalty
// 	guess--
// 	add letter to array of selected
// is there an 'any' function to quickly check letters?
// is there an 'in' function to quickly check letters?

// function rdmNumber() {
// document.getElementById("nmbr").innerHTML =
// 	return this.Math.floor(Math.random() * 10);
// }



// Harry Belafonte - Banana Boat Song (Day-O)
// R.E.M. - Orange Crush
// Fiona Apple


// function rdmNumber() {
//     var x = document.getElementById("nmbr")
//     x.innerHTML = Math.floor((Math.random() * 10));
// }


function gameReset() {
	// select random number, 0-9
    var x = Math.floor((Math.random() * 10));
    // select matching fruit from array based on number
	selFruit = fruits[x];
	// count number of letters in fruit name
	numLetters = selFruit.length;
	remSpaces = numLetters;
	// assign defaults to variables
	numGuesses = 6;
	selLtrs = [];
	goodLtrs = [];
	lText = "";
	answer = [];
	wordLetters = selFruit.split("");
	imgSrc = "assets/images/"+selFruit+".jpg";

	console.log(selFruit);
	console.log(wordLetters);
	console.log(fruits);

	for (i = 0; i < numLetters; i++) {
	   answer.push("_");
	};

	text = ""
	for (i = 0; i < answer.length; i++) {
	    text += answer[i] + " ";
	};

	document.getElementById("guesses").innerHTML = numGuesses;
	document.getElementById("allLtrs").innerHTML = lText;
	document.getElementById("fruit").innerHTML = text;
}


document.onkeyup = function(event) {
	var userkey = event.key;

	var userkey = userkey.toLowerCase();

	var skey = selFruit.indexOf(userkey, 0);
	if (skey > -1) {
		goodLtrs.push(userkey);

		for (i = 0; i < numLetters; i++) {
		   if (userkey === wordLetters[i]) {
		   answer.splice(i,1,userkey);
		};
		};	

		text = ""
		for (i = 0; i < answer.length; i++) {
		    text += answer[i] + " ";
		};
		document.getElementById("fruit").innerHTML = text;

		if (answer.indexOf("_") === -1) {
			var snd = new Audio("https://upload.wikimedia.org/wikipedia/en/9/9e/Yello_-_Oh_Yeah_excerpt.ogg");
			snd.play();
			wins++;
			document.getElementById("iWins").innerHTML = "Wins: " + wins;
			document.getElementById("fruitPic").src = imgSrc;
			document.getElementById("winmsg").innerHTML = "You won!!! Let's play again!";

			// alert("You won!!! Let's play again!");
			gameReset();
		}


	} else {
	// letter not found in word	
	// check to see if letter is already been typed, only subtract from guesses if it has not been typed
		var skey = selLtrs.indexOf(userkey, 0);
			if (skey < 0) {
				selLtrs.push(userkey);
				numGuesses-- ;
				lText += userkey + " ";
				};	
				document.getElementById("allLtrs").innerHTML = lText;

			document.getElementById("guesses").innerHTML = numGuesses;

			if (numGuesses === 0) {
				losses++;
				document.getElementById("iLosses").innerHTML = "Losses: " + losses;
				alert("Sorry, you lost. The answer was "+selFruit+". Try again!");
				gameReset();
			};
	};

}

