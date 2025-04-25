/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary))',
        'primary-light': 'rgb(var(--primary-light))',
        secondary: 'rgb(var(--secondary))',
        'secondary-light': 'rgb(var(--secondary-light))',
        accent: 'rgb(var(--accent))',
        'accent-light': 'rgb(var(--accent-light))',
        light: {
          bg: 'rgb(var(--bg-light))',
          text: 'rgb(var(--text-dark))'
        },
        dark: {
          bg: 'rgb(var(--bg-dark))',
          text: 'rgb(var(--text-light))'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};