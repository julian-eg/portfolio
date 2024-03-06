/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      minHeight: {
        "content": "32rem"
      },
      boxShadow: {
        "card": "0px 0px 12px 6px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "rain": "linear-gradient( 60deg, #5f86f2, #a65ff2, #f25fd0, #f25f61, #f2cb5f, #abf25f, #5ff281, #5ff2f0)"
      },
      colors: {
        'neko': {
          '50': '#f5f7fa',
          '100': '#eaedf4',
          '200': '#d0d9e7',
          '300': '#a7b9d2',
          '400': '#7793b9',
          '500': '#5676a1',
          '600': '#435d86',
          '700': '#374c6d',
          '800': '#31415b',
          '900': '#2c384e',
          '950': '#10141c',
        },
        'kuro': {
          
        }
      }
    },
  },
  plugins: [],
}
