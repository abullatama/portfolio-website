module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        padding: {},
      },
      gridTemplateColumns: {
        "header-md": "auto 3fr auto",
        "header-sm": "3fr auto auto",
      },
      fontFamily: {
        bangers: ["'Bangers'", "cursive"],
        segoe: ["Segoe UI"],
        mplus: ["'M PLUS Rounded 1c'", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.0833331em",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        lightHeader: "rgba(255, 255, 255, 0.25)",
        darkHeader: "#20202380",
        lightColor: "rgb(238, 245, 219)", //eef5db
        darkColor: "rgb(51, 55, 69)", //333745
        lightModeButton: "rgb(254 215 170)",
        lightButtonHover: "rgb(251 191 36)",
      }),
      keyframes: {
        fadeIn: {
          from: {
            display: "none",
            transform: "translateY(-40px)",
            opacity: 0,
          },
          to: {
            display: "inline-block",
            opacity: 1,
            "z-index": 999,
          },
        },
        fadeOut: {
          to: {
            display: "none",
            transform: "translateY(20px)",
            opacity: 0,
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out forwards",
        fadeOut: "fadeOut 0.2s ease-in-out forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
