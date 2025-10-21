import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      fontFamily: {
        sans: ["ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Inter","sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#74d0c2",
          50: "#f0fffc",
          100: "#d6fff7",
          200: "#b5f7ec",
          300: "#8fe8db",
          400: "#74d0c2",
          500: "#4fb2a7",
          600: "#3a8e85",
          700: "#2d6f69",
          800: "#245955",
          900: "#1f4946"
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
