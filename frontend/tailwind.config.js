/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '374px',
      sm: '480px',
      md: '768px',
      '2md': '960px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      microgramma: 'Microgramma D Extended',
    },
    fontSize: {
      'p-xs': ['12px', '16px'],
      'p-sm': ['14px', '20px'],
      'p-base': ['16px', '24px'],
      'p-md': ['20px', '28px'],

      'btn-base': ['16px', '32px'],

      'h-base': ['20px', '28px'],
      'h-md': ['24px', '32px'],
      'h-lg': ['28px', '36px'],
      'h-xl': ['32px', '40px'],
      'h-2xl': ['40px', '48px'],
      'h-3xl': ['56px', '64px'],
    },
    extend: {
      colors: {
        error: 'var(--error-color)',
        success: 'var(--success-color)',
        font: 'var(--font-color)',

        primary: 'var(--primary-color)',
        'primary-': {
          100: 'var(--primary-color-100)',
          200: 'var(--primary-color-200)',
          300: 'var(--primary-color-300)',
        },

        secondary: 'var(--secondary-color)',
        'secondary-': {
          100: 'var(--secondary-color-100)',
          200: 'var(--secondary-color-200)',
          300: 'var(--secondary-color-300)',
          400: 'var(--secondary-color-400)',
          500: 'var(--secondary-color-500)',
        },
        tertiary: 'var(--tertiary-color)',
        'tertiary-': {
          100: 'var(--tertiary-color-100)',
          200: 'var(--tertiary-color-200)',
          300: 'var(--tertiary-color-300)',
        },
      },
      // TODO
      spacing: {
        header: '84px',
        'm-header': '60px',
        18: '4.5rem', // 72px
        66: '17.5rem', // 280px
        76: '19rem', // 304px
        88: '22rem', // 352px
        104: '26rem', // 416px
        200: '50rem', // 800px
      },
    },
  },
  plugins: [],
}
