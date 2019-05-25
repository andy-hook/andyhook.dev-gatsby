import React, { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { shallow, mount, render } from "enzyme"
import { themes } from "@style/theme"
import { TThemeName } from "@custom-types/theme"

export const mountWithTheme = (theme: TThemeName, children: ReactNode) =>
  mount(
    <ThemeProvider theme={themes[theme]}>
      <>{children}</>
    </ThemeProvider>
  )

export const renderWithTheme = (theme: TThemeName, children: ReactNode) =>
  render(
    <ThemeProvider theme={themes[theme]}>
      <>{children}</>
    </ThemeProvider>
  )

export const shallowWithTheme = (theme: TThemeName, children: ReactNode) =>
  shallow(
    <ThemeProvider theme={themes[theme]}>
      <>{children}</>
    </ThemeProvider>
  )
