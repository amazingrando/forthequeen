import Typography from "typography"
import backgroundPattern from "../images/background-pattern.jpg"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: "Cinzel",
      styles: ["400"],
    },
    {
      name: "Crimson Text",
      styles: ["400", "600", "700"],
    },
  ],
  headerFontFamily: [
    "Cinzel",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Crimson Text", "Georgia", "serif"],
  blockMarginBottom: 0.7,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    body: {
      background: `url(${backgroundPattern}) top left #890718`,
      color: `#202027`,
    },
    "h2,h3": {
      color: "#9F892D",
      marginTop: rhythm(2),
    },
    h1: {
      color: "#9F892D",
      marginTop: rhythm(0.7),
    },
    blockquote: {
      fontSize: "1.5rem",
      fontStyle: "italic",
    },
  }),
})

export default typography
export const rhythm = typography.rhythm
