/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#313E51",
        secondary: "#A729F5",
        navy: "#3B4D66",
        "secondary-foreground": "#F6E7FF",
        "light-blue": "#ABC1E1",
        muted: "#626C7F",
        background: "#F4F6FA",
        danger: "#EE5454",
        success: "#26D782",
      },
      fontSize: {
        display: ["144px", "100%"],
        "heading-l": ["64px", "100%"],
        "heading-m": ["36px", "100%"],
        "heading-s": ["28px", "100%"],
        "body-m": ["24px", "100%"],
        "body-s": ["20px", "100%"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
