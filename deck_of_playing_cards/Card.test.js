const { Card } = require(`./Card`);

describe(`Card`, () => {
    it(`returns correct display name for Ace`, () => {
        const _card = new Card(1, `spades`);
        expect(_card.toString()).toBe(`Card { Ace of Spades }`);
    });
    it(`returns correct display name for King`, () => {
        const _card = new Card(13, `spades`);
        expect(_card.toString()).toBe(`Card { King of Spades }`);
    });
    it(`returns correct display name for Queen`, () => {
        const _card = new Card(12, `spades`);
        expect(_card.toString()).toBe(`Card { Queen of Spades }`);
    });
    it(`returns correct display name for Jack`, () => {
        const _card = new Card(11, `spades`);
        expect(_card.toString()).toBe(`Card { Jack of Spades }`);
    });
    it(`returns correct display name for numbers`, () => {
        const _card = new Card(10, `spades`);
        expect(_card.toString()).toBe(`Card { 10 of Spades }`);
    });
});
