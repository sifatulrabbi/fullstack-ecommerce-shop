export const theme = {
    palette: {
        primary: { main: '#1C77FF', dark: '#1C2634' },
        secondary: { main: '', dark: '' },
        common: { white: '#fff', black: '#222' },
        fontColor: { primary: '#f0f0f0', secondary: '#bbb', darkSecondary: '#666' },
        background: { default: '#181818', light: '#1e2022' },
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
            h1: 'clamp(3.8rem, 4vw, 5rem)',
            h2: 'clamp(3rem, 4vw, 3.5rem)',
            h3: '1.8rem',
            h4: '1.3rem',
            caption: '.7rem',
            body: '16px',
            body2: '.9rem',
            subtitle: '.8rem',
            button: '14px',
        },
    },
    breakpoint: '850px',
    spacing: function (multiplier: number): string {
        return `${multiplier * 8}`;
    },
};
