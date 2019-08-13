class Card {
    constructor(value, suit) {
        this.suit = suit;
        this.value = value;
    }

    get displayValue() {
        switch (this.value) {
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
                return this.value;
            }
        }
    }

    get displaySuit() {
        const [firstLetter, ...rest] = this.suit;
        return firstLetter.toUpperCase() + rest.join(``);
    }

    toString() {
        return `Card { ${this.displayValue} of ${this.displaySuit} }`;
    }
}

module.exports = { Card };
