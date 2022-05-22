module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffd200",
          secondary: "#2457aa",
          accent: "#000b1c",
          neutral: "#dc242b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
