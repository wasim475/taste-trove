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
        'galleryImg': "url('https://i.ibb.co/mJt4HZB/chesley-mccarty-Ziml-F1xe-Z8k-unsplash.jpg')"
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

