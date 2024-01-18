/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "box-color": "var(--box-color)",
        "collection-1-line": "var(--collection-1-line)",
        hover: "var(--hover)",
        "line-color": "var(--line-color)",
        "purple-text": "var(--purple-text)",
        "text-color": "var(--text-color)",
        white: "var(--white)",
      },
      fontFamily: {
        "big-text": "var(--big-text-font-family)",
        "header-1": "var(--header-1-font-family)",
        "header-2": "var(--header-2-font-family)",
        "header-3": "var(--header-3-font-family)",
        text: "var(--text-font-family)",
      },
    },
  },
  plugins: [],
};
