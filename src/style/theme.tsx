import { ITheme } from "@custom-types/theme"
import { lightGreys, darkGreys } from "@style/variables"

export const lightTheme: ITheme = {
  text: darkGreys,
  tone: lightGreys,
}

export const darkTheme: ITheme = {
  text: lightGreys,
  tone: darkGreys,
}
