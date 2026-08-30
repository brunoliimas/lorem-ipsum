/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Arial', 'monospace'],
        pixel: ['var(--font-geist-pixel-square)', 'Arial', 'sans-serif'],
      },
      fontSize: {
        h1: ['var(--font-size-h1)', { lineHeight: 'var(--line-height-s)', letterSpacing: 'var(--letter-spacing-l)' }],
        h2: ['var(--font-size-h2)', { lineHeight: 'var(--line-height-s)', letterSpacing: 'var(--letter-spacing-l)' }],
        h3: ['var(--font-size-h3)', { lineHeight: 'var(--line-height-s)', letterSpacing: 'var(--letter-spacing-l)' }],
        h4: ['var(--font-size-h4)', { lineHeight: 'var(--line-height-s)', letterSpacing: 'var(--letter-spacing-m)' }],
        h5: ['var(--font-size-h5)', { lineHeight: 'var(--font-size-title-l)' }],
        h6: ['var(--font-size-h6)', { lineHeight: 'var(--line-height-m)' }],
        'title-l': ['var(--font-size-title-l)', { lineHeight: 'var(--line-height-m)' }],
        'title-m': ['var(--font-size-title-m)', { lineHeight: 'var(--line-height-l)' }],
        'title-s': ['var(--font-size-title-s)', { lineHeight: 'var(--line-height-l)' }],
        'body-l': ['var(--font-size-body-l)', { lineHeight: 'var(--line-height-l)' }],
        'body-m': ['var(--font-size-body-m)', { lineHeight: 'var(--line-height-l)' }],
        'body-s': ['var(--font-size-body-s)', { lineHeight: 'var(--line-height-l)' }],
        'body-xs': ['var(--font-size-body-xs)', { lineHeight: 'var(--line-height-xl)' }],
      },
      colors: {
        accent: {
          DEFAULT: '#0055FF',
          lighter: '#99BBFF',
          darker: '#002AFF',
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
          DEFAULT: '#F7F7F7',
          elevated: '#F5F5F5',
        },
        background: '#FFFFFF',
        border: '#E0E0E0',
        'green-700': '#0055FF',
        'green-800': '#0044CC',
      },
      spacing: {
        section: 'var(--spacing-large)',
        'section-sm': 'var(--spacing-small)',
        'section-md': 'var(--spacing-medium)',
        'section-lg': 'var(--spacing-hugh)',
      },
      maxWidth: {
        container: '80rem',
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
      letterSpacing: {
        l: '-0.06em',
        m: '-0.05em',
        s: '-0.04em',
      },
      lineHeight: {
        'height-s': '1.1em',
        'height-m': '1.25em',
        'height-l': '1.3em',
        'height-xl': '1.4em',
      },
      height: {
        'half-screen': '50vh',
      },
    },
  },
  plugins: [],
}
