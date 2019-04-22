import { generateMedia, pxToEm, pxToRem } from "styled-media-query"
import { stripUnit, rem } from "polished"

export const styleVars = {
  baseFontSize: 16,
  type: {
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
  },
  spacing: {
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
  },
}

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

export const emBreakpoints = pxToEm(breakpoints, styleVars.baseFontSize)
export const remBreakpoints = pxToRem(breakpoints, styleVars.baseFontSize)
export const mq = generateMedia(emBreakpoints)

export const uniformScale = (
  cssValue: string,
  targetMediaQuery: string
): string => {
  // Split into value and unit
  const value = stripUnit(cssValue)
  const unit = stripUnit(cssValue, true)[1]
  const breakpoint = breakpoints[targetMediaQuery]

  // Convert from relative to px value
  const convertedUnit = unit === "px" ? value : value * styleVars.baseFontSize

  const bpValue = stripUnit(breakpoint)

  return `${convertedUnit / (bpValue * 0.01 * 1)}vw`
}
