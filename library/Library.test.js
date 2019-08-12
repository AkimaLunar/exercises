const { Library } = require(`./Library`);
const { Book } = require(`./Book`);

describe(`Library`, () => {
    it(`is a class.`, () => {
        const library = new Library();

        expect(library).toBeInstanceOf(Library);
    });

    it(`shelves books in alphabetical order.`, () => {
        const a = `A`,
            b = `b`,
            c = `c`;
        const library = new Library();
        const bookC = new Book({ title: c });
        const bookA = new Book({ title: a });
        const bookB = new Book({ title: b });
        library
            .shelve(bookA)
            .shelve(bookB)
            .shelve(bookC);

        expect(library.shelves[0].title).toBe(a);
        expect(library.shelves[1].title).toBe(b);
        expect(library.shelves[2].title).toBe(c);
    });

    it(`finds a book by title.`, () => {
        const title = Math.random()
            .toString(36)
            .substring(2);
        const book = new Book({ title });
        const library = new Library();
        library.shelve(book);

        expect(library.findByTitle(title)).toBeInstanceOf(Book);
        expect(library.findByTitle(title).title).toBe(title);
    });
});
