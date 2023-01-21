module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata']
      },
      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
