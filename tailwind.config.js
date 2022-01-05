const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '768px',
            md: '1024px',
            lg: '1440px',
        },
        extend: {
            animation: {
                wave: 'wave 1s infinite',
            },
            keyframes: {
                wave: {
                    '0%, 100%': { transform: 'rotate(-5deg)' },
                    '50%': { transform: 'rotate(5deg)' },
                },
            },
        },
        colors: {
            white: '#fff',
            blue: '#21243d',
            porto: '#0f2f7f',
            yellow: '#e5a00d',
            red: '#f00',
            transparent: 'transparent',
        },
    },
    plugins: [
        plugin(({ addVariant, e }) => {
            addVariant('before', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`before${separator}${className}`)}::before`;
                });
            });
            addVariant('after', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`after${separator}${className}`)}::after`;
                });
            });
        }),
        plugin(({ addUtilities }) => {
            const contentUtilities = {
                '.content': {
                    content: 'attr(data-content)',
                },
                '.content-before': {
                    content: 'attr(data-before)',
                },
                '.content-after': {
                    content: 'attr(data-after)',
                },
            };

            addUtilities(contentUtilities, ['before', 'after']);
        }),
    ],
};
