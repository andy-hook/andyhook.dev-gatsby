export type TGrey =
  | 000
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

export type TLayer = "lowest" | "low" | "medium" | "high" | "highest"

export interface IGrey {
  [key: number]: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  1000: string
}

export interface ILayer {
  lowest: string
  low: string
  medium: string
  high: string
  highest: string
}

export type TThemeName = "light" | "dark"

export interface ITheme {
  name: TThemeName
  text: IGrey
  tone: IGrey
  layer: ILayer
}
