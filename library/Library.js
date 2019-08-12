class Library {
    constructor() {
        this.shelves = [];
    }

    shelve(book) {
        this.shelves.push(book);
        this.shelves.sort((a, b) => {
            return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
        });
        return this;
    }

    findByTitle(title) {
        return this.shelves.find(book => book.title === title);
    }

    get list() {
        return this.shelves;
    }
}

module.exports = { Library };
