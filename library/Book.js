class Book {
    constructor({ authors = [], title = ``, edition = 0 }) {
        this.authors = authors;
        this.title = title;
        this.edition = edition;
    }
}

module.exports = { Book };
