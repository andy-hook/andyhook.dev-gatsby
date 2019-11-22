export type EaseName =
  | "easeInCubic"
  | "easeOutCubic"
  | "easeInOutCubic"
  | "easeInCirc"
  | "easeOutCirc"
  | "easeInOutCirc"
  | "easeInExpo"
  | "easeOutExpo"
  | "easeInOutExpo"
  | "easeInQuad"
  | "easeOutQuad"
  | "easeInOutQuad"
  | "easeInQuart"
  | "easeOutQuart"
  | "easeInOutQuart"
  | "easeInQuint"
  | "easeOutQuint"
  | "easeInOutQuint"
  | "easeInSine"
  | "easeOutSine"
  | "easeInOutSine"
  | "easeInBack"
  | "easeOutBack"
  | "easeInOutBack"

export type Eases = { [key in EaseName]: number[] }