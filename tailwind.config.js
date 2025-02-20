/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                IRANSansX: 'IranSansX',
                IRANSansXBold: 'IRANSansX-Bold',
                IRANSansXDemiBold: 'IRANSansX-DemiBold',
                IRANSansXRegular: 'IRANSansX-Regular',
                sfUIBold: 'sf-ui-display-bold',
                sfUISemibold: 'sf-ui-display-semibold',
                sfUIMedium: 'sf-ui-display-medium',
                sfUIRegular: 'sf-ui-display-Regular',
            },

            spacing: {
                12.5: '3.125rem',
            },
        },
        colors: {
            transparent: 'transparent',
            Neutral: {
                10: '#1A1A1A',
                20: '#333333',
                30: '#4D4D4D',
                40: '#666666',
                50: '#808080',
                60: '#999999',
                70: '#B3B3B3',
                80: '#CCCCCC',
                90: '#E6E6E6',
                93: '#EDEDED',
                95: '#F2F2F2',
                97: '#F7F7F7',
                100: '#ffffff',
            },
            Primary: {
                main: '#329A86',
                bgColor: '#EFF4F3',
                Pressed: '#1C3F3A',
                hover: '#226359',
                shopIcon : "#295F2D"
            },
            Semantic: {
                Active: '#0072DA',
                Warning: '#FFAB00',
                Danger: '#CC3931',
            },
        },
    },

    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
