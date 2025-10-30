import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate3d(0, 0, 0)', transformOrigin: '50% 50%' },
          '100%': { transform: 'scale(1.02) translate3d(0, 0, 0)', transformOrigin: '50% 50%' },
        },
        fadeSoft: {
          '0%': { opacity: '0', filter: 'blur(12px) brightness(0.95)' },
          '100%': { opacity: '1', filter: 'blur(0px) brightness(1)' },
        },
        fadeup: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        captionIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'kenburns-4s': 'kenburns 4s ease-out forwards',
        'kenburns-8s': 'kenburns 8s ease-out forwards',
        'kenburns-12s': 'kenburns 12s ease-out forwards',
        'kenburns-16s': 'kenburns 16s ease-out forwards',
        'fade-image-1200': 'fadeSoft 1200ms cubic-bezier(0.4, 0.0, 0.2, 1) both',
        'fadeup-500': 'fadeup 500ms ease-out both',
        'caption-in-800': 'captionIn 800ms ease-out both',
      },
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


