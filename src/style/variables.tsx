import { pxToEm, pxToRem } from "styled-media-query"
import { rem } from "polished"
import { TGreys, TGreyNames } from "@custom-types/theme"
import { createHsl, createHsla } from "@style/utils"
import { TBreakpoints } from "@custom-types/breakpoints"

/* Typography
  ------------------------------------------------- */

export const baseFontSize = 16

export const fontFamily = {
  base: `'inter', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif`,
  display: `'maison-neue', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif`,
}

export const letterSpacing = {
  base: {
    regular: "0.01em",
    medium: "0.03em",
  },
  display: {
    bold: "-0.02em",
  },
  uppercase: "0.06em",
}

export const lineHeight = {
  flat: "1",
  base: {
    regular: "1.4",
    tight: "1.2",
    longform: "1.6",
  },
  display: {
    regular: "1.4",
    tight: "1.15",
    longform: "1.6",
  },
}

export const fontWeight = {
  base: {
    regular: "400",
    medium: "500",
    semibold: "600",
  },
  display: {
    bold: "700",
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

/* Easing
  ------------------------------------------------- */

export const easingTimings: { [index: string]: number[] } = {
  subtleBounce: [0.15, 0.585, 0.225, 1.26],
}

export function easing(name: string) {
  return `cubic-bezier(${easingTimings[name].toString()})`
}

/* Duration
  ------------------------------------------------- */

const durationUnit = 100

export const duration = {
  fast: `${durationUnit}ms`,
  base: `${durationUnit * 2}ms`,
  slow: `${durationUnit * 3}ms`,
}

/* Border thickness
  ------------------------------------------------- */

export const borderThickness = {
  regular: "1px",
  thick: "2px",
}

/* Breakpoints
  ------------------------------------------------- */

export const breakpoints: TBreakpoints = {
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

/* Index
  ------------------------------------------------- */

export const zIndex = {
  floor: 0,
  low: 100,
  medium: 200,
  high: 300,
  highest: 400,
}

/* Greys
  ------------------------------------------------- */

export const lightGreyHSL: TGreys = {
  100: "240, 3%, 100%",
  200: "240, 3%, 97%",
  300: "240, 3%, 95%",
  400: "240, 3%, 93%",
  500: "240, 3%, 90%",
  600: "240, 3%, 86%",
  700: "240, 3%, 83%",
  800: "240, 3%, 60%",
  900: "240, 3%, 40%",
  1000: "240, 3%, 30%",
}

export const lightGrey = (value: TGreyNames) => createHsl(lightGreyHSL[value])

export const lightGreyAlpha = (value: TGreyNames, alpha: number) =>
  createHsla(lightGreyHSL[value], alpha)

export const darkGreyHSL: TGreys = {
  100: "240, 17%, 2%",
  200: "240, 15%, 5%",
  300: "240, 15%, 11%",
  400: "240, 10%, 14%",
  500: "240, 8%, 18%",
  600: "240, 8%, 21%",
  700: "240, 8%, 26%",
  800: "240, 8%, 30%",
  900: "240, 8%, 40%",
  1000: "240, 8%, 60%",
}

export const darkGrey = (value: TGreyNames) => createHsl(darkGreyHSL[value])

export const darkGreyAlpha = (value: TGreyNames, alpha: number) =>
  createHsla(darkGreyHSL[value], alpha)
