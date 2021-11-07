export const theme = {
    palette: {
        primary: { main: '', dark: '', light: '' },
        secondary: { main: '', dark: '', light: '' },
        common: { white: '', black: '' },
        fontColor: { body: '', accent: '' },
    },
    borderRadius: '6px',
    shadows: ['', '', ''],
    typography: {
        lineHeight: { titles: '1', body: '1.5' },
        letterSpacing: { big: '5px', normal: '0.4px' },
        fontFamily: { body: '', heading: '' },
        fontSize: {
            h1: '4rem',
            h2: '3rem',
            h3: '2rem',
            h4: '1.6rem',
            caption: '.7rem',
            body: '16px',
            body2: '.9rem',
            subtitle: '.8rem',
            button: '14px',
        },
    },
    spacing: function (multiplier: number): string {
        return `${multiplier * 8}`;
    },
};
