
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
	}
}

var flipcard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[0]);
	if (cardsInPlay.length === 2){

		checkForMatch();
	}

 }

flipcard(0);
flipcard(2);

