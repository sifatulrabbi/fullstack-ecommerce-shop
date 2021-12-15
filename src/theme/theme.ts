export const theme = {
    palette: {
        primary: { main: '#1C77FF', dark: '#1C2634' },
        secondary: { main: '', dark: '' },
        common: { white: '#fff', black: '#222' },
        fontColor: { light: '#E0E0E0', dark: '#555' },
        background: { default: '#E0E0E0', light: '#fff' },
    },
    borderRadius: '6px',
    shadows: [
        'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px',
        'rgba(0, 0, 0, 0.2) 0px 5px 16px 0px',
        'rgba(0, 0, 0, 0.2) 0px 5px 25px 2px',
    ],
    typography: {
        lineHeight: { titles: '1', body: '1.5' },
        letterSpacing: { big: '5px', normal: '0.4px' },
        fontFamily: { body: `'Poppins', sans-serif`, heading: `'Oswald', sans-serif` },
        fontSize: {
            h1: 'clamp(3rem, 4vw, 5rem)',
            h2: '2.4rem',
            h3: '1.8rem',
            h4: '1.3rem',
            caption: '.7rem',
            body: '16px',
            body2: '.9rem',
            subtitle: '.8rem',
            button: '14px',
        },
    },
    breakpoint: '800px',
    spacing: function (multiplier: number): string {
        return `${multiplier * 8}`;
    },
};
