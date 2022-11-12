import {createTheme } from '@shopify/restyle';

const palette = {
    //purplePrimary: '#883FFF',
    // purplePrimary: '#7b39ed',
    purplePrimary: '#7145e4',
    purpleDark: '#6A2FCB',

    gray: '#64748B',
    headerGrey: '#54647B',

    black: '#000000',
    white: '#FFFFFF',

    red: '#FF0000',
    lightRed: '#FFF0F0',
};

const theme = createTheme({
    colors: {
        primary: palette.purplePrimary,
        black: palette.black,
        logo: palette.purpleDark,
        white: palette.white,
        danger: palette.red,
        headerGrey: palette.headerGrey,
        dangerBG: palette.lightRed,
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
        xxl: 80,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75
    },
    textVariants: {
        defaults: {
            color: 'black',
            // textAlign: 'center'
        },
        logo: {
            fontSize: 24,
            fontFamily: "Poppins-Bold",
            fontWeight: "700",
            letterSpacing: 0.48,
            color: 'logo',
            textAlign: 'center'
        },
        header: {
            fontSize: 24,
            fontFamily: "Poppins-Bold",
            fontWeight: "700",
            lineHeight: 27,
        },
        subheader: {
            fontSize: 18,
            fontFamily: "Poppins-Regular",
            fontWeight: "400",
            lineHeight: 30,
        },
        title: {
            fontSize: 18,
            fontFamily: "Poppins-SemiBold",
            fontWeight: "600",
        },
        body: {
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            fontWeight: "400",
        },
        textInput: {
            fontSize: 16,
            fontFamily: "Poppins-Regular",
            fontWeight: "400",
        },
        button_primary: {
            fontSize: 18,
            fontFamily: "Poppins-SemiBold",
            fontWeight: "600",
            color: 'white',
            textAlign: 'center',
        },
        button_secondary: {
            fontSize: 18,
            fontFamily: "Poppins-SemiBold",
            fontWeight: "600",
            color: 'primary',
            textAlign: 'center',
        },
        button_outline: {
            fontSize: 18,
            fontFamily: "Poppins-SemiBold",
            fontWeight: "600",
            textAlign: 'center',
        }
    },
    buttonVariants: {
        defaults: {
            padding: 'm',
            marginVertical: 's',
            borderRadius: 'm',
            paddingTop: 's',
            paddingBottom: 's',
        },
        primary: {
            backgroundColor: 'primary',
            padding: 'l',
            paddingVertical: 'm',
        },
        outline: {
            backgroundColor: 'white',
            borderWidth: 3,
            borderColor: 'black',
        },
        secondary: {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'primary',
        },
    }
});

export type Theme = typeof theme;
export default theme;