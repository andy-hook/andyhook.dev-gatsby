import { pxToEm, pxToRem } from "styled-media-query"
import { rem } from "polished"

/* Typography
  ------------------------------------------------- */

export const baseFontSize = 16

export const fontFamily = {
  base: `'proxima-nova', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif`,
  display: `'montserrat', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif`,
}

export const letterSpacing = {
  base: "0.01em",
  display: "-0.02em",
  uppercase: "0.06em",
}

export const lineHeight = {
  base: "1.4",
  flat: "1",
  tight: "1.25",
  longform: "1.6",
}

export const fontWeight = {
  base: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
  display: {
    medium: "500",
    semi: "600",
  },
}

export const typeScale = {
  1: rem("12px"),
  2: rem("13px"),
  3: rem("14px"),
  4: rem("16px"),
  5: rem("18px"),
  6: rem("20px"),
  7: rem("22px"),
  8: rem("28px"),
  9: rem("34px"),
  10: rem("46px"),
  11: rem("60px"),
  12: rem("76px"),
}

export const spacingScale = {
  1: rem("4px"),
  2: rem("8px"),
  3: rem("12px"),
  4: rem("16px"),
  5: rem("24px"),
  6: rem("32px"),
  7: rem("48px"),
  8: rem("64px"),
  9: rem("96px"),
  10: rem("128px"),
  11: rem("192px"),
  12: rem("256px"),
  13: rem("384px"),
  14: rem("512px"),
  15: rem("640px"),
  16: rem("768px"),
}

/* Border radius
  ------------------------------------------------- */

export const borderRadius = {
  base: "4px",
  pill: "50000px",
  circle: "50%",
}

/* Breakpoints
  ------------------------------------------------- */

export const breakpoints: { [index: string]: string } = {
  bottomThumb: "479px",
  topThumb: "480px",

  bottomPalm: "599px",
  topPalm: "600px",

  bottomLap: "899px",
  topLap: "900px",

  bottomDesk: "1199px",
  topDesk: "1200px",

  bottomWide: "1499px",
  topWide: "1500px",

  bottomWall: "1799px",
  topWall: "1800px",

  bottomUltra: "2200px",
  topUltra: "2200px",
}

export const emBreakpoints = pxToEm(breakpoints, baseFontSize)
export const remBreakpoints = pxToRem(breakpoints, baseFontSize)
