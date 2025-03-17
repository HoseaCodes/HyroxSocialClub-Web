/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(100.71deg, #F1F4FF 0.64%, #DFE0FF 100%)",
        "footer-image": "url('/footer.png')",
        "access-image": "url('/access.png')",
        "fitness-image": "url('/fitness.png')",
        "mobile-image": "url('/mobilesection.png')",
      },
      backgroundSize: {
        full: "100% 100%",
      },
    },
  },
  plugins: [],
};
