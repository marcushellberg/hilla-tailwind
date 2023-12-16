/** @type {import('tailwindcss').Config} */
export default {
  content: ['./frontend/index.html', './frontend/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
    },
    extend: {
      spacing: {
        xs: '0.25rem',
        s: '0.5rem',
        m: '1rem',
        l: '1.5rem',
        xl: '2.5rem',
      },
      lineHeight: {
        xs: '1.25',
        s: '1.375',
        m: '1.625',
      },
      fontSize: {
        xxxl: '2.5rem',
        xxl: '1.75rem',
        xl: '1.375rem',
        l: '1.125rem',
        m: '1rem',
        s: '0.875rem',
        xs: '0.8125rem',
        xxs: '0.75rem',
      },
      borderRadius: {
        s: '0.25em',
        m: '0.25em', //is that right? https://vaadin.com/docs/latest/styling/lumo/lumo-style-properties/shape
        l: '0.5em',
      },
      colors: {
        base: '#fff',
        contrast: {
          5: 'hsla(214, 61%, 25%, 0.05)',
          10: 'hsla(214, 57%, 24%, 0.1)',
          20: 'hsla(214, 53%, 23%, 0.16)',
          30: 'hsla(214, 50%, 22%, 0.26)',
          40: 'hsla(214, 47%, 21%, 0.38)',
          50: 'hsla(214, 45%, 20%, 0.52)',
          60: 'hsla(214, 43%, 19%, 0.6)',
          70: 'hsla(214, 42%, 18%, 0.69)',
          80: 'hsla(214, 41%, 17%, 0.83)',
          90: 'hsla(214, 40%, 16%, 0.94)',
          100: 'hsl(214, 35%, 15%)',
        },
        primary: {
          10: 'hsla(214, 100%, 60%, 0.13)',
          50: 'hsla(214, 100%, 49%, 0.76)',
          100: 'hsl(214, 100%, 48%)',
          text: 'hsl(214, 100%, 43%)',
          contrast: '#fff',
        },
        error: {
          10: 'hsla(3, 85%, 49%, 0.1)',
          50: 'hsla(3, 85%, 49%, 0.5)',
          100: 'hsl(3, 85%, 48%)',
          text: 'hsl(3, 89%, 42%)',
          contrast: '#fff',
        },
        warning: {
          10: 'hsla(48, 100%, 50%, 0.25)',
          100: 'hsl(48, 100%, 50%)',
          text: 'hsl(32, 100%, 30%)',
          contrast: 'hsla(214, 40%, 16%, 0.94)',
        },
        success: {
          10: 'hsla(145, 72%, 31%, 0.1)',
          50: 'hsla(145, 72%, 31%, 0.5)',
          100: 'hsl(145, 72%, 30%)',
          text: 'hsl(145, 85%, 25%)',
          contrast: '#fff',
        },
      },
    },
  },
  plugins: [],
};
