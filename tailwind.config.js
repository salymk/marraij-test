/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },

      colors: {
        dark: {
          950: '#0e1012',
          900: '#19181F',
          800: '#1E1B24',
          700: '#23202A',
          600: '#333139',
          500: '#4f4d55',
          400: '#999cb4',
          300: '#C2C6DD',
          200: '#d3d2d4',
          100: '#e9e9ea',
        },
        bouquetShades: {
          50: '#a868a8',
          100: '#975e97',
          200: '#865386',
          300: '#764976',
          400: '#653e65',
          500: '#543454',
          600: '#432a43',
          700: '#321f32',
          800: '#221522',
          900: '#110a11',
        },
        bouquetTints: {
          100: '#f6f0f6',
          200: '#eee1ee',
          300: '#e5d2e5',
          400: '#dcc3dc',
          500: '#d4b4d4',
          600: '#cba4cb',
          700: '#c295c2',
          800: '#b986b9',
          900: '#b177b1',
        },
        pictonblueShades: {
          50: '#50b4e0',
          100: '#48a2ca',
          200: '#4090b3',
          300: '#387e9d',
          400: '#306c86',
          500: '#285a70',
          600: '#20485a',
          700: '#183643',
          800: '#10242d',
          900: '#081216',
        },
        pictonblueTints: {
          50: '#eef8fc',
          100: '#dcf0f9',
          200: '#cbe9f6',
          300: '#b9e1f3',
          400: '#a8daf0',
          500: '#96d2ec',
          600: '#85cbe9',
          700: '#73c3e6',
          800: '#62bce3',
          900: '#50b4e0',
        },
        customblue: {
          50: '#50c2e0',
        },
      },

      width: {
        18: '4.5rem',
        '9/10': '90%',
      },

      height: {
        18: '4.5rem',
      },

      inset: {
        '-25': '-6.25rem',
      },

      padding: {
        18: '4.5rem',
        '23/50': '46%',
        '11/12': '91.666667%',
        '3/2': '150%',
      },

      transitionDuration: {
        250: '250ms',
      },
    },
  },
  variants: {
    width: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [require('@tailwindcss/typography')],
};
