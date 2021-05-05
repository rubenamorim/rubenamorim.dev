module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        colors: {
            blue: '#21243d',
        },
    },
    variants: {
        extend: {
            margin: ['last'],
        },
    },
    plugins: [],
};
