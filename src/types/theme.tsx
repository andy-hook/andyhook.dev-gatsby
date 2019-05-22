export type TGrey = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800

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
}

export interface ITheme {
  name: "light" | "dark"
  text: IGrey
  tone: IGrey
}
