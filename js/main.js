console.log("Up and running!");

var cards=["queen", "queen", "king", "king"];
var cardsInPlay=[];


var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
alert("You found a match!")
} else if (cardsInPlay.length == 2){
console.log("Sorry, try again.");
alert("Sorry, try again.");
}
}

var flipCard = function(cardId){

console.log("User flipped " + cards[cardId]);
console.log(cardsInPlay.length);

cardsInPlay.push(cards[cardId])
checkForMatch();
}

flipCard(0);
flipCard(2);

console.log(cardsInPlay);



