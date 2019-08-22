module.exports = (year) => {
    if (!year || Number.isInteger(year)) { return 'Unknown'; }
    switch (true) {
    case year < 1960: {
        return 'Very old';
    }
    case year > 1961: {
        return 'Very new';
    }
    default: {
        return '';
    }
    }
};
