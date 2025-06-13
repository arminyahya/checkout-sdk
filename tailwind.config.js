/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        error: 'var(--color-error)',
        success: 'var(--color-success)',
      },
      fontFamily: {
        sans: ['var(--font-family)'],
      },
      fontSize: {
        'xs': 'var(--font-size-small)',
        'sm': 'var(--font-size-small)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-large)',
        'xl': 'var(--font-size-xlarge)',
      },
      spacing: {
        'xs': 'var(--spacing-small)',
        'sm': 'var(--spacing-small)',
        'md': 'var(--spacing-medium)',
        'lg': 'var(--spacing-large)',
      },
      borderRadius: {
        'sm': 'var(--radius-small)',
        'md': 'var(--radius-medium)',
        'lg': 'var(--radius-large)',
      },
      boxShadow: {
        'sm': 'var(--shadow-small)',
        'md': 'var(--shadow-medium)',
        'lg': 'var(--shadow-large)',
      },
    },
  },
  plugins: [],
} 