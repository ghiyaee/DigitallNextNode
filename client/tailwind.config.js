/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:'#f13a01'
      },
    //  boxShadow: {
    //    shadow: '4px 0 2px 2 rgba(0, 0, 0, 0.2)'
    //   }
    },
  },
  plugins: [],
}
