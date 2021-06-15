module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:eslint-comments/recommended',
        // Prettier must be the last plugin
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/order': [
            'error',
            { 'newlines-between': 'always-and-inside-groups' },
        ],
        '@next/next/no-img-element': 'off',
    },
    overrides: [
        {
            files: ['pages/**'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
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
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
    },
};
