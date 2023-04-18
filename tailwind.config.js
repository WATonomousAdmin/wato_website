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
        'JobPostingHero': "linear-gradient(to bottom, rgba(0,0,0, 0), rgba(0, 0, 0, 1)) ,url('/imgs/jobpostings-header.jpg')",
        'ModalRight': "linear-gradient(168.88deg, #1F5D96 -1.63%, rgba(31, 93, 150, 0.885417) 23.91%, rgba(31, 93, 150, 0) 146.98%)",
      }
    },
  },
  plugins: [],
}
