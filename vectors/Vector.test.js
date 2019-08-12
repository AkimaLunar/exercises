/**
 * It should support the coordinates: x, y and z.
 * It should have 3 prototype methods: plus, minus, magnitude.
 * The methods, plus & minus, should return a new Vector (not a plain object or an existing vector) with the correct distances.
 * Create a constructor/prototype version and class based version.
 */

const { Vector } = require(`./Vector`);

describe(`Vector`, () => {
    it(`supports the coordinates: x, y and z`, () => {
        const x = 1,
            y = 2,
            z = 3;
        const vector = new Vector(x, y, z);
        expect(vector.x).toBe(x);
        expect(vector.y).toBe(y);
        expect(vector.z).toBe(z);
    });

    it(`sums two vectors and returns a new vector`, () => {
        const vectorOne = new Vector(1, 2, 3);
        const vectorTwo = new Vector(2, 3, 4);
        const vectorThree = vectorOne.plus(vectorTwo);
        expect(vectorThree).toBeInstanceOf(Vector);
        expect(vectorThree.x).toBe(3);
        expect(vectorThree.y).toBe(5);
        expect(vectorThree.z).toBe(7);
    });

    it(`subtracts two vectors and returns a new vector`, () => {
        const vectorOne = new Vector(1, 2, 3);
        const vectorTwo = new Vector(2, 3, 4);
        const vectorThree = vectorOne.minus(vectorTwo);
        expect(vectorThree).toBeInstanceOf(Vector);
        expect(vectorThree.x).toBe(-1);
        expect(vectorThree.y).toBe(-1);
        expect(vectorThree.z).toBe(-1);
    });
});
