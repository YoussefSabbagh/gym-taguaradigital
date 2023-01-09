/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlack: "#313131",
        myGray: "#e0e0e0",
        myWhite: "#F8F4EB",
        myPurple: "#FF6B66",
        error: "#FF0000",
        "myYellow-100": "#FFFAD6",
        "myYellow-300": "#FFF185",
        "myYellow-500": "#CCB400",
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
