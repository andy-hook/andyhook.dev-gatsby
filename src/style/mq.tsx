import { generateMedia, pxToEm, pxToRem } from "styled-media-query"

export const breakpoints = {
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

  bottomUltra: "2299px",
  topUltra: "2300px",
}

export const emBreakpoints = pxToEm(breakpoints)
export const remBreakpoints = pxToRem(breakpoints)

const mq = generateMedia(emBreakpoints)

export default mq
