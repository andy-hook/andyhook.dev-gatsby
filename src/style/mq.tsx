import { generateMedia, pxToEm, pxToRem } from "styled-media-query"
import styleVars from "./variables"

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

  bottomUltra: "2499px",
  topUltra: "2500px",
}

export const emBreakpoints = pxToEm(breakpoints, styleVars.baseFontSize)
export const remBreakpoints = pxToRem(breakpoints, styleVars.baseFontSize)

export const mq = generateMedia(emBreakpoints)
