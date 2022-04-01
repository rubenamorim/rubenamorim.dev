module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-comments/recommended',
        // Prettier must be the last plugin
        'plugin:prettier/recommended',
    ],
    rules: {
        'import/order': [
            'error',
            { 'newlines-between': 'always-and-inside-groups' },
        ],
        '@next/next/no-img-element': 'off',
    },
    overrides: [
        {
            files: ['*.test.{ts,tsx,js}'],
            extends: [
                'plugin:jest/recommended',
                'plugin:jest/style',
                'plugin:testing-library/react',
                'plugin:jest-dom/recommended',
            ],
        },
    ],
};
