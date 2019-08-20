function Vector(x, y, z) {
    // Methods Within Constructor vs Prototype in Javascript
    // https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector.prototype.plus = function (vector) {
    return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
};

Vector.prototype.minus = function (vector) {
    return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
};

Vector.prototype.magnitude = function () {
    return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** (1 / 2);
};

module.exports = { Vector };
