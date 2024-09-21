/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background)',
        text: 'var(--text)',
        highlight: 'var(--highlight)',
        alert: {
          success: 'var(--alert-success)',
          error: 'var(--alert-error)',
          warning: 'var(--alert-warning)',
          info: 'var(--alert-info)',
        },
      },
      fontFamily: {
        roboto:    ['Roboto', 'sans-serif'],
        monserrat: ['Montserrat', 'sans-serif'],
        bebas:     ['Bebas Neue', 'sans-serif'],
        lato:      ['Lato', 'system-ui'],
        oswald:    ['Oswald', 'system-ui']
      },
    },
  },
  plugins: [],
}
