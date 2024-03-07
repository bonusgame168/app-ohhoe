/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px'
    },
    extend: {
      colors: {
        primary: '#d84c04',
        yellow: {
          text: '#ffb400'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false
  }
}
