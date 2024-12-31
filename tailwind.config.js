/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        customBlue: "#133E87",
        customWarning: "#FFE31A",
        customSuccess: "#4CAF50",
        customError: "#F44336",
        customInfo: "#2196F3",
        customBlack: "#1A1A19",
        bluishWhite: "#F2F4FF",
        softBeige: "#EFE9E7",
        deepDarkBlue: "#111344",
        darkPurple: "#2F195F",
        blueBlack: "#0F1020",
        whiteGrey: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
