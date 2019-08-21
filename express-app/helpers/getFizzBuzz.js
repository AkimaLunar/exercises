module.exports = (num1, num2, length = 100) => {
    if (!num1 || !num2) {
        return [];
    }

    return Array
        .from(Array(length))
        .map((_, i) => i + 1)
        .map((num) => {
            if (num % num1 === 0 && num % num2 === 0) {
                return `FizzBuzz`;
            }
            if (num % num1 === 0) {
                return `Fizz`;
            }
            if (num % num2 === 0) {
                return `Buzz`;
            }
            return num;
        });
};


Array.from(Array(10)).map((_, i) => i + 1);