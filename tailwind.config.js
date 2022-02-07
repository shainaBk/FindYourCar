module.exports = {
  important: true,
  mode: "jit",
  content: ['./src/**/*.{html,ts}', './FindYourCar/**/*.{html,ts}'],
  purge: ["./src/app/**/*.{ts,html,scss}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
  extend: {},
  },
  variants: {
  extend: {},
  },
  plugins: [],
};
