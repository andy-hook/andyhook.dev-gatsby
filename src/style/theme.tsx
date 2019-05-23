import { ITheme, TGrey, TThemeName } from "@custom-types/theme"
import { css, CSSProp } from "styled-components"
import { createHsl, createHsla } from "@style/utils"

import { lightGreyHSL, darkGreyHSL } from "@style/variables"

export const lightTheme: ITheme = {
  name: "light",
  text: darkGreyHSL,
  tone: lightGreyHSL,
}

export const darkTheme: ITheme = {
  name: "dark",
  text: lightGreyHSL,
  tone: darkGreyHSL,
}

export const themes: { [key: string]: ITheme } = {
  light: lightTheme,
  dark: darkTheme,
}

export const themeTone = (value: TGrey) => css`
  ${props => createHsl(props.theme.tone[value])}
`

export const themeToneAlpha = (value: TGrey, alpha: number) => css`
  ${props => createHsla(props.theme.tone[value], alpha)}
`

export const themeText = (value: TGrey) => css`
  ${props => createHsl(props.theme.text[value])}
`

export const themeTextAlpha = (value: TGrey, alpha: number) => css`
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
