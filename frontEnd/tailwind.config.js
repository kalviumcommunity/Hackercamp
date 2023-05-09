const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                slogan: '28px',
                22.5: '22.5px',
                15: '15px',
            },
            inset: {
                400: '400px',
                93: '93px',
                39: '155px',
            },
            backgroundImage: {
                'search-bar-bg-image': "url('./src/assets/searchBg.png')",
            },
            colors: {
                placeholder: '#A0A0A0',
                title: '#5B5D60',
                primary: '#006ECC',
                lavender: '#F8F7FA',
                gray: '#FEFEFE',
                newgray: '#8C8D8F',
                emperor: '#555555',
                blackish: '#848484',
                whitegray: '#D5D5D5',
                graywhite: '#FAFAFA',
                seablue: '#3583ff',
            },

            width: {
                '85rem': '302px',
                '90rem': '342px',
                37: '594px',
                687: '1040px',
            },
            boxShadow: {
                '3xl': '0 2px 62x -15px rgba(0, 0, 0, 0.3)',
            },

            height: {
                70: '70px',
            },
            spacing: {
                88: '88px',
                1220: '1220px',
                551: '551px',
                680:'680px'
            },
            fontFamily: {
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            padding: {
                '10%': '10%',
            },
            margin: {
                '1%': '1%',
                500: '500px',
            },
            scale: {
                101: '1.009',
            },
        },
    },
    plugins: [],
};
