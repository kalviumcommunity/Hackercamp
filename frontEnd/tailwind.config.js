const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                slogan: '28px',
                name: '22.5px',
            },
            inset: {
                400: '400px',
                93: '93px',
            },
            backgroundImage: {
                'search-bar-bg-image':
                    "url('https://scontent.fcjb8-1.fna.fbcdn.net/v/t39.2365-6/330798655_571265925050597_4270686630180425128_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=GJGd733wQ50AX88q8i6&_nc_ht=scontent.fcjb8-1.fna&oh=00_AfCOIDYDIIKqDP1o5dqDRZ8xzhwjxHM2UHC1VKeU9qKmJw&oe=644BC0BF')",
            },
            colors: {
                placeholderColor: '#A0A0A0',
                hackathonNameColor: '#595959',
                primaryColor: '#006ECC',
            },
            borderWidth: {
                hrLineHeight: '1.5px',
            },
            width: {
                '85rem': '302px',
                '90rem': '342px',
                cardSize: '720px',
            },
            boxShadow: {
                '3xl': '0 2px 62x -15px rgba(0, 0, 0, 0.3)',
            },
            gridTemplateColumns: {
                body: '50px 35% 65% minmax(400px, 1fr) 1fr',
            },
            height: {
                inputBox: '70px',
            },
            spacing: {
                movePlaceholderText: '88px',
            },
            fontFamily: {
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', ...defaultTheme.fontFamily.sans],
            },
             flexShrink: {
        2: '2'
             }
        },
    },
    plugins: [],
};
