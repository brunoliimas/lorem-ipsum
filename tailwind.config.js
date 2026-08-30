/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '2rem',
        lg: '2.5rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    letterSpacing: {
      tight: '-0.015em',
      tighter: '-0.02em',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        h1: ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['2.75rem', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        h3: ['2rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        h4: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        h5: ['1.25rem', { lineHeight: '1.3' }],
        h6: ['1.125rem', { lineHeight: '1.35' }],
        'title-l': ['1.5rem', { lineHeight: '1.4' }],
        'title-m': ['1.25rem', { lineHeight: '1.4' }],
        'title-s': ['1.125rem', { lineHeight: '1.45' }],
        'body-l': ['1.125rem', { lineHeight: '1.65' }],
        'body-m': ['1rem', { lineHeight: '1.6' }],
        'body-s': ['0.875rem', { lineHeight: '1.55' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      colors: {
        accent: {
          DEFAULT: '#0055FF',
          hover: '#0044CC',
          muted: 'rgba(0, 85, 255, 0.12)',
        },
        grey: {
          1: '#FFFFFF',
          2: '#F7F7F7',
          3: '#F5F5F5',
          4: '#E0E0E0',
          5: '#CCCCCC',
          6: '#ADADAD',
          7: '#7A7A7A',
          8: '#474747',
          9: '#1A1A1A',
        },
        surface: {
          DEFAULT: '#141416',
          elevated: '#1A1A1A',
        },
        background: '#0A0A0B',
        border: '#2A2A2E',
        // Legacy aliases — migrar componentes antigos gradualmente
        'green-700': '#0055FF',
        'green-800': '#0044CC',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      height: {
        'half-screen': '50vh',
      },
    },
  },
  plugins: [],
}
