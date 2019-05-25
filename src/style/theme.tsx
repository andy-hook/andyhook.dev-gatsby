import { ITheme, TGrey, TThemeName, TLayer } from "@custom-types/theme"
import { css, CSSProp } from "styled-components"
import { createHsl, createHsla } from "@style/utils"

import { lightGreyHSL, darkGreyHSL } from "@style/variables"

export const lightTheme: ITheme = {
  name: "light",
  text: darkGreyHSL,
  tone: lightGreyHSL,
  layer: {
    lowest: lightGreyHSL[600],
    low: lightGreyHSL[400],
    medium: lightGreyHSL[300],
    high: lightGreyHSL[200],
    highest: lightGreyHSL[100],
  },
}

export const darkTheme: ITheme = {
  name: "dark",
  text: lightGreyHSL,
  tone: darkGreyHSL,
  layer: {
    lowest: darkGreyHSL[100],
    low: darkGreyHSL[200],
    medium: darkGreyHSL[300],
    high: darkGreyHSL[600],
    highest: darkGreyHSL[800],
  },
}

export const themes: { [key: string]: ITheme } = {
  light: lightTheme,
  dark: darkTheme,
}

export const themeLayer = (value: TLayer) => css`
  ${props => createHsl(props.theme.layer[value])}
`

export const themeLayerAlpha = (value: TLayer, alpha: number) => css`
  ${props => createHsla(props.theme.layer[value], alpha)}
`

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
