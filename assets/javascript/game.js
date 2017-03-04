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


function rdmNumber() {
    var x = document.getElementById("nmbr")
    x.innerHTML = Math.floor((Math.random() * 10));
}

