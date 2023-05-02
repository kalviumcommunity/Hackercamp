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
            },
            backgroundImage: {
                'search-bar-bg-image':
                    "url('./src/assets/search-bar-bg-image.png')",
            },
            colors: {
                placeholder: '#A0A0A0',
                title: '#5B5D60',
                primary: '#006ECC',
                cards: '#E6EFF7',
            },
            borderWidth: {
                'borderWidth1.5': '1.5px',
            },
            width: {
                '85rem': '302px',
                '90rem': '342px',
                cardSize: '720px',
            },
            boxShadow: {
                '3xl': '0 2px 62x -15px rgba(0, 0, 0, 0.3)',
            },

            height: {
                70: '70px',
            },
            spacing: {
                88: '88px',
            },
            fontFamily: {
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            padding: {
                '10%': '10%'
            }
            ,
            margin: {
                '1%':'1%'
            }
        },
    },
    plugins: [],
};
