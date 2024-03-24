/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      minHeight: {
        content: '38rem'
      },
      boxShadow: {
        card: '0px 0px 12px 6px rgba(0,0,0,0.45)'
      },
      backgroundImage: {
        rain: 'linear-gradient( 60deg, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f, #abf25f, #5ff281, #5ff2f0)',
        conic: 'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)'
      },
      colors: {
        neko: {
          50: '#f6f5fa',
          100: '#eceaf4',
          200: '#d4d0e7',
          300: '#ada7d2',
          400: '#7f77b9',
          500: '#6056a1',
          600: '#4e4386',
          700: '#40376d',
          800: '#39315b',
          900: '#332c4e',
          925: '#252134',
          950: '#0e0c15'
        },
      }
    }
  },
  plugins: []
}
