/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0f172a', // main text
        paper: '#fef7f7', // page background
        brand: {
          purple: '#7c3aed', // start of gradient
          pink: '#ec4899', // end of gradient
        },
      },
      borderRadius: {
        soft: '1.5rem',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 20px 40px rgba(124, 58, 237, 0.10)', // purple-ish glow
        card: '0 10px 30px rgba(15, 23, 42, 0.08)', // neutral card
      },
      backgroundImage: {
        // convenience for hero / buttons
        'brand-gradient': 'linear-gradient(90deg, #7c3aed 0%, #ec4899 100%)',
        'brand-radial':
          'radial-gradient(ellipse at top left, rgba(124,58,237,.25), rgba(236,72,153,.25))',
      },
    },
  },
  plugins: [],
};
