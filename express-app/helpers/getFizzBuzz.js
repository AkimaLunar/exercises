module.exports = (num1, num2, length = 100) => {
    if (!num1 || !num2) {
        return [];
    }

    return Array
        .from(Array(length))
        .map((_, i) => {
            const current = i + 1;
            return current % num1 === 0 && current % num2
                ? 'FizzBuzz'
                : current % num1 === 0
                    ? 'Fizz'
                    : current % num2 === 0
                        ? 'Buzz'
                        : current;
        });
};
