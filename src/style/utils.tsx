import { breakpoints } from "./mq"
import { stripUnit, getValueAndUnit } from "polished"
import styleVars from "./variables"

export const uniformScale = (cssValue: string, targetMediaQuery: string) => {
  // Split into value and unit
  const value = stripUnit(cssValue)
  const unit = getValueAndUnit(cssValue)[1]

  // Convert from relative to px value
  const convertedUnit = unit === "px" ? value : value * styleVars.baseFontSize

  const bpValue = stripUnit(breakpoints[targetMediaQuery])

  return `${convertedUnit / (bpValue * 0.01 * 1)}vw`
}
