/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: '#75468c', light: '#9b6bb5', dark: '#5a3570' },
        brand: { bg: '#0a0a0f', section: '#0f0f18', card: '#161622', text: '#f0eef2', muted: '#a8a0b4' },
      },
      fontFamily: {
        heading: ['"Century Gothic"', 'Outfit', 'Avenir', 'sans-serif'],
        body: ['Outfit', '"Century Gothic"', 'Avenir', 'sans-serif'],
      },
      keyframes: {
        'bounce-arrow': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(12px)' } },
        'pulse-glow': { '0%,100%': { boxShadow: '0 0 20px rgba(117,70,140,0.15)' }, '50%': { boxShadow: '0 0 40px rgba(117,70,140,0.3)' } },
        'float': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: {
        'bounce-arrow': 'bounce-arrow 2s infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
