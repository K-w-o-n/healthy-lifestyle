/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url(../src/assets/images/exe.jpg)"
      }
    },
  },
  plugins: [],
};

