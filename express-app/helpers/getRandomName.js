module.exports = (string) => {
    if (!string) return '';
    const arr = string.split(',');
    return arr[Math.floor(Math.random() * arr.length)];
};