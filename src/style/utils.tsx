import { breakpoints } from "./mq"
import { stripUnit } from "polished"
import styleVars from "./variables"

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
