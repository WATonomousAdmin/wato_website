/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'JobPostingHero': "linear-gradient(to bottom, rgba(0,0,0, 0), rgba(0, 0, 0, 1)) ,url('/imgs/jobpostings-header.jpg')"
      }
    },
  },
  plugins: [],
}
