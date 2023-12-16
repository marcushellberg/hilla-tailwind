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
    },
  },
  plugins: [],
};
