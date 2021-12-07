module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        header: "auto 3fr auto",
      },
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", "sans-serif"],
        segoe: ["Segoe UI"],
      },
      letterSpacing: {
        tightest: "-0.0833331em",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        header: "rgba(255, 255, 255, 0.25)",
        lightMode: "rgb(240,231,219)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
