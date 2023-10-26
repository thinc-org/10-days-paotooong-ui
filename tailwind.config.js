/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "green-gradient":
          "linear-gradient(180deg, rgba(92,211,192,1) 0%, rgba(4,113,95,1) 150%)",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        "extend-blue": "#001734",
        "btn-extend-green": "#23A07E",
        "btn-extend-yellow": "#E99932",
        "btn-extend-blue": "#4256B6",
      },
    },
  },
  plugins: [],
};
