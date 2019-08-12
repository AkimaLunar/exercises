const { Deck } = require(`./Deck`);

expect.extend({
    toBeShuffled(received, initial) {
        for (let i = 0; i < initial.length; i++) {
            if (initial[i] !== received[i]) {
                return {
                    pass: true,
                    message: () => `Deck is shuffled.`
                };
            }
        }

        return {
            pass: false,
            message: () => `Deck is identical.`
        };
    }
});

describe(`Deck`, () => {
    it(`initializes a new deck`, () => {
        const _deck = new Deck();
        expect(_deck.deck.length).toBe(4 * 13);
    });

    it(`draws the top card`, () => {
        const _deck = new Deck();
        const _top = _deck.deck[0];
        expect(_top.toString() === _deck.draw().toString()).toBe(true);
    });

    it(`shuffles the deck`, () => {
        const _deck = new Deck();
        const _initial = _deck.deck.map(card => card.toString());
        _deck.shuffle();
        const _shuffled = _deck.deck.map(card => card.toString());
        expect(_shuffled).toBeShuffled(_initial);
    });

    it(`resets the deck`, () => {
        const _deck = new Deck();
        const _initial = _deck.deck.map(card => card.toString());
        _deck.shuffle();
        _deck.reset();
        const _reset = _deck.deck.map(card => card.toString());
        expect(_reset).not.toBeShuffled(_initial);
    });
});
