module.exports = {
  darkMode: 'selector',
  content: ["./templates/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
