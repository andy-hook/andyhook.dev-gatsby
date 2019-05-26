export type TBreakpointName =
  | "bottomThumb"
  | "topThumb"
  | "bottomPalm"
  | "topPalm"
  | "bottomLap"
  | "topLap"
  | "bottomDesk"
  | "topDesk"
  | "bottomWide"
  | "topWide"
  | "bottomWall"
  | "topWall"
  | "bottomUltra"
  | "topUltra"

export type TBreakpoints = { [key in TBreakpointName]: string }
