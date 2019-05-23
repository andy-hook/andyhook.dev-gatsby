import React, { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { shallow, mount, render } from "enzyme"
import { darkTheme, lightTheme } from "@style/theme"
import { ITheme } from "@custom-types/theme"

type themes = "light" | "dark"

const themes: { [key: string]: ITheme } = {
  light: lightTheme,
  dark: darkTheme,
}

export const mountWithTheme = (theme: themes, children: ReactNode) =>
  mount(
    <ThemeProvider theme={themes[theme]}>
      <>{children}</>
    </ThemeProvider>
  )

export const renderWithTheme = (theme: themes, children: ReactNode) =>
  render(
    <ThemeProvider theme={themes[theme]}>
      <>{children}</>
    </ThemeProvider>
  )

export const shallowWithTheme = (theme: themes, children: ReactNode) =>
  shallow(
    <ThemeProvider theme={themes[theme]}>
      <>{children}</>
    </ThemeProvider>
  )
