import { ITheme, TGrey } from "@custom-types/theme"
import { css } from "styled-components"

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

export const themeTone = (value: TGrey) => css`
  ${props => `hsl(${props.theme.tone[value]})`}
`
export const themeToneAlpha = (value: TGrey, alpha: number) => css`
  ${props => `hsla(${props.theme.tone[value]}, ${alpha})`}
`
export const themeText = (value: TGrey) => css`
  ${props => `hsl(${props.theme.text[value]})`}
`
export const themeTextAlpha = (value: TGrey, alpha: number) => css`
  ${props => `hsla(${props.theme.text[value]}, ${alpha})`}
`

export const themeName = css`
  ${props => props.theme.name}
`

export const isDarkTheme = (output: string) => css`
  ${props => props.theme.name === "dark" && output}
`
