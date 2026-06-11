/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        academic: {
          bg: '#F8FAFC',
          cyan: '#38BDF8',
          dark: '#0F172A',
          primary: '#1E3A8A', // UNEG Blue
          accent: '#EAB308'   // UNEG Yellow
        }
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '44': '44px',
      },
      minWidth: {
        '44': '44px',
      },
      minHeight: {
        '44': '44px',
      }
    },
  },
  plugins: [],
}
