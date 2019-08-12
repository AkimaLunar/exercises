const { Card } = require(`./Card`);

const SUITS = [`spades`, `hearts`, `diamonds`, `clubs`];
const NUMBER_OF_CARDS = 13;

class Deck {
    constructor() {
        this.init();
    }

    /**
     * Initializes a full "deck" of Card instances representing all 52 possible cards without
     * jokers storing it in the Deck instance.
     */
    init() {
        const deck = [];
        SUITS.forEach(suit => {
            for (let i = 0; i < NUMBER_OF_CARDS; i++) {
                deck.push(new Card(i, suit));
            }
        });

        this.deck = deck;
    }

    /**
     * Removes and returns the top card of the deck.
     */
    draw() {
        return this.deck.shift();
    }

    /**
     * Randomly reorders the cards in the deck.
     */
    shuffle() {
        // https://javascript.info/task/shuffle
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    /**
     * Resets deck to all 52 cards in order.
     */
    reset() {
        this.init();
    }
}

module.exports = { Deck };
