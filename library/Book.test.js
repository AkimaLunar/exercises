const { Book } = require(`./Book`);

describe(`Book`, () => {
    it(`supports authors, title and edition`, () => {
        const authors = [`Yann Martel`],
            title = `Life of Pi`,
            edition = 1;
        const book = new Book({ authors, title, edition });
        expect(book.authors).toBe(authors);
        expect(book.title).toBe(title);
        expect(book.edition).toBe(edition);
    });
});
