const { Card } = require(`./Card`);
const { Deck } = require(`./Deck`);

const card1 = new Card(1, `spades`);
const card2 = new Card(13, `diamonds`);
console.log(card1.toString());
console.log(card2.toString());

const myDeck = new Deck();
myDeck.shuffle();
myDeck.reset();
