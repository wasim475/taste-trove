/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'errorImg': "url('src/assets/404.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'Raleway': ["Raleway", 'serif'],
        'Poppins': ["Poppins", "sans-serif"],
        'Lora': ["Lora", "sans-serif"]
      },
      colors: {
        'primaryColor': '#5349d6',
        'costomBgColor': '#0D23BE0A'
      },
    },
  },
  plugins: [require('daisyui'),],
}

