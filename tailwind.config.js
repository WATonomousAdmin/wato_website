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
        'JobPostingHero': "url('/imgs/jobpostings-header2.jpg')",
        'ModalRight': "linear-gradient(168.88deg, #1F5D96 -1.63%, rgba(31, 93, 150, 0.885417) 23.91%, rgba(31, 93, 150, 0) 146.98%)",
        'JobPostingBg': "linear-gradient(180deg, rgba(0, 2, 23, 0.65) 41.68%, rgba(255, 255, 255, 0.65) 184.93%)"
      }
    },
  },
  plugins: [],
}
