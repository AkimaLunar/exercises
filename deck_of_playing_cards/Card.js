const constructDisplayValue = value => {
    switch (value) {
    case 1: {
        return `Ace`;
    }
    case 13: {
        return `King`;
    }
    case 12: {
        return `Queen`;
    }
    case 11: {
        return `Jack`;
    }
    default: {
        return value;
    }
    }
};

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    /**
     * toString method returns a display name of the card.
     * @returns {string}
     */
    toString() {
        const [first, ...rest] = this.suit;
        const displaySuit = `${first.toUpperCase()}${rest.join(``)}`;
        const displayValue = constructDisplayValue(this.value);
        return `Card { ${displayValue} of ${displaySuit} }`;
    }
}

module.exports = { Card };
