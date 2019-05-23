import { generateMedia } from "styled-media-query"
import { stripUnit } from "polished"
import { breakpoints, baseFontSize, emBreakpoints } from "./variables"

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
  const convertedUnit = unit === "px" ? value : value * baseFontSize

  const bpValue = stripUnit(breakpoint)

  return `${convertedUnit / (bpValue * 0.01 * 1)}vw`
}

export const createHsl = (value: string) => `hsl(${value})`

export const createHsla = (value: string, alpha: number) =>
  `hsla(${value},${alpha})`
