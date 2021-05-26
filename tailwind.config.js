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
            blue: '#21243d',
            porto: '#0f2f7f',
            yellow: '#ffd100',
        },
    },
    plugins: [],
};
