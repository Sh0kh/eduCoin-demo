const { default: card } = require("@material-tailwind/react/theme/components/card");
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`Nunito`, 'sans-serif'],
      },
      colors: {
        main: "#7F56D9",
        primaryText: "#344054",
        cardBg: "#F9FAFB",
        secondary: "#EAECF0",
        contentBg: "#F2F4F7",
        formtext: "#667085",
      }
    },
  },
  plugins: [],
});