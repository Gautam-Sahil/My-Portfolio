/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      spacing: {
        32: '8rem',
        40: '10rem',
      },

      backgroundImage: {
        'firefly-radial':
          "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)",
      },
      boxShadow: {
        'glass-inset': 'inset 0 10px 10px -5px rgba(254, 254, 22, 0.49)',
        'glass-sm': '5px 5px 30px 0px rgba(14, 220, 182, 0.9)',
      },
      keyframes: {
          'spin-reverse':{
          '0%':{transform:'rotate(0deg)'},
          '100%':{transform:'rotate(-360deg)'},
          },

        scroll: {
          '0%': { bottom: '75%', opacity: '1' },
          '100%': { bottom: '15%', opacity: '0' },
        },
        'scroll-reverse': {
          '0%': { bottom: '15%', opacity: '0' },
          '100%': { bottom: '70%', opacity: '1' },
        },
        arrow1: {
          "100%": { opacity: "0", top: "100%" },
        },
        arrow2: {
          "100%": { opacity: "0", top: "50%" },
        },
      },
      animation: {
            'spin-slow':'spin 40s linear infinite',
            'spin-slow-reverse':'spin-reverse 40s linear infinite',

        'scroll': 'scroll 2.5s infinite',
        'scroll-reverse': 'scroll-reverse 2.5s infinite',
        'arrow1': "arrow1 1.5s ease-in-out infinite",
  'arrow2': "arrow2 1.5s ease-in-out infinite",
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
