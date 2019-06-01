export type TGreyNames =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000

export type TGreys = { [key in TGreyNames]: string }

export type TLayerNames = "lowest" | "low" | "medium" | "high" | "highest"

export type TLayers = { [key in TLayerNames]: string }

export type TThemeType = "primary-theme" | "secondary-theme"

export type TThemeName = "light" | "dark"

export interface ITheme {
  name: TThemeName
  text: TGreys
  tone: TGreys
  layer: TLayers
}
