/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './lib/**/*.{js,ts,jsx,tsx,vue}',
    './docs/**/*.{html,js,vue,ts,md}',
    './docs/.vitepress/**/*.{html,js,vue,ts,md}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#db2777',
      },
    },
  },
  plugins: [],
}
