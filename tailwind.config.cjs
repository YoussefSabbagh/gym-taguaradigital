/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        primary: "#FFE600",
      },
      // backgroundImage: {
      //   contact: "url('assets/image/bgs/1.jpg')",
      //   "gradient-to-b":
      //     "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);",
      // },
      // objectPosition: {
      //   center: "center center",
      // },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home":
          "url('./assets/images/pictures/HomePageIlustration.png')",
      }),
      fontFamily: {
        title: ["Merriweather Sans", "sans-serif"],
        body: ["Merriweather Sans", "sans-serif"],
      },
      content: {
        tdfitness: "url('./assets/image/pictures/tdfitness.png')",
        abstractwaves: "url('./assets/image/pictures/AbstractWaves.png')",
        sparkles: "url('./assets/image/pictures/Sparkles.png')",
        circles: "url('./assets/image/pictures/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
