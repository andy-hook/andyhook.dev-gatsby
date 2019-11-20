import { ITheme, TGreyNames, TThemeName } from "@custom-types/theme"
import { css, CSSProp } from "styled-components"
import { createHsl, createHsla } from "@style/utils"

import {
  darkThemeTextHSL,
  darkThemeToneHSL,
  lightThemeTextHSL,
  lightThemeToneHSL,
} from "@style/variables"

export const lightTheme: ITheme = {
  name: "light",
  text: lightThemeTextHSL,
  tone: lightThemeToneHSL,
}

export const darkTheme: ITheme = {
  name: "dark",
  text: darkThemeTextHSL,
  tone: darkThemeToneHSL,
}

export const themes: { [key: string]: ITheme } = {
  light: lightTheme,
  dark: darkTheme,
}

export const themeTone = (value: TGreyNames) => css`
  ${props => createHsl(props.theme.tone[value])}
`

export const themeToneAlpha = (value: TGreyNames, alpha: number) => css`
  ${props => createHsla(props.theme.tone[value], alpha)}
`

export const themeText = (value: TGreyNames) => css`
  ${props => createHsl(props.theme.text[value])}
`

export const themeTextAlpha = (value: TGreyNames, alpha: number) => css`
  ${props => createHsla(props.theme.text[value], alpha)}
`

export const isDarkTheme = (output: string | CSSProp) => css`
  ${props => props.theme.name === "dark" && output}
`

export const isLightTheme = (output: string | CSSProp) => css`
  ${props => props.theme.name === "light" && output}
`

export const isTheme = (
  themeName: TThemeName,
  validOutput: string | CSSProp,
  invalidOutput?: string | CSSProp
) => css`
  ${props => {
    if (invalidOutput) {
      return props.theme.name === themeName ? validOutput : invalidOutput
    } else {
      return props.theme.name === themeName && validOutput
    }
  }}
`
