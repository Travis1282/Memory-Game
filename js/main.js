console.log("Up and running!");


var cards=["queen", "queen", "king", "king"];
var cardsInPlay=[];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
/*var cardThree = cards[2];
cardsInPlay.push(cardThree);
var cardFour = cards[3];
cardsInPlay.push(cardFour);
*/

//console.log("User flipped " + cardThree);
//console.log("User flipped " + cardFour);
console.log(cardsInPlay);
console.log(cardsInPlay.length);
if(cardsInPlay.length === 2){
console.log(cardOne, cardTwo);
if (cardOne === cardTwo) {
	alert("You found a match!");
}else{
	alert("You found a match!");}
};


