module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        bounce: 'bounce 10s linear infinite',
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"]
  },
  plugins: [],
}
