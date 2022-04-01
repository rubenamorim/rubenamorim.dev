module.exports = {
    '*.{json,md,yml}': ['prettier --write'],
    '*.{tsx,ts,js}': ['eslint'],
    '*.css': ['stylelint'],
};
