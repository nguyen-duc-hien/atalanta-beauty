tailwind.config = {
    theme: {
        extend: {
            screens: {
                '3xl': '1440px',
                '2xl': '1280px',
                xl: '1024px',
                lg: '992px',
                md: '768px',
                DEFAULT: '1360px',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '24px',
                    '3xl': '100px',
                    '2xl': '60px',
                    xl: '40px',
                    lg: '24px',
                    md: '24px',
                },
            },

        },

        colors: {
            primary: '#630C0C',
            secondary: '#FFD04A',
            white: '#FFF',
            black: '#000',
            'black-2': '#0F0F0F',
            neutral: {
                50: "#F2F2F2",
            },
            gray: {
                // 90: "#1F2237",
                // 80: "#373A51",
                70: "#494949",
                60: "#666666",
                50: "#808080",
                40: "#999999",
                30: "#BBBBBB",
                20: "#DDDDDD",
                10: "#EEEEEE",
                "sub-text": "#757575",
            },
            dark: {
                90: "#151515",
                80: "#333333",
            },
            red: {
                'head-nav': "#320505",
                40: "#630C0C",
                30: "#460707",
                10: "#FDD8D8",
            }
        }
    }
}