import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#b6d5ff',
          300: '#88baff',
          400: '#5798ff',
          500: '#2977ff',
          600: '#155fe6',
          700: '#0f4bb8',
          800: '#0d3e93',
          900: '#0b356f',
          950: '#071f41',
        },
        ink: {
          900: '#0a0a0a',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          500: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'ui-sans-serif', 'system-ui', 'Apple SD Gothic Neo', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config


