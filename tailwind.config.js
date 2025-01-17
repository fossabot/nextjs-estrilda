module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: { 88: "22rem" },
      maxHeight: { hero: "26rem" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
