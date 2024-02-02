/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        textColor: 'rgb(var(--color-textColor) / <alpha-value>)',
        softBg: 'rgb(var(--color-softBg) / <alpha-value>)',
        softTextColor: 'rgb(var(--color-softTextColor) / <alpha-value>)',
      },

     

     
    },
  },
  plugins: [],
}