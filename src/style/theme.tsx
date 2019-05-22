import { ITheme } from "@custom-types/theme"
import { lightGreys, darkGreys } from "@style/variables"

export const lightTheme: ITheme = {
  name: "light",
  text: darkGreys,
  tone: lightGreys,
}

export const darkTheme: ITheme = {
  name: "dark",
  text: lightGreys,
  tone: darkGreys,
}
