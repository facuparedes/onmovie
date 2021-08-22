module.exports = {
  mode: "jit",
  purge: {
    keyframes: true,
    content: ["./src/**/*.{tsx, jsx, ts, js}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: {
          background: "#000",
          first: "#fff",
          accent: "#F6086D",
        },
      },
      boxShadow: {
        navItem: "0 2px 15px 1.5px rgba(246, 8, 109, 1)",
      },
      textShadow: {
        navLogo: "0px 0px 6px rgba(246, 8, 109, 1)",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      zIndex: {
        999: "999",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow"), require("@tailwindcss/line-clamp")],
};
