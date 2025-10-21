// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,jsx}", 
    "./index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'mbl': {'max': '767px'},
        'mlg': {'min': '896px', 'max': '1200px'},
      },
    },
  },
  plugins: [],
};