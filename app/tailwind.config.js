module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        escuelaBlue: "#004AAD",
        escuelaGreen: "#00A86B",
        escuelaWhite: "#FFFFFF",
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        mono: ["Courier New", "monospace"]
      }
    }
  },
  plugins: [],
}
